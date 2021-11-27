import Manager, { DEFAULT_UPDATE_INTERVAL } from '../manager.js';
import Thing from './thing.js';
import WebVideo from './webvideo.js';

const FULLSCREEN_PADDING = 5;

let GraphicsInstances = {};
let graphicsInstanceID = 0;
let pressedKeys = [];

/**
 * Class for interacting with Graphics.
 * @class
 */
class GraphicsManager extends Manager {
    elementPool = [];
    elementPoolSize = 0;

    /**
     * Set up an instance of the graphics library.
     * @constructor
     * @param {dictionary} options - Options, primarily .canvas, the selector
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
        GraphicsInstances[graphicsInstanceID++] = this;
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
        return pressedKeys.indexOf(keyCode) != -1;
    }

    /**
     * Get the width of the entire graphics canvas.
     * @returns {float} The width of the canvas.
     */
    getWidth() {
        const canvas = this.getCanvas();
        return parseFloat(canvas.getAttribute('width'));
    }

    /**
     * Get the height of the entire graphics canvas.
     * @returns {float} The height of the canvas.
     */
    getHeight() {
        const canvas = this.getCanvas();
        return parseFloat(canvas.getAttribute('height'));
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
     * Create a new timer
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
            super.setTimer(this.withErrorHandler(fn), time, data, name ?? fn.name);
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
    }

    /**
     * Set the size of the canvas.
     * @param {number} w - Desired width of the canvas.
     * @param {number} h - Desired height of the canvas.
     */
    setSize(w, h) {
        this.fullscreenMode = false;
        var canvas = this.getCanvas();
        canvas.width = w;
        canvas.height = h;
        canvas.style['max-height'] = h;
        canvas.style['max-width'] = w;
    }

    /**
     * Set the canvas to take up the entire parent element
     */
    setFullscreen() {
        this.fullscreenMode = true; // when this is true, canvas will resize with parent
        var canvas = this.getCanvas();
        canvas.width = canvas.parentElement.offsetWidth - FULLSCREEN_PADDING;
        canvas.height = canvas.parentElement.offsetHeight - FULLSCREEN_PADDING;
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
        this.elementPool = [];
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
        if (currentCanvas === null) {
            currentCanvas = document.createElement('canvas');
            document.body.appendChild(currentCanvas);
        }
        this.currentCanvas = currentCanvas;

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
     * Redraw this graphics canvas.
     */
    redraw() {
        this.clear();
        this.drawBackground();
        let elem;
        let sortPool;
        const context = this.getContext();
        let numberRemovedElementsFound = 0;
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
                numberRemovedElementsFound++;
            }
        }
        // sort all dead elements to the end of the pool
        // and all elements with lower layer before elements
        // with higher layer
        if (sortPool) {
            this.elementPoolSize -= numberRemovedElementsFound;
            this.elementPool.sort((a, b) => a.alive - b.alive || a.layer - b.layer);
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
            if (this.moveCallback) {
                this.moveCallback(e);
            }
            if (mouseDown && this.dragCallback) {
                this.dragCallback(e);
            }
        });

        drawingCanvas.onmousedown = e => {
            mouseDown = true;
            if (this.mouseDownCallback) {
                this.mouseDownCallback(e);
            }
        };

        drawingCanvas.onmouseup = e => {
            mouseDown = false;
            if (this.mouseUpCallback) {
                this.mouseUpCallback(e);
            }
        };

        drawingCanvas.ontouchmove = e => {
            e.preventDefault();
            if (this.dragCallback) {
                this.dragCallback(e);
            } else if (this.moveCallback) {
                this.moveCallback(e);
            }
        };

        drawingCanvas.ontouchstart = e => {
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
            e.preventDefault();
            if (this.mouseUpCallback) {
                this.mouseUpCallback(e);
            }
        };
    }
}

/** KEY EVENTS ****/
window.onkeydown = function (e) {
    var index = pressedKeys.indexOf(e.keyCode);
    if (index === -1) {
        pressedKeys.push(e.keyCode);
    }

    Object.entries(GraphicsInstances).forEach(([id, instance]) => {
        instance.keyDownCallback?.(e);
    });

    return true;
};

window.onkeyup = function (e) {
    var index = pressedKeys.indexOf(e.keyCode);
    if (index !== -1) {
        pressedKeys.splice(index, 1);
    }
    Object.entries(GraphicsInstances).forEach(([id, instance]) => {
        instance.keyUpCallback?.(e);
    });
};

let resizeTimeout;
window.onresize = function (e) {
    // https://developer.mozilla.org/en-US/docs/Web/Events/resize
    // Throttle the resize event handler since it fires at such a rapid rate
    // Only respond to the resize event if there's not already a response queued up
    if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
            resizeTimeout = null;
            Object.entries(GraphicsInstances).forEach(([id, instance]) => {
                instance.setFullscreen?.();
            });
        }, DEFAULT_UPDATE_INTERVAL);
    }
};

/** MOBILE DEVICE EVENTS ****/
if (window.DeviceOrientationEvent) {
    window.ondeviceorientation = function (e) {
        Object.entries(GraphicsInstances).forEach(([id, instance]) => {
            instance.deviceOrientationCallback?.(e);
        });
    };
}

if (window.DeviceMotionEvent) {
    window.ondevicemotion = function (e) {
        Object.entries(GraphicsInstances).forEach(([id, instance]) => {
            instance.deviceMotionCallback?.(e);
        });
    };
}

/* Mouse and Touch Event Helpers */
const calculateCoordinates = e => {
    const canvas = e.target;
    const rect = canvas.getBoundingClientRect();
    return {
        x: Math.round(((e.clientX - rect.left) * canvas.width) / canvas.clientWidth),
        y: Math.round(((e.clientY - rect.top) * canvas.height) / canvas.clientHeight),
    };
};

MouseEvent.prototype.getX = function () {
    return calculateCoordinates(this).x;
};

MouseEvent.prototype.getY = function () {
    return calculateCoordinates(this).y;
};

TouchEvent.prototype.getX = function () {
    return calculateCoordinates(this.touches[0]).x;
};

TouchEvent.prototype.getY = function () {
    return calculateCoordinates(this.touches[0]).y;
};

export default GraphicsManager;
