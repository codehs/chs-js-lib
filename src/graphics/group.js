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
        this.__hiddenCanvas.width = window.innerWidth;
        this.__hiddenCanvas.height = window.innerHeight;
        this.__hiddenCanvas.style.display = 'none';
        document.body.appendChild(this.__hiddenCanvas);
        this.__hiddenContext = this.__hiddenCanvas.getContext('2d');
        this.__lastRecordedBounds = {};
        this.calculateSize(true);
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
        this.__lastRecordedBounds[element] = element.__lastCalculatedBoundsID;
        this.elements.push(element);
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
        this.__hiddenContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.__hiddenContext.save();

        const w = this.bounds.right - this.bounds.left;
        const h = this.bounds.bottom - this.bounds.top;
        this.__hiddenContext.translate(this.bounds.left + w / 2, this.bounds.top + h / 2);
        this.__hiddenContext.rotate(this.rotation);
        this.__hiddenContext.translate(-(this.bounds.left + w / 2), -(this.bounds.top + h / 2));

        if (this.__debugAABB) {
            this.__hiddenContext.save();
            this.__hiddenContext.strokeStyle = 'red';
            this.__hiddenContext.strokeRect(this.bounds.left, this.bounds.top, w, h);
            this.__hiddenContext.restore();
        }

        this.elements.forEach(element => {
            if (element.__lastCalculatedBoundsID > this.__lastRecordedBounds[element]) {
                this.__boundsInvalidated = true;
            }
            element.draw(this.__hiddenContext);
        });

        if (this.__boundsInvalidated) {
            this.calculateSize();
        }
        this.__hiddenContext.restore();
        context.save();
        context.globalAlpha = this.opacity;
        context.drawImage(this.__hiddenCanvas, 0, 0, window.innerWidth, window.innerHeight);
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
    calculateSize(invalidated = false) {
        let maxX = 0;
        let maxY = 0;
        let minX = Infinity;
        let minY = Infinity;
        this.elements.forEach(element => {
            if (element.__lastCalculatedBoundsID > this.__lastRecordedBounds[element]) {
                invalidated = true;
                this.__lastRecordedBounds[element] = element.__lastCalculatedBoundsID;
            }
            if (invalidated) {
                minX = Math.min(minX, element.bounds.left);
                minY = Math.min(minY, element.bounds.top);
                maxX = Math.max(maxX, element.bounds.right);
                maxY = Math.max(maxY, element.bounds.bottom);
            }
        });
        if (invalidated) {
            this.x = minX;
            this.y = minY;
            this.width = maxX - minX;
            this.height = maxY - minY;
        }
    }
}
