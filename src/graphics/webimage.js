import Thing from './thing.js';

const UNDEFINED = -1;
const NOT_LOADED = 0;

const NUM_CHANNELS = 4;
const RED = 0;
const GREEN = 1;
const BLUE = 2;
const ALPHA = 3;

/**
 * A WebImage is used to display an image from a URL or underlying image data.
 * @class
 * @extends Thing
 */
class WebImage extends Thing {
    type = 'WebImage';
    /**
     * @constructor
     * @param {string} filename - Filepath to the image
     * @example
     * const image = new WebImage('https://en.wikipedia.org/static/images/project-logos/enwiki.png');
     */
    constructor(filename) {
        super();
        if (typeof filename !== 'string') {
            throw new TypeError(
                `You must pass a string to \`new WebImage(filename)\` that has the image\'s URL. Received type ${typeof filename}`
            );
        }

        this.setImage(filename);
        /**
         * used to indicate that the internal .data is out of sync with
         * the _hiddenCanvas. when out of sync, the _hiddenCanvas must be
         * updated before drawing
         * @type {boolean}
         * @private
         */
        this._hiddenCanvasOutOfSync = false;
        /**
         * Indicates whether the image has already perfomed initial load
         * @type {boolean}
         */
        this.imageLoaded = false;
    }

    /**
     * Set a function to be called when the WebImage is loaded.
     *
     * @param {function} callback - A function
     */
    loaded(callback) {
        if (this.imageLoaded) {
            callback();
        }
        this.loadfn = callback;
    }

    /**
     * Set the image of the WebImage.
     *
     * @param {string} filename - Filepath to the image
     */
    setImage(filename) {
        if (typeof filename !== 'string') {
            throw new TypeError(
                `You must pass a string to \`setImage(filename)\` that has the image\'s URL. Received type ${typeof filename}`
            );
        }

        this._hiddenCanvas = document.createElement('canvas');
        this._hiddenCanvas.width = 1;
        this._hiddenCanvas.height = 1;
        if (this.image) {
            // if this WebImage had an existing image, it may have an unresolved onload callback.
            // dont allow original callback to resolve, since it might attempt to load pixel data
            // from a potentially empty canvas.
            this.image.onload = null;
        }
        this.image = new Image();
        this.image.crossOrigin = 'anonymous';
        this.image.src = filename;
        this.filename = filename;
        this.width = null;
        this.height = null;
        this.data = NOT_LOADED;
        this.image.onload = () => {
            this.imageLoaded = true;
            this.checkDimensions();
            this.loadPixelData();
            if (this.loadfn) {
                this.loadfn();
            }
        };
    }

    /**
     * Reinforce the dimensions of the WebImage based on the image it displays.
     */
    checkDimensions() {
        if (this.width === null || this.height === null) {
            this.width = this.image.width;
            this.height = this.image.height;
        }
    }

    /**
     * Draws the WebImage in the canvas.
     *
     * @param {CanvasRenderingContext2D} context - Context to be drawn on.
     */
    draw(context) {
        if (this.data === NOT_LOADED) {
            return;
        }
        if (this._hiddenCanvasOutOfSync) {
            this.updateHiddenCanvas();
        }
        super.draw(context, () => {
            context.beginPath();
            // the __hiddenCanvas contains the ImageData, sized as it originally was.
            // in order to perform scaling, the destination width and height are
            // currentWidth * (currentWidth / originalWidth),
            // meaning the current size times the amount the size has changed
            context.drawImage(
                this._hiddenCanvas,
                0,
                0,
                (this.width * this.width) / this.data.width,
                (this.height * this.height) / this.data.height
            );
            context.closePath();
        });
    }

    /**
     * Return the underlying ImageData for this image.
     * Read more at https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
     */
    loadPixelData() {
        if (this.data === NOT_LOADED) {
            this._hiddenCanvas.width = this.width;
            this._hiddenCanvas.height = this.height;
            const context = this._hiddenCanvas.getContext('2d');
            context.drawImage(this.image, 0, 0, this.width, this.height);
            this.data = context.getImageData(0, 0, this.width, this.height);
            this._hiddenCanvasOutOfSync = false;
        }
        return this.data;
    }

    /**
     * Checks if the passed point is contained in the WebImage.
     *
     * @alias WebImage#containsPoint
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {boolean} Whether the passed point is contained in the WebImage.
     */
    _containsPoint(x, y) {
        x += this.width * this.anchor.horizontal;
        y += this.height * this.anchor.vertical;
        return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }

    /**
     * Gets the width of the WebImage.
     *
     * @returns {number} Width of the WebImage.
     */
    getWidth() {
        return this.width;
    }

    /**
     * Gets the height of the WebImage.
     *
     * @returns {number} Height of the WebImage.
     */
    getHeight() {
        return this.height;
    }

