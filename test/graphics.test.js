import Graphics from '../src/graphics.js';

/**
 * Simulate a mouse event.
 * @param {string} type
 * @param {object} config
 * @param {HTMLElement} target
 */
function simulateEvent(type, config, target) {
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

    target.dispatchEvent(event);
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
        describe('Passing errors through the error handler', () => {
            it('Passes error for mouseClickMethod', () => {
                const g = new Graphics();
                const errorSpy = jasmine.createSpy();
                g.configure({
                    onError: errorSpy,
                });
                g.mouseClickMethod(e => {
                    throw Error('Oops!');
                });
                simulateEvent('click', {}, document.querySelector('#game'));
                expect(errorSpy).toHaveBeenCalledWith(Error('Oops!'));
            });
            it('Passes error for mouseDownMethod', () => {
                const g = new Graphics();
                const errorSpy = jasmine.createSpy();
                g.configure({
                    onError: errorSpy,
                });
                g.mouseDownMethod(e => {
                    throw Error('Oops!');
                });
                simulateEvent('mousedown', {}, document.querySelector('#game'));
                expect(errorSpy).toHaveBeenCalledWith(Error('Oops!'));
            });
            it('Passes error for mouseDragMethod', () => {
                const g = new Graphics();
                const errorSpy = jasmine.createSpy();
                g.configure({
                    onError: errorSpy,
                });
                g.mouseDragMethod(e => {
                    throw Error('Oops!');
                });
                simulateEvent('mousedown', {}, document.querySelector('#game'));
                simulateEvent('mousemove', {}, document.querySelector('#game'));
                expect(errorSpy).toHaveBeenCalledWith(Error('Oops!'));
            });
            it('Passes error for keyDownMethod', () => {
                const g = new Graphics();
                const errorSpy = jasmine.createSpy();
                g.configure({
                    onError: errorSpy,
                });
                g.keyDownMethod(e => {
                    throw Error('Oops!');
                });
                simulateEvent('keydown', {}, document.querySelector('#game'));
                expect(errorSpy).toHaveBeenCalledWith(Error('Oops!'));
            });
            it('Passes error for setTimer', () => {
                const g = new Graphics();
                const errorSpy = jasmine.createSpy();
                g.configure({
                    onError: errorSpy,
                });
                return new Promise(resolve => {
                    g.setTimer(() => {
                        resolve();
                        throw Error('Oops!');
                    }, 0);
                }).then(() => {
                    expect(errorSpy).toHaveBeenCalledWith(Error('Oops!'));
                });
            });
            it('Passes error for delayed timers with waitForClick', async () => {
                const g = new Graphics();
                const errorSpy = jasmine.createSpy();
                g.waitForClick();
                const timerFired = new Promise(resolve => {
                    g.setTimer(e => {
                        resolve();
                        throw Error('Oops!');
                    }, 0);
                });
                // wait to see if the timer gets called immediately.
                // if it does, an uncaught error will be thrown, and the 
                // test will fail.
                await new Promise(resolve => setTimeout(resolve, 0));
                g.configure({
                    onError: errorSpy,
                });
                simulateEvent('click', {}, document.querySelector('#game'));
                return timerFired.then(() => {
                    expect(errorSpy).toHaveBeenCalledWith(Error('Oops!'));
                });
            });
        });
    });
});
