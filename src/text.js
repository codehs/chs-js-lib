import Thing from './thing.js';

/**
 * @class Text
 * @augments Thing
 * @param {string|number} label - The words of the text.
 * @param {string} font - String of the desired font of the text.
 */
export default class Text extends Thing {
    static defaultContext = null;

    constructor(label, font) {
        super();
        if (arguments.length < 1) {
            throw new Error(
                'You should pass at least one argument to <span ' +
                    'class="code">new Text(label, font)`. `' +
                    'label` is a required parameter.'
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

        font = font === undefined ? '20pt Arial' : font;

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
    }

    /**
     * Define a default context for the text.
     * Text objects need access to some 2d graphics context to compute
     * height and width. This might be done before a draw call.
     *
     * @param {CodeHSGraphics} __graphics__ - Instance of the graphics module.
     */

    static giveDefaultContext(__graphics__) {
        Text.defaultContext = __graphics__.getContext();
    }

    /**
     * Reset the dimensions of the text to the size in the context.
     */
    resetDimensions(context) {
        context.font = this.font;
        this.width = context.measureText(this.label).width;
        this.height = context.measureText('m').width * 1.2; /* No height provided */
    }

    /**
     * Draw the text in the current context.
     *
     * @param {CodeHSGraphics} graphics - Instance of the graphics module.
     */
    draw(graphics) {
        var context = graphics.getContext();
        this.context = context;
        // http://stackoverflow.com/questions/17125632/html5-canvas-rotate-object-without-moving-coordinates
        context.save();
        context.fillStyle = this.color.toString();
        context.beginPath();
        context.font = this.font;
        this.resetDimensions(context);
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.fillText(this.label, 0, 0);
        context.closePath();
        context.fill();
        context.restore();
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
                    typeof label +
                    ', but a string is required.'
            );
        }
        this.font = font;
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
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {boolean} Whether the passed point is contained in the text.
     */
    containsPoint(x, y) {
        return x >= this.x && x <= this.x + this.width && y <= this.y && y >= this.y - this.height;
    }
}
