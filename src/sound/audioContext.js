/**
 * Defines a cross-browser compatible way of creating a new AudioContext.
 * Returns 0 and logs an error message if creating a new AudioContext is not possible.
 */

/**
 * Gets an audiocontext for the browser if possible.
 * @private
 * @returns {AudioContext}
 */
export const getAudioContext = () => {
    // Test for browser compatibility
    // Source: https://www.safaribooksonline.com/library/view/web-audio-api/9781449332679/s01_2.html
    const ContextClass =
        window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext;

    if (ContextClass) {
        try {
            return new ContextClass();
        } catch (e) {
            console.error(
                'Too many AudioContexts are in use. Please close all browser windows and retry.'
            );
            return 0;
        }
    } else {
        console.error(
            'Web Audio is not supported in this browser. Please use the most up to date version of Chrome, Firefox, or Safari.'
        );
        return 0;
    }
};
