import Thing from './thing.js';
import Color from './color.js';
import { getDistance } from './graphics-utils.js';

/**
 * A Circle defined by its radius. Circles draw with their center at their x, y position.
 * @extends Thing
 */
class Circle extends Thing {
    type = 'Circle';
    anchor = { horizontal: 0.5, vertical: 0.5 };

    /**
     * Constructs a new circle.
     * @constructor
     * @param {number} radius - Radius of the circle.
     * @example
     * // create a circle with radius 20
     * const c = new Circle(20);
     * c.setPosition(25, 25);
     * add(c);
     */
    constructor(radius) {
        super();
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `new Circle(radius)`.');
        }
        if (typeof radius !== 'number' || !isFinite(radius)) {
            throw new TypeError(
                'You must pass a finite number to `new Circle(radius)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }

        this.radius = Math.max(0, radius);
        this.color = Color.black;
        this.lineWidth = 3;
    }

    /**
     * Draws the circle in the canvas.
     *
     * @private
     * @param {CanvasRenderingContext2D} context - Context to draw on.
     */
    draw(context) {
        super.draw(context, () => {
            context.translate(this.radius, this.radius);
            context.beginPath();
            context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
            context.closePath();
            context.translate(-this.radius, -this.radius);
        });
    }
    /**
     * Describes the circle for use with screen readers.
     */
    describe() {
        return super.describe() + ` Radius: ${this.radius}.`;
    }

    /**
     * Gets the radius of the circle
     *
     * @example
     * const c = new Circle(20);
     * c.getRadius === 20;
     * @return {number} Radius of the circle.
     */
    getRadius() {
        return this.radius;
    }

    get radius() {
        return this._radius;
    }

    /**
     * Gets the height (diamter) of the circle.
     *
     * @example
     * const c = new Circle(20);
     * c.getHeight() === 40;
     * @return {number} Height (diameter) of the circle.
     */
    getHeight() {
        return this.radius * 2;
    }

    get height() {
        return this.radius * 2;
    }

    /**
     * Gets the width (diamter) of the circle.
     *
     * @example
     * const c = new Circle(20);
     * c.getHeight() === 40;
     * @return {number} Width (diameter) of the circle.
     */
    getWidth() {
        return this.radius * 2;
    }

    get width() {
        return this.radius * 2;
    }

    /**
     * Sets the radius of the circle.
     *
     * @example
     * const c = new Circle(20);
     * c.setRadius(1);
     * c.getRadius === 1;
     * @param {number} radius - Desired resulting radius of the circle.
     */
    setRadius(radius) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setRadius(radius)`.');
        }
        if (typeof radius !== 'number' || !isFinite(radius)) {
            throw new Error(
                'You must pass a finite number to `setRadius(radius)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }

        this.radius = Math.max(0, radius);
    }

    set radius(radius) {
        this._radius = radius;
        super._invalidateBounds();
    }

    /**
     * Checks if the passed point is contained in the circle.
     *
     * @alias Circle#containsPoint
     * @example
     * const c = new Circle(20);
     * c.setPosition(0, 0);
     * c.containsPoint(5, 5) === true;
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @return {boolean} Whether the passed point is contained in the circle.
     */
    _containsPoint(x, y) {
        x -= this.width * (0.5 - this.anchor.horizontal);
        y -= this.height * (0.5 - this.anchor.vertical);
        var circleEdge = this.radius;
        if (this.hasBorder) {
            circleEdge += this.lineWidth;
        }
        var dist = getDistance(this.x, this.y, x, y);
        return dist < circleEdge;
    }
}

export default Circle;
