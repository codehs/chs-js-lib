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
        //this.x += dx;
        //this.y += dy;
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
        this.elements.forEach(element => {
            element.draw(this.__hiddenContext);
        });
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
}
