/**
 * Generic class. You should never need to construct a thing directly, only extend from
 * Thing as a superclass.
 */
export default class Thing {
    static DEGREES = 0;
    static RADIANS = 1;

    type = 'Thing';
    anchor = { horizontal: 0, vertical: 0 };

    /**
     * Constructs a new Thing.
     */
    constructor() {
        this.alive = true;
        this.x = 0;
        this.y = 0;
        this.color = '#000000';
        this.stroke = '#000000';
        this.lineWidth = 1;
        this.filled = true;
        this.hasBorder = false;
        this.rotation = 0;
        /**
         * Used to record the layer of the element for sorting when drawing.
         * @type {number}
         * @private
         */
        this.__layer = 1;
        /**
         * Used to record when the bounds of this element were last calculated.
         * Groups containing elements need to recalculate their own bounds whenever
         * an element's bounds change.
         * @type {number}
         * @private
         */
        this.__lastCalculatedBoundsID = 0;
        /**
         * Used to record when this element's sort value was changed, so the GraphicsManager
         * can perform a resort.
         * @type {boolean}
         * @private
         */
        this.__sortInvalidated = true;
        /**
         * Whether the AABB should show.
         * @type {boolean}
         * @private
         */
        this.__debugAABB = false;
    }

    /**
     * Sets the layer of the Thing and marks the sortInvalidated flag
     * so any Graphics instances drawing it know to re-sort.
     */
    set layer(newLayer) {
        this.__sortInvalidated = true;
        this.__layer = newLayer;
    }

    get layer() {
        return this.__layer;
    }

    set width(width) {
        this._width = width;
        this.__updateBounds();
    }

    get width() {
        return this._width;
    }

    set height(height) {
        this._height = height;
        this.__updateBounds();
    }

    get height() {
        return this._height;
    }

    set x(x) {
        this._x = x;
        this.__updateBounds();
    }

    get x() {
        return this._x;
    }

    set y(y) {
        this._y = y;
        this.__updateBounds();
    }

    get y() {
        return this._y;
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
        if (angleUnit == Thing.DEGREES) {
            this.rotation = (degrees * Math.PI) / 180;
        } else {
            this.rotation = degrees;
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
        context.fillStyle = this.color.toString();
        context.globalAlpha = this.opacity;

        // translate to the location of the shape
        context.translate(this.x, this.y);

        // translate to the shape's center to perform rotation around its center
        context.translate(this.width / 2, this.height / 2);
        context.rotate(this.rotation);
        context.translate(-this.width / 2, -this.height / 2);

        // translate to the shape's anchor to draw the shape
        const anchorX = -this.width * this.anchor.horizontal;
        const anchorY = -this.height * this.anchor.vertical;
        if (anchorX || anchorY) {
            context.translate(anchorX, anchorY);
        }
        if (this.__debugAABB) {
            context.save();
            context.strokeStyle = 'red';
            context.rect(
                this.bounds.left,
                this.bounds.top,
                this.bounds.right - this.bounds.left,
                this.bounds.bottom - this.bounds.top
            );
            context.stroke();
            context.restore();
        }
        subclassDraw?.();
        if (this.hasBorder) {
            context.stroke();
        }
        context.fill();
        context.restore();
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
        return false;
    }

    setAnchor(anchor) {
        this.anchor = anchor;
    }

    /**
     * Invalidate the bounds of this Thing, so that any Groups containing it can update.
     * @private
     */
    __updateBounds() {
        const left = this.x - this.anchor.horizontal * this.width;
        const right = this.x + (1 - this.anchor.horizontal) * this.width;
        const top = this.y - this.anchor.vertical * this.height;
        const bottom = this.y + (1 - this.anchor.vertical) * this.height;
        this.bounds = {
            left: left,
            right: right,
            top: top,
            bottom: bottom,
        };
        this.__lastCalculatedBoundsID++;
    }
}
