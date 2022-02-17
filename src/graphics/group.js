import Thing, { rotatePointAboutPosition } from './thing.js';

/** @module Group */

/**
 * Represents a collection of graphical elements that can be acted on together.
 * @class
 * @extends Thing
 */
class Group extends Thing {
    type = 'Group';
    /**
     * @private
     * @type {Array<Thing>}
     */
    elements;
    /**
     * The ratio of physical pixels to CSS pixels for the current device.
     * This allows the canvas to be scaled for higher resolution drawing.
     * For example, a devicePixelRatio of 2 indicates that the device will use
     * 2 physical pixels to draw a single css pixel.
     * https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
     * @private
     * @type {number}
     */
    devicePixelRatio = window.devicePixelRatio ?? 1;

    /**
     * Constructs a new Group.
     * @param {...Thing} elements - Any number of elements to initialize the group with.
     * @constructor
     * @example
     * const group = new Group(new Circle(20), new Rectangle(20, 20));
     * add(group);
     */
    constructor(...elements) {
        super();
        this.elements = elements;
        /**
         * A hidden canvas used for drawing. In order to provide universal opacity for
         * an entire group, the entire group is drawn to a hidden canvas then
         * copied to the context at once.
         * @private
         * @type {HTMLCanvasElement}
         */
        this._hiddenCanvas = document.createElement('canvas');
        this._hiddenCanvas.width = 1;
        this._hiddenCanvas.height = 1;
        this._hiddenContext = this._hiddenCanvas.getContext('2d');
        this._lastRecordedBounds = {};
        this.bounds = null;
    }

    /**
     * X position of the group, indicated by its left bound.
     * @type {number}
     */
    get x() {
        return this.getBounds().left;
    }

    set x(x) {
        if (!this.bounds) {
            return;
        }
        this.setPosition(x, this.bounds.top);
    }

    /**
     * X position of the group, indicated by its top bound.
     * @type {number}
     */
    get y() {
        return this.getBounds().top;
    }

    set y(y) {
        if (!this.bounds) {
            return;
        }
        this.setPosition(this.bounds.left, y);
    }

    /**
     * Width of the group, meaning the difference between right and left bounds.
     * @type {number}
     */
    get width() {
        const bounds = this.getBounds();
        return bounds.right - bounds.left;
    }

    /**
     * Height of the group, meaning the difference between bottom and top bounds.
     * @type {number}
     */
    get height() {
        const bounds = this.getBounds();
        return bounds.bottom - bounds.top;
    }

    /**
     * Get all elements in the group.
     * @returns {Array<Thing>}
     */
    getElements() {
        return this.elements;
    }

    /**
     * Add an element to the group.
     * This will cause the group's bounds to recalculate to include this element.
     * @example
     * const g = new Group();
     * g.add(new Circle(10));
     *
     * @param {Thing} element
     */
    add(element) {
        this.elements.push(element);
        this._invalidateBounds();
        element._invalidationDependants.push(this);
    }

    /**
     * Removes `element` from the group.
     * This will cause the group's bounds to recalculate to remove this element.
     * @param {Thing} element
     */
    remove(element) {
        element._invalidationDependants.splice(element._invalidationDependants.indexOf(this), 1);
        const i = this.elements.indexOf(element);
        if (i < 0) {
            return;
        }
        this.elements.splice(i, 1);
        this._invalidateBounds();
    }

    /**
     * Moves all elements in the group by dx, dy.
     * The .move method of each element in the group will be called with dx, dy.
     * @param {number} dx
     * @param {number} dy
     */
    move(dx, dy) {
        this.elements.forEach(element => {
            element.move(dx, dy);
        });
        this._invalidateBounds();
    }

    /**
     * Set the position of the group.
     * This will calculate the difference between the current and desired position
     * and .move() the group and all its elements by that distance.
     *
     * @param {number} x
     * @param {number} y
     */
    setPosition(x, y) {
        const bounds = this.getBounds();
        const dx = x - bounds.left;
        const dy = y - bounds.top;
        this.move(dx, dy);
    }

