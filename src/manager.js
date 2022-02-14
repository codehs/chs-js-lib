export const DEFAULT_UPDATE_INTERVAL = 40;

/**
 * Internal superclass for managing sound and graphics.
 * @class
 */
class Manager {
    /**
     * @constructor
     * @param {Object} options
     */
    constructor(options = {}) {
        this.onError = options.onError;
        /** @type {Object.<string, Array.<Function>>} */
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
     * A timer can be set a few different ways based on the parameters `data` and `name`.
     * By default, calling `setTimer(fn)` will create a timer with the name of the function.
     * This means that you can't create two timers for the same function, because they'll have
     * the same name. To get around this, you can create a new name and pass it as the
     * fourth parameter to the `setTimer` function:
     * @example
     * const timerID = Randomizer.nextInt(1000);
     * setTimer(fn, 50, {}, timerID);
     * //...
     * stopTimer(timerID);
     *
     * @private
     * @param {function} fn - The function to be executed on the timer.
     * @param {number} interval - The time interval for the function.
     * @param {object} data - Any arguments to be passed into `fn`.
     * @param {string} name - The name of the timer.
     */
    setTimer(fn, interval, data, name) {
        interval = interval ?? DEFAULT_UPDATE_INTERVAL;
        name = name ?? fn.name;
        // this is an immediately invoked function expression:
        // it creates a function, then immediately calls it. this is done to create a new closure,
        // which is used to keep variables encapsulated in the scope.
        // the one variable being returned from this expression
        // is a function that we call "stop" that will cause the timer to stop updating.
        const stop = (() => {
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

            return () => {
                shouldUpdate = false;
            };
        })();

        if (this.timers[name]) {
            this.timers[name].push(stop);
        } else {
            this.timers[name] = [stop];
        }
    }

    /**
     * Remove a timer associated with a function.
     * @param {function} fn - Function whose timer is removed.
     * note 'fn' may also be the name of the function.
     */
    stopTimer(fn) {
        const name = typeof fn === 'function' ? fn.name : fn;
        this.timers[name]?.forEach(stopper => stopper());
        this.timers[name] = [];
    }

    /**
     * Stop all timers.
     */
    stopAllTimers() {
        Object.keys(this.timers).map(name => {
            this.stopTimer(name);
        });
    }
}

export default Manager;
