import Thing from './thing.js';
import GraphicsManager from './index.js';

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
    }

    /**
     *
     * @param {CanvasRenderingContext2D} context
     */
    draw(context) {
        this.__hiddenContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.elements.forEach(element => {
            element.draw(this.__hiddenContext);
        });
        context.save();
        context.globalAlpha = this.opacity;
        context.drawImage(this.__hiddenCanvas, 0, 0, window.innerWidth, window.innerHeight);
        context.restore();
    }
}
