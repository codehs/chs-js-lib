/**
 * Console provides utilities for interacting with a text console.
 * {@link Console#readInt}, {@link Console#readFloat}, {@link Console#readBoolean}, and {@link Console#readLine}
 * prompt the user for input and parse it to the corresponding type. This prompt will use the blocking
 * browser prompt by default, but can be configured using {@link Console#onInput}.
 *
 * Console also exposes {@link Console#print} and {@link Console#println}, which are used for
 * emitting output. By default the output will print to the console, but can be configured using
 * {@link Console#onOutput}.
 */
class Console {
    /**
     * Function invoked when asking for asynchronous user input with the read*Async functions.
     * This function is invoked with the string of the prompt, i.e. readIntAsync('give me an int!').
     * The result of invoking onPrompt will be awaited, then parsed to configrm it's the
     * appropriate data type (a float, in the case of readFloat, for example). If
     * onPrompt is undefined, window.prompt is used as a fallback.
     * @type {Function}
     */
    onInput = async promptString => await prompt(promptString);
    /**
     * Function invoked when printing.
     * This function is invoked with any output, either in the case of explicit calls to `print`
     * or `println` or internal calls within the library. If onPrint is undefined, console.log
     * is used as a fallback.
     * @type {function}
     */
    onOutput = window.console.log.bind(window.console);
    /**
     * Function invoked when {@link Console#clear} is called.
     */
    onClear = window.console.clear.bind(window.console);

    /**
     * Initialize the console class, additionally configuring any event handlers.
     * @constructor
     * @param {Object} options
     * @param {function} options.input Function invoked when asking for user input asynchronously.
     * This function is invoked with the string of the prompt, i.e. readIntAsync('give me an int!').
     * The result of invoking onPrompt will be awaited, then parsed to configrm it's the
     * appropriate data type (a float, in the case of readFloat, for example). If
     * onPrompt is undefined, window.prompt is used as a fallback.
     * @param {function} options.output Function invoked when printing.
     * This function is invoked with any output, either in the case of explicit calls to `print`
     * or `println` or internal calls within the library. If onPrint is undefined, console.log
     * is used as a fallback.
     * @param {function} options.clear Function invoked when clear() is called.
     * @param {function} options.prompt Function that transforms the prompt string to a function like `readInt` before it is passed to `prompt`.
     */
    constructor(options = {}) {
        this.onInput = options.input ?? (async promptString => await prompt(promptString));
        this.onOutput = options.output ?? window.console.log.bind(window.console);
        this.onClear = options.clear ?? window.console.clear.bind(window.console);
        this.promptTransform =
            options.prompt ??
            ((promptString, defaultValue) => {
                return promptString;
            });
    }

    /**
     * Configure the Console instance, providing methods it invokes
     * when prompting for input and emitting output.
     *
     * @param {Object} options
     * @param {function} options.input Function invoked when asking for user input asynchronously.
     * This function is invoked with the string of the prompt, i.e. readIntAsync('give me an int!').
     * The result of invoking onPrompt will be awaited, then parsed to configrm it's the
     * appropriate data type (a float, in the case of readFloat, for example). If
     * onPrompt is undefined, window.prompt is used as a fallback.
     * @param {function} options.output Function invoked when printing.
     * This function is invoked with any output, either in the case of explicit calls to `print`
     * or `println` or internal calls within the library. If onPrint is undefined, console.log
     * is used as a fallback.
     * @param {function} options.clear Function invoked when clear() is called.
     * @param {function} options.prompt Function that transforms the prompt string to a function like `readInt` before it is passed to `prompt`.
     */
    configure(options = {}) {
        this.onInput = options.input ?? this.onInput;
        this.onOutput = options.output ?? this.onOutput;
        this.onClear = options.clear ?? this.onClear;
        this.promptTransform = options.prompt ?? this.promptTransform;
    }

    /**
     * Private method used to read a line.
     * @param {string} promptString - The line to be printed before prompting.
     */
    readLinePrivate(promptString) {
        const input = prompt(this.promptTransform(promptString));
        return input;
    }

    /**
     * Private method used to read a line using the read*Async methods.
     * @param {string} promptString - The line to be printed before prompting.
     */
    readLinePrivateAsync(promptString) {
        const input = this.onInput(promptString);
        return input;
    }

