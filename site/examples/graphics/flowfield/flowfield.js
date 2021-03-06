// a lot from https://observablehq.com/@esperanc/flow-fields
// thank you!

setBackgroundColor('white');
setSize(600, 600);
const radiansToDegrees = function (angleInRadians) {
    return (angleInRadians / Math.PI) * 180;
};
const clamp = (v, min, max) => {
    return Math.max(min, Math.min(max, v));
};

const drawCurve = (ctx, points) => {
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    points.forEach(({ x, y }) => {
        ctx.lineTo(x, y);
    });
    ctx.stroke();
};

const width = getWidth();
const height = getHeight();

class Grid {
    constructor(width, height, cellSize) {
        this.cellSize = cellSize;
        this.width = width;
        this.height = height;
        this.nRows = (height / cellSize) | 0;
        this.nCols = (width / cellSize) | 0;
        this.grid = new Array(this.nRows).fill(0).map(row => {
            return new Array(this.nCols).fill(Math.PI * 0.25);
        });
    }

    cellIndex(x, y) {
        return [~~(x / this.cellSize), ~~(y / this.cellSize)];
    }

    cell(x, y) {
        x = clamp(x, 0, this.grid[0].length - 1);
        y = clamp(y, 0, this.grid.length - 1);
        return this.grid[y][x];
    }

    angleLerp(a, b, t) {
        // https://gist.github.com/shaunlebron/8832585
        // https://stackoverflow.com/a/14498790/3880608
        const shortAngleDist = (a, b) => {
            const max = Math.PI * 2;
            const da = (b - a) % max;
            return ((2 * da) % max) - da;
        };

        return a + shortAngleDist(a, b) * t;
    }

    fill(fn) {
        for (let row = 0; row < this.nRows; row++) {
            for (let col = 0; col < this.nCols; col++) {
                this.grid[row][col] = fn(row, col, this);
            }
        }
    }

    /**
     * Get the field at x, y
     * @param {number} x
     * @param {number} y
     * @returns {number} angle in rad
     */
    getField(x, y) {
        try {
            let [ix, iy] = this.cellIndex(x, y);
            let dx = (x % this.cellSize) / this.cellSize;
            let dy = (y % this.cellSize) / this.cellSize;

            // 2d linear interpolation
            return this.angleLerp(
                this.angleLerp(this.cell(ix, iy), this.cell(ix + 1, iy), dx),
                this.angleLerp(this.cell(ix, iy + 1), this.cell(ix + 1, iy + 1), dx),
                dy
            );
        } catch (e) {
            debugger;
        }
    }

    draw() {
        for (let row = 0; row < this.nRows; row++) {
            for (let col = 0; col < this.nCols; col++) {
                const x = col * this.cellSize;
                const y = row * this.cellSize;
                const line = new Line(
                    x,
                    y + this.cellSize / 2,
                    x + this.cellSize / 2,
                    y + this.cellSize / 2
                );
                line.setAnchor({ vertical: 0.5, horizontal: 0.5 });
                const rotation = this.cell(col, row);
                line.rotate(rotation, 1);
                add(line);
            }
        }
    }
}

const grid = new Grid(width, height, 20);
grid.fill((row, col, grid) => {
    let angle = (row / grid.nRows) * Math.PI;
    return angle;
});

// this should extend Thing but it's not exposed yet
class Curve extends Circle {
    constructor() {
        super(1);
        /**
         * @type {Array.<{x: number, y: number}>}
         */
        this.points = [];
    }

    addPoint({ x, y }) {
        this.points.push({ x, y });
    }

    draw(context) {
        drawCurve(context, this.points);
    }

    flow(x, y, grid, nSteps, stepSize) {
        let p = new Vector(x, y);
        let q = new Vector(x, y);
        let n = (nSteps / 2) | 0;
        console.log(`${n} steps`);
        while (--nSteps > 0) {
            let angle = grid.getField(p.x, p.y);
            let v = new Vector(1, 0).rotate(radiansToDegrees(angle)).multiply(stepSize);
            p = p.add(v);
            this.points.push({ x: p.x, y: p.y });
        }
    }
}

const curve = new Curve();
curve.flow(100, 100, grid, 500, 1);
add(curve);

grid.draw(__graphics__.getContext());
