import Thing from './thing.js';

/**
 * Text is used to display words on the canvas.
 * @class
 * @extends Thing
 */
class Text extends Thing {
    static defaultContext = null;

    type = 'Text';
    anchor = { horizontal: 0, vertical: 1 };

    /**
     * Constructs a text object.
     * @constructor
     * @param {string|number} label
     * @param {string} font
     * @example
     * const label = new Text('Hello, World', '15pt Arial);
     *
     */
    constructor(label, font = '20pt Arial') {
        super();
        if (arguments.length < 1) {
            throw new Error(
                'You should pass at least one argument to `new Text(label, font)`. `label` is a required parameter.'
            );
        }
        if (typeof label !== 'string' && typeof label !== 'number') {
            throw new TypeError(
                'Invalid value for `label' +
                    '`. You passed a value of type ' +
                    typeof label +
                    ' but a string or number is required.'
            );
        }

        if (typeof font !== 'string') {
            throw new TypeError(
                'Invalid value for `font' +
                    '`. You passed a value of type ' +
                    typeof label +
                    ' but a string is required.'
            );
        }
        this.label = label;
        this.font = font;
        this.resetDimensions();
    }

    /**
     * Reset the dimensions of the text to the size in the context.
     */
    resetDimensions() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = this.font;
        this.width = context.measureText(this.label).width;
        this.height = context.measureText('m').width * 1.2;
    }

    /**
     * Draws the text in the canvas.
     *
     * @private
     * @param {CanvasRenderingContext2D} context - Context to draw on.
     */
    draw(context) {
        this.resetDimensions();
        super.draw(context, () => {
            // text always draw above its position, so to keep anchor behavior consistent,
            // translate down by height
            context.translate(0, this.height);
            context.font = this.font;
            context.beginPath();
            context.fillText(this.label, 0, 0);
            context.translate(0, -this.height);
        });
    }

    describe() {
        return super.describe() + ' ' + this.label + ` in font ${this.font}.`;
    }

    /**
     * Set the font of the text.
     * Re-calculates the dimensions of the font after font change.
     *
     * @param {string} font - String of the desired font for the text.
     */
    setFont(font) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setFont`');
        }
        if (typeof font !== 'string') {
            throw new TypeError(
                'Invalid value passed to `setFont`. You passed a value of type ' +
                    typeof font +
                    ', but a string is required.'
            );
        }
        this.font = font;
        this.resetDimensions();
    }

    /**
     * Set the label of the text.
     * Re-calculates the dimensions of the font after font change.
     *
     * @param {string|number} label - The words of the text.
     */
    setLabel(label) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setLabel`');
        }
        if (typeof label !== 'string' && typeof label !== 'number') {
            throw new TypeError(
                'Invalid value passed to `setLabel`. You passed a value of type ' +
                    typeof label +
                    ', but a string or number is required.'
            );
        }
        this.label = label;
        this.resetDimensions()
    }

    /**
     * Equivalent to `setLabel`. Likely created to prevent errors on
     * accidental calls.
     * Re-calculates the dimensions of the font after font change.
     *
     * @param {string|number} label - The words of the text.
     */
    setText(label) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setText`');
        }
        if (typeof label !== 'string' && typeof label !== 'number') {
            throw new TypeError(
                'Invalid value passed to `setText`. You passed a value of type ' +
                    typeof label +
                    ', but a string or number is required.'
            );
        }
        this.label = label;
        this.resetDimensions()
    }

    /**
     * Returns the label of a Text object.
     *
     * @returns {string} String of the Text's current label.
     */
    getLabel() {
        return this.label;
    }

    /**
     * Equivalent to `getLabel`.  Likely created to prevent errors on accidental
     * calls.
     * Returns the label of a Text object.
     *
     * @returns {string} String of the Text's current label.
     */
    getText() {
        return this.label;
    }

    /**
     * Returns the width of a Text object.
     *
     * @returns {number} The width of the text.
     */
    getWidth() {
        return this.width;
    }

    /**
     * Returns the height of a Text object.
     *
     * @returns {number} The height of the text.
     */
    getHeight() {
        return this.height;
    }

    /**
     * Checks if the passed point is contained in the text.
     *
     * @alias Text#containsPoint
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {boolean} Whether the passed point is contained in the text.
     */
    _containsPoint(x, y) {
        x += this.width * this.anchor.horizontal;
        y -= this.height * (1 - this.anchor.vertical);
        return x >= this.x && x <= this.x + this.width && y <= this.y && y >= this.y - this.height;
    }
}

export default Text;
