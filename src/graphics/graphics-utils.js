/**
 * Get the distance between two points, (x1, y1) and (x2, y2)
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {number} Distance between the two points.
 */
export function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

/**
 * Maps a value from one range to another.
 * @example
 * // maps the sine of 1 from the range of sine (-1, 1) to the range (0, getHeight());
 * map(Math.sin(1), -1, 1, 0, getHeight());
 * @param {number} value - Value to remap to a range
 * @param {number} start1 - Lower bound of the current range
 * @param {number} end1 - Upper bound of the current range
 * @param {number} start2 - Lower bound of the desired range
 * @param {number} end2 - Upper bound of the desired range
 * @returns {number}
 */
export function map(value, start1, end1, start2, end2) {
    return ((value - start1) / (end1 - start1)) * (end2 - start2) + start2;
}
