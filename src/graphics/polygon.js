import Thing from './thing.js';

/**
 * A polygon is a shape with any number of points, and will
 * be drawn as a continuous shape contained by those points.
 * @extends Thing
 */
class Polygon extends Thing {
    type = 'Polygon';

    /**
     * Constructs a new Polygon.
     * The Polygon constructor takes no arguments, and only prepares a Polygon to have points
     * added later with {@link addPoint}.
     * @constructor
     */
    constructor() {
        super();
        if (arguments.length !== 0) {
            throw new Error('You should pass exactly 0 arguments to `new Polygon()`');
        }
        /**
         * An array of points in the Polygon.
         * @example
         * const p = new Polygon();
         * for (let i = 0; i < p.points.length; i++) {
         *     println(p.points[i]);
         * }
         * @type {Array.<{x: number, y: number}>}
         * @public
         */
        this.points = [];
        this.width = 0; // max x-distance of points in the polygon
        this.height = 0; // max y-distance of points in the polygon
    }

    /**
     * Draws the polygon in the canvas.
     *
     * @private
     * @param {CanvasRenderingContext2D} context - Context to draw on.
     */
    draw(context) {
        if (this.points.length === 0) {
            return;
        }

        super.draw(context, () => {
            context.save();
            context.translate(-this.x, -this.y);
            context.beginPath();
            const first = this.points[0];
            let current;
            context.moveTo(first.x, first.y);
            for (let i = 1; i < this.points.length; i++) {
                current = this.points[i];
                context.lineTo(current.x, current.y);
            }
            context.closePath();
            context.restore();
        });
    }

    /**
     * Checks if the coordinates are contained in the Polygon.
     * @alias Polygon#containsPoint
     * @example
     * const p = new Polygon();
     * p.addPoint(10, 10);
     * p.addPoint(20, 10);
     * p.addPoint(15, 15);
     * if (p.containsPoint(12, 12)) {
     *     p.setColor(Color.RED);
     * }
     *
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {boolean}
     */
    _containsPoint(x, y) {
        x += this.width * this.anchor.horizontal;
        y += this.height * this.anchor.vertical;
        // https://www.eecs.umich.edu/courses/eecs380/HANDOUTS/PROJ2/InsidePoly.html
        // solution 3 from above
        let previousOrientation = -1;
        let x1, x2, y1, y2;
        for (let i = 0; i < this.points.length; i++) {
            x1 = this.points[i].x;
            y1 = this.points[i].y;
            x2 = this.points[(i + 1) % this.points.length].x;
            y2 = this.points[(i + 1) % this.points.length].y;
            let orientation = (y - y1) * (x2 - x1) - (x - x1) * (y2 - y1) <= 0;
            if (previousOrientation < 0) {
                previousOrientation = orientation;
            } else {
                if (previousOrientation !== orientation) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Gets the width of the Polygon.
     * The width is the greatest distance between two points in the Polygon along the x axis.
     * @example
     * const p = new Polygon();
     * p.addPoint(0, 50);
     * p.addPoint(200, 30);
     * p.getWidth() === 200;
     *
     * @returns {number} Width of the rectangle.
     */
    getWidth() {
        return this.width;
    }

    /**
     * Gets the width of the Polygon.
     * The width is the greatest distance between two points in the Polygon along the x axis.
     * @example
     * const p = new Polygon();
     * p.addPoint(50, 0);
     * p.addPoint(30, 100);
     * p.addPoint(10, 200);
     * p.getHeight() === 200;
     *
     * @returns {number} height of the rectangle.
     */
    getHeight() {
        return this.height;
    }

    /**
     * Adds a vertex to the polygon.
     * This also updates the width and height of the Polygon, expanding the width and height
     * to the maximum distance between two points along the x and y axes, respectively.
     * @example
     * const p = new Polygon();
     * p.addPoint(10, 10);
     *
     * @param {number} x - The x coordinate of the desired new vertex.
     * @param {number} y - The y coordinate of the desired new vertex.
     */
    addPoint(x, y) {
        if (arguments.length !== 2) {
            throw new Error('You should pass exactly 2 arguments to `addPoint(x, y)`');
        }
        if (typeof x !== 'number' || !isFinite(x)) {
            throw new TypeError(
                'Invalid value for x-coordinate. Make sure you are passing finite numbers to `addPoint(x, y)`.'
            );
        }
        if (typeof y !== 'number' || !isFinite(y)) {
            throw new TypeError(
                'Invalid value for y-coordinate. Make sure you are passing finite numbers to `addPoint(x, y)`.'
            );
        }

        this.points.push({ x: x, y: y });
        for (let i = 0; i < this.points.length; i++) {
            if (Math.abs(x - this.points[i].x) > this.width) {
                this.width = Math.abs(x - this.points[i].x);
            }
            if (Math.abs(y - this.points[i].y) > this.height) {
                this.height = Math.abs(y - this.points[i].y);
            }
        }
    }

    /**
     * Moves the entire polygon.
     * This shifts each vertex in the Polygon by dx, dy.
     * @example
     * const p = new Polygon();
     * p.addPoint(20, 20);
     * p.move(10, 10);
     * p.points[0] === {x: 30, y: 30};
     *
     * @param {number} dx - The change in x coordinate of all starting and ending points.
     * @param {number} dy - The change in y coordinate of all starting and ending points.
     */
    move(dx, dy) {
        if (arguments.length !== 2) {
            throw new Error('You should pass exactly 2 arguments to `move(dx, dy).`');
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

        for (let i = 0; i < this.points.length; i++) {
            this.points[i].x += dx;
            this.points[i].y += dy;
        }
        this.x += dx;
        this.y += dy;
    }

    /**
     * Set the position of the polygon by moving all of its points.
     * @param {number} x
     * @param {number} y
     */
    setPosition(x, y) {
        const dx = x - this.x;
        const dy = y - this.y;
        this.move(dx, dy);
    }

    /**
     * Polygons manually calculate their bounds with their own implementation of _updateBounds
     * (rather than the implementation in the Thing superclass) because Polygon's can have
     * negative points which draw to the left of their x value or above their y value.
     * @private
     */
    _updateBounds() {
        let minX = Infinity;
        let maxX = -Infinity;
        let minY = Infinity;
        let maxY = -Infinity;
        this.points.forEach(({ x, y }) => {
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
        });
        const width = maxX - minX;
        const height = maxY - minY;
        this.bounds = {
            left: minX - this.anchor.horizontal * width,
            right: maxX - this.anchor.horizontal * width,
            top: minY - this.anchor.vertical * height,
            bottom: maxY - this.anchor.vertical * height,
        };
        this._boundsInvalidated = false;
        this._lastCalculatedBoundsID++;
    }
}

export default Polygon;
