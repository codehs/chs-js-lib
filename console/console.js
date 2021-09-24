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

const lines = [];

export default class CodeHSConsole {
    /**
     * Set up an instance of the console library.
     * @constructor
     */
    constructor() {
        this.internalOutput = [];
        this.internalOutputBuffer = '';
    }

    bufferedOutputToArray(bufferedOutput) {
        var bufferedOutputArray = bufferedOutput.split('\n');
        // remove the trailing "" that happens if the final element is a \n
        if (bufferedOutputArray[bufferedOutputArray.length - 1].length === 0) {
            bufferedOutputArray = bufferedOutputArray.slice(0, -1);
        }
        return bufferedOutputArray;
    }

    /**
     * A non-dom-mutating print for use in autograders.
     */
    quietPrint(string) {
        if (!this.internalOutputBuffer) {
            this.internalOutputBuffer = '';
        }
        this.internalOutputBuffer += string;
    }

    /**
     * A non-dom-mutating println for use in autograders.
     */
    quietPrintln(anything) {
        this.quietPrint(anything + '\n');
    }

    /**
     * Gets the internal output.
     */
    flushQuietOutput() {
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
    }

    /**
     * Private method used to read a line.
     * @param {string} str - The line to be read.
     * @param {boolean} looping - Unsure. This is a messy method.
     */
    readLinePrivate(str, looping) {
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
            lines = _.takeRight($('#console').text().split('\n'), 21);

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
    }

    /**
     * Method to test whether the code is requesting user input at all.
     * @param {string} code - The code from the editor
     */
    hasUserinput(code) {
        return code.match(new RegExp('readLine|readInt|readFloat|readBoolean|readNumber'));
    }

    /** ************* PUBLIC METHODS *******************/

    /**
     * Clear the console.
     */
    clear() {
        if (arguments.length !== 0) {
            throw new Error('You should not pass any arguments to clear');
        }
        CodeHSConsole.clear();
    }

    /**
     * Print a line to the console.
     * @param {string} ln - The string to print.
     */
    print(ln) {
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
    }

    /**
     * Print a line to the console.
     * @param {string} ln - The string to print.
     */
    println(ln) {
        if (arguments.length === 0) {
            ln = '';
        } else if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to println');
        } else {
            this.print(ln + '\n');
            $('#console').scrollTop();
        }
    }

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
    readNumber(str, parseFn, errorMsgType) {
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

        return this.readLinePrivate(str, false);
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
            function (x) {
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
                if (resultInt == resultFloat) {
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

module.exports = {
    CodeHSConsole: CodeHSConsole,
    PUBLIC_METHODS: PUBLIC_METHODS,
};
