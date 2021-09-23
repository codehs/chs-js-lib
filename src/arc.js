/**
 * @namespace Arc
 */

import Thing from './thing';
import { getDistance } from './graphics-utils';

/**
 * Arc class. TODO docs
 */
export default class Arc extends Thing {
    static COUNTER_CLOCKWISE = true;
    static CLOCKWISE = false;
    static DEGREES = 0;
    static RADIANS = 1;

    /**
     * @class Arc
     * @augments Thing
     * @param {number} radius - Desired radius of the arc.
     * @param {number} startAngle - Start angle of the arc.
     * @param {number} endAngle - End angle of the arc.
     * @param {number} angleUnit - Integer representing unit.
     * Degrees ===0, Radians ===1
     */
    constructor(radius, startAngle, endAngle, angleUnit) {
        super();
        if (arguments.length !== 4) {
            throw new Error(
                'You should pass exactly 4 arguments to <span ' +
                    'class="code">new Arc(raduis, startAngle, endAngle, ' +
                    'angleUnit)</span>',
            );
        }
        if (typeof radius !== 'number' || !isFinite(radius)) {
            throw new TypeError(
                'Invalid value for <span class="code">radius' +
                    '</span>. Make sure you are passing finite numbers to <span ' +
                    'class="code">new Arc(raduis, startAngle, endAngle, ' +
                    'angleUnit)</span>',
            );
        }
        if (typeof startAngle !== 'number' || !isFinite(startAngle)) {
            throw new TypeError(
                'Invalid value for <span class="code">startAngle' +
                    '</span>. Make sure you are passing finite numbers to <span ' +
                    'class="code">new Arc(raduis, startAngle, endAngle, ' +
                    'angleUnit)</span>',
            );
        }
        if (typeof endAngle !== 'number' || !isFinite(endAngle)) {
            throw new TypeError(
                'Invalid value for <span class="code">endAngle' +
                    '</span>. Make sure you are passing finite numbers to <span ' +
                    'class="code">new Arc(raduis, startAngle, endAngle, ' +
                    'angleUnit)</span>',
            );
        }
        if (typeof angleUnit !== 'number' || !isFinite(angleUnit)) {
            throw new TypeError(
                'Invalid value for <span class="code">angleUnit' +
                    '</span>. Make sure you are passing finite numbers to <span ' +
                    'class="code">new Arc(raduis, startAngle, endAngle, ' +
                    'angleUnit)</span>',
            );
        }

        Thing.call(this);

        this.radius = radius;
        this.angleUnit = angleUnit == Arc.DEGREES ? Arc.DEGREES : Arc.RADIANS;

        this.counterclockwise = Arc.COUNTER_CLOCKWISE;
        this.type = 'Arc';

        if (this.angleUnit == Arc.DEGREES) {
            startAngle = degreesToRadians(startAngle);
            endAngle = degreesToRadians(endAngle);
        }

        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }

    /**
     * Draws the arc in the canvas.
     *
     * @param {CodeHSGraphics} __graphics__ - Instance of the __graphics__ module.
     */
    draw(__graphics__) {
        var context = __graphics__.getContext();
        // http://stackoverflow.com/questions/17125632/html5-canvas-rotate-object-without-moving-coordinates
        context.save();
        context.beginPath();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.arc(
            0,
            0,
            this.radius,
            prepareAngle(this.startAngle),
            prepareAngle(this.endAngle),
            this.counterclockwise,
        );
        context.lineTo(0, 0);

        if (this.hasBorder) {
            context.lineWidth = this.lineWidth;
            context.strokeStyle = this.stroke.toString();
            context.stroke();
        }

        context.fillStyle = this.color.toString();
        context.fill();
        context.restore();
    }

    /**
     * Sets the starting angle of the arc.
     * Note: All angles are stored in radians, so we must first convert
     * to radians (if the unit is degrees) before storing the new angle.
     * @param {number} angle - The desired start angle of the arc.
     */
    setStartAngle(angle) {
        if (arguments.length !== 1) {
            throw new Error(
                'You should pass exactly 1 argument to ' +
                    '<span class="code">setStartAngle</span>',
            );
        }
        if (typeof angle !== 'number' || !isFinite(angle)) {
            throw new Error(
                'Invalid value passed to <span class="code">' +
                    'setStartAngle</span>. Make sure you are passing a ' +
                    'finite number.',
            );
        }
        if (this.angleUnit == Arc.DEGREES) {
            angle = degreesToRadians(angle);
        }
        this.startAngle = angle;
    }

