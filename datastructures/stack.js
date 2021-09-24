/**
 * Create a FILO stack data structure.
 * @constructor
 */
export default class Stack {
    constructor() {
        this.stack = [];
    }
    /**
     * Get the number of objects in the stack.
     * @returns {number} Number of elements in the stack.
     */
    size() {
        return this.stack.length;
    }

    /**
     * Clear the contents of the stack.
     */
    clear() {
        this.stack = [];
    }

    /**
     * Push an object in to the stack.
     * @param {object} obj - Any object to be pushed into the stack.
     */
    push(obj) {
        this.stack.push(obj);
    }

    /**
     * Get the front element of the stack and removes it from the stack.
     * @returns {object} Front element from the stack.
     */
    pop() {
        var len = this.stack.length;
        var obj = this.stack[len - 1];
        this.stack.splice(len - 1, 1);
        return obj;
    }

    /**
     * Get the front element of the stack without removing it from the stack.
     * @returns {object} Front element from the stack.
     */
    peek() {
        var len = this.stack.length;
        var obj = this.stack[len - 1];
        return obj;
    }

    /**
     * Checks if the stack isn't empty.
     * @returns {boolean} Whether or not the stack has another element. True if yes.
     */
    hasNext() {
        return this.stack.length !== 0;
    }

    /**
     * Checks if the stack is empty.
     * @returns {boolean} Whether or not the stack is empty. True if yes.
     */
    isEmpty() {
        return this.stack.length === 0;
    }
}
