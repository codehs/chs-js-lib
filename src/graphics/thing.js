/**
 * A generic class that other elements inherit from.
 * @class Thing
 */
class Thing {
    static DEGREES = 0;
    static RADIANS = 1;
    static thingID = 0;

    type = 'Thing';
    anchor = { horizontal: 0, vertical: 0 };

    /**
     * Constructs a new Thing.
     */
    constructor() {
        /**
         * Unique identifier for a Thing.
         * @type {number}
         * @private
         */
        this._id = Thing.thingID++;
        this.alive = true;
        this._x = 0;
        this._y = 0;
        /**@private**/
        this._height;
        /**@private**/
        this._width;
        this.color = '#000000';
        this.stroke = '#000000';
        this.lineWidth = 1;
        this.filled = true;
        this.hasBorder = false;
        this.focused = false;
        /**@private**/
        this._rotation = 0;
        /**
         * Used to record the layer of the element for sorting when drawing.
         * @type {number}
         * @private
         */
        this._layer = 1;
        /**
         * Used to record when the bounds of this element were last calculated.
         * Groups containing elements need to recalculate their own bounds whenever
         * an element's bounds change.
         * @type {number}
         * @private
         */
        this._lastCalculatedBoundsID = 0;
        /**
         * Used to record when this element's sort value was changed, so the GraphicsManager
         * can perform a resort.
         * @type {boolean}
         * @private
         */
        this._sortInvalidated = true;
        /**
         * Used to record when this element's bounds are invalidated,
         * so that when needed, they can be recalculated.
         * @type {boolean}
         * @private
         */
        this._boundsInvalidated = true;
        /**
         * Elements whose bounds should be invalidated when this element's bounds are invalidated.
         * @type {Thing[]}
         * @private
         */
        this._invalidationDependants = [];
        this.bounds = null;
    }

    /**
     * Sets the layer of the Thing and marks the sortInvalidated flag
     * so any Graphics instances drawing it know to re-sort.
     */
    set layer(newLayer) {
        this._sortInvalidated = true;
        this._layer = newLayer;
    }

    get layer() {
        return this._layer;
    }

    set width(width) {
        this._width = width;
        this._invalidateBounds();
    }

    get width() {
        return this._width;
    }

    set height(height) {
        this._height = height;
        this._invalidateBounds();
    }

    get height() {
        return this._height;
    }

    set rotation(rotation) {
        this._rotation = rotation;
        this._invalidateBounds();
    }

    get rotation() {
        return this._rotation;
    }

    /**
     * Gets the x position of the Thing.
     *
     * @return {number} The x position of the Thing.
     */
    getX() {
        return this.x;
    }

    /**
     * Gets the y position of the Thing.
     *
     * @return {number} The y position of the Thing.
     */
    getY() {
        return this.y;
    }

    set x(x) {
        this._x = x;
        this._invalidateBounds();
    }

    get x() {
        return this._x;
    }

    set y(y) {
        this._y = y;
        this._invalidateBounds();
    }

    get y() {
        return this._y;
    }

    /**
     * Set the .type of the Thing
     * @param {string} type new type
     */
    setType(type) {
        this.type = type;
    }

