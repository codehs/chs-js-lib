import Thing, { rotatePointAboutPosition } from './thing.js';

/** @module Group */

/**
 * Represents a collection of graphical elements that can be acted on together.
 * @class
 * @extends Thing
 */
class Group extends Thing {
    /**
     * @private
     * @type {Array<Thing>}
     */
    elements;

    /**
     * Constructs a new Group.
     * @param {...Thing} elements - Any number of elements to initialize the group with.
     * @constructor
     * @example
     * const group = new Group(new Circle(20));
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
        this._hiddenCanvas.style.display = 'none';
        document.body.appendChild(this._hiddenCanvas);
        this._hiddenContext = this._hiddenCanvas.getContext('2d');
        this._lastRecordedBounds = {};
        this.bounds = null;
    }

    get x() {
        return this.getBounds().left;
    }

    set x(x) {
        if (!this.bounds) {
            return;
        }
        this.setPosition(x, this.bounds.top);
    }

    get y() {
        return this.getBounds().top;
    }

    set y(y) {
        if (!this.bounds) {
            return;
        }
        this.setPosition(this.bounds.left, y);
    }

    get width() {
        const bounds = this.getBounds();
        return bounds.right - bounds.left;
    }

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
     * Adds `element` to the group.
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
     * @param {number} dx
     * @param {number} dy
     */
    move(dx, dy) {
        this.elements.forEach(element => {
            element.move(dx, dy);
        });
        const bounds = this.getBounds();
        this.bounds = {
            top: bounds.top + dy,
            left: bounds.left + dx,
            right: bounds.right + dx,
            bottom: bounds.bottom + dy,
        };
    }

    /**
     * Set the position of the group, moving all elements in it.
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
     *
     * @param {CanvasRenderingContext2D} context
     */
    draw(context) {
        const bounds = this.getBounds();
        const width = bounds.right - bounds.left;
        const height = bounds.bottom - bounds.top;
        if (!width || !height) {
            return;
        }
        this._hiddenContext.clearRect(0, 0, width, height);
        // translate the hidden context so that the group is drawn
        // in tehe top left corner.
        // this means that only the bounding box surrounding the top
        // left corner needs to be drawn to the destination canvas
        const anchorX = width * this.anchor.horizontal;
        const anchorY = height * this.anchor.vertical;
        this._hiddenContext.translate(-bounds.left, -bounds.top);
        this.elements.forEach(element => {
            if (
                element._lastCalculatedBoundsID > this._lastRecordedBounds[element._id] ||
                element._boundsInvalidated
            ) {
                this._invalidateBounds();
            }
            element.draw(this._hiddenContext);
        });
        this._hiddenContext.translate(bounds.left, bounds.top);

        context.save();

        context.globalAlpha = this.opacity;

        context.translate(bounds.left, bounds.top);

        // rotate the context around the center of the group
        context.translate(width / 2 - anchorX, height / 2 - anchorY);
        context.rotate(this.rotation);
        context.translate(-width / 2 + anchorX, -height / 2 + anchorY);

        context.drawImage(this._hiddenCanvas, -anchorX, -anchorY, width, height);

        if (this.debug) {
            context.fillStyle = 'red';
            context.strokeStyle = 'red';
            context.strokeRect(-anchorX, -anchorY, width, height);
            context.beginPath();
            context.arc(0, 0, 3, 0, 360);
            context.fill();
            context.closePath();
        }

        context.restore();
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
        this._hiddenCanvas.width = maxX - minX;
        this._hiddenCanvas.height = maxY - minY;
        this._lastCalculatedBoundsID++;
        this._invalidateBounds();
    }
}

export default Group;
