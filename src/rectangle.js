'use strict';

var Thing = require('./thing.js');

/**
 * @class Rectangle
 * @augments Thing
 * @param {number} width - Desired width of resulting rectangle.
 * @param {number} height - Desired height of resulting rectangle.
 */
function Rectangle(width, height) {
    if (arguments.length !== 2) {
        throw new Error(
            'You should pass exactly 2 arguments to <span ' +
                'class="code">new Rectangle(width, height)</span>'
        );
    }
    if (typeof width !== 'number' || !isFinite(width)) {
        throw new TypeError(
            'Invalid value for <span class="code">width' +
                '</span>. Make sure you are passing finite numbers to <span ' +
                'class="code">new Rectangle(width, height)</span>. Did you ' +
                'forget the parentheses in <span class="code">getWidth()</span> ' +
                'or <span class="code">getHeight()</span>? Or did you perform a ' +
                'calculation on a variable that is not a number?'
        );
    }
    if (typeof height !== 'number' || !isFinite(height)) {
        throw new TypeError(
            'Invalid value for <span class="code">height' +
                '</span>. Make sure you are passing finite numbers to <span ' +
                'class="code">new Rectangle(width, height)</span>. Did you ' +
                'forget the parentheses in <span class="code">getWidth()</span> ' +
                'or <span class="code">getHeight()</span>? Or did you perform a ' +
                'calculation on a variable that is not a number?'
        );
    }
    Thing.call(this);
    this.width = Math.max(0, width);
    this.height = Math.max(0, height);
    this.type = 'Rectangle';
}

Rectangle.prototype = new Thing();
Rectangle.prototype.constructor = Rectangle;

/**
 * Draws the rectangle in the canvas.
 *
 * @param {CodeHSGraphics} __graphics__ - Instance of the __graphics__ module.
 */
Rectangle.prototype.draw = function(__graphics__) {
    var context = __graphics__.getContext();

    // http://stackoverflow.com/questions/17125632/html5-canvas-rotate-object-without-moving-coordinates
    context.save();
    context.fillStyle = this.color.toString();

    if (this.hasBorder) {
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.stroke.toString();
    }

    context.beginPath();
    context.translate(this.x + this.width / 2, this.y + this.height / 2);
    context.rotate(this.rotation);
    // Note: after transforming [0,0] is visually [x,y]
    // so the rect needs to be offset accordingly when drawn
    context.rect(-this.width / 2, -this.height / 2, this.width, this.height);
    context.closePath();

    if (this.hasBorder) {
        context.stroke();
    }

    context.fill();
    context.restore();
};

/**
 * Sets the size of the Rectangle.
 *
 * @param {number} width - The desired width of the resulting Rectangle.
 * @param {number} height - The desired height of the resulting Rectangle.
 */
Rectangle.prototype.setSize = function(width, height) {
    if (arguments.length !== 2) {
        throw new Error(
            'You should pass exactly 2 arguments to <span ' +
                'class="code">setSize(width, height)</span>'
        );
    }
    if (typeof width !== 'number' || !isFinite(width)) {
        throw new TypeError(
            'Invalid value for <span class="code">width' +
                '</span>. Make sure you are passing finite numbers to <span ' +
                'class="code">setSize(width, height)</span>. Did you ' +
                'forget the parentheses in <span class="code">getWidth()</span> ' +
                'or <span class="code">getHeight()</span>? Or did you perform a ' +
                'calculation on a variable that is not a number?'
        );
    }
    if (typeof height !== 'number' || !isFinite(height)) {
        throw new TypeError(
            'Invalid value for <span class="code">height' +
                '</span>. Make sure you are passing finite numbers to <span ' +
                'class="code">setSize(width, height)</span>. Did you ' +
                'forget the parentheses in <span class="code">getWidth()</span> ' +
                'or <span class="code">getHeight()</span>? Or did you perform a ' +
                'calculation on a variable that is not a number?'
        );
    }
    this.width = Math.max(0, width);
    this.height = Math.max(0, height);
};

/**
 * Sets the width of the Rectangle.
 *
 * @param {number} width - The desired width of the resulting Rectangle.
 */
Rectangle.prototype.setWidth = function(width) {
    if (arguments.length !== 1) {
        throw new Error(
            'You should pass exactly 1 argument to <span class="code">setWidth(width)</span>'
        );
    }
    if (typeof width !== 'number' || !isFinite(width)) {
        throw new TypeError(
            'Invalid value for <span class="code">width' +
                '</span>. Make sure you are passing finite numbers to <span ' +
                'class="code">setWidth(width)</span>. Did you ' +
                'forget the parentheses in <span class="code">getWidth()</span> ' +
                'or <span class="code">getHeight()</span>? Or did you perform a ' +
                'calculation on a variable that is not a number?'
        );
    }
    this.width = Math.max(0, width);
};

/**
 * Sets the height of the Rectangle.
 *
 * @param {number} height - The desired height of the resulting Rectangle.
 */
Rectangle.prototype.setHeight = function(height) {
    if (arguments.length !== 1) {
        throw new Error(
            'You should pass exactly 1 argument to <span class="code">setHeight(height)</span>'
        );
    }
    if (typeof height !== 'number' || !isFinite(height)) {
        throw new TypeError(
            'Invalid value for <span class="code">height' +
                '</span>. Make sure you are passing finite numbers to <span ' +
                'class="code">setHeight(height)</span>. Did you ' +
                'forget the parentheses in <span class="code">getWidth()</span> ' +
                'or <span class="code">getHeight()</span>? Or did you perform a ' +
                'calculation on a variable that is not a number?'
        );
    }
    this.height = Math.max(0, height);
};

/**
 * Checks if the passed point is contained in the rectangle.
 *
 * @param {number} x - The x coordinate of the point being tested.
 * @param {number} y - The y coordinate of the point being tested.
 * @returns {boolean} Whether the passed point is contained in the rectangle.
 */
Rectangle.prototype.containsPoint = function(x, y) {
    return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
};

/**
 * Gets the width of the rectangle.
 *
 * @returns {number} Width of the rectangle.
 */
Rectangle.prototype.getWidth = function() {
    return this.width;
};

/**
 * Gets the height of the rectangle.
 *
 * @returns {number} Height of the rectangle.
 */
Rectangle.prototype.getHeight = function() {
    return this.height;
};

module.exports = Rectangle;
