import Thing from './thing.js';

const UNDEFINED = -1;
const NOT_LOADED = 0;

const NUM_CHANNELS = 4;
const RED = 0;
const GREEN = 1;
const BLUE = 2;
const ALPHA = 3;

/**
 * @constructor
 * @augments Thing
 * @param {string} filename - Filepath to the image
 */
export default class WebImage extends Thing {
    /**
     * @constructor
     * @param {string} filename
     */
    constructor(filename) {
        super();
        if (typeof filename !== 'string') {
            throw new TypeError(
                `You must pass a string to \`new WebImage(filename)\` that has the image\'s URL. Received type ${typeof filename}`
            );
        }

        this.setImage(filename);
    }

    /**
     * Set a function to be called when the WebImage is loaded.
     *
     * @param {function} callback - A function
     */
    loaded(callback) {
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

        this.image = new Image();
        this.image.crossOrigin = true;
        this.image.src = filename;
        this.filename = filename;
        this.width = NOT_LOADED;
        this.height = NOT_LOADED;
        this.data = NOT_LOADED;
        this.image.onload = () => {
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
        if (this.data === NOT_LOADED) {
            this.width = this.image.width;
            this.height = this.image.height;
        }
    }

    /**
     * Draws the WebImage in the canvas.
     *
     * @param {CodeHSGraphics} __graphics__ - Instance of the __graphics__ module.
     */
    draw(__graphics__) {
        if (this.data === NOT_LOADED) {
            return;
        }
        const context = __graphics__.getContext('2d');
        context.save();
        // Scale and translate
        // X scale, X skew, Y scew, Y scale, X position, Y position
        context.setTransform(1, 0, 0, 1, this.x + this.width / 2, this.y + this.height / 2);
        context.rotate(this.rotation);
        context.drawImage(
            this._hiddenCanvas,
            -this.width / 2,
            -this.height / 2,
            this.width,
            this.height
        );
        context.restore();
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
        }
        return this.data;
    }

    /**
     * Checks if the passed point is contained in the WebImage.
     *
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {boolean} Whether the passed point is contained in the WebImage.
     */
    containsPoint(x, y) {
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
            this.updateHiddenCanvas();
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
        this.updateHiddenCanvas();
    }

    /**
     * Update the hidden canvas with the instance's current data.
     * This is automatically called after operations that modify ImageData.
     */
    updateHiddenCanvas() {
        this._hiddenCanvas.width = this.width;
        this._hiddenCanvas.height = this.height;
        const context = this._hiddenCanvas.getContext('2d');
        context.putImageData(this.data, 0, 0);
    }
}
