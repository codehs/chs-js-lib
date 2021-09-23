'use strict';

var Thing = require('./thing.js');

/**
 * @class Polygon
 * @augments Thing
 */
function Polygon() {
    if (arguments.length !== 0) {
        throw new Error(
            'You should pass exactly 0 arguments to <span class="code">new Polygon()</span>'
        );
    }

    Thing.call(this);
    this.points = [];
    this.width = 0; // max x-distance of points in the polygon
    this.height = 0; // max y-distance of points in the polygon
    this.type = 'Polygon';
}

Polygon.prototype = new Thing();
Polygon.prototype.constructor = Polygon;

/**
 * Draws the polygon in the canvas.
 *
 * @param {CodeHSGraphics} __graphics__ - Instance of the __graphics__ module.
 */
Polygon.prototype.draw = function(__graphics__) {
    if (this.points.length === 0) {
        return;
    }

    var context = __graphics__.getContext();
    context.fillStyle = this.color.toString();
    context.beginPath();

    var first = this.points[0];
    context.moveTo(first.x, first.y);
    for (var i = 1; i < this.points.length; i++) {
        var cur = this.points[i];
        context.lineTo(cur.x, cur.y);
    }
    context.closePath();
    context.fill();
};

/**
 * Checks if the passed point is contained in the polygon.
 *
 * @param {number} x - The x coordinate of the point being tested.
 * @param {number} y - The y coordinate of the point being tested.
 * @returns {boolean} Whether the passed point is contained in the polygon.
 */
Polygon.prototype.containsPoint = function(x, y) {
    // https://www.eecs.umich.edu/courses/eecs380/HANDOUTS/PROJ2/InsidePoly.html
    // solution 3 from above
    var edges = [];
    var previousOrientation = -1;
    var x1, x2, y1, y2;
    for (var i = 0; i < this.points.length; i++) {
        x1 = this.points[i].x;
        y1 = this.points[i].y;
        x2 = this.points[(i + 1) % this.points.length].x;
        y2 = this.points[(i + 1) % this.points.length].y;
        var orientation = (y - y1) * (x2 - x1) - (x - x1) * (y2 - y1) <= 0;
        if (previousOrientation < 0) {
            previousOrientation = orientation;
        } else {
            if (previousOrientation !== orientation) {
                return false;
            }
        }
    }
    return true;
};

/**
 * Gets the width of the rectangle.
 *
 * @returns {number} Width of the rectangle.
 */
Polygon.prototype.getWidth = function() {
    return this.width;
};

/**
 * Gets the height of the rectangle.
 *
 * @returns {number} Height of the rectangle.
 */
Polygon.prototype.getHeight = function() {
    return this.height;
};

/**
 * Adds a vertex to the polygon.
 *
 * @param {number} x - The x coordinate of the desired new vertex.
 * @param {number} y - The y coordinate of the desired new vertex.
 */
Polygon.prototype.addPoint = function(x, y) {
    if (arguments.length !== 2) {
        throw new Error(
            'You should pass exactly 2 arguments to <span class="code">addPoint(x, y)</span>'
        );
    }
    if (typeof x !== 'number' || !isFinite(x)) {
        throw new TypeError(
            'Invalid value for x-coordinate. ' +
                'Make sure you are passing finite numbers to ' +
                '<span class="code">addPoint(x, y)</span>.'
        );
    }
    if (typeof y !== 'number' || !isFinite(y)) {
        throw new TypeError(
            'Invalid value for y-coordinate. ' +
                'Make sure you are passing finite numbers to ' +
                '<span class="code">addPoint(x, y)</span>.'
        );
    }

    for (var i = 0; i < this.points.length; i++) {
        if (Math.abs(x - this.points[i].x) > this.width) {
            this.width = Math.abs(x - this.points[i].x);
        }
        if (Math.abs(y - this.points[i].y) > this.height) {
            this.height = Math.abs(y - this.points[i].y);
        }
    }
    this.points.push({x: x, y: y});
};

/**
 * Moves the entire polygon.
 *
 * @param {number} dx - The change in x coordinate of all starting and ending points.
 * @param {number} dy - The change in y coordinate of all starting and ending points.
 */
Polygon.prototype.move = function(dx, dy) {
    if (arguments.length !== 2) {
        throw new Error('You should pass exactly 2 arguments to <span class="code">move</span>');
    }
    if (typeof dx !== 'number' || !isFinite(dx)) {
        throw new TypeError(
            'Invalid number passed for <span class="code">' +
                'dx</span>. Make sure you are passing finite numbers to <span ' +
                'class="code">move(dx, dy)</span>'
        );
    }
    if (typeof dy !== 'number' || !isFinite(dy)) {
        throw new TypeError(
            'Invalid number passed for <span class="code">' +
                'dy</span>. Make sure you are passing finite numbers to <span ' +
                'class="code">move(dx, dy)</span>'
        );
    }

    for (var i = 0; i < this.points.length; i++) {
        this.points[i].x += dx;
        this.points[i].y += dy;
    }
};

module.exports = Polygon;
