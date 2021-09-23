'use strict';

/**
 * @class Grid
 * @param {rows} rows - Number of rows in the grid.
 * @param {cols} cols - Number of cols in the grid.
 */
function Grid(rows, cols) {
    if (arguments.length !== 2) {
        throw new Error('You should pass exactly 2 arguments to <span ' +
            'class="code">new Grid(rows, cols)</span>');
    }
    if (typeof rows !== 'number' || !isFinite(rows)) {
        throw new TypeError('Invalid value for <span class="code">rows' +
            '</span>. Make sure you are passing finite numbers to <span ' +
            'class="code">new Grid(rows, cols)</span>.');
    }
    if (typeof cols !== 'number' || !isFinite(cols)) {
        throw new TypeError('Invalid value for <span class="code">cols' +
            '</span>. Make sure you are passing finite numbers to <span ' +
            'class="code">new Grid(rows, cols)</span>.');
    }

    rows = Math.max(0, rows);
    cols = Math.max(0, cols);

    this.grid = new Array(rows);
    for (var i = 0; i < rows; i++) {
        this.grid[i] = new Array(cols);
    }
}

/**
 * Initializes a Grid from an array.
 * @param {array} arr - Array containing elements to be made into a Grid.
 */
Grid.prototype.initFromArray = function(arr) {
    if (arguments.length !== 1) {
        throw new Error('You should pass exactly 1 argument to ' +
            '<span class="code">initFromArray</span>');
    }
    if (!Array.isArray(arr)) {
        throw new Error('Invalid value passed to <span class="code">' +
            'initFromArray</span>. Make sure you are passing an array.');
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            if (this.inBounds(i, j)) {
                this.set(i, j, arr[i][j]);
            }
        }
    }
};

/**
 * Initializes the contents of the grid with `value`.
 * @param {number|string|object|boolean} value - The value to be inserted in all
 * positions of the grid.
 */
Grid.prototype.init = function(value) {
    if (arguments.length !== 1) {
        throw new Error('You should pass exactly 1 argument to ' +
            '<span class="code">init</span>');
    }
    if (typeof value !== 'boolean' && typeof value !== 'number' &&
        typeof value !== 'string' && typeof value !== 'object') {
        throw new TypeError('Invalid value passed to <span class="code">' +
            'init</span>. You passed a value of type ' + typeof value +
            '. Make sure you are passing a number, string, object, or ' +
            'boolean value.');
    }
    if (typeof value === 'number' && !isFinite(value)) {
        throw new TypeError('Non finite number passed to <span class="code">' +
            'init</span>. If you are passing a number, make sure it is a ' +
            'finite number.');
    }

    for (var i = 0; i < this.numRows(); i++) {
        for (var j = 0; j < this.numCols(); j++) {
            this.grid[i][j] = value;
        }
    }
};

/**
 * Gets the object stored at the requested row and column.
 * @param {number} row - The row of the desired object.
 * @param {number} col - The col of the desired object.
 * @returns {number|string|object|boolean} The value stored in the grid
 * at that position.
 */
Grid.prototype.get = function(row, col) {
    if (arguments.length !== 2) {
        throw new Error('You should pass exactly 2 arguments to <span ' +
            'class="code">get(row, col)</span>');
    }
    if (typeof row !== 'number' || !isFinite(row)) {
        throw new TypeError('Invalid value for <span class="code">row' +
            '</span>. Make sure you are passing finite numbers to <span ' +
            'class="code">get(row, col)</span>.');
    }
    if (typeof col !== 'number' || !isFinite(col)) {
        throw new TypeError('Invalid value for <span class="code">col' +
            '</span>. Make sure you are passing finite numbers to <span ' +
            'class="code">get(row, col)</span>.');
    }
    return this.grid[row][col];
};

/**
 * Sets an object at the requested row and column.
 * @param {number} row - The row of the destination of the object.
 * @param {number} col - The column of the destination of the object.
 * @param {number|string|object|boolean} value - The value to be stored at
 * the specified location in the grid
 */
Grid.prototype.set = function(row, col, value) {
    if (arguments.length !== 3) {
        throw new Error('You should pass exactly 3 arguments to <span ' +
            'class="code">set(row, col, value)</span>');
    }
    if (typeof row !== 'number' || !isFinite(row)) {
        throw new TypeError('Invalid value for <span class="code">row' +
            '</span>. You passed a value of type ' + typeof row +
            '. Make sure you are passing a number.');
    }
    if (typeof col !== 'number' || !isFinite(col)) {
        throw new TypeError('Invalid value for <span class="code">col' +
            '</span>. You passed a value of type ' + typeof col +
            '. Make sure you are passing a number.');
    }
    if (typeof value !== 'boolean' && typeof value !== 'number' &&
        typeof value !== 'string' && typeof value !== 'object') {
        throw new TypeError('Invalid value passed to <span class="code">' +
            'set</span>. You passed a value of type ' + typeof value +
            '. Make sure you are passing a number, string, object, or ' +
            'boolean value.');
    }
    if (typeof value === 'number' && !isFinite(value)) {
        throw new TypeError('Non finite value passed to <span class="code">' +
            'set</span>. If you are passing a number, make sure it is a ' +
            'finite number.');
    }
    this.grid[row][col] = value;
};

/**
 * Returns the number of rows in the grid.
 * @returns {number} The number of rows in the grid.
 */
Grid.prototype.numRows = function() {
    return this.grid.length;
};

/**
 * Returns the number of cols in the grid.
 * @returns {number} The number of cols in the grid.
 */
Grid.prototype.numCols = function() {
    return this.grid[0].length;
};

/**
 * Checks whether the given row and col exist in the grid.
 * @param {number} row - Row of the position being checked.
 * @param {number} col - Col of the position being checked.
 * @returns {boolean} Whether or not the given position is in bounds.
 */
Grid.prototype.inBounds = function(row, col) {
    if (arguments.length !== 2) {
        throw new Error('You should pass exactly 2 arguments to <span ' +
            'class="code">inBounds(row, col)</span>');
    }
    if (typeof row !== 'number' || !isFinite(row)) {
        throw new TypeError('Invalid value for <span class="code">row' +
            '</span>. Make sure you are passing finite numbers to <span ' +
            'class="code">inBounds(row, col)</span>.');
    }
    if (typeof col !== 'number' || !isFinite(col)) {
        throw new TypeError('Invalid value for <span class="code">col' +
            '</span>. Make sure you are passing finite numbers to <span ' +
            'class="code">inBounds(row, col)</span>.');
    }

    if (row < 0 || col < 0) {
        return false;
    }
    if (row >= this.numRows() || col >= this.numCols()) {
        return false;
    }
    return true;
};

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
Grid.prototype.toList = function() {
    var list = [];
    for (var i = 0; i < this.grid.length; i++) {
        for (var j = 0; j < this.grid[0].length; j++) {
            var value = this.grid[i][j];
            if (value && value !== 0) {
                list.push([i, j, value]);
            }
        }
    }
    return list;
};

/**
 * Generates a string representation of the Grid.
 * @returns {string} A representatino of a grid of the format
 * "A B C \nD E F \nG H I \n"
 */
Grid.prototype.toString = function() {
    var result = '';
    for (var i = 0; i < this.numRows(); i++) {
        for (var j = 0; j < this.numCols(); j++) {
            result += this.get(i, j) + ' ';
        }
        result += '\n';
    }
    return result;
};

module.exports = Grid;
