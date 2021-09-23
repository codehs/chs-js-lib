'use strict';

/*
 * This is the version of Editor Utils packaged with NPM to be used
 * in the distributed version of the library.
 */

/* Given code,
 * return a list of the line numbers that are missing semicolons.
 * `expected_a_b` is the name of the error that JSLINT returns.
 * This error is where it's expecting `a` but `b` is found. We test when
 * this error exists and `a` is a semicolon, so we know that it's missing
 * a semicolon.
 */
// TODO handle this in the linter module.
function linesWithoutSemicolons(code) {
    // TODO: Shim JSLINT
    var lintResults = window.jslint(code);
    var warnings = lintResults.warnings;
    var lines = [];
    if (warnings && warnings.length) {
        _.each(warnings, function(error) {
            if (error && error.code == 'expected_a_b' && error.a == ';') {
                // Gotcha here. jslint line numbers start at 0.
                lines.push(error.line + 1);
            }
        });
    }
    return lines;
}

/* This code adapted from
 * http://james.padolsey.com/javascript/removing-comments-in-javascript/
 * Removes comments from a string of javascript text. */
function removeComments(str) {
    str = str.split('');
    var mode = {
        singleQuote: false,
        doubleQuote: false,
        blockComment: false,
        lineComment: false,
        condComp: false
    };
    for (var i = 0, l = str.length; i < l; i++) {

        if (mode.singleQuote) {
            if (str[i] === '\'' && str[i - 1] !== '\\') {
                mode.singleQuote = false;
            }
            continue;
        }

        if (mode.doubleQuote) {
            if (str[i] === '"' && str[i - 1] !== '\\') {
                mode.doubleQuote = false;
            }
            continue;
        }

        if (mode.blockComment) {
            if (str[i] === '*' && str[i + 1] === '/') {
                if (str[i + 1] !== '\n') {
                    str[i + 1] = '';
                }
                mode.blockComment = false;
            }
            if (str[i] !== '\n') {
                str[i] = '';
            }
            continue;
        }

        if (mode.lineComment) {
            if (str[i + 1] === '\n' || str[i + 1] === '\r') {
                mode.lineComment = false;
            }
            if (str[i] !== '\n') {
                str[i] = '';
            }
            continue;
        }

        if (mode.condComp) {
            if (str[i - 2] === '@' && str[i - 1] === '*' &&
                str[i] === '/') {
                mode.condComp = false;
            }
            continue;
        }

        mode.doubleQuote = str[i] === '"';
        mode.singleQuote = str[i] === '\'';

        if (str[i] === '/') {

            if (str[i + 1] === '*' && str[i + 2] === '@') {
                mode.condComp = true;
                continue;
            }
            if (str[i + 1] === '*') {
                if (str[i] !== '\n') {
                    str[i] = '';
                }
                mode.blockComment = true;
                continue;
            }
            if (str[i + 1] === '/') {
                if (str[i] !== '\n') {
                    str[i] = '';
                }
                mode.lineComment = true;
                continue;
            }
        }

    }
    return str.join('');
}

// If we generate an error from within the user's code
// (e.g. when we inject infinite loop detection into their
// loops), the line number for the error will be incorrect.
// For this case, we need to examine the stack trace of the
// error to get the line number within the user's code.
function lineNumberFromError(error) {
    var realLineNo = -1;

    // User code shows up as <anonymous> in stack trace.
    var stack = error.stack.replace(
            /<anonymous>:(.*):/gm,
            function(match, p1, offset, string) {
                if (realLineNo == -1) {
                    realLineNo = parseInt(p1);
                }
            }
        );
    return realLineNo;
}

// Splits a code string on newline characters and returns an array.
// Okay to run after comments are stripped, as
// the removeComments() function leaves a newline character if a line contains
// only a comment.
function generateCodeArray(code) {
    var lines = code.split('\n');
    return lines;
}

/**
 * Safely call a function which is in some way executing student (unsafe) code.
 * Safely implies that any errors will be caught and handled appropriately by
 * the editor.
 *
 * @param {String} fnToTry
 *     Unsafe function to call. Unsafe because it is filled with student code.
 * @param {Object} options
 *   Where:
 *   - **`fnOnError`** – {Function} – This is function that gets called if
 *       there was an error when calling fnToTry.
 *   - **`toTryArgs`** – {Array(like)} – This is an array like object that is
 *       passed to the fnToTry function. toTryArgs is not garunteed to be an
 *       Array because it might be the javascript arguments object.
 *       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments.
 * @return: {Anything}
 *     returns whatever fnToTry or fnOnError returns.
 *
 */
