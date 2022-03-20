import Thing, { rotatePointAboutPosition } from './thing.js';

/**
 * A Line is a line segment from its start point to end point, stored as x1, y1, and x2, y2 respectively.
 * @class
 * @extends Thing
 */
class Line extends Thing {
    type = 'Line';

    /**
     * @constructor
     * @param {number} x1 - x coordinate of starting point of line.
     * @param {number} y1 - y coordinate of starting point of line.
     * @param {number} x2 - x coordinate of end point of line.
     * @param {number} y2 - y coordinate of end point of line.
     */
    constructor(x1, y1, x2, y2) {
        super();
        if (arguments.length !== 4) {
            throw new Error('You should pass exactly 4 arguments to `new Line(x1, y1, x2, y2)`.');
        }
        if (
            typeof x1 !== 'number' ||
            typeof y1 !== 'number' ||
            typeof x2 !== 'number' ||
            typeof y2 !== 'number'
        ) {
            throw new TypeError(
                'You must pass 4 numbers to `new Line(x1, y1, x2, y2)`. Make sure each parameter you are passing is a number.'
            );
        }
        if (!isFinite(x1) || !isFinite(y1) || !isFinite(x2) || !isFinite(y2)) {
            throw new TypeError(
                'One or more of the values you passed to `new Line(x1, y1, x2, y2)` is an illegal number. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.lineWidth = 2;
        this.hasBorder = true;
    }

    get width() {
        return Math.abs(this.x2 - this.x1);
    }

    get height() {
        return Math.abs(this.y2 - this.y1);
    }

    /**
     * Returns the width of the line.
     *
     * @returns {number} The width of the line.
     */
    getWidth() {
        return this.width;
    }

    /**
     * Returns the height of the line.
     *
     * @returns {number} The width of the line.
     */
    getHeight() {
        return this.height;
    }

    /**
     * Gets the x coordinate of the Line's start point.
     *
     * @returns {number} The x coordinate of the Line's start point.
     */
    getX() {
        return this.x;
    }

    get x() {
        return Math.min(this.x1, this.x2);
    }

    /**
     * Gets the y coordinate of the Line's start point.
     *
     * @returns {number} The y coordinate of the Line's start point.
     */
    getY() {
        return this.y1;
    }

    get y() {
        return Math.min(this.y1, this.y2);
    }

    /**
     * Gets the x coordinate of the Line's start point.
     *
     * @returns {number} The x coordinate of the Line's start point.
     */
    getStartX() {
        return this.x1;
    }

    /**
     * Gets the y coordinate of the Line's start point.
     *
     * @returns {number} The y coordinate of the Line's start point.
     */
    getStartY() {
        return this.y1;
    }

    /**
     * Gets the x coordinate of the Line's end point.
     *
     * @returns {number} The x coordinate of the Line's end point.
     */
    getEndX() {
        return this.x2;
    }

    /**
     * Gets the y coordinate of the Line's end point.
     *
     * @returns {number} The y coordinate of the Line's end point.
     */
    getEndY() {
        return this.y2;
    }

    /**
     * Sets the color of a line.
     * @param {Color} color - Sets the color of the line.
     */
    setColor(color) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setColor(color)`.');
        }
        if (color === undefined) {
            throw new TypeError('Invalid color');
        }
        this.stroke = color;
    }

    /**
     * Gets the color of a line.
     *
     * @returns {Color} Color of the line.
     */
    getColor() {
        return this.stroke;
    }

    /**
     * Draws the line in the canvas.
     *
     * @private
     * @param {CanvasRenderingContext2D} context - Context to draw on.
     */
    draw(context) {
        super.draw(context, () => {
            // the super draw call translates to this.x, this.y,
            // which will be the most upper-left of the points.
            // to account for that, this line needs to be drawn relative
            // to the top left, so this.x and this.y are subtracted from
            // each point.
            context.beginPath();
            context.moveTo(this.x1 - this.x, this.y1 - this.y);
            context.lineTo(this.x2 - this.x, this.y2 - this.y);
            context.closePath();
        });
    }

    /**
     * Checks if a given point is contained in the line.
     *
     * @param {number} x - x coordinate of the point being tested.
     * @param {number} y - y coordinate of the point being tested.
     */
    containsPoint(x, y) {
        const betweenXs = (this.x1 <= x && x <= this.x2) || (this.x2 <= x && x <= this.x1);
        const betweenYs = (this.y1 <= y && y <= this.y2) || (this.y2 <= y && y <= this.y1);
        if (this.x1 == this.x2) {
            return this.x1 == x && betweenYs;
        } else {
            const slope = (this.y2 - this.y1) / (this.x2 - this.x1);
            return (
                Math.abs(slope * (x - this.x1) - (y - this.y1)) <= this.lineWidth &&
                betweenXs &&
                betweenYs
            );
        }
    }

    /**
     * Sets the width of the line.
     *
     * @param {number} width - The resulting width of the line.
     */
    setLineWidth(width) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setLineWidth`');
        }
        if (typeof width !== 'number' || !isFinite(width)) {
            throw new TypeError(
                'You must pass a finite number to `setLineWidth(width)`. Did you perform a calculation on a variable that is not a number?'
            );
        }
        this.lineWidth = width;
    }

