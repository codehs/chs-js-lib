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
     * Set a timer.
     * @private
     * @param {function} fn - The function to be executed on the timer.
     * @param {number} interval - The time interval for the function.
     * @param {object} data - Any arguments to be passed into `fn`.
     * @param {string} name - The name of the timer.
     */
    setTimer(fn, interval, data, name) {
        interval = interval ?? DEFAULT_UPDATE_INTERVAL;
        name = name ?? fn.name;
        this.timers[name] = (() => {
            let shouldUpdate = true;
            let lastUpdate = Date.now();
            const timer = () => {
                if (!shouldUpdate) {
                    return;
                }
                const now = Date.now();
                if (now - lastUpdate > interval) {
                    fn(data);
                    lastUpdate = now;
                }
                requestAnimationFrame(timer);
            };
            requestAnimationFrame(timer);

            return {
                stop: () => {
                    shouldUpdate = false;
                },
            };
        })();
    }

    /**
     * Remove a timer associated with a function.
     * @param {function} fn - Function whose timer is removed.
     * note 'fn' may also be the name of the function.
     */
    stopTimer(fn) {
        const name = typeof fn === 'function' ? fn.name : fn;
        this.timers[name]?.stop();
        this.timers[name] = null;
    }

    /**
     * Stop all timers.
     */
    stopAllTimers() {
        Object.keys(this.timers).map(name => {
            console.log(`stopping ${name}`);
            this.stopTimer(name);
        });
    }
}
