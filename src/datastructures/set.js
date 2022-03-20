/**
 * The ExtendedSet extends the native Set implementation, adding some functionality.
 * @class
 * @extends Set
 */
class ExtendedSet extends Set {
    /**
     * Returns whether the set is empty.
     * @returns {boolean} Whether or not the set is empty.
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * Extract a key from an object for the set dictionary.
     * @param {elem} elem - A graphics object to get a key for.
     * @returns {string} A string representing the elen.
     */
    getKey(elem) {
        return elem.toString();
    }

    /**
     * Remove an object from a set.
     * @param {elem} elementToRemove - A graphics object to be removed.
     */
    remove = this.delete;

    /**
     * Check if a set contains an elem.
     * @param {elem} elem - A graphics object to be checked.
     * @return {boolean} Whether or not the set contains the elem.
     */
    contains = this.has;

    /**
     * Get the items in the set.
     * @returns {Array} Array of elements in the set.
     */
    elems() {
        return Array.from(this);
    }

    /**
     * Creates a union between two sets.
     * @param {Set} other - A set with which a union should be created.
     * @returns {Set} The union of the two sets
     */
    union(other) {
        return new ExtendedSet([...this, ...other]);
    }

    /**
     * Remove items from the set if they are not contained in otherSet.
     * @param {Set} other - A set with which an intersection should be created.
     */
    intersect(other) {
        return new ExtendedSet([...this].filter(el => other.has(el)));
    }

    /**
     * Create a string representation of the set.
     * Follows the syntax 'Set: {elem, elem, elem}'
     * @returns {string} String representation of the set
     */
    toString() {
        return [...this].reduce((str, el, i) => {
            const lastElement = i === this.size - 1;
            return str + `${el}${lastElement ? '}' : ', '}`;
        }, 'Set: {');
    }
}

export default ExtendedSet;