function safeEditorCode(fnToTry, options) {
    options = options || {};
    // fnOnError is noop if not passed.
    var fnOnError = options.fnOnError || function() {};
    // toTryArgs is empty array if not passed.
    var toTryArgs = options.toTryArgs || [];
    // Error type
    var errorType = options.errorType || 'eval';

    try {
        return fnToTry.apply(null, toTryArgs);
    } catch (e) {

        // Pass error and error type to the editorErrors handler.
        // The editorErrors will display an info modal about the given error.
        // TODO: This cannot rely on the CHS global.
        if (window.CHS) {
            window.CHS.PubSub.trigger('editorError:handle', e, errorType);
        }

        return fnOnError(e);
    }
}

/**
 * Safely eval a students code. Safely implies that any errors will be caught
 * and handled appropriately by the editor.
 *
 * @param {String} code
 *     student's code.
 * @param {Object} context
 *     context to inject into environment where code is eval'd.
 * @param {String} contextName
 *     identifier to refer to injected context.
 * @return: {Object}
 *     {
 *         hasError: <boolean>,
 *         result: <anything> // The results of eval'ing code.
 *     }.
 *
 */
function safeEval(code, context, contextName) {
    /* We need to inject another context into the code being eval'd, so we wrap
    the code in an IIFE with the param `contextName` and the arg `__context__` .
    We are able to reference the var `__context__` in the eval environment b/c
    eval() scopes to the calling context. This step necessary because of how
    the karelrunner and graphicsrunner add functionality to the eval execution
    environment. */
    var __context__ = context;
    code = '(function(' + contextName + '){' + code;
    code += '})(__context__);';

    var fnToTry = function() {
        return {
            result: eval(code),
            hasError: false
        };
    };

    var fnOnError = function(e) {
        return {
            hasError: true,
            error: e
        };
    };

    return safeEditorCode(fnToTry, {
        fnOnError: fnOnError,
        errorType: 'eval',
    });
}

// Return whether or not there was an infinite loop
function testInfiniteLoops(code) {
    // try to find if there is an infinite loop in the code.
    try {
        code = "function start(){}\n" + code;
        code += "\nstart();"
        var interpreter = new Interpreter(code);

        var MAX_ITERATIONS = 20000;
        var iter = 0;
        while (!interpreter.paused_ && interpreter.step() && iter <= MAX_ITERATIONS) {
            iter++;
        }
        if (iter >= MAX_ITERATIONS) {
            return true;
        }
    } catch (e) {
        // if another error is caught, let the runner handle that itself
        return false;
    }
}

/**
 * Safely run a student python code with skulpt. Safely implies that any errors
 * will be caught and handled appropriately by the editor.
 */
 function safeSkulpt(/*simply pass args to skulpt*/) {
     var argsToUse = arguments;
     return window.Sk.misceval.asyncToPromise(function() {
         return window.Sk.importMainWithBody.apply(null, argsToUse);
     }, {
         "Sk.promise": function(a) {
             return a.data.promise.then(function(b) {
                 return a.resume();
             }).catch(function(e) {
                 return Promise.reject(e);
             });
         }
     }).catch(function(e) {
         // Pass error and error type to the editorErrors handler.
         // The editorErrors will display an info modal about the given error.
         window.CHS.PubSub.trigger('editorError:handle', e, 'skulpt');
     });
 }

/**
 * Wrap an unsafe function in a safe function. Safe implies that any errors
 * will be caught and handled appropriately by the editor.
 *
 * @param {String} fnToTry
 *     Unsafe function to wrap. Unsafe because it is filled with student code.
 * @param {Function} fnOnError
 *     --Optional--
 *     This is function that gets called if there was an error when calling
 *     the fnToTry function.
 * @return: {Function}
 *     A function that can safely be called. 'Safely' implies that any errors
 *     will be caught and handled appropriately by the editor.
 *
 */
function safeCallback(fnToTry, fnOnError) {
    return function() {
        var options = {};
        options.fnOnError = fnOnError;
        options.toTryArgs = arguments;
        return safeEditorCode(fnToTry, options);
    };
}

/**
 * Set a safe interval from an unsafe function. Safe implies that any errors
 * will be caught and handled appropriately by the editor.
 *
 * @param {String} fnToTry
 *     Unsafe function to set as interval callback.
 * @param {Anything} data
 *     Data to pass to callback of setInterval.
 * @param {int} time
 *     Delay for setInterval.
 * @return: {int}
 *     intervalId.
 *
 */
function safeSetInterval(fnToTry, data, time) {
    var fnOnError = function() {
        // Has access to intervalId becuase of closure.
        clearInterval(intervalId);
    };
    var callback = safeCallback(fnToTry, fnOnError);
    var intervalId = setInterval(callback, time, data);

    return intervalId;
}

/**
 * Editor utils export
 */
module.exports = {
    linesWithoutSemicolons: linesWithoutSemicolons,
    removeComments: removeComments,
    lineNumberFromError: lineNumberFromError,
    generateCodeArray: generateCodeArray,
    safeSkulpt: safeSkulpt,
    safeEval: safeEval,
    safeCallback: safeCallback,
    safeSetInterval: safeSetInterval,
    testInfiniteLoops: testInfiniteLoops
};