    /**
     * Clear the console.
     * @global
     */
    clear() {
        this.onClear();
    }

    /**
     * Print a value to the console.
     * @param {...any} args - Anything to print.
     * @global
     */
    print(...args) {
        if (args.length < 1) {
            throw new Error('You should pass at least 1 argument to print');
        }
        this.onOutput(...args);
    }

    /**
     * Print a value to the console, followed by a newline character.
     * @param {any} value - The value to print.
     * @global
     */
    println(value) {
        if (arguments.length === 0) {
            value = '';
        } else if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to println');
        }
        this.print(value, '\n');
    }

    /**
     * Read a number from the user using `prompt` or the Console's {@link Console#onInput} function, depending
     * on whether the caller was an async method (readLineAsync) or not (readLine)
     * We make sure here to check a few things.
     *
     *    1. If the user checks "Prevent this page from creating additional dialogs," we handle
     *       that gracefully, by checking for a loop, and then returning a DEFAULT value.
     *    2. That we can properly parse a number according to the parse function parseFn passed in
     *       as a parameter. For floats it is just parseFloat, but for ints it is our special parseInt
     *       which actually does not even allow floats, even they they can properly be parsed as ints.
     *    3. The errorMsgType is a string helping us figure out what to print if it is not of the right
     *       type.
     * @param {string} str The prompt string
     * @param {function} parseFn A function to parse the user input to determine if it satisfies
     * the expected datatype. If the return value of parseFn satisfies `!isNaN`, the value is
     * returned. If the result is null, the prompt will repeat until satisfied, or 100 prompts have
     * occurred.
     * @param {string} errorMsgType A string to include in the error message to the user explaining
     * why a given input was rejected. For example, the errorMsgType "an integer," would result in
     * printing "That was not an integer. Please try again." if parseFn failed.
     * @param {boolean} asynchronous A boolean indicating whether this function is being invoked asynchronously.
     * If it is, then {@link readLinePrivateAsync} will be used to read input, which calls {@link Console#onInput}.
     * @returns {number}
     * @private
     */
    readNumber(str, parseFn, errorMsgType, asynchronous) {
        const DEFAULT = Symbol(); // If we get into an infinite recursion, return DEFAULT.
        const MAX_RECURSION_DEPTH = 100;
        // a special indicator that th program should be exiting
        const ABORT = Symbol('ABORT');

        let promptString = str;
        let parsedResult;
        const parseInput = result => {
            if (result === null) {
                return ABORT;
            }
            parsedResult = parseFn(result);
            if (!isNaN(parsedResult)) {
                return parsedResult;
            }
            return null;
        };
        const attemptInput = (promptString, depth, asynchronous) => {
            if (depth >= MAX_RECURSION_DEPTH) {
                return DEFAULT;
            }
            const result = asynchronous
                ? this.readLinePrivateAsync(promptString)
                : this.readLinePrivate(promptString);
            const next = result => {
                return attemptInput(
                    `'${result}' was not ${errorMsgType}. Please try again.\n${str}`,
                    depth + 1,
                    asynchronous
                );
            };
            if (Promise.resolve(result) === result) {
                return result.then(result => {
                    const parsedResult = parseInput(result);
                    if (parsedResult === ABORT) {
                        return null;
                    }
                    if (parsedResult === null) {
                        return next(result);
                    } else {
                        return parsedResult;
                    }
                });
            } else {
                const parsedResult = parseInput(result);
                if (parsedResult === ABORT) {
                    return null;
                }
                if (parsedResult === null) {
                    return next(result);
                } else {
                    return parsedResult;
                }
            }
        };
        const result = attemptInput(promptString, 0, asynchronous);
        if (result === DEFAULT) {
            return 0;
        }
        if (result === null) {
            return null;
        }
        if (!asynchronous) {
            // success
            this.print(str);
            this.println(result);
        }
        return result;
    }

    /**
     * Read a line from the user.
     * @param {str} str - A message associated with the modal asking for input.
     * @returns {str} The result of the readLine prompt.
     * @global
     */
    readLine(str) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to readLine');
        }

        const result = this.readLinePrivate(str);
        this.print(str);
        this.println(result);
        return result;
    }

    /**
     * Read a line asynchronously from the user.
     * This will receive input via the Console's configured {@link Console#onInput} function, which by default
     * will return a Promise that resolves with the result of using `window.prompt`, which will
     * block the browser.
     * @param {str} str - A message associated with the modal asking for input.
     * @returns {Promise<string>} The result of the prompt.
     * @global
     */
    async readLineAsync(str) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to readLineAsync');
        }

        const result = await this.readLinePrivateAsync(str);
        return result;
    }

    /**
     * Read a bool from the user.
     * @param {str} str - A message associated with the modal asking for input.
     * @returns {str} The result of the readBoolean prompt.
     * @global
     */
    readBoolean(str) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to readBoolean');
        }
        return this.readNumber(
            str,
            line => {
                if (line === null) {
                    return NaN;
                }
                line = line.toLowerCase();
                if (line === 'true' || line === 'yes') {
                    return true;
                }
                if (line === 'false' || line === 'no') {
                    return false;
                }
                return NaN;
            },
            'a boolean (true/false)'
        );
    }

    /**
     * Read a bool from the user asynchronously.
     * This will receive input via the Console's configured {@link Console#onInput} function, which by default
     * will return a Promise that resolves with the result of using `window.prompt`, which will
     * block the browser.
     * @param {str} str - A message associated with the modal asking for input.
     * @returns {Promise<boolean>} The result of the onPrompt function if it's a boolean, or 0.
     * @global
     */
    async readBooleanAsync(str) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to readBooleanAsync');
        }
        return await this.readNumber(
            str,
            line => {
                if (line === null) {
                    return NaN;
                }
                line = line.toLowerCase();
                if (line === 'true' || line === 'yes') {
                    return true;
                }
                if (line === 'false' || line === 'no') {
                    return false;
                }
                return NaN;
            },
            'a boolean (true/false)',
            true
        );
    }

    /**
     * Read an int with our special parseInt function which doesnt allow floats, even
     * though they are successfully parsed as ints.
     * @param {str} str - A message associated with the modal asking for input.
     * @returns {str} The result of the readInt prompt.
     * @global
     */
    readInt(str) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to readInt');
        }

        return this.readNumber(
            str,
            function (x) {
                var resultInt = parseInt(x);
                var resultFloat = parseFloat(x);
                // Make sure the value when parsed as both an int and a float are the same
                if (resultInt === resultFloat) {
                    return resultInt;
                }
                return NaN;
            },
            'an integer'
        );
    }

    /**
     * Read an int from the user asynchronously.
     * This will receive input via the Console's configured {@link Console#onInput} function, which by default
     * will return a Promise that resolves with the result of using `window.prompt`, which will
     * block the browser.
     * @param {str} str - A message associated with the modal asking for input.
     * @returns {Promise<number>} The result of the onPrompt function if it's an int, or 0.
     * @global
     */
    async readIntAsync(str) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to readIntAsync');
        }
        return await this.readNumber(
            str,
            function (x) {
                var resultInt = parseInt(x);
                var resultFloat = parseFloat(x);
                // Make sure the value when parsed as both an int and a float are the same
                if (resultInt === resultFloat) {
                    return resultInt;
                }
                return NaN;
            },
            'an integer',
            true
        );
    }

    /**
     * Read a float from the user.
     * @param {str} str - A message associated with the modal asking for input.
     * @returns {str} The result of the readFloat prompt.
     * @global
     */
    readFloat(str) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to readFloat');
        }

        return this.readNumber(str, parseFloat, 'a float');
    }

    /**
     * Read a float from the user asynchronously.
     * This will receive input via the Console's configured {@link Console#onInput} function, which by default
     * will return a Promise that resolves with the result of using `window.prompt`, which will
     * block the browser.
     * @param {str} str - A message associated with the modal asking for input.
     * @returns {Promise<number>} The result of the onPrompt function if it's a float, or 0.
     * @global
     */
    async readFloatAsync(str) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to readFloatAsync');
        }
        return await this.readNumber(str, parseFloat, 'a float', true);
    }
}

export default Console;
