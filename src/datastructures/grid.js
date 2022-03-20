/**
 * A grid is an abstraction around a two-dimensional array.
 * @class
 */
class Grid {
    type = 'Grid';

    /**
     * Constructs a grid.
     * @constructor
     * @param {number} rows
     * @param {number} cols
     */
    constructor(rows, cols) {
        if (arguments.length !== 2) {
            throw new Error('You should pass exactly 2 arguments to `new Grid(rows, cols)`');
        }
        if (typeof rows !== 'number' || !isFinite(rows)) {
            throw new TypeError(
                'Invalid value for `rows`. Make sure you are passing finite numbers to `new Grid(rows, cols)`.'
            );
        }
        if (typeof cols !== 'number' || !isFinite(cols)) {
            throw new TypeError(
                'Invalid value for `cols`. Make sure you are passing finite numbers to `new Grid(rows, cols)`.'
            );
        }

        rows = Math.max(0, rows);
        cols = Math.max(0, cols);

        this.grid = new Array(rows);
        for (let i = 0; i < rows; i++) {
            this.grid[i] = new Array(cols);
        }
    }

    /**
     * Initializes a Grid from an array.
     * @param {array} arr - Array containing elements to be made into a Grid.
     */
    initFromArray(arr) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `initFromArray`');
        }
        if (!Array.isArray(arr)) {
            throw new Error(
                'Invalid value passed to `initFromArray`. Make sure you are passing an array.'
            );
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (this.inBounds(i, j)) {
                    this.set(i, j, arr[i][j]);
                }
            }
        }
        return this;
    }

    /**
     * Initializes the contents of the grid with `value`.
     * @param {any} value - The value to be inserted in all
     * positions of the grid.
     */
    init(value) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `init`.');
        }
        if (typeof value === 'number' && !isFinite(value)) {
            throw new TypeError(
                'Non finite number passed to `init`. If you are passing a number, make sure it is a finite number.'
            );
        }

        for (let i = 0; i < this.numRows(); i++) {
            for (let j = 0; j < this.numCols(); j++) {
                this.grid[i][j] = value;
            }
        }
        return this;
    }

    /**
     * Gets the object stored at the requested row and column.
     * @param {number} row - The row of the desired object.
     * @param {number} col - The col of the desired object.
     * @returns {any} The value stored in the grid
     * at that position.
     */
    get(row, col) {
        if (arguments.length !== 2) {
            throw new Error('You should pass exactly 2 arguments to `get(row, col)`.');
        }
        if (typeof row !== 'number' || !isFinite(row)) {
            throw new TypeError(
                'Invalid value for `row`. Make sure you are passing finite numbers to `get(row, col)`.'
            );
        }
        if (typeof col !== 'number' || !isFinite(col)) {
            throw new TypeError(
                'Invalid value for `col`. Make sure you are passing finite numbers to `get(row, col)`.'
            );
        }
        return this.grid[row][col];
    }

    /**
     * Sets an object at the requested row and column.
     * @param {number} row - The row of the destination of the object.
     * @param {number} col - The column of the destination of the object.
     * @param {any} value - The value to be stored at
     * the specified location in the grid
     */
    set(row, col, value) {
        if (arguments.length !== 3) {
            throw new Error('You should pass exactly 3 arguments to `set(row, col, value)`.');
        }
        if (typeof row !== 'number' || !isFinite(row)) {
            throw new TypeError(
                'Invalid value for `row`. You passed a value of type ' +
                    typeof row +
                    '. Make sure you are passing a number.'
            );
        }
        if (typeof col !== 'number' || !isFinite(col)) {
            throw new TypeError(
                'Invalid value for `col`. You passed a value of type ' +
                    typeof col +
                    '. Make sure you are passing a number.'
            );
        }
        if (typeof value === 'number' && !isFinite(value)) {
            throw new TypeError(
                'Non finite value passed to `set`. If you are passing a number, make sure it is a finite number.'
            );
        }
        this.grid[row][col] = value;
    }

    /**
     * Returns the number of rows in the grid.
     * @returns {number} The number of rows in the grid.
     */
    numRows() {
        return this.grid.length;
    }

    /**
     * Returns the number of cols in the grid.
     * @returns {number} The number of cols in the grid.
     */
    numCols() {
        return this.grid[0].length;
    }

    /**
     * Checks whether the given row and col exist in the grid.
     * @param {number} row - Row of the position being checked.
     * @param {number} col - Col of the position being checked.
     * @returns {boolean} Whether or not the given position is in bounds.
     */
    inBounds(row, col) {
        if (arguments.length !== 2) {
            throw new Error('You should pass exactly 2 arguments to `inBounds(row, col)`.');
        }
        if (typeof row !== 'number' || !isFinite(row)) {
            throw new TypeError(
                'Invalid value for `row`. Make sure you are passing finite numbers to `inBounds(row, col)`.'
            );
        }
        if (typeof col !== 'number' || !isFinite(col)) {
            throw new TypeError(
                'Invalid value for `col`. Make sure you are passing finite numbers to `inBounds(row, col)`.'
            );
        }

        if (row < 0 || col < 0) {
            return false;
        }
        if (row >= this.numRows() || col >= this.numCols()) {
            return false;
        }
        return true;
    }

    /**
     * Converts a grid to a list.
     * For example:
     * -------
     * A B C D
     * E F G H
     * I J K L
     * -------
     * would convert to:
     * -------
     * [[0, 0, 'A'], [0, 1, 'B'], [0, 2, 'C'], [0, 3, 'D'], [1, 0, 'E']...[2, 3, 'L']]
     * @returns {array} List representation of the Grid.
     */
    toList() {
        let list = [];
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[0].length; j++) {
                list.push([i, j, this.grid[i][j]]);
            }
        }
        return list;
    }

    /**
     * Generates a string representation of the Grid.
     * @returns {string} A representation of a grid of the format
     * "A B C \nD E F \nG H I \n"
     */
    toString() {
        let result = '';
        for (let i = 0; i < this.numRows(); i++) {
            for (let j = 0; j < this.numCols(); j++) {
                result += this.get(i, j) + ' ';
            }
            result += '\n';
        }
        return result;
    }
}

export default Grid;
