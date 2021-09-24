// Constants for key values.
const Keyboard = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13,
    SHIFT: 16,
    SPACE: 32,
    BACKSPACE: 8,
    TAB: 9,
    CTRL: 17,
    ALT: 18,
    CAPS_LOCK: 20,
    LEFT_COMMAND: 91,
    LEFT_WINDOW: 91,
    RIGHT_WINDOW: 92,
    RIGHT_COMMAND: 93,
    SELECT: 93,
};

/**
 * Get the keyboard code for a numeric digit.
 * @param {number} digit - The number value to be converted to key code.
 * @returns {number} Key code corresponding to digit.
 * Usage: var code3 = Keyboard.digit(3);
 */
Keyboard.digit = function (dig) {
    dig = dig % 10;
    return dig + 48;
};

/**
 * Get the keyboard code for a character.
 * @param {string} letter - The letter to be converted to key code.
 * @returns {number} Key code corresponding to letter.
 * Usage: var aCode = Keyboard.letter("a");
 * Only to be used with single-character strings.
 */
Keyboard.letter = function (letter) {
    if (letter.length !== 1) {
        return -1;
    }
    return letter.toUpperCase().charCodeAt(0);
};

// Constants for keys not used to edit.
Keyboard.nonEditingKeys = [
    Keyboard.LEFT,
    Keyboard.RIGHT,
    Keyboard.UP,
    Keyboard.DOWN,
    Keyboard.CTRL,
    Keyboard.SHIFT,
    Keyboard.ALT,
    Keyboard.CAPS_LOCK,
    Keyboard.LEFT_COMMAND,
    Keyboard.RIGHT_COMMAND,
    Keyboard.SELECT,
    Keyboard.LEFT_WINDOW,
    Keyboard.RIGHT_WINDOW,
];

/**
 * Check if a key is an editing key.
 * @param {number} keyCode - Key code corresponding to key pressed.
 * @returns {boolean} Whether or not the key is an editing key.
 */
Keyboard.isEditingKey = function (keyCode) {
    return Keyboard.nonEditingKeys.indexOf(keyCode) === -1;
};

export default Keyboard;