    /**
     * Sets the *starting* point of the line.
     *
     * @param {number} x - The x coordinate of the resulting ending point.
     * @param {number} y - The y coordinate of the resulting ending point.
     */
    setStartpoint(x, y) {
        if (arguments.length !== 2) {
            throw new Error('You should pass exactly 2 arguments to `setStartpoint(x, y)`.');
        }
        if (typeof x !== 'number' || !isFinite(x)) {
            throw new TypeError(
                'Invalid value for x-coordinate. ' +
                    'Make sure you are passing finite numbers to `setStartpoint(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        if (typeof y !== 'number' || !isFinite(y)) {
            throw new TypeError(
                'Invalid value for y-coordinate. Make sure you are passing finite numbers to `setStartpoint(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }

        this.setPosition(x, y);
    }

    /**
     * Sets the *starting* point of the line.
     *
     * @param {number} x - The x coordinate of the resulting starting point.
     * @param {number} y - The y coordinate of the resulting starting point.
     */
    setPosition(x, y) {
        if (arguments.length !== 2) {
            throw new Error('You should pass exactly 2 arguments to `setPosition(x, y)`.');
        }
        if (typeof x !== 'number' || !isFinite(x)) {
            throw new TypeError(
                'Invalid value for x-coordinate. ' +
                    'Make sure you are passing finite numbers to `setPosition(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        if (typeof y !== 'number' || !isFinite(y)) {
            throw new TypeError(
                'Invalid value for y-coordinate. ' +
                    'Make sure you are passing finite numbers to `setPosition(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        this.x1 = x;
        this.y1 = y;
    }

    /**
     * Sets the *ending* point of the line.
     *
     * @param {number} x - The x coordinate of the resulting ending point.
     * @param {number} y - The y coordinate of the resulting ending point.
     */
    setEndpoint(x, y) {
        if (arguments.length !== 2) {
            throw new Error('You should pass exactly 2 arguments to `setEndpoint(x, y)`.');
        }
        if (typeof x !== 'number' || !isFinite(x)) {
            throw new TypeError(
                'Invalid value for x-coordinate. ' +
                    'Make sure you are passing finite numbers to `setEndpoint(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        if (typeof y !== 'number' || !isFinite(y)) {
            throw new TypeError(
                'Invalid value for y-coordinate. ' +
                    'Make sure you are passing finite numbers to `setEndpoint(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        this.x2 = x;
        this.y2 = y;
    }

    /**
     * Moves the entire line.
     *
     * @param {number} dx - The change in x coordinate of both starting and ending points.
     * @param {number} dy - The change in y coordinate of both starting and ending points.
     */
    move(dx, dy) {
        if (arguments.length !== 2) {
            throw new Error('You should pass exactly 2 arguments to `move(dx, dy)`.');
        }
        if (typeof dx !== 'number' || !isFinite(dx)) {
            throw new TypeError(
                'Invalid number passed for `dx`. Make sure you are passing finite numbers to `move(dx, dy)`.'
            );
        }
        if (typeof dy !== 'number' || !isFinite(dy)) {
            throw new TypeError(
                'Invalid number passed for `dy`. Make sure you are passing finite numbers to `move(dx, dy)`.'
            );
        }
        this.x1 += dx;
        this.y1 += dy;
        this.x2 += dx;
        this.y2 += dy;
    }
}
/**
 * Gets the new points based on their rotated values.
 * @private
 * @param  {number} x1       X coordinate of start point
 * @param  {number} y1       Y coordinate of start point
 * @param  {number} x2       X coordinate of end point
 * @param  {number} y2       Y Coordinate of end point
 * @param  {number} rotation radians rotated (Expected in radians)
 * @return {array}          List of coordinates of both points.
 */
export function getRotatedPoints(x1, y1, x2, y2, rotation) {
    var midX = (x1 + x2) / 2;
    var midY = (y1 + y2) / 2;
    var sinAngle = Math.sin(rotation);
    var cosAngle = Math.cos(rotation);
    var newX;
    var newY;
    // Rotate point 1
    x1 -= midX;
    y1 -= midY;
    newX = x1 * cosAngle - y1 * sinAngle;
    newY = x1 * sinAngle + y1 * cosAngle;
    x1 = newX + midX;
    y1 = newY + midY;

    // Rotate point 2
    x2 -= midX;
    y2 -= midY;
    newX = x2 * cosAngle - y2 * sinAngle;
    newY = x2 * sinAngle + y2 * cosAngle;
    x2 = newX + midX;
    y2 = newY + midY;

    return [x1, y1, x2, y2];
}

export default Line;
