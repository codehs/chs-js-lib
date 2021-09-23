'use strict';

var Thing = require('./thing.js');

/**
 * @class Text
 * @augments Thing
 * @param {string|number} label - The words of the text.
 * @param {string} font - String of the desired font of the text.
 */
function Text(label, font) {
    if (arguments.length < 1) {
        throw new Error('You should pass at least one argument to <span ' +
            'class="code">new Text(label, font)</span>. <span class="code">' +
            'label</span> is a required parameter.');
    }
    if (typeof label !== 'string' && typeof label !== 'number') {
        throw new TypeError('Invalid value for <span class="code">label' +
            '</span>. You passed a value of type ' + typeof label +
            ' but a string or number is required.');
    }

    font = font === undefined ? '20pt Arial' : font;

    if (typeof font !== 'string') {
        throw new TypeError('Invalid value for <span class="code">font' +
            '</span>. You passed a value of type ' + typeof label +
            ' but a string is required.');
    }

    Thing.call(this);
    this.label = label;
    this.type = 'Text';

    this.font = font;

    // Text needs a graphics context for computing height and width
    // we set this by default on running any graphics program, but
    // then it can get over-written the first time we call draw.
    this.context = null;

    this.resetDimensions();
}

Text.prototype = new Thing();
Text.prototype.constructor = Text;

Text.defaultContext = null;

/**
 * Define a default context for the text.
 * Text objects need access to some 2d graphics context to compute
 * height and width. This might be done before a draw call.
 *
 * @param {CodeHSGraphics} __graphics__ - Instance of the graphics module.
 */
Text.giveDefaultContext = function(__graphics__) {
    Text.defaultContext = __graphics__.getContext();
};

/**
 * Reset the dimensions of the text to the size in the context.
 */
Text.prototype.resetDimensions = function() {
    var context = this.context || Text.defaultContext;
    context.font = this.font;
    this.width = context.measureText(this.label).width;
    this.height = context.measureText('m').width * 1.2; /* No height provided */
};

/**
 * Draw the text in the current context.
 *
 * @param {CodeHSGraphics} __graphics__ - Instance of the graphics module.
 */
Text.prototype.draw = function(__graphics__) {
    var context = __graphics__.getContext();
    this.context = context;
    // http://stackoverflow.com/questions/17125632/html5-canvas-rotate-object-without-moving-coordinates
    context.save();
    context.fillStyle = this.color.toString();
    context.beginPath();
    context.font = this.font;
    this.resetDimensions();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.fillText(this.label, 0, 0);
    context.closePath();
    context.fill();
    context.restore();
};

/**
 * Set the font of the text.
 * Re-calculates the dimensions of the font after font change.
 *
 * @param {string} font - String of the desired font for the text.
 */
Text.prototype.setFont = function(font) {
    if (arguments.length !== 1) {
        throw new Error('You should pass exactly 1 argument to <span ' +
            'class="code">setFont</span>');
    }
    if (typeof font !== 'string') {
        throw new TypeError('Invalid value passed to <span class=' +
            '"code">setFont</span>. You passed a value of type ' +
            typeof label + ', but a string is required.');
    }
    this.font = font;
    this.resetDimensions();
};

/**
 * Set the label of the text.
 * Re-calculates the dimensions of the font after font change.
 *
 * @param {string|number} label - The words of the text.
 */
Text.prototype.setLabel = function(label) {
    if (arguments.length !== 1) {
        throw new Error('You should pass exactly 1 argument to <span ' +
            'class="code">setLabel</span>');
    }
    if (typeof label !== 'string' && typeof label !== 'number') {
        throw new TypeError('Invalid value passed to <span class=' +
            '"code">setLabel</span>. You passed a value of type ' +
            typeof label + ', but a string or number is required.');
    }
    this.label = label;
    this.resetDimensions();
};

/**
 * Equivalent to `setLabel`. Likely created to prevent errors on
 * accidental calls.
 * Re-calculates the dimensions of the font after font change.
 *
 * @param {string|number} label - The words of the text.
 */
Text.prototype.setText = function(label) {
    if (arguments.length !== 1) {
        throw new Error('You should pass exactly 1 argument to <span ' +
            'class="code">setText</span>');
    }
    if (typeof label !== 'string' && typeof label !== 'number') {
        throw new TypeError('Invalid value passed to <span class=' +
            '"code">setText</span>. You passed a value of type ' +
            typeof label + ', but a string or number is required.');
    }
    this.label = label;
    this.resetDimensions();
};

/**
 * Returns the label of a Text object.
 *
 * @returns {string} String of the Text's current label.
 */
Text.prototype.getLabel = function() {
    return this.label;
};

/**
 * Equivalent to `getLabel`.  Likely created to prevent errors on accidental
 * calls.
 * Returns the label of a Text object.
 *
 * @returns {string} String of the Text's current label.
 */
Text.prototype.getText = function() {
    return this.label;
};

/**
 * Returns the width of a Text object.
 *
 * @returns {number} The width of the text.
 */
Text.prototype.getWidth = function() {
    return this.width;
};

/**
 * Returns the height of a Text object.
 *
 * @returns {number} The height of the text.
 */
Text.prototype.getHeight = function() {
    return this.height;
};

/**
 * Checks if the passed point is contained in the text.
 *
 * @param {number} x - The x coordinate of the point being tested.
 * @param {number} y - The y coordinate of the point being tested.
 * @returns {boolean} Whether the passed point is contained in the text.
 */
Text.prototype.containsPoint = function(x, y) {
    return x >= this.x && x <= this.x + this.width &&
           y <= this.y && y >= this.y - this.height;
};

module.exports = Text;
