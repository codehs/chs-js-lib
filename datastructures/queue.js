'use strict';

/**
 * Create a FIFO queue data structure.
 * @constructor
 */
function Queue() {
    this.q = [];
}

/**
 * Get the number of objects in the queue.
 * @returns {number} Number of elements in the queue.
 */
Queue.prototype.size = function() {
    return this.q.length;
};

/**
 * Clear the contents of the queue.
 */
Queue.prototype.clear = function() {
    this.q = [];
};

/**
 * Push an object in to the queue.
 * @param {object} obj - Any object to be pushed into the queue.
 */
Queue.prototype.enqueue = function(obj) {
    this.q.push(obj);
};

/**
 * Get the front element of the queue and removes it from the queue.
 * @returns {object} Front element from the queue.
 */
Queue.prototype.dequeue = function() {
    var obj = this.q[0];
    this.q.splice(0,1);
    return obj;
};

/**
 * Get the front element of the queue without removing it from the queue.
 * @returns {object} Front element from the queue.
 */
Queue.prototype.peek = function() {
    var obj = this.q[0];
    return obj;
};

/**
 * Checks if the queue isn't empty.
 * @returns {boolean} Whether or not the queue has another element. True if yes.
 */
Queue.prototype.hasNext = function() {
    return this.q.length !== 0;
};

/**
 * Checks if the queue is empty.
 * @returns {boolean} Whether or not the queue is empty. True if yes.
 */
Queue.prototype.isEmpty = function() {
    return this.q.length === 0;
};

module.exports = Queue;
