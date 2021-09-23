/* Console
 * =====================
 * A console represents a text console that allows the user to print, println,
 * and read an integer using readInt, and read a float using readFloat. These
 * functions pop up prompt dialogs and make sure that the results are actually
 * of the desired type.
 *
 * @author  Jeremy Keeshin    July 9, 2012
 *
 */

'use strict';

var safeEval = require('codehs-js-utils').safeEval;

var lines = [];
var solution = null;
var TESTER_MESSAGE = '#tester-message';
var PUBLIC_METHODS = [];

/**
 * Set up an instance of the console library.
 * @constructor
 */
function CodeHSConsole() {
    this.internalOutput = [];
    this.internalOutputBuffer = '';
}

/**
 * Adds a method to the public methods array.
 * @param {string} name - Name of the method.
 */
CodeHSConsole.registerPublicMethod = function(name) {
    PUBLIC_METHODS.push(name);
};

/**
 * Generate strings for the public methods to bring them to the
 * public namespace without having to call them with the console instance.
 * @returns {string} Line broken function definitions.
 */
CodeHSConsole.getNamespaceModifcationString = function() {
    var result = '';
    for (var i = 0; i < PUBLIC_METHODS.length; i++) {
        var curMethod = PUBLIC_METHODS[i];

        // Actually create a method in this scope with the name of the
        // method so the student can easily access it. For example, we
        // might have a method like CodeHSConsole.prototype.print, but we
        // want the student to be able to access it with just `print`, but
        // the proper context for this.
        result +=
            'function ' +
            curMethod +
            '(){\n' +
            '\treturn __console__.' +
            curMethod +
            '.apply(__console__, arguments);\n' +
            '}\n';
    }
    return result;
};

/**
 * Generate stub strings for the public methods to bring them to the
 * namespace without having to call them with the console instance.
 * @returns {string} Line broken function definitions.
 */
CodeHSConsole.getStubString = function() {
    var result = '';
    _.each(PUBLIC_METHODS, function(method) {
        result += 'function ' + method + '(){\n' + '\treturn 0;\n' + '}\n';
    });
    return result;
};

/**
 * Set the solution code for a given exercise.
 * @param {string} soln - Solution code.
 */
CodeHSConsole.setSolution = function(soln) {
    solution = soln;
};

/**
 * Check the console output for correctness against solution code.
 * returns {object} Dictionary containing boolean of success and message.
 */
CodeHSConsole.prototype.checkOutput = function() {
    if (!solution) {
        return;
    }
    var graded = {
        success: true,
        message: '<strong>Nice job!</strong> You got it!',
    };

    if ($('#console').html().length === 0) {
        graded.success = false;
        graded.message = "You didn't print anything.";
    } else if (lines.length != solution.length) {
        graded.success = false;
        graded.message =
            '<strong>Not quite.</strong> Take a look at the ' +
            'example output in the exercise tab.';
    } else {
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var correct = solution[i];
            var regex = new RegExp(correct);
            if (line.search(regex) !== 0) {
                graded.success = false;
                graded.message =
                    '<strong>Not quite.</strong> Take a look ' +
                    'at the example output in the exercise tab.';
            }
        }
    }

    $(TESTER_MESSAGE).html(graded.message);
    if (graded.success) {
        $(TESTER_MESSAGE)
            .removeClass('gone')
            .removeClass('alert-error')
            .addClass('alert-info');
    } else {
        $(TESTER_MESSAGE)
            .removeClass('gone')
            .removeClass('alert-info')
            .addClass('alert-error');
    }

    return graded;
};

var bufferedOutputToArray = function(bufferedOutput) {
    var bufferedOutputArray = bufferedOutput.split('\n');
    // remove the trailing "" that happens if the final element is a \n
    if (bufferedOutputArray[bufferedOutputArray.length - 1].length === 0) {
        bufferedOutputArray = bufferedOutputArray.slice(0, -1);
    }
    return bufferedOutputArray;
};

/**
 * A non-dom-mutating print for use in autograders.
 */
CodeHSConsole.prototype.quietPrint = function(string) {
    if (!this.internalOutputBuffer) {
        this.internalOutputBuffer = '';
    }
    this.internalOutputBuffer += string;
};

/**
 * A non-dom-mutating println for use in autograders.
 */
CodeHSConsole.prototype.quietPrintln = function(anything) {
    this.quietPrint(anything + '\n');
};

/**
 * Gets the internal output.
 */
CodeHSConsole.prototype.flushQuietOutput = function() {
    if (!this.internalOutputBuffer) {
        this.internalOutputBuffer = '';
    }
    if (!this.internalOutput) {
        this.internalOutput = [];
    }
    var output = this.internalOutput.concat(bufferedOutputToArray(this.internalOutputBuffer));
    this.internalOutput = [];
    this.internalOutputBuffer = '';
    return output;
};

/**
 * Get the output from the console.
 * @returns {string}
 */
CodeHSConsole.getOutput = function() {
    return $('#console').text();
};

/**
 * Check if the console exists.
 * Important to check before attempting to select and extract output.
 */
