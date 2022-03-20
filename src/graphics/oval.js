import Thing from './thing.js';

/**
 * An Oval is an ellipse, with its horizontal width defined by its .width property and its height defined by its .height property.
 * @class
 * @extends Thing
 */
class Oval extends Thing {
    type = 'Oval';
    anchor = { vertical: 0.5, horizontal: 0.5 };

    /**
     * Constructs a new oval.
     * @constructor
     * @param {number} width - Desired width of the Oval
     * @param {number} height - Desired height of the Oval
     * @example
     * const o = new Oval(20, 10);
     * add(o);
     */
    constructor(width, height) {
        super();
        if (arguments.length !== 2) {
            throw new Error('You should pass exactly 2 arguments to `new Oval(width, height)`.');
        }
        if (typeof width !== 'number' || !isFinite(width)) {
            throw new TypeError(
                'Invalid value for `width`. Make sure you are passing finite numbers to `new Oval(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        if (typeof height !== 'number' || !isFinite(height)) {
            throw new TypeError(
                'Invalid value for `height`. Make sure you are passing finite numbers to `new Oval(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        this.width = Math.max(0, width);
        this.height = Math.max(0, height);
    }
    /**
     * Draws an ellipse centered at this.x and this.y.
     * adapted from http://stackoverflow.com/questions/2172798/
     * how-to-draw-an-oval-in-html5-canvas
     *
     * @private
     * @param {CanvasRenderingContext2D} context - Context to draw on.
     */
    draw(context) {
        super.draw(context, () => {
            context.translate(this.width / 2, this.height / 2);
            context.beginPath();
            context.ellipse(0, 0, this.width / 2, this.height / 2, 2 * Math.PI, 0, 2 * Math.PI);
            context.closePath();
            context.translate(-this.width / 2, -this.height / 2);
        });
    }

    /**
     * Gets the height of the oval.
     *
     * @returns {number} Height of the oval.
     */
    getHeight() {
        return this.height;
    }

    /**
     * Gets the width of the oval.
     *
     * @returns {number} Width of the oval.
     */
    getWidth() {
        return this.width;
    }

    /**
     * Sets the width of the oval.
     *
     * @param {number} width - Desired width of the resulting oval.
     */
    setWidth(width) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setWidth(width)`.');
        }
        if (typeof width !== 'number' || !isFinite(width)) {
            throw new TypeError(
                'You must pass a finite number to `setWidth(width)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }

        this.width = Math.max(0, width);
    }

    /**
     * Sets the height of the oval.
     *
     * @param {number} height - Desired height of the resulting oval.
     */
    setHeight(height) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setHeight(height)`.');
        }
        if (typeof height !== 'number' || !isFinite(height)) {
            throw new TypeError(
                'You must pass a finite number to `setHeight(height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }

        this.height = Math.max(0, height);
    }

    /**
     * Checks if the passed point is contained in the oval.
     * Uses the equation for an oval.
     *
     * @alias Oval#containsPoint
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {boolean} Whether the passed point is contained in the circle.
     */
    _containsPoint(x, y) {
        x -= this.width * (0.5 - this.anchor.horizontal);
        y -= this.height * (0.5 - this.anchor.vertical);
        var xRadiusSquared = Math.pow(this.width / 2, 2);
        var yRadiusSquared = Math.pow(this.height / 2, 2);
        var xDifferenceSquared = Math.pow(x - this.x, 2);
        var yDifferenceSquared = Math.pow(y - this.y, 2);

        var result = xDifferenceSquared / xRadiusSquared + yDifferenceSquared / yRadiusSquared;

        return result <= 1;
    }
}

export default Oval;
