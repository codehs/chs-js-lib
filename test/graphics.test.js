import Circle from '../src/circle.js';
import Graphics from '../src/graphics.js';

/**
 * Simulate a mouse event.
 * @param {string} type
 * @param {object} config
 * @param {HTMLElement} target
 * @param {boolean} touch
 */
function simulateEvent(type, config, target, touch = false) {
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
        it('Translates x and y coordinates', () => {
            const g = new Graphics();
            const mouseSpy = jasmine.createSpy();
            g.mouseUpMethod(e => {
                mouseSpy(e.getX(), e.getY());
            });
            // TODO: better tests for this.
            // clientX and clientY are readonly properties.
            simulateEvent('mouseup', {}, document.querySelector('#game'));
            expect(mouseSpy).toHaveBeenCalledWith(-8, -8);
            document.querySelector('#game').style.top = '50px';
            simulateEvent('mouseup', {}, document.querySelector('#game'));
            expect(mouseSpy).toHaveBeenCalledWith(-8, -8);
        });
        // TODO: is it possible to test this?
        // I'm unable to mock a Touch
        // it('Translates x and y coordinates for touches', () => {
        //     const g = new Graphics();
        //     const mouseSpy = jasmine.createSpy();
        //     g.mouseDownMethod(e => {
        //         mouseSpy(e.getX(), e.getY());
        //     });
        //     simulateEvent('touchstart', {}, document.querySelector('canvas'), true);
        //     expect(mouseSpy).toHaveBeenCalledWith(-8, -8);
        //     document.querySelector('#game').style.top = '50px';
        //     expect(mouseSpy).toHaveBeenCalledWith(-8, -8);
        // });
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
        });
    });
    describe('Removing', () => {
        it('Removes the element from the internal element pool', () => {
            const g = new Graphics();
            const c = new Circle(20);
            g.add(c);
            expect(g.elementPool[0]).toBe(c);
            g.remove(c);
            expect(g.elementPool.length).toBe(0);
        });
    });
    describe('setBackgroundColor', () => {
        it('Causes drawBackground to be invoked in redraw()', () => {
            const g = new Graphics();
            g.setBackgroundColor('red');
            const rectSpy = spyOn(g.getContext(), 'rect');
            const fillStyleSpy = spyOnProperty(
                g.getContext(),
                'fillStyle',
                'set'
            ).and.callThrough();
            g.redraw();
            expect(rectSpy).toHaveBeenCalledWith(0, 0, g.getWidth(), g.getHeight());
            expect(fillStyleSpy).toHaveBeenCalledWith('red');
        });
    });
    describe('Timers', () => {
        describe('setTimer', () => {
            describe('Errors', () => {
                it('Errors for < 2 arguments', () => {
                    const g = new Graphics();
                    expect(() => {
                        g.setTimer(() => {});
                    }).toThrow(
                        Error(
                            '2 parameters required for `setTimer`, 1 found. You must provide a callback function and a number representing the time delay to `setTimer`.'
                        )
                    );
                });
                it("Errors for a fn that's not a function", () => {
                    const g = new Graphics();
                    expect(() => {
                        g.setTimer('asd', 'asd');
                    }).toThrow(
                        TypeError(
                            'Invalid callback function. Make sure you are passing an actual function to `setTimer`.'
                        )
                    );
                });
                it('Errors for non-numeric intervals', () => {
                    const g = new Graphics();
                    expect(() => {
                        g.setTimer(() => {}, 'asd');
                    }).toThrow(
                        TypeError(
                            'Invalid value for time delay. Make sure you are passing a finite number to `setTimer` for the delay.'
                        )
                    );
                    expect(() => {
                        g.setTimer(() => {}, Infinity);
                    }).toThrow(
                        TypeError(
                            'Invalid value for time delay. Make sure you are passing a finite number to `setTimer` for the delay.'
                        )
                    );
                });
            });
            describe('Setting a timer', () => {
                it('Invokes the function after the interval', () => {
                    const g = new Graphics();
                    let invocations = 3;
                    return new Promise((resolve, reject) => {
                        const timedFunction = () => {
                            invocations--;
                            if (invocations === 0) {
                                g.stopTimer(timedFunction);
                                resolve();
                            }
                        };
                        g.setTimer(timedFunction, 0);
                    }).then(() => {
                        expect(invocations).toBe(0);
                    });
                });
            });
            describe('Stopping a timer', () => {
                it('Can be stopped by fn.name or identity', () => {
                    const g = new Graphics();
                    const timerFn = jasmine.createSpy();
                    g.setTimer(timerFn, 0);
                    g.stopTimer(timerFn);
                    expect(timerFn).not.toHaveBeenCalled();
                    const namedTimerFn = () => {};
                    const namedTimerSpy = jasmine.createSpy();
                    g.setTimer(timerFn, 0);
                    g.stopTimer('namedTimerFn');
                    expect(namedTimerSpy).not.toHaveBeenCalled();
                });
                it('stopAllTimers stops all timers', () => {
                    const g = new Graphics();
                    const timerOne = jasmine.createSpy();
                    const timerTwo = jasmine.createSpy();
                    g.setTimer(timerOne, 0);
                    g.setTimer(timerTwo, 0);
                    g.stopAllTimers();
                    expect(timerOne).not.toHaveBeenCalled();
                    expect(timerTwo).not.toHaveBeenCalled();
                });
            });
        });
    });
});
