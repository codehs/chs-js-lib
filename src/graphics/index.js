import Manager, { DEFAULT_UPDATE_INTERVAL } from '../manager.js';
import Thing from './thing.js';
import WebVideo from './webvideo.js';

export const FULLSCREEN_PADDING = 5;
export const KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE =
    'position: absolute; width: 1px; height: 1px; top: -10px; overflow: hidden;';

export const HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE =
    KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE + 'display: none;';

export const HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_ID = id => `${id}focusbutton`;

/** @type {Object.<string, GraphicsManager>} */
export let GraphicsInstances = {};
/** @type {Array.<any>} */
export let pressedKeys = [];
let graphicsInstanceID = 0;

/**
 * Class for interacting with Graphics.
 * @class
 */
class GraphicsManager extends Manager {
    elementPool = [];
    elementPoolSize = 0;
    accessibleDOMElements = [];
    /**
     * The ratio of physical pixels to CSS pixels for the current device.
     * This allows the canvas to be scaled for higher resolution drawing.
     * For example, a devicePixelRatio of 2 indicates that the device will use
     * 2 physical pixels to draw a single css pixel.
     * https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
     * @private
     * @type {number}
     */
    devicePixelRatio = window.devicePixelRatio ?? 1;

    /**
     * Set up an instance of the graphics library.
     * @constructor
     * @param {Object} options - Options, primarily .canvas, the selector
     *      string for the canvas.
     *      If multiple are returned, we'll take the first one.
     *      If none is passed, we'll look for any canvas
     *      tag on the page.
     */
    constructor(options = {}) {
        super(options);
        this.resetAllState();
        this.setCurrentCanvas(options.canvas);
        this.onError = options.onError || undefined;
        this.fullscreenMode = false;
        this.fpsInterval = 1000 / DEFAULT_UPDATE_INTERVAL;
        this.lastDrawTime = Date.now();
        /**
         * Whether the user is using the keyboard to navigate the page.
         * This is used to toggle whether the hidden DOM elements used for keyboard
         * navigation should show up.
         * @private
         * @type {boolean}
         */
        this.userNavigatingWithKeyboard = false;
        this.addEventListeners();
        this.shouldUpdate = options.shouldUpdate ?? true;
        GraphicsInstances[graphicsInstanceID++] = this;
    }

    onKeyDown = e => {
        const index = pressedKeys.indexOf(e.keyCode);
        if (index === -1) {
            pressedKeys.push(e.keyCode);
        }

        if (e.key === 'Tab') {
            for (let i = 0; i < this.elementPoolSize; i++) {
                const elem = this.elementPool[i];
                if (!elem._hasAccessibleDOMElement) {
                    this.createAccessibleDOMElement(elem);
                }
            }
            this.userNavigatingWithKeyboard = true;
            this.showKeyboardNavigationDOMElements();
        }

        this.keyDownCallback?.(e);
        return true;
    };

    onKeyUp = e => {
        const index = pressedKeys.indexOf(e.keyCode);
        if (index !== -1) {
            pressedKeys.splice(index, 1);
        }
        this.keyUpCallback?.(e);
    };

    onResize = e => {
        // https://developer.mozilla.org/en-US/docs/Web/Events/resize
        // Throttle the resize event handler since it fires at such a rapid rate
        // Only respond to the resize event if there's not already a response queued up
        if (!this._resizeTimeout) {
            this._resizeTimeout = setTimeout(() => {
                this._resizeTimeout = null;
                this.fullscreenMode && this.setFullscreen?.();
            }, DEFAULT_UPDATE_INTERVAL);
        }
    };

    onOrientationChange = e => {
        this.deviceOrientationCallback?.(e);
    };

    onDeviceMotion = e => {
        this.deviceMotionCallback?.(e);
    };

