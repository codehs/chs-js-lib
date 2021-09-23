'use strict';

var Queue = require('./queue.js');
var Set = require('./set.js');
var Stack = require('./stack.js');

// This follow the convention used in Graphics and Console
// where PUBLIC_CONSTRUCTORS are strings used to access
// the constructors within the namespace.
// Here it seems redundant but in other modules it's used
// for prettifying names.
var PUBLIC_CONSTRUCTORS = ['Queue', 'chsSet', 'Stack'];

module.exports = {
    PUBLIC_CONSTRUCTORS: PUBLIC_CONSTRUCTORS,
    chsSet: Set,
    Stack: Stack,
};
