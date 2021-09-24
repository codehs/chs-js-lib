import Thing from './thing.js';

/**
 * Note: this is not used as a subclass for Circle since drawing ovals
 * is much more complex than drawing circles, and there is no point in
 * complicating the drawing just for some code reuse.
 */

/**
 * @class Oval
 * @augments Thing
 * @param {number} width - Desired width of the Oval
 * @param {number} height - Desired height of the Oval
 */
export default class Oval extends Thing {
    constructor(width, height) {
        super();
        if (arguments.length !== 2) {
            throw new Error('You should pass exactly 2 arguments to `new Oval(width, height)`.');
        }
        if (typeof width !== 'number' || !isFinite(width)) {
            throw new TypeError(
                'Invalid value for `width`. Make sure you are passing finite numbers to `new Oval(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?',
            );
        }
        if (typeof height !== 'number' || !isFinite(height)) {
            throw new TypeError(
                'Invalid value for `height`. Make sure you are passing finite numbers to `new Oval(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?',
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
     * @param {CodeHSGraphics} graphics - Instance of the Graphics module.
     */
    draw(graphics) {
        var context = graphics.getContext();
        // http://stackoverflow.com/questions/17125632/html5-canvas-rotate-object-without-moving-coordinates
        context.save();

        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        var w = this.width;
        var h = this.height;
        var x = -w / 2;
        var y = -h / 2;

        var kappa = 0.5522848;
        var ox = (w / 2) * kappa; // control point offset horizontal
        var oy = (h / 2) * kappa; // control point offset vertical
        var xe = x + w; // x-end
        var ye = y + h; // y-end
        var xm = x + w / 2; // x-middle
        var ym = y + h / 2; // y-middle

        context.beginPath();
        context.moveTo(x, ym);
        context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

        context.fillStyle = this.color.toString();
        context.fill();

        if (this.hasBorder) {
            context.strokeStyle = this.stroke.toString();
            context.lineWidth = this.lineWidth;
            context.stroke();
        }

        context.closePath();
        context.restore();
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
                'You must pass a finite number to `setWidth(width)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?',
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
                'You must pass a finite number to `setHeight(height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?',
            );
        }

        this.height = Math.max(0, height);
    }

    /**
     * Checks if the passed point is contained in the oval.
     * Uses the equation for an oval.
     *
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {boolean} Whether the passed point is contained in the circle.
     */
    containsPoint(x, y) {
        var xRadiusSquared = Math.pow(this.width / 2, 2);
        var yRadiusSquared = Math.pow(this.height / 2, 2);
        var xDifferenceSquared = Math.pow(x - this.x, 2);
        var yDifferenceSquared = Math.pow(y - this.y, 2);

        var result = xDifferenceSquared / xRadiusSquared + yDifferenceSquared / yRadiusSquared;

        return result <= 1;
    }
}