    /**
     * Add all handlers to the window for triggering functions on the instance.
     */
    addEventListeners() {
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('keyup', this.onKeyUp);
        window.addEventListener('resize', this.onResize);

        /** MOBILE DEVICE EVENTS ****/
        if (window.DeviceOrientationEvent) {
            window.addEventListener('orientationchange', this.onOrientationChange);
        }

        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', this.onDeviceMotion);
        }
    }

    /**
     * Remove all handlers from the window and clean up any memory.
     */
    cleanup() {
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('keyup', this.onKeyUp);
        window.removeEventListener('resize', this.onResize);
        window.removeEventListener('orientationchange', this.onOrientationChange);
        window.removeEventListener('devicemotion', this.onDeviceMotion);
    }

    configure(options = {}) {
        this.onError = options.onError || undefined;
    }

    /**
     * Get all living elements.
     */
    getElements() {
        return this.elementPool.filter(element => element.alive);
    }

    /**
     * Add an element to the graphics instance.
     * @param {Thing} elem - A subclass of Thing to be added to the graphics instance.
     */
    add(elem) {
        elem.alive = true;
        this.elementPool[this.elementPoolSize++] = elem;
    }

    /**
     * Creates a hidden DOM element that can be navigated with a screen reader.
     * @param {Thing} elem
     */
    createAccessibleDOMElement(elem) {
        const button = document.createElement('button');
        // https://webaim.org/techniques/css/invisiblecontent/
        button.style = this.userNavigatingWithKeyboard
            ? KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE
            : HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE;

        button.id = HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_ID(elem._id);

        button.onfocus = () => {
            elem.focus();
            button.textContent = elem.describe?.() ?? 'An unknown graphics element';
        };
        button.onblur = () => {
            elem.unfocus();
        };
        button.onkeydown = e => {
            if (e.code === 'Space' && !e.repeat) {
                const event = new Event('mousedown');
                event.getX = () => elem.x;
                event.getY = () => elem.y;
                this.mouseDownCallback?.(event);
            }
        };
        button.onkeyup = e => {
            if (e.code === 'Space') {
                const event = new Event('mouseup');
                event.getX = () => elem.x;
                event.getY = () => elem.y;
                this.mouseUpCallback?.(event);
            }
        };
        document.body.appendChild(button);
        this.accessibleDOMElements.push(button);
        elem._hasAccessibleDOMElement = true;
    }

    exitKeyboardNavigation() {
        this.userNavigatingWithKeyboard = false;
        this.hideKeyboardNavigationDOMElements();
    }

    showKeyboardNavigationDOMElements() {
        this.accessibleDOMElements.forEach(
            element => (element.style = KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE)
        );
    }

    hideKeyboardNavigationDOMElements() {
        this.accessibleDOMElements.forEach(
            element => (element.style = HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE)
        );
    }

    /**
     * Record a click.
     */
    waitForClick() {
        this.clickCount++;
    }

    /**
     * Assign a function as a callback for click (mouse down, mouse up) events.
     * @param {function} fn - A callback to be triggered on click events.
     */
    mouseClickMethod(fn) {
        this.clickCallback = this.withErrorHandler(fn);
    }

    /**
     * Assign a function as a callback for mouse move events.
     * @param {function} fn - A callback to be triggered on mouse move events.
     */
    mouseMoveMethod(fn) {
        this.moveCallback = this.withErrorHandler(fn);
    }

    /**
     * Assign a function as a callback for mouse down events.
     * @param {function} fn - A callback to be triggered on mouse down.
     */
    mouseDownMethod(fn) {
        this.mouseDownCallback = this.withErrorHandler(fn);
    }

    /**
     * Assign a function as a callback for mouse up events.
     * @param {function} fn - A callback to be triggered on mouse up events.
     */
    mouseUpMethod(fn) {
        this.mouseUpCallback = this.withErrorHandler(fn);
    }

    /**
     * Assign a function as a callback for drag events.
     * @param {function} fn - A callback to be triggered on drag events.
     */
    mouseDragMethod(fn) {
        this.dragCallback = this.withErrorHandler(fn);
    }

    /**
     * Assign a function as a callback for keydown events.
     * @param {function} fn - A callback to be triggered on keydown events.
     */
    keyDownMethod(fn) {
        this.keyDownCallback = this.withErrorHandler(fn);
    }

    /**
     * Assign a function as a callback for key up events.
     * @param {function} fn - A callback to be triggered on key up events.
     */
    keyUpMethod(fn) {
        this.keyUpCallback = this.withErrorHandler(fn);
    }

    /**
     * Assign a function as a callback for device orientation events.
     * @param {function} fn - A callback to be triggered on device orientation
     *                        events.
     */
    deviceOrientationMethod(fn) {
        this.deviceOrientationCallback = this.withErrorHandler(fn);
    }

    /**
     * Assign a function as a callback for device motion events.
     * @param {function} fn - A callback to be triggered device motion events.
     */
    deviceMotionMethod(fn) {
        this.deviceMotionCallback = this.withErrorHandler(fn);
    }

    /**
     * Check if a key is currently pressed
     * @param {integer} keyCode - Key code of key being checked.
     * @returns {boolean} Whether or not that key is being pressed.
     */
    isKeyPressed(keyCode) {
        return pressedKeys.indexOf(keyCode) !== -1;
    }

    /**
     * Get the width of the entire graphics canvas.
     * @returns {float} The width of the canvas.
     */
    getWidth() {
        const canvas = this.getCanvas();
        return parseFloat(canvas.getAttribute('width') / this.devicePixelRatio);
    }

    /**
     * Get the height of the entire graphics canvas.
     * @returns {float} The height of the canvas.
     */
    getHeight() {
        const canvas = this.getCanvas();
        return parseFloat(canvas.getAttribute('height') / this.devicePixelRatio);
    }

    /**
     * Stop all timers.
     */
    stopAllTimers() {
        for (let i = 1; i < 99999; i++) {
            window.clearInterval(i);
        }
        super.stopAllTimers();
        this.setMainTimer();
    }

    /**
     * Create a new timer.
     * {@link Manager#setTimer}
     * @param {function} fn - Function to be called at intervals.
     * @param {integer} time - Time interval to call function `fn`
     * @param {dictionary} data - Any data associated with the timer.
     * @param {string} name - Name of this timer.
     */
    setTimer(fn, time, data, name) {
        if (arguments.length < 2) {
            throw new Error(
                '2 parameters required for `' +
                    'setTimer`, ' +
                    arguments.length +
                    ' found. You must ' +
                    'provide a callback function and ' +
                    'a number representing the time delay ' +
                    'to `setTimer`.'
            );
        }
        if (typeof fn !== 'function') {
            throw new TypeError(
                'Invalid callback function. ' +
                    'Make sure you are passing an actual function to ' +
                    '`setTimer`.'
            );
        }
        if (typeof time !== 'number' || !isFinite(time)) {
            throw new TypeError(
                'Invalid value for time delay. ' +
                    'Make sure you are passing a finite number to ' +
                    '`setTimer` for the delay.'
            );
        }

        if (this.waitingForClick()) {
            this.delayedTimers.push({
                fn: fn,
                time: time,
                data: data,
                clicks: this.clickCount,
                name: name,
            });
        } else {
            return super.setTimer(this.withErrorHandler(fn), time, data, name ?? fn.name);
        }
    }

    /**
     * Set the background color of the canvas.
     * @param {Color} color - The desired color of the canvas.
     */
    setBackgroundColor(color) {
        this.backgroundColor = color;
    }

    /**
     * Clear everything from the canvas.
     */
    clear(context) {
        var ctx = context || this.getContext();
        ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    }

    /**
     * Get an element at a specific point.
     * If several elements are present at the position, return the one put there first.
     * @param {number} x - The x coordinate of a point to get element at.
     * @param {number} y - The y coordinate of a point to get element at.
     * @returns {Thing|null} The object at the point (x, y), if there is one (else null).
     */
    getElementAt(x, y) {
        for (let i = this.elementPool.length; i--; ) {
            if (this.elementPool[i].alive && this.elementPool[i].containsPoint(x, y)) {
                return this.elementPool[i];
            }
        }
        return null;
    }

    getElementsAt(x, y) {
        return this.elementPool.filter(e => {
            return e.alive && e.containsPoint(x, y);
        });
    }

    /**
     * Check if an element exists with the given paramenters.
     * @param {object} params - Dictionary of parameters for the object.
     *      Includes x, y, heigh, width, color, radius, label and type.
     * @returns {boolean}
     */
    elementExistsWithParameters(params) {
        for (let i = this.elementPool.length; i--; ) {
            const elem = this.elementPool[i];
            const checkedParams = Object.entries(params).map(([name, value]) => {
                return value === elem[name];
            });

            if (elem.alive && checkedParams.every(param => param)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Remove all elements from the canvas.
     */
    removeAll() {
        this.stopAllVideo();
        this.elementPool = [];
        this.elementPoolSize = 0;
        this.accessibleDOMElements.forEach(node => node.remove());
        this.accessibleDOMElements = [];
    }

    /**
     * Remove a specific element from the canvas.
     * @param {Thing} elem - The element to be removed from the canvas.
     */
    remove(elem) {
        if (elem instanceof WebVideo) {
            elem.stop();
        }
        elem.alive = false;
        // mark the element as having invalidated sort, so in the case that it's
        // add()ed later, a re-sort will happen and trigger an update in the pool size
        elem._sortInvalidated = true;
        if (elem._hasAccessibleDOMElement) {
            const focusButtonID = HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_ID(elem._id);
            document.getElementById(focusButtonID)?.remove();
            elem._hasAccessibleDOMElement = false;
        }
    }

    /**
     * Resizes the canvas, creating a temporary canvas to prevent flickering and
     * perform size adjustments based on the devices's devicePixelRatio.
     * @param {number} w
     * @param {number} h
     */
    _resize(w, h) {
        w = Math.floor(w);
        h = Math.floor(h);
        const canvas = this.getCanvas();
        // prevent flickering effect by saving the canvas and immediately drawing back.
        // this will be cleared in redraw(), but it prevents a jarring
        // flickering effect.
        const temporaryCanvas = document.createElement('canvas');
        temporaryCanvas.width = canvas.width;
        temporaryCanvas.height = canvas.height;
        temporaryCanvas.style.width = `${canvas.width / this.devicePixelRatio}px`;
        temporaryCanvas.style.height = `${canvas.height / this.devicePixelRatio}px`;
        const temporaryContext = temporaryCanvas.getContext('2d');
        temporaryContext.drawImage(canvas, 0, 0);

        canvas.width = w * this.devicePixelRatio;
        canvas.height = h * this.devicePixelRatio;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        const context = this.getContext();
        context.drawImage(temporaryCanvas, 0, 0);
        context.scale(this.devicePixelRatio, this.devicePixelRatio);
        temporaryCanvas.remove();
    }

    /**
     * Set the size of the canvas.
     * @param {number} w - Desired width of the canvas.
     * @param {number} h - Desired height of the canvas.
     */
    setSize(w, h) {
        this.fullscreenMode = false;
        this._resize(w, h);
    }

    /**
     * Set the canvas to take up the entire parent element
     */
    setFullscreen() {
        this.fullscreenMode = true; // when this is true, canvas will resize with parent
        const canvas = this.getCanvas();
        const width = canvas.parentElement.offsetWidth - FULLSCREEN_PADDING;
        const height = canvas.parentElement.offsetHeight - FULLSCREEN_PADDING;
        this._resize(width, height);
    }

    /**
     * Resets all the timers to time 0.
     */
    resetAllTimers() {
        for (var cur in this.timers) {
            clearInterval(this.timers[cur]);
        }
    }

    stopAllVideo() {
        for (var i = this.elementPool.length; i--; ) {
            if (this.elementPool[i] instanceof WebVideo) {
                this.elementPool[i].stop();
            }
        }
    }

    /**
     * Resets the graphics instance to a clean slate.
     */
    resetAllState() {
        this.backgroundColor = null;
        this.removeAll();
        this.clickCallback = null;
        this.moveCallback = null;
        this.mouseDownCallback = null;
        this.mouseUpCallback = null;
        this.dragCallback = null;
        this.keyDownCallback = null;
        this.keyUpCallback = null;
        this.deviceOrientationCallback = null;
        this.deviceMotionCallback = null;

        // A fast hash from timer key to timer interval #
        this.timers = {};

        // A useful list to store information about all timers.
        this.timersList = [];

        this.clickCount = 0;
        this.delayedTimers = [];

        this.fullscreenMode = false;
    }

    /**
     * Reset all timers to 0 and clear timers and canvas.
     */
    fullReset() {
        this.stopAllVideo();
        this.resetAllTimers();
        this.resetAllState();
        this.setMainTimer();
    }

    /**
     * Return if the graphics canvas exists.
     * @returns {boolean} Whether or not the canvas exists.
     */
    canvasExists() {
        return this.getCanvas() !== null;
    }

    /**
     * Return the current canvas we are using. If there is no
     * canvas on the page this will return null.
     * @returns {HTMLCanvasElement} The current canvas.
     */
    getCanvas() {
        return this.currentCanvas;
    }

    /**
     * Set the current canvas we are working with. If no canvas
     * tag matches the selectorv then we will just have the current
     * canvas set to null.
     * @param {string} canvasSelector - String representing canvas class or ID.
     *      Selected with jQuery.
     */
    setCurrentCanvas(canvasSelector) {
        let currentCanvas;
        if (canvasSelector) {
            currentCanvas = document.querySelector(canvasSelector);
        } else {
            currentCanvas = document.getElementsByTagName('canvas')[0];
        }
        if (!currentCanvas) {
            currentCanvas = document.createElement('canvas');
            currentCanvas.width = 400;
            currentCanvas.height = 400;
            document.body.appendChild(currentCanvas);
        }
        this.currentCanvas = currentCanvas;
        this.setSize(currentCanvas.width, currentCanvas.height);

        // On changing the canvas reset the state.
        this.fullReset();
        this.setup();
    }

    /**
     * Draw the background color for the current object.
     */
    drawBackground() {
        if (this.backgroundColor) {
            var context = this.getContext();
            context.fillStyle = this.backgroundColor;
            context.beginPath();
            context.rect(0, 0, this.getWidth(), this.getHeight());
            context.closePath();
            context.fill();
        }
    }

    /**
     * Return the 2D graphics context for this graphics
     * object, or null if none exists.
     * @returns {CanvasRenderingContext2D} The 2D graphics context.
     */
    getContext() {
        return this.getCanvas()?.getContext?.('2d');
    }

    /**
     * Return the RGBA value of the pixel at the x, y coordinate.
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     * @returns {Array<number>} pixel - the [r, g, b, a] values for the pixel.
     */
    getPixel(x, y) {
        const context = this.getContext();
        x *= this.devicePixelRatio;
        y *= this.devicePixelRatio;
        const pixelData = context.getImageData(x, y, 1, 1).data;
        const index = 0;
        return [
            pixelData[index + 0],
            pixelData[index + 1],
            pixelData[index + 2],
            pixelData[index + 3],
        ];
    }

    /**
     * Redraw this graphics canvas.
     */
    redraw() {
        this.clear();
        this.drawBackground();
        let elem;
        let sortPool;
        const context = this.getContext();
        for (let i = 0; i < this.elementPoolSize; i++) {
            elem = this.elementPool[i];

            if (elem._sortInvalidated) {
                sortPool = true;
                elem._sortInvalidated = false;
            }
            if (elem.alive) {
                elem.draw(context);
            } else {
                sortPool = true;
            }
        }
        // sort all dead elements to the end of the pool
        // and all elements with lower layer before elements
        // with higher layer
        if (sortPool) {
            this.elementPool.sort((a, b) => b.alive - a.alive || a.layer - b.layer);
            let lastAliveElementIndex = -1;
            for (let i = this.elementPool.length - 1; i >= 0; i--) {
                if (this.elementPool[i].alive) {
                    lastAliveElementIndex = i;
                    break;
                }
            }
            this.elementPoolSize = lastAliveElementIndex + 1;
        }
    }

    /**
     * Set the main timer for graphics.
     */
    setMainTimer() {
        this.shouldUpdate = true;
        this.update();
    }

    update() {
        if (this.shouldUpdate) {
            requestAnimationFrame(this.update.bind(this));
        }
        this.now = Date.now();
        const elapsed = this.now - this.lastDrawTime;
        if (elapsed > this.fpsInterval) {
            this.lastDrawTime = this.now - (elapsed % this.fpsInterval);
            this.redraw();
        }
    }

    /**
     * Whether the graphics instance is waiting for a click.
     * @returns {boolean} Whether or not the instance is waiting for a click.
     */
    waitingForClick() {
        return this.clickCount !== 0;
    }

    /**
     * Whether the selected canvas already has an instance associated.
     */
    canvasHasInstance(canvas) {
        let instance;
        for (let i = 0; i < allGraphicsInstances.length; i++) {
            instance = allGraphicsInstances[i];
            if (instance.instanceId !== this.instanceId && instance.getCanvas() === canvas) {
                return instance.instanceId;
            }
        }
        return null;
    }

    /**
     * Set up the graphics instance to prepare for interaction
     */
    setup() {
        var drawingCanvas = this.getCanvas();

        drawingCanvas.onclick = e => {
            if (this.waitingForClick()) {
                this.clickCount--;

                for (var i = 0; i < this.delayedTimers.length; i++) {
                    var timer = this.delayedTimers[i];
                    timer.clicks--;
                    if (timer.clicks === 0) {
                        this.setTimer(this.withErrorHandler(timer.fn), timer.time, timer.data);
                    }
                }
                return;
            }

            if (this.clickCallback) {
                this.clickCallback(e);
            }
        };

        var mouseDown = false;

        drawingCanvas.onmousemove = this.withErrorHandler(e => {
            if (this.userNavigatingWithKeyboard) {
                this.exitKeyboardNavigation();
            }
            if (this.moveCallback) {
                this.moveCallback(e);
            }
            if (mouseDown && this.dragCallback) {
                this.dragCallback(e);
            }
        });

        drawingCanvas.onmousedown = e => {
            if (this.userNavigatingWithKeyboard) {
                this.exitKeyboardNavigation();
            }
            mouseDown = true;
            if (this.mouseDownCallback) {
                this.mouseDownCallback(e);
            }
        };

        drawingCanvas.onmouseup = e => {
            if (this.userNavigatingWithKeyboard) {
                this.exitKeyboardNavigation();
            }
            mouseDown = false;
            if (this.mouseUpCallback) {
                this.mouseUpCallback(e);
            }
        };

        drawingCanvas.ontouchmove = e => {
            if (this.userNavigatingWithKeyboard) {
                this.exitKeyboardNavigation();
            }
            e.preventDefault();
            if (this.dragCallback) {
                this.dragCallback(e);
            } else if (this.moveCallback) {
                this.moveCallback(e);
            }
        };

        drawingCanvas.ontouchstart = e => {
            if (this.userNavigatingWithKeyboard) {
                this.exitKeyboardNavigation();
            }
            e.preventDefault();
            if (this.mouseDownCallback) {
                this.mouseDownCallback(e);
            } else if (this.clickCallback) {
                this.clickCallback(e);
            }

            if (this.waitingForClick()) {
                this.clickCount--;

                for (var i = 0; i < this.delayedTimers.length; i++) {
                    var timer = this.delayedTimers[i];
                    timer.clicks--;
                    if (timer.clicks === 0) {
                        this.setTimer(timer.fn, timer.time, timer.data);
                    }
                }
                return;
            }
        };

        drawingCanvas.ontouchend = e => {
            if (this.userNavigatingWithKeyboard) {
                this.exitKeyboardNavigation();
            }
            e.preventDefault();
            if (this.mouseUpCallback) {
                this.mouseUpCallback(e);
            }
        };
    }
}

/* Mouse and Touch Event Helpers */
const calculateCoordinates = e => {
    const canvas = e.target;
    const rect = canvas.getBoundingClientRect();
    return {
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top),
    };
};

MouseEvent.prototype.getX = function () {
    return calculateCoordinates(this).x;
};

MouseEvent.prototype.getY = function () {
    return calculateCoordinates(this).y;
};

if (typeof TouchEvent !== 'undefined') {
    TouchEvent.prototype.getX = function () {
        return (this.touches.length && calculateCoordinates(this.touches[0]).x) || null;
    };

    TouchEvent.prototype.getY = function () {
        return (this.touches.length && calculateCoordinates(this.touches[0]).y) || null;
    };
}

export default GraphicsManager;