CodeHSConsole.exists = function() {
    return $('#console').exists();
};

/**
 * Clear the console's text.
 */
CodeHSConsole.clear = function() {
    lines = [];
    $('#console').html('');
    $(TESTER_MESSAGE).addClass('gone');
};

/**
 * Private method used to read a line.
 * @param {string} str - The line to be read.
 * @param {boolean} looping - Unsure. This is a messy method.
 */
CodeHSConsole.prototype.readLinePrivate = function(str, looping) {
    if (typeof looping === 'undefined' || !looping) {
        this.print(str);
    }
    var console = $('#console');
    var lines;
    var result;
    if (console.length) {
        $('#console').css('margin-top', '180px');
        // take max 20 lines, last line is prompt string so we remove and
        // add extra spacing before putting it back on
        lines = _.takeRight(
            $('#console')
                .text()
                .split('\n'),
            21
        );

        lines.pop();
        var text = lines.concat(['', '', str]).join('\n');
        result = prompt(text);

        $('#console').css('margin-top', '0px');
    } else {
        lines = this.internalOutput.slice(-10);
        result = prompt(lines.join('\n'));
    }
    if (typeof looping === 'undefined' || !looping) {
        this.println(result);
    }
    return result;
};

/**
 * This is how you run the code, but get access to the
 * state of the console library. The current instance
 * becomes accessible in the code.
 * @param {string} code - The code from the editor.
 */