    /**
     * Sets the ending angle of the arc.
     * Note: All angles are stored in radians, so we must first convert
     * to radians (if the unit is degrees) before storing the new angle.
     * @param {number} angle - The desired end angle of the arc.
     */
    setEndAngle(angle) {
        if (arguments.length !== 1) {
            throw new Error(
                'You should pass exactly 1 argument to ' + '<span class="code">setEndAngle</span>',
            );
        }
        if (typeof angle !== 'number' || !isFinite(angle)) {
            throw new Error(
                'Invalid value passed to <span class="code">' +
                    'setEndAngle</span>. Make sure you are passing a ' +
                    'finite number.',
            );
        }
        if (this.angleUnit == Arc.DEGREES) {
            angle = degreesToRadians(angle);
        }
        this.endAngle = angle;
    }

    /**
     * Gets the starting angle of the arc.
     * @return {number} The start angle of the arc.
     */
    getStartAngle() {
        var angle = this.startAngle;
        if (this.angleUnit == Arc.DEGREES) {
            angle = radiansToDegrees(this.startAngle);
        }

        return Math.round(angle);
    }

    /**
     * Gets the starting angle of the arc.
     * @return {number} The start angle of the arc.
     */
    getEndAngle() {
        var angle = this.endAngle;
        if (this.angleUnit == Arc.DEGREES) {
            angle = radiansToDegrees(this.endAngle);
        }
        return Math.round(angle);
    }

    /**
     * Gets the direction of the arc (CW or CCW).
     * @param {boolean} val - Boolean representing CW or CCW.
     * `True` sets counterclockwise to true.
     */
    setDirection(val) {
        if (arguments.length !== 1) {
            throw new Error(
                'You should pass exactly 1 argument to ' + '<span class="code">setDirection</span>',
            );
        }
        if (typeof val !== 'boolean') {
            throw new Error(
                'Invalid value passed to <span class="code">' +
                    'setDirection</span>. Make sure you are passing a ' +
                    'boolean value. true for counterclockwise, false for clockwise.',
            );
        }
        this.counterclockwise = val;
    }

    /**
     * Checks if a given point is contained within the arc. We always fill the arc
     * so it is technically a segment of the circle
     *
     * @param {number} x - x coordinate of the point being tested.
     * @param {number} y - y coordinate of the point being tested.
     * @return {boolean}
     */
    containsPoint(x, y) {
        // First check whether the point is in the circle
        var dist = getDistance(this.x, this.y, x, y);
        if (dist > this.radius) {
            return false;
        }

        // Get vector/ angle for the point
        var vx = x - this.x;
        var vy = this.y - y;
        var theta = Math.atan(vy / vx);

        // Adjust the arctan based on the quadran the point is in using the
        // position of the arc as the origin
        // Quadrant II and III
        if (vx < 0) {
            theta += Math.PI;
            // Quadrant IV
        } else if (vy < 0) {
            theta += 2 * Math.PI;
        }

        // Check whether angle is between start and end, take into account fill
        // direction
        var betweenCCW = theta >= this.startAngle && theta <= this.endAngle;
        if (this.counterclockwise) {
            return betweenCCW;
        } else {
            return !betweenCCW;
        }
    }
}

/**
 * Prepares an angle to be drawn.
 *
 * @memberof Arc
 * @param {number} angle - The angle to be prepared.
 * @return {number} The prepared angle.
 */
export const prepareAngle = function (angle) {
    // First, convert to degrees (may lose some accuracy)
    angle = radiansToDegrees(angle);
    angle = Math.round(angle);

    // The canvas arc angles go clockwise, but we want them
    // to go counterclockwise (like the unit circle). Here,
    // we adjust the angle for that.
    angle = (360 - angle) % 360;
    angle = degreesToRadians(angle);

    return angle;
};

/**
 * Helper to convert degrees to radians.
 *
 * @memberof Arc
 * @param {number} angleInDegrees - The angle represented as degrees.
 * @return {number} The angle represented as radians.
 */
export const degreesToRadians = function (angleInDegrees) {
    return (angleInDegrees / 180) * Math.PI;
};

/**
 * Helper to convert radians to degrees.
 *
 * @memberof Arc
 * @param {number} angleInRadians - The angle represented as radians.
 * @return {number} The angle represented as degrees.
 */
export const radiansToDegrees = function (angleInRadians) {
    return (angleInRadians / Math.PI) * 180;
};
