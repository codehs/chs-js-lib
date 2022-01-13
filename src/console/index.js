/* Console
 *
 * A console represents a text console that allows the user to print, println,
 * and read an integer using readInt, and read a float using readFloat. These
 * functions pop up prompt dialogs and make sure that the results are actually
 * of the desired type.
 *
 * @author  Jeremy Keeshin    July 9, 2012
 * @author  Andy Bayer        Fall 2021
 *
 */

export default class CodeHSConsole {
    /**
     * Initialize the console class, additionally configuring any event handlers.
     * @constructor
     * @param {function} options.onPrompt Function invoked when asking for user input.
     * This function is invoked with the string of the prompt, i.e. readInt('give me an int!').
     * The result of invoking onPrompt will be subjected to parsing functions for confirming
     * it's an appropriate data type (a float, in the case of readFloat, for example). If
     * onPrompt is undefined, window.prompt is used as a fallback.
     * @param {function} options.onPrint Function invoked when printing.
     * This function is invoked with any output, either in the case of explicit calls to `print`
     * or `println` or internal calls within the library. If onPrint is undefined, console.log
     * is used as a fallback.
     * @param {function} options.onClear Function invoked when clear() is called.
     */
    constructor(options = {}) {
        this.onPrompt = options.onPrompt ?? window.prompt.bind(window);
        this.onPrint = options.onPrint ?? window.console.log.bind(window.console);
        this.onClear = options.onClear ?? (() => {});
    }

    /**
     * Configure the Console instance, providing methods it invokes
     * when prompting for input and emitting output.
     *
     * @param {function} options.onPrompt Function invoked when asking for user input.
     * This function is invoked with the string of the prompt, i.e. readInt('give me an int!').
     * The result of invoking onPrompt will be subjected to parsing functions for confirming
     * it's an appropriate data type (a float, in the case of readFloat, for example). If
     * onPrompt is undefined, window.prompt is used as a fallback.
     * @param {function} options.onPrint Function invoked when printing.
     * This function is invoked with any output, either in the case of explicit calls to `print`
     * or `println` or internal calls within the library. If onPrint is undefined, console.log
     * is used as a fallback.
     * @param {function} options.onClear Function invoked when clear() is called.
     */
    configure(options = {}) {
        this.onPrompt = options.onPrompt ?? this.onPrompt;
        this.onPrint = options.onPrint ?? this.onPrint;
        this.onClear = options.onClear ?? this.onClear;
    }

    /**
     * Private method used to read a line.
     * @param {string} promptString - The line to be printed before prompting.
     * @param {boolean} printPrompt - Whether the prompt should be printed. When readLine and
     * other methods for getting user input are called, the prompt string is additionally printed.
     */
    readLinePrivate(promptString, printPrompt) {
        const input = this.onPrompt(promptString);
        printPrompt && this.println(promptString);
        return input;
    }

    /**
     * Clear the console.
     */
    clear() {
        this.onClear();
    }

    /**
     * Print a value to the console.
     * @param {...any} args - Anything to print.
     */
    print(...args) {
        this.onPrint(...args);
    }

    /**
     * Print a value to the console, followed by a newline character.
     * @param {any} value - The value to print.
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
     * Read a number from the user using JavaScripts prompt function.
     * We make sure here to check a few things.
     *
     *    1. If the user checks "Prevent this page from creating additional dialogs," we handle
     *       that gracefully, by checking for a loop, and then returning a DEFAULT value.
     *    2. That we can properly parse a number according to the parse function PARSEFN passed in
     *       as a parameter. For floats it is just parseFloat, but for ints it is our special parseInt
     *       which actually does not even allow floats, even they they can properly be parsed as ints.
     *    3. The errorMsgType is a string helping us figure out what to print if it is not of the right
     *       type.
     * @param {string} str - The prompt string
     * @param {function} parseFn - A function to parse the user input to determine if it satisfies
     * the expected datatype. If the return value of parseFn satisfies `!isNaN`, the value is
     * returned. If the result is null, the prompt will repeat until satisfied, or 100 prompts have
     * occurred.
     * @param {string} errorMsgType - A strinng to include in the error message to the user explaining
     * why a given input was rejected. For example, the errorMsgType "an integer," would result in
     * printing "That was not an integer. Please try again." if parseFn failed.
     * @returns {number}
     */
    readNumber(str, parseFn, errorMsgType) {
        const DEFAULT = 0; // If we get into an infinite loop, return DEFAULT.
        const INFINITE_LOOP_CHECK = 100;

        let prompt = str;
        let looping = false;
        let loopCount = 0;
        // eslint-disable-next-line no-constant-condition
        while (true) {
            let result = this.readLinePrivate(prompt, !looping);
            if (result === null) {
                return null;
            }
            result = parseFn(result);

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
    }

    /**
     * Read a line from the user.
     * @param {str} str - A message associated with the modal asking for input.
     * @returns {str} The result of the readLine prompt.
     */
    readLine(str) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to readLine');
        }

        return this.readLinePrivate(str, true);
    }

    /**
     * Read a bool from the user.
     * @param {str} str - A message associated with the modal asking for input.
     * @returns {str} The result of the readBoolean prompt.
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
     * Read an int with our special parseInt function which doesnt allow floats, even
     * though they are successfully parsed as ints.
     * @param {str} str - A message associated with the modal asking for input.
     * @returns {str} The result of the readInt prompt.
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
     * Read a float with our safe helper function.
     * @param {str} str - A message associated with the modal asking for input.
     * @returns {str} The result of the readFloat prompt.
     */
    readFloat(str) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to readFloat');
        }

        return this.readNumber(str, parseFloat, 'a float');
    }
}
