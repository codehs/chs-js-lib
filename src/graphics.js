import { getAudioContext } from './audioContext.js';
import Sound from './sound.js';
import WebVideo from './webvideo.js';

const DEFAULT_FRAME_RATE = 40;
const FULLSCREEN_PADDING = 5;

let GraphicsInstances = {};
let graphicsInstanceID = 0;
let pressedKeys = [];

/**
 * Class for interacting with Graphics.
 * @class
 */
class CodeHSGraphics {
    audioElements = [];
    source = null;
    analyser = null;
    dataArray = null;
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
        this.resetAllState();
        this.setCurrentCanvas(options.canvas);
        this.onError = options.onError || undefined;
        this.fullscreenMode = false;
        this.fpsInterval = 1000 / DEFAULT_FRAME_RATE;
        this.lastDrawTime = Date.now();
        GraphicsInstances[graphicsInstanceID++] = this;
    }

    configure(options = {}) {
        this.onError = options.onError || undefined;
    }

    /**
     * Get all living elements..
     */
    getElements() {
        return this.elementPool.filter(element => element.alive);
    }

    /**
     * Add an element to the graphics instance.
     * @param {Thing} elem - A subclass of Thing to be added to the graphics instance.
     */
    add(elem) {
        // Need to mutate in case the user is expecting
        // to be able to reference it.
        elem.alive = true;
        this.elementPool.push(elem);
        this.elementPoolSize++;
    }

    Audio(url) {
        var audioElem = new window.Audio(url);
        audioElem.crossOrigin = 'anonymous';
        this.audioElements.push(audioElem);
        return audioElem;
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
     * Assign a function as a callback for when audio data changes for audio
     * being played in a graphics program.
     * @param {object} tag - Audio element playing sound to analyze
     * @param {function} fn - A callback to be triggered on audio data change.
     */
    audioChangeMethod(tag, fn) {
        // get new audio context and create analyser
        this.audioCtx = getAudioContext();
        // IE browser exit gracefully
        if (!this.audioCtx) {
            return;
        }
        this.analyser = audioCtx.createAnalyser();
        // set fft -- used to set the number of slices we break our frequency range
        // in to.
        this.analyser.fftSize = 128;
        // gt bugger length and create a new array in that size
        var bufferLength = this.analyser.frequencyBinCount;
        this.dataArray = new Uint8Array(bufferLength);
        // create media source from student's audio tag
        this.source = audioCtx.createMediaElementSource(tag);
        // should allow cors
        this.source.crossOrigin = 'anonymous';
        // connect analyzer to sound
        this.source.connect(this.analyser);
        // create gain node and connect to sound (makes speaker output possuble)
        var gainNode = this.audioCtx.createGain();
        this.source.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);
        this.setGraphicsTimer(this.updateAudio.bind(this), DEFAULT_FRAME_RATE, null, 'updateAudio');
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
        var canvas = this.getCanvas();
        return parseFloat(canvas.getAttribute('width'));
    }

    /**
     * Get the height of the entire graphics canvas.
     * @returns {float} The height of the canvas.
     */
    getHeight() {
        var canvas = this.getCanvas();
        return parseFloat(canvas.getAttribute('height'));
    }

    /**
     * Remove a timer associated with a function.
     * @param {function} fn - Function whose timer is removed.
     * note 'fn' may also be the name of the function.
     */
    stopTimer(fn) {
        var key = typeof fn === 'function' ? fn.name : fn;
        clearInterval(this.timers[key]);
    }

    /**
     * Stop all timers.
     */
    stopAllTimers() {
        for (var i = 1; i < 99999; i++) {
            window.clearInterval(i);
        }
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
                    'to `setTimer`'
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

        // Safety, set a min frequency
        if (isNaN(time) || time < 15) {
            time = 15;
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
            this.setGraphicsTimer(this.withErrorHandler(fn), time, data, name);
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
        for (var i = this.elementPoolSize - 1; i--; ) {
            if (this.elementPool[i].alive && this.elementPool[i].containsPoint(x, y, this)) {
                return this.elementPool[i];
            }
        }
        return null;
    }

    /**
     * Check if an element exists with the given paramenters.
     * @param {object} params - Dictionary of parameters for the object.
     *      Includes x, y, heigh, width, color, radius, label and type.
     * @returns {boolean}
     */
    elementExistsWithParameters(params) {
        for (let i = this.elementPoolSize - 1; i >= 0; i--) {
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
        $(canvas).css({
            'max-height': h,
            'max-width': w,
        });
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

    stopAllAudio() {
        this.audioElements.forEach(function (audio) {
            audio.pause();
        });
        Sound.stopSounds();
    }

    stopAllVideo() {
        for (var i = this.elementPoolSize; i--; ) {
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
        this.audioElements = [];
        this.soundElements = [];
        this.clickCallback = null;
        this.moveCallback = null;
        this.mouseDownCallback = null;
        this.mouseUpCallback = null;
        this.dragCallback = null;
        this.keyDownCallback = null;
        this.keyUpCallback = null;
        this.deviceOrientationCallback = null;
        this.deviceMotionCallback = null;
        this.audioChangeCallback = null;

        // if audio source exists, disconnect it
        if (this.source) {
            this.source.disconnect();
            this.source = 0;
        }

        // A fast hash from timer key to timer interval #
        this.timers = {};

        // A useful list to store information about all timers.
        this.timersList = [];

        this.clickCount = 0;
        this.delayedTimers = [];

        // if audio context exists, close it and reset audioCtx
        if (this.audioCtx) {
            this.audioCtx.close();
            this.audioCtx = 0;
        }

        this.fullscreenMode = false;
    }

    /**
     * Reset all timers to 0 and clear timers and canvas.
     */
    fullReset() {
        this.stopAllAudio();
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
     * @returns {object} The current canvas.
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
     * @returns {context} The 2D graphics context.
     */
    getContext() {
        var drawingCanvas = this.getCanvas();
        // Check the element is in the DOM and the browser supports canvas
        if (drawingCanvas && drawingCanvas.getContext) {
            // Initaliase a 2-dimensional drawing context
            var context = drawingCanvas.getContext('2d');
            return context;
        }
        return null;
    }

    /**
     * Redraw this graphics canvas.
     */
    redraw() {
        this.clear();
        this.drawBackground();
        let elem;
        let sortPool;
        for (let i = this.elementPoolSize; i--; ) {
            elem = this.elementPool[i];

            if (!elem.alive) {
                sortPool = true;
                this.elementPoolSize--;
            } else {
                elem.draw(this);
            }
        }
        // sort all dead elements to the end of the pool
        if (sortPool) {
            this.elementPool.sort((a, b) => b.alive - a.alive);
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
        var instance;
        for (var i = 0; i < allGraphicsInstances.length; i++) {
            instance = allGraphicsInstances[i];
            if (instance.instanceId !== this.instanceId && instance.getCanvas() === canvas) {
                return instance.instanceId;
            }
        }
        return null;
    }

    /**
     * Get the distance between two points, (x1, y1) and (x2, y2)
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @returns {number} Distance between the two points.
     */
    getDistance(x1, y1, x2, y2) {
        return graphicsUtils.getDistance(x1, y1, x2, y2);
    }

    withErrorHandler(fn) {
        return (...args) => {
            try {
                fn?.(...args);
            } catch (e) {
                if (typeof this.onError === 'function') {
                    this.onError(e);
                } else {
                    throw e;
                }
            }
        };
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
                        this.setGraphicsTimer(
                            this.withErrorHandler(timer.fn),
                            timer.time,
                            timer.data
                        );
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

        // TOUCH EVENTS!
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
                        this.setGraphicsTimer(timer.fn, timer.time, timer.data);
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

    /**
     * Set a graphics timer.
     * @param {function} fn - The function to be executed on the timer.
     * @param {number} time - The time interval for the function.
     * @param {object} data - Any arguments to be passed into `fn`.
     * @param {string} name - The name of the timer.
     */
    setGraphicsTimer(fn, time, data, name) {
        name = name ?? fn.name;
        this.timers[name] = setInterval(fn, time, data);

        this.timersList.push({
            name: name,
            fn: fn,
            data: data,
            time: time,
        });
    }

    /** AUDIO EVENTS **/

    /**
     * This function is called on a timer. Calls the student's audioChangeCallback
     * function and passes it the most recent audio data.
     */
    updateAudio() {
        this.analyser.getByteFrequencyData(dataArray);
        if (this.audioChangeCallback) {
            /* this is the one strange thing. Up above, we set analyser.fftSize. That
             * determines how many 'buckets' we split our file into (fft size / 2).
             * For some reason, the top 16 'buckets' were always coming out 0, so we
             * used .slice() to cut out the last 18 items out of the array. In the
             * future, if you want to experiment with different FFT sizes, it will
             * be necessary to adjust this slice call (the size of the array will
             * definitely change, and number of empty indexes will probably change).
             */
            var numBuckets = 46;
            this.audioChangeCallback(dataArray.slice(0, numBuckets));
        }
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

/** RESIZE EVENT ****/
var resizeTimeout;
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
        }, DEFAULT_FRAME_RATE);
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

// Same for MouseEvent or TouchEvent given the event and target
// Method based on: http://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element

CodeHSGraphics.getBaseCoordinates = function (e, target) {
    var x;
    var y;
    if (e.pageX || e.pageY) {
        x = e.pageX;
        y = e.pageY;
    } else {
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    var offset = target.getBoundingClientRect();
    x -= offset.left;
    y -= offset.top;

    return { x: x, y: y };
};

CodeHSGraphics.getMouseCoordinates = function (e) {
    var baseCoordinates = CodeHSGraphics.getBaseCoordinates(e, e.currentTarget);
    var x = baseCoordinates.x;
    var y = baseCoordinates.y;

    // at zoom levels != 100%, x and y are floats.
    x = Math.round(x);
    y = Math.round(y);

    return { x: x, y: y };
};

CodeHSGraphics.getTouchCoordinates = function (e) {
    var baseCoordinates = CodeHSGraphics.getBaseCoordinates(e, e.target);
    var x = baseCoordinates.x;
    var y = baseCoordinates.y;

    // canvas almost always gets scaled down for mobile screens, need to figure
    // out the x and y in terms of the unscaled canvas size in pixels otherwise
    // touch coordinates are off
    var screenCanvasWidth = $('#game').width();
    var fullCanvasWidth = $('#game').attr('width');
    var ratio = fullCanvasWidth / screenCanvasWidth;
    x = x * ratio;
    y = y * ratio;

    // at zoom levels != 100%, x and y are floats.
    x = Math.round(x);
    y = Math.round(y);

    return { x: x, y: y };
};

MouseEvent.prototype.getX = function () {
    return CodeHSGraphics.getMouseCoordinates(this).x;
};

MouseEvent.prototype.getY = function () {
    return CodeHSGraphics.getMouseCoordinates(this).y;
};

if (typeof TouchEvent != 'undefined') {
    TouchEvent.prototype.getX = function () {
        return CodeHSGraphics.getTouchCoordinates(this.touches[0]).x;
    };

    TouchEvent.prototype.getY = function () {
        return CodeHSGraphics.getTouchCoordinates(this.touches[0]).y;
    };
}

export default CodeHSGraphics;
