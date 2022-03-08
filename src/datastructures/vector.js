import { degreesToRadians, radiansToDegrees } from '../graphics/arc.js';

/**
 * The Vector class is ued to model a 2 or 3 dimensional vector.
 * @class
 */
class Vector {
    /**
     * @constructor
     * @param {number} [x] - x component of the vector
     * @param {number} [y] - y component of the vector
     * @param {number} [z] z component of the vector
     */
    constructor(x = 0, y = 0, z = 0) {
        /**
         * The x component of the vector
         * @type {number}
         */
        this.x = x;
        /**
         * The y component of the vector
         * @type {number}
         */
        this.y = y;
        /**
         * The z component of the vector
         * @type {number}
         */
        this.z = z;
    }

    /**
     * Add a vector to this one, modifying this one.
     * @param {number|Vector|number[]} x   the x component of the vector to be added.
     *  Alternatively, a Vector or list of numbers to add.
     * @param {number} [y] the y component of the vector to be added
     * @param {number} [z] the z component of the vector to be added
     * @returns {Vector} this vector, modified
     */
    add(x, y, z) {
        if (x instanceof Vector) {
            const vector = x;
            this.x += vector.x || 0;
            this.y += vector.y || 0;
            this.z += vector.z || 0;
        } else if (x instanceof Array) {
            const array = x;
            this.x += array[0] || 0;
            this.y += array[1] || 0;
            this.z += array[2] || 0;
        } else {
            this.x += x || 0;
            this.y += y || 0;
            this.z += z || 0;
        }
        return this;
    }

    /**
     * Subtract a vector from this one, modifying this one.
     * @param {number|Vector|number[]} x   the x component of the vector to be subtracted
     *  Alternatively, a Vector or list of numbers to substract.
     * @param {number} [y] the y component of the vector to be subtracted
     * @param {number} [z] the z component of the vector to be subtracted
     *
     * @returns {Vector} this vector, modified
     */
    subtract(x, y, z) {
        if (x instanceof Vector) {
            const vector = x;
            this.x -= vector.x || 0;
            this.y -= vector.y || 0;
            this.z -= vector.z || 0;
        } else if (x instanceof Array) {
            const array = x;
            this.x -= array[0] || 0;
            this.y -= array[1] || 0;
            this.z -= array[2] || 0;
        } else {
            this.x -= x || 0;
            this.y -= y || 0;
            this.z -= z || 0;
        }
        return this;
    }

    /**
     * Multiply this vector by a vector, scalar, or array, modifying it in place and returning it.
     * @param {number|Vector|number[]} x   scalar to multiply the x component by
     *  Alternatively, a Vector or list of numbers to multiply
     * @param {number} [y] scalar to multiply the y component by
     * @param {number} [z] scalar to multiply the z component by
     *
     k
     * @returns {Vector} this vector, modified
     */
    multiply(x, y, z) {
        if (x instanceof Vector) {
            const vector = x;
            this.x *= vector.x;
            this.y *= vector.y;
            this.z *= vector.z;
        } else if (x instanceof Array) {
            const array = x;
            if (x.length === 1) {
                this.x *= array[0];
                this.y *= array[0];
                this.z *= array[0];
            } else if (x.length === 2) {
                this.x *= array[0];
                this.y *= array[1];
            } else if (x.length === 3) {
                this.x *= array[0];
                this.y *= array[1];
                this.z *= array[2];
            }
        } else if ([...arguments].every(arg => typeof arg === 'number')) {
            if (arguments.length === 1) {
                this.x *= x;
                this.y *= x;
                this.z *= x;
            }
            if (arguments.length === 2) {
                this.x *= x;
                this.y *= y;
            }
            if (arguments.length === 3) {
                this.x *= x;
                this.y *= y;
                this.z *= z;
            }
        } else {
            throw new TypeError('Invalid arguments for multiply.');
        }
        return this;
    }

    /**
     * Make a copy of this Vector.
     * @returns {Vector}
     */
    clone() {
        return new Vector(this.x, this.y, this.z);
    }

    /**
     * Make a copy of this Vector.
     * @returns {Vector}
     */
    copy() {
        return this.clone(arguments);
    }

    /**
     * Normalizes a vector to length 1, making it a unit vector.
     * This is done by dividing each component of the vector by its magnitude.
     * @returns {Vector} this vector
     */
    normalize() {
        const magnitude = this.magnitude();
        if (magnitude !== 0) {
            this.multiply(1 / magnitude);
        }
        return this;
    }

    /**
     * Returns the magnitude of this vector.
     */
    magnitude() {
        const x = this.x;
        const y = this.y;
        const z = this.z;
        return Math.sqrt(x * x + y * y + z * z);
    }

    /**
     * Calculate the angle of rotation for this vector.
     * This only works for 2d vectors.
     */
    heading() {
        return radiansToDegrees(Math.atan2(this.y, this.x));
    }

    /**
     * Set the heading of the vector.
     * @param {number} heading - Heading in degrees
     */
    setHeading(heading) {
        const magnitude = this.magnitude();
        const radians = degreesToRadians(heading);
        this.x = magnitude * Math.cos(radians);
        this.y = magnitude * Math.sin(radians);
        return this;
    }

    /**
     * Rotates the vector by angle degrees.
     * @param {number} angle - Rotation in degrees
     * @returns {Vector} this vector
     */
    rotate(angle) {
        const heading = this.heading() + angle;
        const magnitude = this.magnitude();
        const headingRadians = degreesToRadians(heading);
        this.x = magnitude * Math.cos(headingRadians);
        this.y = magnitude * Math.sin(headingRadians);
        return this;
    }

    /**
     * Calculate the dot product of two vectors.
     * @returns {number} dot product
     */
    dot(x, y, z = 1) {
        if (x instanceof Vector) {
            const vector = x;
            return this.dot(vector.x, vector.y, vector.z);
        }
        return this.x * x + this.y * y + this.z * z;
    }

    /**
     * Calculates a new Vector from the cross product of this vector and v.
     * @param {Vector} v
     * @returns {Vector}
     */
    cross(v) {
        const x = this.y * v.z - this.z * v.y;
        const y = this.z * v.x - this.x * v.z;
        const z = this.x * v.y - this.y * v.x;
        return new Vector(x, y, z);
    }

    /**
     * Find the angle between two vectors.
     * @param {Vector}
     * @returns {number} angle in degrees
     */
    angleBetween(vector) {
        const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
        let angle = Math.acos(this.dot(vector) / (this.magnitude() * vector.magnitude()));
        angle = angle * Math.sign(this.cross(vector).z || 1);
        return radiansToDegrees(angle);
    }

    /**
     * Returns the points of the vector as an array.
     * @returns {Array.<number>} values as an array
     */
    array() {
        return [this.x, this.y, this.z];
    }
}

export default Vector;