    /**
     * Sets the size of the WebImage.
     *
     * @param {number} width - The desired width of the resulting WebImage.
     * @param {number} height - The desired height of the resulting WebImage.
     */
    setSize(width, height) {
        if (arguments.length !== 2) {
            throw new Error('You should pass exactly 2 arguments to `setSize(width, height)`.');
        }
        if (typeof width !== 'number' || !isFinite(width)) {
            throw new TypeError(`Invalid value for \`width\`. Received type ${typeof width}`);
        }
        if (typeof height !== 'number' || !isFinite(height)) {
            throw new TypeError(`Invalid value for \`height\`. Received type ${typeof height}`);
        }
        this.width = Math.max(0, width);
        this.height = Math.max(0, height);
        this._hiddenCanvasOutOfSync = true;
    }

    /* Get and set pixel functions */

    /**
     * Gets a pixel at the given x and y coordinates.
     * Read more here:
     * https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data
     *
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {array} An array of 4 numbers representing the (r,g,b,a) values
     *                     of the pixel at that coordinate.
     */
    getPixel(x, y) {
        if (this.data === NOT_LOADED || x > this.width || x < 0 || y > this.height || y < 0) {
            return [UNDEFINED, UNDEFINED, UNDEFINED, UNDEFINED];
        } else {
            const index = NUM_CHANNELS * (y * this.width + x);
            const pixel = [
                this.data.data[index + RED],
                this.data.data[index + GREEN],
                this.data.data[index + BLUE],
                this.data.data[index + ALPHA],
            ];
            return pixel;
        }
    }

    /**
     * Get the red value at a given location in the image.
     *
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {integer} An integer between 0 and 255.
     */
    getRed(x, y) {
        return this.getPixel(x, y)[RED];
    }

    /**
     * Get the green value at a given location in the image.
     *
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {integer} An integer between 0 and 255.
     */
    getGreen(x, y) {
        return this.getPixel(x, y)[GREEN];
    }

    /**
     * Get the blue value at a given location in the image.
     *
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {integer} An integer between 0 and 255.
     */
    getBlue(x, y) {
        return this.getPixel(x, y)[BLUE];
    }

    /**
     * Get the alpha value at a given location in the image.
     *
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {integer} An integer between 0 and 255.
     */
    getAlpha(x, y) {
        return this.getPixel(x, y)[ALPHA];
    }

    /**
     * Set the `component` value at a given location in the image to `val`.
     *
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @param {integer} component - Integer representing the color value to
     * be set. R, G, B = 0, 1, 2, respectively.
     * @param {integer} val - The desired value of the `component` at the pixel.
     * Must be between 0 and 255.
     */
    setPixel(x, y, component, val) {
        if (this.data !== NOT_LOADED && !(x < 0 || y < 0 || x > this.width || y > this.height)) {
            // Update the pixel value
            const index = NUM_CHANNELS * (y * this.width + x);
            this.data.data[index + component] = val;
            this._hiddenCanvasOutOfSync = true;
        }
    }

    /**
     * Set the red value at a given location in the image to `val`.
     *
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @param {integer} val - The desired value of the red component at the pixel.
     * Must be between 0 and 255.
     */
    setRed(x, y, val) {
        this.setPixel(x, y, RED, val);
    }

    /**
     * Set the green value at a given location in the image to `val`.
     *
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @param {integer} val - The desired value of the green component at the pixel.
     * Must be between 0 and 255.
     */
    setGreen(x, y, val) {
        this.setPixel(x, y, GREEN, val);
    }

    /**
     * Set the blue value at a given location in the image to `val`.
     *
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @param {integer} val - The desired value of the blue component at the pixel.
     * Must be between 0 and 255.
     */
    setBlue(x, y, val) {
        this.setPixel(x, y, BLUE, val);
    }

    /**
     * Set the alpha value at a given location in the image to `val`.
     *
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @param {integer} val - The desired value of the alpha component at the
     * pixel.
     * Must be between 0 and 255.
     */
    setAlpha(x, y, val) {
        this.setPixel(x, y, ALPHA, val);
    }

    /**
     * Replace the underlying ImageData of the WebImage with an instance of the ImageData class.
     * @example
     * const imageData = new ImageData(
     *   new UInt8ClampedArray([255, 0, 0, 255]),
     *   1,
     *   1
     * );
     * const img = new Webimage('www.whatever.com');
     * img.setImageData(imageData);
     * add(img);
     *
     * @param {ImageData} imageData
     */
    setImageData(imageData) {
        this.image = null;
        this.data = imageData;
        this.width = imageData.width;
        this.height = imageData.height;
        this._hiddenCanvasOutOfSync = true;
    }

    /**
     * Update the hidden canvas with the instance's current data.
     * This is automatically called after operations that modify ImageData.
     */
    updateHiddenCanvas() {
        this._hiddenCanvas.width = Math.max(this._hiddenCanvas.width, this.width);
        this._hiddenCanvas.height = Math.max(this._hiddenCanvas.height, this.height);
        const context = this._hiddenCanvas.getContext('2d');
        context.putImageData(this.data, 0, 0);
        this._hiddenCanvasOutOfSync = false;
    }
}

export default WebImage;