    /**
     * Get the .type of the Thing
     * @returns {string}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets a Thing object to filled.
     * Throws an error if an argument is not passed.
     *
     * @param {bool} filled - A boolean of whether or not Thing is filled.
     */
    setFilled(filled) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setFilled`.');
        }
        if (typeof filled !== 'boolean') {
            throw new Error(
                'Invalid value passed to `setFilled`. Make sure you are passing a boolean value.'
            );
        }
        this.filled = filled;
    }
    /**
     * Returns if a Thing is filled.
     *
     * @return {boolean} True if the Thing is filled.
     */
    isFilled() {
        return this.filled;
    }

    /**
     * Sets a Thing object to filled.
     * Throws an error if an argument is not passed.
     *
     * @param {bool} hasBorder - A boolean of whether or not Thing has a border.
     */
    setBorder(hasBorder) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setBorder(hasBorder)`.');
        }
        if (typeof hasBorder !== 'boolean') {
            throw new Error(
                'Invalid value passed to `setBorder`. Make sure you are passing a boolean value.'
            );
        }
        this.hasBorder = hasBorder;
    }

    /**
     * Returns if a Thing has a border.
     *
     * @return {boolean} True if the Thing has a border.
     */
    hasBorder() {
        return this.hasBorder;
    }

    /**
     * Set the opacity of the Thing.
     *
     * @param {number} opacity
     */
    setOpacity(opacity) {
        this.opacity = opacity;
    }

    /**
     * Sets the position of a Thing.
     * Throws an error if there are fewer than 2 params or if
     * they are not numbers.
     *
     * @param {number} x - The destination x coordinate of this Thing.
     * @param {number} y - The destination y coordinate of this Thing.
     */
    setPosition(x, y) {
        if (arguments.length !== 2) {
            throw new Error('You should pass exactly 2 arguments to `setPosition(x, y)`.');
        }
        if (typeof x !== 'number' || !isFinite(x)) {
            throw new TypeError(
                'Invalid value for x-coordinate. Make sure you are passing finite numbers to `setPosition(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        if (typeof y !== 'number' || !isFinite(y)) {
            throw new TypeError(
                'Invalid value for y-coordinate. Make sure you are passing finite numbers to `setPosition(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }
        this.x = x;
        this.y = y;
    }

    /**
     * Sets the rotation of a Thing in degrees.
     * Throws an error if there are fewer than 1 params or if they
     * are not numbers.
     *
     * @param {number} degrees - The degrees to rotate degrees.
     * @param {number} angleUnit - Whether it is degrees or radians. Defaults to
     *                             degrees.
     */
    setRotation(degrees, angleUnit) {
        if (arguments.length < 1 || arguments.length > 2) {
            throw new Error(
                'You should pass 1 or 2 arguments to `setRotation(degrees, angleUnit)`.'
            );
        }
        if (typeof degrees !== 'number' || !isFinite(degrees)) {
            throw new TypeError(
                'Invalid value for degrees. Make sure you are passing finite numbers to `setRotation(degrees, angleUnit)`. Did you perform a calculation on a variable that is not a number?'
            );
        }
        if (!angleUnit) {
            angleUnit = Thing.DEGREES;
        }
        if (typeof angleUnit !== 'number' || !isFinite(angleUnit)) {
            throw new TypeError(
                'Invalid value for `angleUnit`. Make sure you are passing finite numbers to `setRotation(degrees, angleUnit)`.'
            );
        }
        if (angleUnit === Thing.DEGREES) {
            this._rotation = (degrees * Math.PI) / 180;
        } else {
            this._rotation = degrees;
        }
    }

    /**
     * Rotates a Thing an additional amount of degrees.
     *
     * @param {number} degrees - The degrees to rotate degrees.
     * @param {number} angleUnit - Whether it is degrees or radians. Defaults to
     *                             degrees.
     */
    rotate(degrees, angleUnit) {
        if (arguments.length < 1 || arguments.length > 2) {
            throw new Error('You should pass exactly 1 argument to `rotate(degrees, angleUnit)`.');
        }
        if (typeof degrees !== 'number' || !isFinite(degrees)) {
            throw new TypeError(
                'Invalid value for degrees. Make sure you are passing finite numbers to `rotate(degrees, angleUnit)`. Did you perform a calculation on a variable that is not a number?'
            );
        }
        if (!angleUnit) {
            angleUnit = Thing.DEGREES;
        }
        if (typeof angleUnit !== 'number' || !isFinite(angleUnit)) {
            throw new TypeError(
                'Invalid value for `angleUnit`. Make sure you are passing finite numbers to `rotate(degrees, angleUnit)`.'
            );
        }
        if (angleUnit == Thing.DEGREES) {
            this.rotation += (degrees * Math.PI) / 180;
        } else {
            this.rotation += degrees;
        }
        this._invalidateBounds();
    }

    /**
     * Sets the color of a Thing.
     * Throws an error if there are fewer than 1 params or if
     * the param is undefined.
     *
     * @param {Color} color - The resulting color of Thing.
     */
    setColor(color) {
        if (arguments.length !== 1) {
            throw new Error(
                'You should pass exactly 1 argument to <span ' + 'class="code">setColor`'
            );
        }
        if (color === undefined) {
            throw new TypeError('Invalid color');
        }
        this.color = color;
    }

    /**
     * Gets the color of a Thing.
     *
     * @return {Color} The destination y coordinate of this Thing.
     */
    getColor() {
        return this.color;
    }

    /**
     * Sets the border color of a Thing.
     * Throws an error if there are fewer than 1 params or if
     * the param is undefined.
     *
     * @param {Color} color - The resulting color of the Thing's border.
     */
    setBorderColor(color) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setBorderColor(color)`.');
        }
        if (color === undefined) {
            throw new TypeError('Invalid color.');
        }
        this.stroke = color;
        this.hasBorder = true;
    }

    /**
     * Gets the border color of a Thing.
     *
     * @return {Color} The color of the Thing's border.
     */
    getBorderColor() {
        return this.stroke;
    }

    /**
     * Sets the width of a Thing's border.
     * Throws an error if there is not 1 argument.
     *
     * @param {number} width - The resulting width of the Thing's border.
     */
    setBorderWidth(width) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setBorderWidth(width)`.');
        }
        if (typeof width !== 'number' || !isFinite(width)) {
            throw new Error(
                'Invalid value for border width. Make sure you are passing a finite number to `setBorderWidth(width)`.'
            );
        }
        this.lineWidth = width;
        this.hasBorder = true;
    }

    /**
     * Gets the width of the Thing's border.
     *
     * @return {number} The width of the Thing's border.
     */
    getBorderWidth() {
        return this.lineWidth;
    }

    /**
     * Changes the possition of a thing by a specified x and y amount.
     *
     * @param {number} dx - The resulting change in the Thing's x position.
     * @param {number} dy - The resulting change in the Thing's y position.
     */
    move(dx, dy) {
        if (arguments.length !== 2) {
            throw new Error('You should pass exactly 2 arguments to `move(dx, dy)`.');
        }
        if (typeof dx !== 'number' || !isFinite(dx)) {
            throw new TypeError(
                'Invalid number passed for `dx`. Make sure you are passing finite numbers to `move(dx, dy)`.'
            );
        }
        if (typeof dy !== 'number' || !isFinite(dy)) {
            throw new TypeError(
                'Invalid number passed for `dy`. Make sure you are passing finite numbers to `move(dx, dy)`.'
            );
        }
        this.x += dx;
        this.y += dy;
    }

    /**
     * This function is invoked by subclassed, and exists to add
     * common, shared functionality all classes share.
     * @param {CanvasRenderingContext2D} context
     * @param {function} subclassDraw
     */
    draw(context, subclassDraw) {
        context.save();
        if (this.hasBorder) {
            context.strokeStyle = this.stroke.toString();
            context.lineWidth = this.lineWidth;
        }
        if (this.focused) {
            context.shadowColor = '#0066ff';
            context.shadowBlur = 20;
        }
        if (this.filled) {
            context.fillStyle = this.color.toString();
        }
        context.globalAlpha = this.opacity;

        const anchorX = this.width * this.anchor.horizontal;
        const anchorY = this.height * this.anchor.vertical;
        const drawX = this.x - anchorX;
        const drawY = this.y - anchorY;

        // translate to the location of the shape
        context.translate(drawX, drawY);

        if (this.rotation) {
            // translate to the shape's center to perform rotation around its center,
            // then translate back
            context.translate(this.width / 2, this.height / 2);
            context.rotate(this.rotation);
            context.translate(-this.width / 2, -this.height / 2);
        }

        subclassDraw?.();

        if (this.filled) {
            context.fill();
        }

        if (this.hasBorder) {
            context.stroke();
        }

        if (this.debug) {
            // draw the origin when debugging
            context.beginPath();
            context.arc(anchorX, anchorY, 3, 0, 2 * Math.PI);
            context.closePath();
            context.fillStyle = 'red';
            context.strokeStyle = 'red';
            context.fill();
            const bounds = this.getBounds();
            context.strokeRect(0, 0, bounds.right - bounds.left, bounds.bottom - bounds.top);
        }

        context.restore();
    }

    /**
     * Focuses the element for use with screen readers.
     */
    focus() {
        this.focused = true;
    }

    /**
     * Unfocuses the element for use with screen readers.
     */
    unfocus() {
        this.focused = false;
    }

    /**
     * Describes the element for use with screen readers.
     */
    describe() {
        return `A ${this.type} at ${this.x}, ${this.y}. Colored: ${this.color}.`;
    }

    /**
     * Check if a given point is within the Thing.
     * This function only works in subclasses of Thing.
     *
     * @param {number} x - The x coordinate of the point being checked.
     * @param {number} y - The y coordinate of the point being checked.
     * @return {boolean} Whether the point x, y is within the Thing.
     */
    containsPoint(x, y) {
        if (this.rotation) {
            const anchorX = this.width * this.anchor.horizontal;
            const anchorY = this.height * this.anchor.vertical;
            const rotX = this.x - anchorX + this.width / 2;
            const rotY = this.y - anchorY + this.height / 2;
            [x, y] = rotatePointAboutPosition([x, y], [rotX, rotY], -this.rotation);
        }
        return this._containsPoint(x, y);
    }

    /**
     * Sets the Anchor for the object.
     * @param {{vertical: number, horizontal: number}} anchor
     */
    setAnchor(anchor) {
        this.anchor = anchor;
        this._invalidateBounds();
    }

    /**
     * Gets the jelement's anchor.
     * @returns {{vertical: number, horizontal: number}}
     */
    getAnchor() {
        return this.anchor;
    }

    /**
     * Get the elements bounds.
     * @returns {{top: number, bottom: number, left: number, right: number}}
     */
    getBounds() {
        if (this._boundsInvalidated) {
            this._updateBounds();
        }
        return this.bounds;
    }

    /**
     * Mark this element's bounds as invalidated.
     */
    _invalidateBounds() {
        this._boundsInvalidated = true;
        this._invalidationDependants.forEach(element => {
            element._invalidateBounds();
        });
    }

    /**
     * Invalidate the bounds of this Thing, so that any Groups containing it can update.
     * @private
     */
    _updateBounds() {
        let left = Math.ceil(this.x - this.anchor.horizontal * this.width);
        let right = Math.ceil(this.x + (1 - this.anchor.horizontal) * this.width);
        let top = Math.ceil(this.y - this.anchor.vertical * this.height);
        let bottom = Math.ceil(this.y + (1 - this.anchor.vertical) * this.height);
        //if (this.rotation) {
        //    const rotX = (right - left) / 2 + left;
        //    const rotY = (bottom - top) / 2 + top;
        //    let topLeft = rotatePointAboutPosition([left, top], [rotX, rotY], this.rotation);
        //    let topRight = rotatePointAboutPosition([right, top], [rotX, rotY], this.rotation);
        //    let bottomLeft = rotatePointAboutPosition([left, bottom], [rotX, rotY], this.rotation);
        //    let bottomRight = rotatePointAboutPosition(
        //        [right, bottom],
        //        [rotX, rotY],
        //        this.rotation
        //    );
        //    const points = [topLeft, topRight, bottomLeft, bottomRight];
        //    const xCoordinates = points.map(point => point[0]);
        //    const yCoordinates = points.map(point => point[1]);
        //    left = Math.min(...xCoordinates);
        //    right = Math.max(...xCoordinates);
        //    top = Math.min(...yCoordinates);
        //    bottom = Math.max(...yCoordinates);
        //}
        this.bounds = {
            left,
            right,
            top,
            bottom,
        };
        this._lastCalculatedBoundsID++;
        this._boundsInvalidated = false;
    }
}

/**
 *
 * @param {number[]} point - [x, y] of the point to rotate
 * @param {number[]} origin - [x, y] point of rotation
 * @param {number} angle - angle in radians
 * @returns {number[]} - [x, y] rotated point
 */
export const rotatePointAboutPosition = ([x, y], [rotX, rotY], angle) => {
    return [
        (x - rotX) * Math.cos(angle) - (y - rotY) * Math.sin(angle) + rotX,
        (x - rotX) * Math.sin(angle) + (y - rotY) * Math.cos(angle) + rotY,
    ];
};

export default Thing;
