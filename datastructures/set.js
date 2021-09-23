'use strict';

/* global Set */
/* eslint no-extend-native: ["error", { "exceptions": ["Set"] }] */
/* eslint no-undef: "error" */

/**
 * Returns whether the set is empty.
 * @returns {boolean} Whether or not the set is empty.
 */
Set.prototype.isEmpty = function() {
    return this.size === 0;
};

/**
 * Extract a key from an object for the set dictionary.
 * @param {elem} elem - A graphics object to get a key for.
 * @returns {string} A string representing the elen.
 */
Set.prototype.getKey = function(elem) {
    var name = elem;
    if (typeof elem == 'object') name = elem.toString();
    return name;
};

/**
 * Remove an object from a set.
 * @param {elem} elem - A graphics object to be removed.
 */
Set.prototype.remove = function(elementToRemove) {
    var keyToRemove = this.getKey(elementToRemove);
    var self = this;
    this.forEach(function(element) {
        if (self.getKey(element) === keyToRemove) {
            self.delete(element);
        }
    });
};

/**
 * Extract a key from an object for the set dictionary.
 * @param {elem} elem - A graphics object to get a key for.
 * @returns {string} A string representing the elen.
 */
Set.prototype.getKey = function(elem) {
    var name = elem;
    if (typeof elem === 'object') {
        name = elem.toString();
    }
    return name;
};

/**
 * Check if a set contains an elem.
 * @param {elem} elem - A graphics object to be checked.
 * @return {boolean} Whether or not the set contains the elem.
 */
Set.prototype.contains = function(elem) {
    // performs a lazy lookup, so objects are equal
    var key = this.getKey(elem);
    var self = this;
    return this.elems().reduce(function(isPresent, element) {
        return isPresent || key === self.getKey(element);
    }, false);
};

/**
 * Get the items in the set.
 * @returns {dictionary} Dictionary of all items in the set
 */
Set.prototype.elems = function() {
    return Array.from(this.values());
};

/**
 * Creates a union between two sets.
 * @param {Set} otherSet - A set with which a union should be created.
 */
Set.prototype.union = function(otherSet) {
    var union = new Set(this);
    otherSet.forEach(function(element) {
        union.add(element);
    });
    return union;
};

/**
 * Remove items from the set if they are not contained in otherSet.
 * @param {Set} otherSet - A set with which an intersection should be created.
 */
Set.prototype.intersect = function(otherSet) {
    var intersection = new Set();
    var self = this;
    otherSet.forEach(function(element) {
        if (self.has(element)) {
            intersection.add(element);
        }
    });
    return intersection;
};

/**
 * Create a string representation of the set.
 * @returns {string} String representation of the set
 * Follows the syntax 'Set: {elem, elem, elem}'
 */
 Set.prototype.toString = function() {
     var result = 'Set: {';
     this.forEach(function(e) {
         result += e + ', ';
     });
     result += '}';
     return result;
 };

module.exports = Set;
