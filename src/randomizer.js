/**
 * @module Randomizer
 */

import Vector from './datastructures/vector';

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

// stores numbers 0-1
let perlin;
// stores unit vectors
let perlin2;
const PERLIN_SIZE = 4095;
const PERLIN_SIZE_2D = 63;

const lerp = (a, b, x) => {
    return a * (1 - x) + b * x;
};

const fade = t => {
    return t * t * (3 - 2 * t);
};

/**
 * A noise function for generating a smooth, random value between 0 and 1.
 * @param {number} x - Any number. Adjacent numbers will have similar noise values, by definition
 * of Perlin noise.
 * @param {number} [y] - Any number. If y is present, 2d will be used.
 * @returns {number}
 */
export const noise = (x, y) => {
    if (!perlin) {
        perlin = new Array(PERLIN_SIZE + 1);
        for (let i = 0; i < PERLIN_SIZE + 1; i++) {
            perlin[i] = Math.random();
        }
    }

    if (y !== undefined) {
        if (!perlin2) {
            perlin2 = new Array(PERLIN_SIZE_2D + 1).fill(0).map(row => {
                return new Array(PERLIN_SIZE_2D + 1).fill(0).map(() => {
                    return new Vector(1, 0).rotate(Math.random() * 360);
                });
            });
        }
        /*
          x0, y0      x1, y1
            +--------+
            |        |
            |        |
            |        |
            +--------+
          x0, y1     x1, y1
        */
        const x0 = Math.floor(x) % PERLIN_SIZE_2D;
        const x1 = x0 + 1;
        const y0 = Math.floor(y) % PERLIN_SIZE_2D;
        const y1 = y0 + 1;

        const gradientTL = perlin2[x0][y0];
        const gradientTR = perlin2[x1][y0];
        const gradientBL = perlin2[x0][y1];
        const gradientBR = perlin2[x1][y1];

        const dx = x - x0;
        const dy = y - y0;

        const noiseTL = gradientTL.dot(x - x0, y - y0);
        const noiseTR = gradientTR.dot(x - x1, y - y0);
        const noiseBL = gradientBL.dot(x - x0, y - y1);
        const noiseBR = gradientBR.dot(x - x1, y - y1);

        const xFade = fade(dx);

        return (
            (lerp(lerp(noiseTL, noiseTR, xFade), lerp(noiseBL, noiseBR, xFade), fade(dy)) + 1) / 2
        );
    }

    x = Math.abs(x);
    const xFloor = Math.floor(x);
    const t = x - xFloor;

    // get the left and right neighbors of x
    const xMin = xFloor % PERLIN_SIZE;
    const xMax = (xMin + 1) % PERLIN_SIZE;

    return lerp(perlin[xMin], perlin[xMax], fade(t));
};
