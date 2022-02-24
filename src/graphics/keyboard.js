/** @module Keyboard */

/**
 * Constant for the left arrow key
 * @type {number}
 */
export const LEFT = 37;
/**
 * Constant for the up arrow key
 * @type {number}
 */
export const UP = 38;
/**
 * Constant for the right arrow key
 * @type {number}
 */
export const RIGHT = 39;
/**
 * Constant for the down arrow key
 * @type {number}
 */
export const DOWN = 40;
/**
 * Constant for the enter key
 * @type {number}
 */
export const ENTER = 13;
/**
 * Constant for the shift key
 * @type {number}
 */
export const SHIFT = 16;
/**
 * Constant for the space key
 * @type {number}
 */
export const SPACE = 32;
/**
 * Constant for the backspace key
 * @type {number}
 */
export const BACKSPACE = 8;
/**
 * Constant for the tab key
 * @type {number}
 */
export const TAB = 9;
/**
 * Constant for the control key
 * @type {number}
 */
export const CTRL = 17;
/**
 * Constant for the alt key
 * @type {number}
 */
export const ALT = 18;
/**
 * Constant for the caps lock key
 * @type {number}
 */
export const CAPS_LOCK = 20;
/**
 * Constant for the left command key
 * @type {number}
 */
export const LEFT_COMMAND = 91;
/**
 * Constant for the left window key
 * @type {number}
 */
export const LEFT_WINDOW = 91;
/**
 * Constant for the right windowkey
 * @type {number}
 */
export const RIGHT_WINDOW = 92;
/**
 * Constant for the right command key
 * @type {number}
 */
export const RIGHT_COMMAND = 93;
/**
 * Constant for the select key
 * @type {number}
 */
export const SELECT = 93;

/**
 * Modifiers and keys that don't produce or change input.
 * @type {Array.<number>}
 */
export const nonEditingKeys = [
    LEFT,
    RIGHT,
    UP,
    DOWN,
    CTRL,
    SHIFT,
    ALT,
    CAPS_LOCK,
    LEFT_COMMAND,
    RIGHT_COMMAND,
    SELECT,
    LEFT_WINDOW,
    RIGHT_WINDOW,
];

/**
 * Get the keyboard code for a numeric digit.
 * @param {number} digit - The number value to be converted to key code.
 * @return {number} Key code corresponding to digit.
 * @example
 * const code3 = Keyboard.digit(3);
 *
 */
export function digit(dig) {
    dig = dig % 10;
    return dig + 48;
}

/**
 * Get the keyboard code for a character.
 * Only to be used with single-character strings.
 * @example
 * const aCode = Keyboard.letter("a");
 *
 * @param {string} letter - The letter to be converted to key code.
 * @return {number} Key code corresponding to letter.
 */
export function letter(letter) {
    if (letter.length !== 1) {
        return -1;
    }
    return letter.toUpperCase().charCodeAt(0);
}

/**
 * Check if a key is an editing key.
 *
 * @param {number} keyCode - Key code corresponding to key pressed.
 * @return {boolean} Whether or not the key is an editing key.
 */
export function isEditingKey(keyCode) {
    return nonEditingKeys.indexOf(keyCode) === -1;
}