    /**
     * Draws the group, which draws all of its elements.
     * @param {CanvasRenderingContext2D} context
     */
    draw(context) {
        if (this.elements.length === 0) {
            return;
        }
        super.draw(context, () => {
            context.beginPath();
            const bounds = this.getBounds();
            const width = bounds.right - bounds.left;
            const height = bounds.bottom - bounds.top;
            if (!width || !height) {
                return;
            }
            this._hiddenContext.clearRect(0, 0, width, height);
            // translate the hidden context so that the group is drawn
            // in the top left corner.
            // this means that only the bounding box surrounding the top
            // left corner needs to be drawn to the destination canvas
            this._hiddenContext.translate(-bounds.left, -bounds.top);
            this.elements
                .filter(element => element.alive)
                .sort((a, b) => a.layer - b.layer)
                .forEach(element => {
                    element.draw(this._hiddenContext);
                });
            this._hiddenContext.translate(bounds.left, bounds.top);
            context.drawImage(this._hiddenCanvas, 0, 0, width, height);
            context.closePath();
        });
    }

    /**
     * Describe the element for screen readers.
     */
    describe() {
        return `A Group at ${this.x}, ${this.y}, containing: ${this.elements
            .map(element => element.describe())
            .join(' ')}`;
    }

    /**
     * Return whether this group contains the point, which is true if any element in this group
     * contains it.
     *
     * @param {number} x
     * @param {number} y
     * @returns {boolean}
     */
    _containsPoint(x, y) {
        x += this.width * this.anchor.horizontal;
        y += this.height * this.anchor.vertical;
        return this.elements.some(e => e.containsPoint(x, y));
    }

    /**
     * Recalculates the size of the group.
     * This will update the internal _lastRecordedBounds to indicate that bounds have been
     * recalculated given the updated size of a child. When .draw() is claled, the elements' last
     * bounds ID are compared to see if bounds need to be invalidated.
     * @private
     */
    _updateBounds() {
        let maxX = 0;
        let maxY = 0;
        let minX = Infinity;
        let minY = Infinity;
        this.elements.forEach(element => {
            if (element._lastCalculatedBoundsID > (this._lastRecordedBounds[element._id] || 0)) {
                this._lastRecordedBounds[element._id] = element._lastCalculatedBoundsID;
            }
            const elementBounds = element.getBounds();
            let { left, right, top, bottom } = elementBounds;
            if (element.rotation) {
                const rotX = (right - left) / 2 + left;
                const rotY = (bottom - top) / 2 + top;
                let topLeft = rotatePointAboutPosition([left, top], [rotX, rotY], element.rotation);
                let topRight = rotatePointAboutPosition(
                    [right, top],
                    [rotX, rotY],
                    element.rotation
                );
                let bottomLeft = rotatePointAboutPosition(
                    [left, bottom],
                    [rotX, rotY],
                    element.rotation
                );
                let bottomRight = rotatePointAboutPosition(
                    [right, bottom],
                    [rotX, rotY],
                    element.rotation
                );
                const points = [topLeft, topRight, bottomLeft, bottomRight];
                const xCoordinates = points.map(point => point[0]);
                const yCoordinates = points.map(point => point[1]);
                left = Math.min(...xCoordinates);
                right = Math.max(...xCoordinates);
                top = Math.min(...yCoordinates);
                bottom = Math.max(...yCoordinates);
            }
            minX = Math.min(minX, left);
            minY = Math.min(minY, top);
            maxX = Math.max(maxX, right);
            maxY = Math.max(maxY, bottom);
        });
        this.bounds = {
            left: minX,
            right: maxX,
            top: minY,
            bottom: maxY,
        };
        const width = maxX - minX;
        const height = maxY - minY;
        const canvasWidth = Math.ceil(width);
        const canvasHeight = Math.ceil(height);
        this._hiddenCanvas.width = this.devicePixelRatio * canvasWidth;
        this._hiddenCanvas.height = this.devicePixelRatio * canvasHeight;
        this._hiddenCanvas.style.width = `${canvasWidth}px`;
        this._hiddenCanvas.style.height = `${canvasHeight}px`;
        this._hiddenContext.scale(this.devicePixelRatio, this.devicePixelRatio);
        this._lastCalculatedBoundsID++;
        this._boundsInvalidated = false;
    }
}

export default Group;
