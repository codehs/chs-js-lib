import Thing from './thing.js';

/**
 * A Rectangle is defined by its width and height.
 * @class
 * @extends Thing
 */
class Rectangle extends Thing {
    type = 'Rectangle';

    /**
     * Constructs a rectangle with width and height.
     * @constructor
     * @param {number} width
     * @param {number} height
     * @example
     * const rect = new Rectangle(20, 20);
     */
    constructor(width, height) {
        super();
        if (arguments.length !== 2) {
            throw new Error(
                'You should pass exactly 2 arguments to `new Rectangle(width, height)`.'
            );
        }
        if (typeof width !== 'number' || !isFinite(width)) {
            throw new TypeError(
                'Invalid value for `width`. Make sure you are passing finite numbers to `new Rectangle(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        if (typeof height !== 'number' || !isFinite(height)) {
            throw new TypeError(
                'Invalid value for `height`. Make sure you are passing finite numbers to `new Rectangle(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        this.width = Math.max(0, width);
        this.height = Math.max(0, height);
    }

    /**
     * Draws the rectangle in the canvas.
     *
     * @private
     * @param {CanvasRenderingContext2D} context - Context to draw on.
     */
    draw(context) {
        super.draw(context, () => {
            context.beginPath();
            context.rect(0, 0, this.width, this.height);
            context.closePath();
        });
    }

    /**
     * Describes the rectangle for use with screen readers.
     */
    describe() {
        return super.describe() + ` Width: ${this.width}. Height: ${this.height}.`;
    }

    /**
     * Sets the size of the Rectangle.
     *
     * @param {number} width - The desired width of the resulting Rectangle.
     * @param {number} height - The desired height of the resulting Rectangle.
     */
    setSize(width, height) {
        if (arguments.length !== 2) {
            throw new Error('You should pass exactly 2 arguments to `setSize(width, height)`.');
        }
        if (typeof width !== 'number' || !isFinite(width)) {
            throw new TypeError(
                'Invalid value for `width`. Make sure you are passing finite numbers to `setSize(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        if (typeof height !== 'number' || !isFinite(height)) {
            throw new TypeError(
                'Invalid value for `height`. Make sure you are passing finite numbers to `setSize(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        this.width = Math.max(0, width);
        this.height = Math.max(0, height);
    }

    /**
     * Sets the width of the Rectangle.
     *
     * @param {number} width - The desired width of the resulting Rectangle.
     */
    setWidth(width) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setWidth(width)`');
        }
        if (typeof width !== 'number' || !isFinite(width)) {
            throw new TypeError(
                'Invalid value for `width`. Make sure you are passing finite numbers to `setWidth(width)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        this.width = Math.max(0, width);
    }

    /**
     * Sets the height of the Rectangle.
     *
     * @param {number} height - The desired height of the resulting Rectangle.
     */
    setHeight(height) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setHeight(height)`');
        }
        if (typeof height !== 'number' || !isFinite(height)) {
            throw new TypeError(
                'Invalid value for `height`. Make sure you are passing finite numbers to `setHeight(height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        this.height = Math.max(0, height);
    }

    /**
     * Checks if the passed point is contained in the rectangle.
     *
     * @alias Rectangle#containsPoint
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {boolean} Whether the passed point is contained in the rectangle.
     */
    _containsPoint(x, y) {
        x += this.width * this.anchor.horizontal;
        y += this.height * this.anchor.vertical;
        return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }

    /**
     * Gets the width of the rectangle.
     *
     * @returns {number} Width of the rectangle.
     */
    getWidth() {
        return this.width;
    }

    /**
     * Gets the height of the rectangle.
     *
     * @returns {number} Height of the rectangle.
     */
    getHeight() {
        return this.height;
    }
}

export default Rectangle;
