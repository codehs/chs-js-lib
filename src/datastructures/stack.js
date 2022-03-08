/**
 * A Stack is a subclass of an Array that implements First In, Last Out ordering.
 * @class
 * @extends Array
 */
class Stack extends Array {
    /**
     * Get the number of objects in the stack.
     * @returns {number} Number of elements in the stack.
     */
    size() {
        return this.length;
    }

    /**
     * Clear the contents of the stack.
     */
    clear() {
        this.length = 0;
    }

    /**
     * Get the front element of the stack without removing it from the stack.
     * @returns {any} Front element from the stack.
     */
    peek() {
        return this[this.length - 1];
    }

    /**
     * Checks if the stack isn't empty.
     * @returns {boolean} Whether or not the stack has another element. True if yes.
     */
    hasNext() {
        return !this.isEmpty();
    }

    /**
     * Checks if the stack is empty.
     * @returns {boolean} Whether or not the stack is empty. True if yes.
     */
    isEmpty() {
        return this.length === 0;
    }
}

export default Stack;
