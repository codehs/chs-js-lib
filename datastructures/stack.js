'use strict';

/**
 * Create a FILO stack data structure.
 * @constructor
 */
function Stack() {
    this.stack = [];
}

/**
 * Get the number of objects in the stack.
 * @returns {number} Number of elements in the stack.
 */
Stack.prototype.size = function() {
    return this.stack.length;
};

/**
 * Clear the contents of the stack.
 */
 Stack.prototype.clear = function() {
    this.stack = [];
};

/**
 * Push an object in to the stack.
 * @param {object} obj - Any object to be pushed into the stack.
 */
Stack.prototype.push = function(obj) {
    this.stack.push(obj);
};

/**
 * Get the front element of the stack and removes it from the stack.
 * @returns {object} Front element from the stack.
 */
Stack.prototype.pop = function() {
    var len = this.stack.length;
    var obj = this.stack[len-1];
    this.stack.splice(len-1,1);
    return obj;
};

/**
 * Get the front element of the stack without removing it from the stack.
 * @returns {object} Front element from the stack.
 */
Stack.prototype.peek = function() {
    var len = this.stack.length;
    var obj = this.stack[len-1];
    return obj;
};

/**
 * Checks if the stack isn't empty.
 * @returns {boolean} Whether or not the stack has another element. True if yes.
 */
Stack.prototype.hasNext = function() {
    return this.stack.length !== 0;
};

/**
 * Checks if the stack is empty.
 * @returns {boolean} Whether or not the stack is empty. True if yes.
 */
Stack.prototype.isEmpty = function() {
    return this.stack.length === 0;
};

module.exports = Stack;
