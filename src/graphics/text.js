import Thing from './thing.js';

/**
 * @class Text
 */
export default class Text extends Thing {
    static defaultContext = null;

    type = 'Text';

    /**
     *
     * @param {string|number} label
     * @param {string} font
     * @param {{vertical: 'top'|'center'|'bottom', horizontal: 'left'|'center'|'right'}} alignment
     */
    constructor(
        label,
        font = '20pt Arial',
        alignment = { vertical: 'bottom', horizontal: 'left' }
    ) {
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
        this.alignment = alignment;
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
        this.height = context.measureText('m').width * 1.2; /* No height provided */
    }

    /**
     * Draw the text in the current context.
     *
     * @param {CodeHSGraphics} graphics - Instance of the graphics module.
     */
    draw(graphics) {
        super.draw(graphics, context => {
            context.beginPath();
            context.beginPath();
            context.font = this.font;
            this.resetDimensions();
            let xOffset = 0;
            if (this.alignment.horizontal === 'left') {
                xOffset = 0;
            } else if (this.alignment.horizontal === 'center') {
                xOffset = -this.width / 2;
            } else {
                xOffset = -this.width;
            }
            let yOffset = 0;
            if (this.alignment.vertical === 'top') {
                yOffset = this.height;
            } else if (this.alignment.vertical === 'center') {
                yOffset = this.height / 2;
            } else {
                yOffset = 0;
            }
            context.translate(xOffset, yOffset);
            context.rotate(this.rotation);
            context.fillText(this.label, 0, 0);
            context.closePath();
        });
    }

    describe() {
        return super.describe() + this.label;
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
     * Update the alignment of the text.
     *
     * @param {{vertical: 'top'|'center'|'bottom', horizontal: 'left'|'center'|'right'}} alignment
     */
    setAlignment(alignment) {
        this.alignment = alignment;
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
