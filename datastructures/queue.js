'use strict';

/**
 * Create a FIFO queue data structure.
 * @constructor
 */
export default class Queue {
    constructor() {
        this._q = [];
    }

    /**
     * Get the number of objects in the queue.
     * @returns {number} Number of elements in the queue.
     */
    size() {
        return this._q.length;
    }

    /**
     * Clear the contents of the queue.
     */
    clear() {
        this._q = [];
    }

    /**
     * Push an object in to the queue.
     * @param {object} obj - Any object to be pushed into the queue.
     */
    enqueue(obj) {
        this._q.push(obj);
    }

    /**
     * Get the front element of the queue and removes it from the queue.
     * @returns {object} Front element from the queue.
     */
    dequeue() {
        var obj = this._q[0];
        this._q.splice(0, 1);
        return obj;
    }

    /**
     * Get the front element of the queue without removing it from the queue.
     * @returns {object} Front element from the queue.
     */
    peek() {
        var obj = this._q[0];
        return obj;
    }

    /**
     * Checks if the queue isn't empty.
     * @returns {boolean} Whether or not the queue has another element. True if yes.
     */
    hasNext() {
        return this._q.length !== 0;
    }

    /**
     * Checks if the queue is empty.
     * @returns {boolean} Whether or not the queue is empty. True if yes.
     */
    isEmpty() {
        return this._q.length === 0;
    }
}
