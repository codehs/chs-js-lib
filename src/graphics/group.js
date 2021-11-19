import Thing from './thing.js';

/**
 * Represents a collection of graphical elements that can be acted on together.
 * @class
 */
export default class Group extends Thing {
    /**
     * @private
     * @type {Array<Thing>}
     */
    elements;

    /**
     * @constructor
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
        this.__hiddenCanvas = document.createElement('canvas');
        this.__hiddenCanvas.width = this.width;
        this.__hiddenCanvas.height = this.height;
        //this.__hiddenCanvas.style.display = 'none';
        document.body.appendChild(this.__hiddenCanvas);
        this.__hiddenContext = this.__hiddenCanvas.getContext('2d');
        this.__lastRecordedBounds = {};
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
        this.__invalidateBounds();
    }

    /**
     * Removes `element` from the group.
     * @param {Thing} element
     */
    remove(element) {
        const i = this.elements.indexOf(element);
        if (i < 0) {
            return;
        }
        this.elements.splice(i, 1);
        this.__invalidateBounds();
    }

    /**
     * Moves all elements in the group by dx, dy.
     * @param {number} dx
     * @param {number} dy
     */
    move(dx, dy) {
        this.elements.forEach(element => {
            element.move(dx, dy);
            // as a performance optimization, pre-empt the recalculation that would result from the
            // elemenents being moved, and instead update the bounds directly after this.
            this.__lastRecordedBounds[element.__id]++;
        });
        this.bounds = {
            top: this.bounds.top + dx,
            left: this.bounds.left + dx,
            right: this.bounds.right + dx,
            bottom: this.bounds.bottom + dx,
        };
    }

    /**
     * Set the position of the group, moving all elements in it.
     *
     * @param {number} x
     * @param {number} y
     */
    setPosition(x, y) {
        const dx = x - this.x;
        const dy = y - this.y;
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
        this.__hiddenContext.clearRect(0, 0, width, height);
        // translate the hidden context so that the group is drawn
        // in tehe top left corner.
        // this means that only the bounding box surrounding the top
        // left corner needs to be drawn to the destination canvas
        this.__hiddenContext.translate(-bounds.left, -bounds.top);
        this.elements.forEach(element => {
            if (element.__lastCalculatedBoundsID > this.__lastRecordedBounds[element.__id]) {
                this.__boundsInvalidated = true;
            }
            element.draw(this.__hiddenContext);
        });
        this.__hiddenContext.translate(bounds.left, bounds.top);

        context.save();

        context.globalAlpha = this.opacity;
        context.translate(bounds.left, bounds.top);

        // rotate the context around the center of the group
        context.translate(width / 2, height / 2);
        context.rotate(this.rotation);
        context.translate(-width / 2, -height / 2);

        context.drawImage(this.__hiddenCanvas, 0, 0, width, height);

        context.restore();
    }

    /**
     * Return whether this group contains the point, which is true if any element in this group
     * contains it.
     *
     * @param {number} x
     * @param {number} y
     * @returns
     */
    containsPoint(x, y) {
        return this.elements.some(e => e.containsPoint(x - this.x, y - this.y));
    }

    /**
     * Recalculates the size of the group.
     * @private
     */
    __updateBounds() {
        let maxX = 0;
        let maxY = 0;
        let minX = Infinity;
        let minY = Infinity;
        this.elements.forEach(element => {
            if (element.__lastCalculatedBoundsID > (this.__lastRecordedBounds[element.__id] || 0)) {
                this.__lastRecordedBounds[element.__id] = element.__lastCalculatedBoundsID;
            }
            const elementBounds = element.getBounds();
            minX = Math.min(minX, elementBounds.left);
            minY = Math.min(minY, elementBounds.top);
            maxX = Math.max(maxX, elementBounds.right);
            maxY = Math.max(maxY, elementBounds.bottom);
        });
        this.bounds = {
            left: minX,
            right: maxX,
            top: minY,
            bottom: maxY,
        };
        this.__hiddenCanvas.width = 1 + maxX - minX;
        this.__hiddenCanvas.height = 1 + maxY - minY;
    }
}