CodeHSConsole.prototype.runCode = function(code, options) {
    options = options || {};
    var lineOffset = options.lineOffset || 0;
    var publicMethodStrings = CodeHSConsole.getNamespaceModifcationString();

    // This code will create a local (to the student's program) `console`
    // variable, so console.log will be an alias to `println` so student code
    // can act more like "real" javascript
    var consoleOverride = ';var console = {}; console.log = println;\n';

    // To prevent issues with the native `Set`, we swap it out here.
    var setOverride = ';var __nativeSet=window.Set;var Set=window.chsSet;';
    var setRestore = ';window.Set=__nativeSet;';

    var wrap = '';
    wrap += publicMethodStrings;
    wrap += consoleOverride;
    wrap += setOverride;

    if (!options.overrideInfiniteLoops) {
        // tool all while loops
        var whileLoopRegEx = /while\s*\((.*)\)\s*{/gm;
        var forLoopRegEx = /for\s*\((.*)\)\s*{/gm;
        var doWhileRegEx = /do\s*\{/gm;

        // Inject into while loops
        code = code.replace(whileLoopRegEx, function(match, p1, offset, string) {
            var lineNumber = string.slice(0, offset).split('\n').length - lineOffset;
            var c =
                "if(___nloops++>15000){var e = new Error('Your while loop on line " +
                lineNumber +
                " may contain an infinite loop. Exiting.'); e.name = 'InfiniteLoop'; e.lineNumber = " +
                lineNumber +
                '; throw e;}';
            return 'var ___nloops=0;while(' + p1 + ') {' + c;
        });
        // Inject into while loops
        // See comment above for while loops.
        code = code.replace(forLoopRegEx, function(match, p1, offset, string) {
            var lineNumber = string.slice(0, offset).split('\n').length - lineOffset;
            var c =
                "if(___nloops++>15000){var e = new Error('Your for loop on line " +
                lineNumber +
                " may contain an infinite loop. Exiting.'); e.name = 'InfiniteLoop'; e.lineNumber = " +
                lineNumber +
                '; throw e;}';
            return 'var ___nloops=0;for(' + p1 + '){' + c;
        });
        // Inject into do-while loops
        code = code.replace(doWhileRegEx, function(match, offset, string) {
            var lineNumber = string.slice(0, offset).split('\n').length - lineOffset;
            var c =
                "if(___nloops++>15000){var e = new Error('Your do-while loop on line " +
                lineNumber +
                " may contain an infinite loop. Exiting.'); e.name = 'InfiniteLoop'; e.lineNumber = " +
                lineNumber +
                '; throw e;}';
            return 'var ___nloops=0;do {' + c;
        });
    }

    wrap += code;
    wrap += "\n\nif(typeof start == 'function') {start();} ";
    wrap += setRestore;
    wrap += '__console__.checkOutput();';

    this.internalOutput = [];
    return safeEval(wrap, this, '__console__');
};

/**
 * Method to test whether the code is requesting user input at all.
 * @param {string} code - The code from the editor
 */
CodeHSConsole.prototype.hasUserinput = function(code) {
    return code.match(new RegExp('readLine|readInt|readFloat|readBoolean|readNumber'));
};

/** ************* PUBLIC METHODS *******************/

/**
 * Clear the console.
 */
CodeHSConsole.prototype.clear = function() {
    if (arguments.length !== 0) {
        throw new Error('You should not pass any arguments to clear');
    }
    CodeHSConsole.clear();
};
CodeHSConsole.registerPublicMethod('clear');

/**
 * Print a line to the console.
 * @param {string} ln - The string to print.
 */
CodeHSConsole.prototype.print = function(ln) {
    if (arguments.length !== 1) {
        throw new Error('You should pass exactly 1 argument to print');
    }

    var console = $('#console');
    if (console.length) {
        console.html($('#console').html() + ln);
        console.scrollTop($('#console')[0].scrollHeight);
        lines = console.html().split('\n');
        lines.splice(lines.length - 1, 1);
    } else {
        // we must be running outside of the site.
        // if there's a print attached to the console, use that, otherwise log like normal.
        this.internalOutput.push(ln);
        typeof window.console.print === 'function'
            ? window.console.print(ln)
            : window.console.log(ln);
    }
};
CodeHSConsole.registerPublicMethod('print');

/**
 * Print a line to the console.
 * @param {string} ln - The string to print.
 */
CodeHSConsole.prototype.println = function(ln) {
    if (arguments.length === 0) {
        ln = '';
    } else if (arguments.length !== 1) {
        throw new Error('You should pass exactly 1 argument to println');
    } else {
        this.print(ln + '\n');
        $('#console').scrollTop();
    }
};
CodeHSConsole.registerPublicMethod('println');

/* Read a number from the user using JavaScripts prompt function.
 * We make sure here to check a few things.
 *
 *    1. If the user checks "Prevent this page from creating additional dialogs," we handle
 *       that gracefully, by checking for a loop, and then returning a DEFAULT value.
 *    2. That we can properly parse a number according to the parse function PARSEFN passed in
 *       as a parameter. For floats it is just parseFloat, but for ints it is our special parseInt
 *       which actually does not even allow floats, even they they can properly be parsed as ints.
 *    3. The errorMsgType is a string helping us figure out what to print if it is not of the right
 *       type.
 */
CodeHSConsole.prototype.readNumber = function(str, parseFn, errorMsgType) {
    var DEFAULT = 0; // If we get into an infinite loop, return DEFAULT.
    var INFINITE_LOOP_CHECK = 100;

    var prompt = str;
    var looping = false;
    var loopCount = 0;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        var result = this.readLinePrivate(prompt, looping);
        if (result === null) {
            return null;
        }
        result = parseFn(result);

        // Then it was okay.
        if (!isNaN(result)) {
            return result;
        }

        if (result === null) {
            return DEFAULT;
        }
        if (loopCount > INFINITE_LOOP_CHECK) {
            return DEFAULT;
        }
        prompt = 'That was not ' + errorMsgType + '. Please try again. ' + str;
        looping = true;
        loopCount++;
    }
};
CodeHSConsole.registerPublicMethod('readNumber');

/**
 * Read a line from the user.
 * @param {str} str - A message associated with the modal asking for input.
 * @returns {str} The result of the readLine prompt.
 */
CodeHSConsole.prototype.readLine = function(str) {
    if (arguments.length !== 1) {
        throw new Error('You should pass exactly 1 argument to readLine');
    }

    return this.readLinePrivate(str, false);
};
CodeHSConsole.registerPublicMethod('readLine');

/**
 * Read a bool from the user.
 * @param {str} str - A message associated with the modal asking for input.
 * @returns {str} The result of the readBoolean prompt.
 */
CodeHSConsole.prototype.readBoolean = function(str) {
    if (arguments.length !== 1) {
        throw new Error('You should pass exactly 1 argument to readBoolean');
    }
    return this.readNumber(
        str,
        function(x) {
            if (x === null) {
                return NaN;
            }
            x = x.toLowerCase();
            if (x == 'true' || x == 'yes') {
                return true;
            }
            if (x == 'false' || x == 'no') {
                return false;
            }
            return NaN;
        },
        'a boolean (true/false)'
    );
};
CodeHSConsole.registerPublicMethod('readBoolean');

/* Read an int with our special parseInt function which doesnt allow floats, even
 * though they are successfully parsed as ints.
 * @param {str} str - A message associated with the modal asking for input.
 * @returns {str} The result of the readInt prompt.
 */
CodeHSConsole.prototype.readInt = function(str) {
    if (arguments.length !== 1) {
        throw new Error('You should pass exactly 1 argument to readInt');
    }

    return this.readNumber(
        str,
        function(x) {
            var resultInt = parseInt(x);
            var resultFloat = parseFloat(x);
            // Make sure the value when parsed as both an int and a float are the same
            if (resultInt == resultFloat) {
                return resultInt;
            }
            return NaN;
        },
        'an integer'
    );
};
CodeHSConsole.registerPublicMethod('readInt');

/* Read a float with our safe helper function.
 * @param {str} str - A message associated with the modal asking for input.
 * @returns {str} The result of the readFloat prompt.
 */
CodeHSConsole.prototype.readFloat = function(str) {
    if (arguments.length !== 1) {
        throw new Error('You should pass exactly 1 argument to readFloat');
    }

    return this.readNumber(str, parseFloat, 'a float');
};
CodeHSConsole.registerPublicMethod('readFloat');

module.exports = {
    CodeHSConsole: CodeHSConsole,
    PUBLIC_METHODS: PUBLIC_METHODS,
};
