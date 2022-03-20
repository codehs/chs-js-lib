'use strict';

import Thing from './thing.js';

const DEFAULT_WIDTH = 150;
const DEFAULT_HEIGHT = (DEFAULT_WIDTH * 3) / 4;
const WEBCAM_INDICATOR = 'WEBCAM';

/**
 * @class WebVideo
 * @extends Thing
 */
class WebVideo extends Thing {
    static WEBCAM = WEBCAM_INDICATOR;

    type = 'WebVideo';

    /**
     * Constructs a WebVideo.
     * @constructor
     * @param {string} filename
     * @example
     * const webCam = new WebVideo('WEBCAM');
     */
    constructor(filename) {
        super();
        if (typeof filename !== 'string') {
            throw new TypeError(
                'You must pass a string to `' +
                    "new WebVideo(filename)` that has the video's location."
            );
        }

        var vid = document.createElement('video');
        this.width = DEFAULT_WIDTH;
        this.height = DEFAULT_HEIGHT;

        this.isWebCam = filename === WEBCAM_INDICATOR;

        this.browserSupportsVideo = !!vid.canPlayType;
        if (this.browserSupportsVideo) {
            this.video = vid;
            if (!this.isWebCam) {
                this.video.src = filename;
            } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices
                    .getUserMedia({ video: true })
                    .then(stream => {
                        this.video.srcObject = stream;
                        this.video.play();
                    })
                    .catch(function (error) {
                        throw new Error('Web camera access was denied: ' + error);
                    });
            } else {
                throw new TypeError('Your browser does not support web camera access');
            }
            this.filename = filename;
            this.video.autoplay = true;
            this.video.loop = false;

            // Treat cross origin URLs as same origin. Allows for videos from different
            // origins to be loaded and played, as long as that origin allows us to load
            // the given video resource.
            this.video.crossOrigin = 'anonymous';
        }
    }

    /**
     * Draws the WebVideo in the canvas.
     *
     * @param {CanvasRenderingContext2D} context - Context to draw on.
     */
    draw(context) {
        if (!this.browserSupportsVideo) {
            return;
        }
        super.draw(context, () => {
            context.drawImage(this.video, 0, 0, this.width, this.height);
        });
    }

    /**
     * Checks if the passed point is contained in the WebVideo.
     *
     * @alias WebVideo#containsPoint
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {boolean} Whether the passed point is contained in the WebVideo.
     */
    _containsPoint(x, y) {
        if (this.browserSupportsVideo) {
            x += this.width * this.anchor.horizontal;
            y += this.height * this.anchor.vertical;
            return (
                x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height
            );
        }
        return false;
    }

    /**
     * Gets the width of the WebVideo.
     *
     * @returns {number} Width of the WebVideo.
     */
    getWidth() {
        return this.width;
    }

    /**
     * Gets the height of the WebVideo.
     *
     * @returns {number} Height of the WebVideo.
     */
    getHeight() {
        return this.height;
    }

    /**
     * Sets the size of the WebVideo.
     *
     * @param {number} width - The desired width of the resulting WebVideo.
     * @param {number} height - The desired height of the resulting WebVideo.
     */
    setSize(width, height) {
        this.width = width;
        this.height = height;
    }

    /**
     * Sets whether the WebVideo should start playing automatically once loaded.
     *
     * @param {boolean} autoplay - True/false whether the video should start playing automatically.
     */
    setAutoplay(autoplay) {
        if (this.browserSupportsVideo) {
            this.video.autoplay = autoplay;
        }
    }

    /**
     * Sets whether the WebVideo should loop and play again once finished.
     *
     * @param {boolean} loop - True/false whether the video should loop.
     */
    setLoop(loop) {
        if (this.browserSupportsVideo) {
            this.video.loop = loop;
        }
    }

    /**
     * Sets whether the WebVideo is muted or not.
     *
     * @param {boolean} muted - True/false whether the video should be muted.
     */
    setMuted(muted) {
        if (this.browserSupportsVideo) {
            this.video.muted = muted;
        }
    }

    /**
     * Starts playing the WebVideo.
     */
    play() {
        if (this.browserSupportsVideo) {
            this.video.play();
        }
    }

    /**
     * Pauses the WebVideo.
     */
    pause() {
        if (this.browserSupportsVideo) {
            this.video.pause();
        }
    }

    /**
     * Stops the WebVideo.
     */
    stop() {
        if (this.browserSupportsVideo) {
            this.video.pause();
            this.video.currentTime = 0;

            if (this.isWebCam && this.video.srcObject) {
                this.video.srcObject.getTracks().forEach(function (track) {
                    track.stop();
                });
            }
        }
    }

    /**
     * Returns whether the WebVideo is currently playing.
     *
     * @returns {boolean} True if the video is playing, false if it is not.
     */
    isPlaying() {
        if (this.browserSupportsVideo) {
            return !(this.video.paused || this.video.ended);
        }
        return false;
    }

    /**
     * Returns whether the WebVideo is currently muted.
     *
     * @returns {boolean} True if the video is muted, false if it is not.
     */
    isMuted() {
        if (this.browserSupportsVideo) {
            return this.video.muted;
        }
        return false;
    }

    /**
     * Defines a function to call once the video has loaded enough and is ready to play.
     * @param  {Function} fn A function to call when the video is ready to play.
     */
    onReadyToPlay(fn) {
        if (this.browserSupportsVideo) {
            this.video.oncanplay = fn;
        }
    }
}

export default WebVideo;
