'use strict';

var Thing = require('./thing.js');

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
function Oval(width, height) {
    if (arguments.length !== 2) {
        throw new Error('You should pass exactly 2 arguments to <span ' +
            'class="code">new Oval(width, height)</span>');
    }
    if (typeof width !== 'number' || !isFinite(width)) {
        throw new TypeError('Invalid value for <span class="code">width' +
            '</span>. Make sure you are passing finite numbers to <span ' +
            'class="code">new Oval(width, height)</span>. Did you ' +
            'forget the parentheses in <span class="code">getWidth()</span> ' +
            'or <span class="code">getHeight()</span>? Or did you perform a ' +
            'calculation on a variable that is not a number?');
    }
    if (typeof height !== 'number' || !isFinite(height)) {
        throw new TypeError('Invalid value for <span class="code">height' +
            '</span>. Make sure you are passing finite numbers to <span ' +
            'class="code">new Oval(width, height)</span>. Did you ' +
            'forget the parentheses in <span class="code">getWidth()</span> ' +
            'or <span class="code">getHeight()</span>? Or did you perform a ' +
            'calculation on a variable that is not a number?');
    }

    Thing.call(this);
    this.width = Math.max(0, width);
    this.height = Math.max(0, height);
    this.type = 'Oval';
}

Oval.prototype = new Thing();
Oval.prototype.constructor = Oval;

/**
 * Draws an ellipse centered at this.x and this.y.
 * adapted from http://stackoverflow.com/questions/2172798/
 * how-to-draw-an-oval-in-html5-canvas
 *
 * @param {CodeHSGraphics} __graphics__ - Instance of the __graphics__ module.
 */
Oval.prototype.draw = function(__graphics__) {
    var context = __graphics__.getContext();
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
    var xe = x + w;           // x-end
    var ye = y + h;           // y-end
    var xm = x + w / 2;       // x-middle
    var ym = y + h / 2;       // y-middle

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
};

/**
 * Gets the height of the oval.
 *
 * @returns {number} Height of the oval.
 */
Oval.prototype.getHeight = function() {
    return this.height;
};

/**
 * Gets the width of the oval.
 *
 * @returns {number} Width of the oval.
 */
Oval.prototype.getWidth = function() {
    return this.width;
};

/**
 * Sets the width of the oval.
 *
 * @param {number} width - Desired width of the resulting oval.
 */
Oval.prototype.setWidth = function(width) {
    if (arguments.length !== 1) {
        throw new Error('You should pass exactly 1 argument to <span ' +
            'class="code">setWidth(width)</span>');
    }
    if (typeof width !== 'number' || !isFinite(width)) {
        throw new TypeError('You must pass a finite number to <span class=' +
            '"code">setWidth(width)</span>. Did you forget the ' +
            'parentheses in <span class="code">getWidth()</span> or <span ' +
            'class="code">getHeight()</span>? Or did you perform a ' +
            'calculation on a variable that is not a number?');
    }

    this.width = Math.max(0, width);
};

/**
 * Sets the height of the oval.
 *
 * @param {number} height - Desired height of the resulting oval.
 */
Oval.prototype.setHeight = function(height) {
    if (arguments.length !== 1) {
        throw new Error('You should pass exactly 1 argument to <span ' +
            'class="code">setHeight(height)</span>');
    }
    if (typeof height !== 'number' || !isFinite(height)) {
        throw new TypeError('You must pass a finite number to <span class=' +
            '"code">setHeight(height)</span>. Did you forget the ' +
            'parentheses in <span class="code">getWidth()</span> or <span ' +
            'class="code">getHeight()</span>? Or did you perform a ' +
            'calculation on a variable that is not a number?');
    }

    this.height = Math.max(0, height);
};

/**
 * Checks if the passed point is contained in the oval.
 * Uses the equation for an oval.
 *
 * @param {number} x - The x coordinate of the point being tested.
 * @param {number} y - The y coordinate of the point being tested.
 * @returns {boolean} Whether the passed point is contained in the circle.
 */
Oval.prototype.containsPoint = function(x, y) {
    var xRadiusSquared = Math.pow(this.width / 2, 2);
    var yRadiusSquared = Math.pow(this.height / 2, 2);
    var xDifferenceSquared = Math.pow(x - this.x, 2);
    var yDifferenceSquared = Math.pow(y - this.y, 2);

    var result = xDifferenceSquared / xRadiusSquared +
        yDifferenceSquared / yRadiusSquared;

    return result <= 1;
};

module.exports = Oval;
