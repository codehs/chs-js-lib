/**
 * Simulate a mouse event.
 * @param {string} type
 * @param {object} config
 * @param {HTMLElement} target
 * @param {boolean} touch
 */
export const simulateEvent = (type, config, target, touch = false) => {
    let event;
    try {
        if (touch) {
            event = new TouchEvent(type, { bubbles: true });
        } else {
            event = new MouseEvent(type, { bubbles: true });
        }
    } catch (e) {
        event = document.createEvent('Event');
        event.initEvent(type, true, false);
    }

    config = config || {};
    for (let prop in config) {
        event[prop] = config[prop];
    }

    target.dispatchEvent(event);
};
