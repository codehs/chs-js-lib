/** * @namespace Arc
 */

import Thing from './thing.js';
import { getDistance } from './graphics-utils.js';

/** * Arc class. TODO docs
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
                'You should pass exactly 4 arguments to `new Arc(radius, startAngle, endAngle, angleUnit)`'
            );
        }
        if (typeof radius !== 'number' || !isFinite(radius) || isNaN(radius)) {
            throw new TypeError(
                'Invalid value for `radius`. Make sure you are passing finite numbers to `new Arc(radius, startAngle, endAngle, angleUnit)`'
            );
        }
        if (typeof startAngle !== 'number' || !isFinite(startAngle) || isNaN(startAngle)) {
            throw new TypeError(
                'Invalid value for `startAngle`. Make sure you are passing finite numbers to `new Arc(radius, startAngle, endAngle, angleUnit)`'
            );
        }
        if (typeof endAngle !== 'number' || !isFinite(endAngle) || isNaN(endAngle)) {
            throw new TypeError(
                'Invalid value for `endAngle`. Make sure you are passing finite numbers to `new Arc(radius, startAngle, endAngle, angleUnit)`'
            );
        }
        if (
            typeof angleUnit !== 'number' ||
            !isFinite(angleUnit) ||
            isNaN(angleUnit) ||
            angleUnit > 1 ||
            angleUnit < 0
        ) {
            throw new TypeError(
                'Invalid value for `angleUnit`. Make sure you are passing finite numbers to `new Arc(radius, startAngle, endAngle, angleUnit)`'
            );
        }

        this.radius = radius;
        this.angleUnit = angleUnit ?? Arc.RADIANS;

        this.counterclockwise = Arc.COUNTER_CLOCKWISE;

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
     * @param {CodeHSGraphics} graphics - Instance of the CodeHSGraphics module.
     */
    draw(graphics) {
        var context = graphics.getContext();
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
            this.counterclockwise
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
            throw new Error('You should pass exactly 1 argument to `setStartAngle`');
        }
        if (typeof angle !== 'number' || !isFinite(angle)) {
            throw new Error(
                'Invalid value passed to `setStartAngle`. Make sure you are passing a finite number.'
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
            throw new Error('You should pass exactly 1 argument to `setEndAngle`');
        }
        if (typeof angle !== 'number' || !isFinite(angle)) {
            throw new Error(
                'Invalid value passed to `setEndAngle`. Make sure you are passing a finite number.'
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
        if (this.angleUnit == Arc.DEGREES) {
            return Math.round(radiansToDegrees(this.startAngle));
        } else {
            return this.startAngle;
        }
    }

    /**
     * Gets the starting angle of the arc.
     * @return {number} The start angle of the arc.
     */
    getEndAngle() {
        if (this.angleUnit == Arc.DEGREES) {
            return Math.round(radiansToDegrees(this.endAngle));
        } else {
            return this.endAngle;
        }
    }

    /**
     * Gets the direction of the arc (CW or CCW).
     * @param {boolean} val - Boolean representing CW or CCW.
     * `True` sets counterclockwise to true.
     */
    setDirection(val) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setDirection`');
        }
        if (typeof val !== 'boolean') {
            throw new Error(
                'Invalid value passed to `setDirection`. Make sure you are passing a boolean value. `true` for counterclockwise, false for clockwise.'
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
