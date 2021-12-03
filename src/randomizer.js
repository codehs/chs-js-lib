/**
 * @module Randomizer
 */

/**
 * Get a random integer between low to high, inclusive.
 * If only one parameter is given, a random integer
 * from (0, low-1) inclusive.
 * @param {number} min - Lower bound on range of random int.
 * @param {number} max - Upper bound on range of random int.
 * @returns {number} Random number between low and high, inclusive.
 */
export const nextInt = function (min, max) {
    if (max === undefined) {
        max = min - 1;
        min = 0;
    }

    min = Math.floor(min);
    var r = Math.random();
    return min + Math.floor(r * (max - min + 1));
};

/**
 * Get a random float between low to high, inclusive.
 * If only one parameter is given, a random float
 * from (0, low-1) inclusive.
 * @param {number} min - Lower bound on range of random int.
 * @param {number} max - Upper bound on range of random int.
 * @returns {number} Random number between low and high, inclusive.
 */
export const nextFloat = function (min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return min + (max - min) * Math.random();
};

/**
 * Generates a random number in range (0,255) in hexadecimal.
 * @returns {string} Random number in hexadecimal form.
 */
export const nextHex = function () {
    var val = nextInt(0, 255);
    if (val < 16) {
        return '0' + val.toString(16);
    }
    return val.toString(16);
};

/**
 * Generate a random hexadecimal color code of the format #RRGGBB.
 * @returns {string} Hexadecimal representation of random color.
 */
export const nextColor = function () {
    var r = nextHex();
    var g = nextHex();
    var b = nextHex();
    return '#' + r + g + b;
};

/**
 * Generate a random boolean via fair probability coin toss.
 * If `probabilityTrue` is supplied, the coin toss is skewed by that value.
 * @param {number} probabilityTrue - Skewed probability of true.
 * @returns {boolean} Result of coin flip skewed toward `probabilityTrue`.
 */
export const nextBoolean = probabilityTrue => {
    if (probabilityTrue === undefined) {
        probabilityTrue = 0.5;
    }

    return Math.random() < probabilityTrue;
};

let perlin;
const PERLIN_SIZE = 4095;

const lerp = (a, b, x) => {
    return a * (1 - x) + b * x;
};

/**
 * A noise function for generating a smooth, random value between 0 and 1.
 * @param {number} x - Any number. Adjacent numbers will have similar noise values, by definition
 * of Perlin noise.
 * @returns {number}
 */
export const noise = x => {
    if (!perlin) {
        perlin = new Array(PERLIN_SIZE + 1);
        for (let i = 0; i < PERLIN_SIZE + 1; i++) {
            perlin[i] = Math.random();
        }
    }

    x = Math.abs(x);
    const xFloor = Math.floor(x);
    const t = x - xFloor;
    const tRemapSmoothstep = t * t * (3 - 2 * t);

    // get the left and right neighbors of x
    const xMin = xFloor & PERLIN_SIZE;
    const xMax = (xMin + 1) & PERLIN_SIZE;

    const y = lerp(perlin[xMin], perlin[xMax], tRemapSmoothstep);
    return y;
};
