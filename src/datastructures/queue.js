/**
 * A Queue is an Array subclass that implements First In, First Out ordering
 * @class
 * @extends Array
 */
class Queue extends Array {
    /**
     * Get the number of objects in the queue.
     * @returns {number} Number of elements in the queue.
     */
    size() {
        return this.length;
    }

    /**
     * Clear the contents of the queue.
     */
    clear() {
        this.length = 0;
    }

    /**
     * Push an object in to the queue.
     * @param {object} obj - Any object to be pushed into the queue.
     */
    enqueue = this.push;

    /**
     * Get the front element of the queue and removes it from the queue.
     * @returns {object} Front element from the queue.
     */
    dequeue = this.shift;

    /**
     * Get the front element of the queue without removing it from the queue.
     * @returns {object} Front element from the queue.
     */
    peek() {
        return this[0];
    }

    /**
     * Checks if the queue isn't empty.
     * @returns {boolean} Whether or not the queue has another element. True if yes.
     */
    hasNext() {
        return !this.isEmpty();
    }

    /**
     * Checks if the queue is empty.
     * @returns {boolean} Whether or not the queue is empty. True if yes.
     */
    isEmpty() {
        return this.length === 0;
    }
}

export default Queue;
