import Circle from '../src/circle.js';
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
        it('Responds to mouse move events', () => {
            const g = new Graphics();
            const mouseMoveSpy = jasmine.createSpy();
            g.mouseMoveMethod(mouseMoveSpy);
            simulateEvent('mousemove', {}, document.querySelector('#game'));
            expect(mouseMoveSpy).toHaveBeenCalled();
        });
        it('Responds to mouse up events', () => {
            const g = new Graphics();
            const mouseUpSpy = jasmine.createSpy();
            g.mouseUpMethod(mouseUpSpy);
            simulateEvent('mouseup', {}, document.querySelector('#game'));
            expect(mouseUpSpy).toHaveBeenCalled();
        });
    });
    describe('Keyboard events', () => {
        it('Responds to key up events', () => {
            const g = new Graphics();
            const keyUpSpy = jasmine.createSpy();
            g.keyUpMethod(keyUpSpy);
            simulateEvent('keyup', {}, document.querySelector('#game'));
            expect(keyUpSpy).toHaveBeenCalled();
        });
        it('Responds to key down events', () => {
            const g = new Graphics();
            const keyDownSpy = jasmine.createSpy();
            g.keyDownMethod(keyDownSpy);
            simulateEvent('keydown', {}, document.querySelector('#game'));
            expect(keyDownSpy).toHaveBeenCalled();
        });
        it('Records key presses for isKeypressed', () => {
            const g = new Graphics();
            const keyDownSpy = jasmine.createSpy();
            g.keyDownMethod(keyDownSpy);
            simulateEvent('keydown', { keyCode: 45 }, document.querySelector('#game'));
            expect(g.isKeyPressed(45)).toBeTrue();
            expect(g.isKeyPressed(12)).toBeFalse();
        });
    });
    describe('Configuring error/output handlers', () => {
        describe('Empty configuration', () => {
            it('Defaults to throwing', () => {
                const g = new Graphics();
                g.configure();
                g.mouseClickMethod(e => {
                    throw Error('Oops!');
                });
                expect(() => {
                    g.clickCallback();
                }).toThrow(Error('Oops!'));
            });
        });
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
    describe('Adding', () => {
        it('Adds the element to the internal element pool', () => {
            const g = new Graphics();
            const c = new Circle(20);
            g.add(c);
            expect(g.elementPool[0]).toBe(c);
            expect(g.elementPoolSize).toEqual(1);
        });
        it('Marks the element as alive', () => {
            const g = new Graphics();
            const c = new Circle(20);
            g.add(c);
            expect(c.alive).toBeTrue();
        });
    });
});
