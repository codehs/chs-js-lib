import Graphics from '../src/graphics.js';

/**
 * Simulate a mouse event.
 * @param {string} type - Type of mouse event.
 * @param {object} [config] - Additional settings for the event.
 * @param {number} [config.button]
 */
function simulateEvent(type, config, elm) {
    let event;
    try {
        event = new Event(type, { bubbles: true });
    } catch (e) {
        event = document.createEvent('Event');
        event.initEvent(type, true, false);
    }

    config = config || {};
    for (let prop in config) {
        event[prop] = config[prop];
    }

    (elm || canvas).dispatchEvent(event);
}

describe('Graphics', () => {
    describe('Not window-binding a Graphics instance', () => {
        it("Doesn't attach anything if it's not window-bound", () => {
            const g = new Graphics();
            expect(window.mouseClickMethod).toBeUndefined();
        });
    });
    describe('Mouse events', () => {
        it('Responds to clicks', () => {
            const g = new Graphics();
            const clickSpy = jasmine.createSpy();
            g.mouseClickMethod(clickSpy);
            simulateEvent('click', {}, document.querySelector('#game'));
            expect(clickSpy).toHaveBeenCalled();
        });
    });
    describe('Configuring error/output handlers', () => {
        it('Passes errors through the error handler', () => {
            const g = new Graphics();
            const errorSpy = jasmine.createSpy();
            g.configure({
                onError: errorSpy,
            });
            g.mouseClickMethod(e => {
                throw Error();
            });
            simulateEvent('click', {}, document.querySelector('#game'));
            expect(errorSpy).toHaveBeenCalled();
        });
    });
});
