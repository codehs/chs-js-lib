export const DEFAULT_UPDATE_INTERVAL = 40;

export default class Manager {
    constructor(options = {}) {
        this.onError = options.onError;
        this.timers = {};
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
     * Set a timer timer.
     * @private
     * @param {function} fn - The function to be executed on the timer.
     * @param {number} time - The time interval for the function.
     * @param {object} data - Any arguments to be passed into `fn`.
     * @param {string} name - The name of the timer.
     */
    setTimer(fn, time, data, name) {
        time = time || DEFAULT_UPDATE_INTERVAL;
        name = name ?? fn.name;
        this.timers[name] = setInterval(fn, time, data);
    }
}
