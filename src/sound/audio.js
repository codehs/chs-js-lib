const NativeAudio = Audio;

/**
 * A wrapper around the native Audio class that performs requests with `crossOrigin = 'anonymous'`.
 * @alias Audio
 */
class CrossOriginAudio {
    /**
     * Construct a new Audio object.
     * @param {string} url Link to sound file
     * @returns Audio object
     * @constructor
     */
    constructor(url) {
        const audioElement = new NativeAudio(url);
        audioElement.crossOrigin = 'anonymous';
        return audioElement;
    }
}

export default CrossOriginAudio;
