import Manager from '../manager';
import { getAudioContext } from './audioContext';

/**
 * @class
 */
class AudioManager extends Manager {
    /**
     * @constructor
     * @param {{onError: function}} options
     */
    constructor(options = {}) {
        super(options);
    }

    cleanup() {
        this.audioChangeCallback = null;
        this.audioContext?.close();
    }

    getAudioContext() {
        if (this.audioContext) {
            return this.audioContext;
        }

        this.audioContext = getAudioContext();
        return this.audioContext;
    }

    /**
     * Assign a function as a callback for when audio data changes for audio
     * being played in a graphics program.
     * @param {object} mediaElement - Audio element playing sound to analyze
     * @param {function} fn - A callback to be triggered on audio data change.
     */
    audioChangeMethod(mediaElement, fn) {
        const audioContext = this.getAudioContext();
        if (!audioContext) {
            return;
        }
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 128;
        const source = audioContext.createMediaElementSource(mediaElement);
        source.crossOrigin = 'anonymous';
        source.connect(analyser);
        const gainNode = audioContext.createGain();
        source.connect(gainNode);
        gainNode.connect(audioContext.destination);
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        const audioChangeCallback = this.withErrorHandler(fn);
        this.setTimer(() => {
            analyser.getByteFrequencyData(dataArray);
            audioChangeCallback(dataArray);
        });
    }
}

export default AudioManager;
