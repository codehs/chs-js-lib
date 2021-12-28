class Vector {
    /**
     * @constructor
     * @param {Number} [x] - x component of the vector
     * @param {Number} [y] - y component of the vector
     * @param {Number} [z] z component of the vector
     */
    constructor(x = 0, y = 0, z = 0) {
        /**
         * The x component of the vector
         * @type {Number}
         */
        this.x = x;
        /**
         * The y component of the vector
         * @type {Number}
         */
        this.y = y;
        /**
         * The z component of the vector
         * @type {Number}
         */
        this.z = z;
    }

    /**
     * Add a vector to this one, modifying this one.
     * @method add
     * @param {Number} x   the x component of the vector to be added
     * @param {Number} [y] the y component of the vector to be added
     * @param {Number} [z] the z component of the vector to be added
     *
     * @method add
     * @param {Vector|Number[]} vector vector or array to add
     * @returns {Vector} this vector, modified
     */
    add(x, y, z) {
        if (x instanceof Vector) {
            const vector = x;
            this.x += vector.x;
            this.y += vector.y;
            this.z += vector.z;
        } else if (x instanceof Array) {
            const array = x;
            this.x += array[0];
            this.y += array[1];
            this.z += array[2];
        } else {
            this.x += x;
            this.y += y;
            this.z += z;
        }
        return this;
    }

    /**
     * Multiply this vector by a vector, scalar, or array, modifying it in place and returning it.
     * @method multiply
     * @param {Number} x   scalar to multiply the x component by
     * @param {Number} [y] scalar to multiply the y component by
     * @param {Number} [z] scalar to multiply the z component by
     *
     * @method add
     * @param {Vector|Number[]} vector vector or array to multiply
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
        return this.multiply(1 / magnitude);
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
}

export default Vector;
