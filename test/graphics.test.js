import Circle from '../src/graphics/circle.js';
import Graphics, { FULLSCREEN_PADDING, pressedKeys } from '../src/graphics/index.js';
import Rectangle from '../src/graphics/rectangle.js';
import { map } from '../src/graphics/graphics-utils.js';
import { simulateEvent } from './utils.js';

describe('Graphics', () => {
    describe('Not window-binding a Graphics instance', () => {
        it("Doesn't attach anything if it's not window-bound", () => {
            new Graphics({ shouldUpdate: false });
            expect(window.mouseClickMethod).toBeUndefined();
        });
    });
    describe('setSize', () => {
        it('Changes the size of the backed canvas, considering the devicePixelRatio of the device', () => {
            window.devicePixelRatio = 2;
            const g = new Graphics({ shouldUpdate: false });
            g.setSize(20, 20);
            const canvas = document.querySelector('canvas');
            expect(canvas.width).toEqual(20 * window.devicePixelRatio);
            expect(canvas.height).toEqual(20 * window.devicePixelRatio);
        });
    });
    describe('setFullscreen', () => {
        it("Updates the canvas' size to the parent's size less padding less border", () => {
            const g = new Graphics();
            g.setFullscreen();
            const canvas = g.getCanvas();
            expect(canvas.style.width).toEqual(
                `${canvas.parentElement.offsetWidth - FULLSCREEN_PADDING}px`
            );
            // todo: explain this off by one?
            expect(canvas.style.height).toEqual(
                `${canvas.parentElement.offsetHeight - FULLSCREEN_PADDING + 1}px`
            );
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
        it('Appropriately bails out when no touches are available in a TouchEvent', () => {
            let t = new TouchEvent('touchstart', { touches: [] });
            expect(t.getX()).toBeNull();
            expect(t.getY()).toBeNull();
            t = new TouchEvent('touchstart', {
                touches: [
                    new Touch({ identifier: ':)', target: document.querySelector('canvas') }),
                ],
            });
            expect(t.getX()).not.toBeNull();
            expect(t.getY()).not.toBeNull();
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
                await new Promise(resolve => requestAnimationFrame(resolve));
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
        it("Doesn't remove the element from the internal element pool, only marks it as not alive", () => {
            const g = new Graphics({ shouldUpdate: false });
            const arcSpy = spyOn(g.getContext(), 'arc');
            const c = new Circle(20);
            g.add(c);
            g.redraw();
            expect(g.elementPool[0]).toBe(c);
            g.remove(c);
            expect(c.alive).toBeFalse();
            g.redraw();
            expect(g.elementPoolSize).toBe(0);
            expect(arcSpy).toHaveBeenCalledTimes(1);
        });
        it('removeAll() sets the size of the element pool to 0', () => {
            const g = new Graphics({ shouldUpdate: false });
            g.add(new Circle(5));
            g.removeAll();
            expect(g.elementPoolSize).toEqual(0);
            const arcSpy = spyOn(g.getContext(), 'arc');
            g.redraw();
            expect(arcSpy).not.toHaveBeenCalled();
        });
        it('remove() preserves other living elements', () => {
            const g = new Graphics({ shouldUpdate: false });
            const c1 = new Circle(10);
            const c2 = new Circle(10);
            const c3 = new Circle(10);
            g.add(c1);
            g.add(c2);
            g.add(c3);
            g.redraw();
            g.remove(c1);
            expect(g.elementPoolSize).toEqual(3);
            expect(g.elementPool[0].alive).toBeFalse();
            expect(g.elementPool[1].alive).toBeTrue();
            expect(g.elementPool[2].alive).toBeTrue();
            g.redraw();
            expect(g.elementPoolSize).toEqual(2);
            g.redraw();
            expect(g.elementPoolSize).toEqual(2);
            expect(g.elementPool[0].alive).toBeTrue();
            expect(g.elementPool[1].alive).toBeTrue();
            expect(g.elementPool[2].alive).toBeFalse();
        });
        it('Properly handles duplicated elements', () => {
            const g = new Graphics({ shouldUpdate: false });
            const a = new Circle(1);
            const b = new Circle(1);
            const c = new Circle(1);
            g.add(a);
            g.add(b);
            g.add(c);
            g.add(a);
            expect(g.elementPool).toEqual([a, b, c, a]);
            expect(g.elementPoolSize).toEqual(4);
            g.remove(a);
            expect(g.elementPool).toEqual([a, b, c, a]);
            expect(g.elementPoolSize).toEqual(4);
            g.redraw();
            expect(g.elementPool).toEqual([b, c, a, a]);
            expect(g.elementPoolSize).toEqual(2);
            g.add(a);
            g.redraw();
            expect(g.elementPool).toEqual([b, c, a, a]);
            expect(g.elementPoolSize).toEqual(3);
            a.layer = -1;
            g.redraw();
            expect(g.elementPool).toEqual([a, a, b, c]);
            expect(g.elementPoolSize).toEqual(4);
        });
    });
    describe('fullReset', () => {
        it('Clears all elements', () => {
            const g = new Graphics({ shouldUpdate: false });
            g.add(new Circle(20));
            expect(g.elementPoolSize).toEqual(1);
            g.fullReset();
            expect(g.elementPoolSize).toEqual(0);
            expect(() => {
                g.redraw();
            }).not.toThrow();
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
                it('Can be stopped by identity', () => {
                    const g = new Graphics();
                    const timerFn = jasmine.createSpy();
                    g.setTimer(timerFn, 0);
                    g.stopTimer(timerFn);
                    return new Promise(resolve => {
                        requestAnimationFrame(() => {
                            expect(timerFn).not.toHaveBeenCalled();
                            resolve();
                        });
                    });
                });
                it('Can be stopped by name', () => {
                    const g = new Graphics();
                    const spy = jasmine.createSpy();
                    g.setTimer(spy, 0);
                    return new Promise(resolve => {
                        requestAnimationFrame(() => {
                            expect(spy).toHaveBeenCalled();
                            // all jasmine spies are named 'wrap'
                            g.stopTimer('wrap');
                            requestAnimationFrame(() => {
                                expect(spy).toHaveBeenCalledTimes(1);
                                resolve();
                            });
                        });
                    });
                });
                it('stopAllTimers stops all timers', () => {
                    const g = new Graphics();
                    const timerOne = jasmine.createSpy();
                    const timerTwo = jasmine.createSpy();
                    g.setTimer(timerOne, 0, {}, 'one');
                    g.setTimer(timerTwo, 0, {}, 'two');
                    g.stopAllTimers();
                    return new Promise((resolve, reject) => {
                        requestAnimationFrame(() => {
                            expect(timerOne).not.toHaveBeenCalled();
                            expect(timerTwo).not.toHaveBeenCalled();
                            resolve();
                        });
                    });
                });
                describe('Timer collision', () => {
                    it('Multiple timers with the same name will all be stopped', () => {
                        const timerOneSpy = jasmine.createSpy();
                        const timerTwoSpy = jasmine.createSpy();
                        const g = new Graphics();
                        g.setTimer(timerOneSpy, 15, {}, 'sharedname');
                        g.setTimer(timerTwoSpy, 15, {}, 'sharedname');
                        g.stopAllTimers();
                        return new Promise(resolve => {
                            setTimeout(() => {
                                expect(timerOneSpy).not.toHaveBeenCalled();
                                expect(timerTwoSpy).not.toHaveBeenCalled();
                                resolve();
                            }, 100);
                        });
                        expect();
                    });
                });
            });
        });
    });
    describe('getElements', () => {
        it('Only returns .alive elements', () => {
            const g = new Graphics();
            const r = new Rectangle(10, 10);
            const c = new Circle(10);
            c.alive = false;
            g.add(r, c);
            expect(g.getElements()).toEqual([r]);
        });
    });
    describe('getElementAt', () => {
        it('Returns the last element at the given position', () => {
            const g = new Graphics();
            const r1 = new Rectangle(10, 10);
            const r2 = new Rectangle(10, 10);
            g.add(r1);
            g.add(r2);
            expect(g.getElementAt(1, 1)).toEqual(r2);
            g.remove(r2);
            expect(g.getElementAt(1, 1)).toEqual(r1);
        });
        it('Returns null if none found', () => {
            expect(new Graphics().getElementAt(0, 0)).toBeNull();
        });
    });
    describe('getElementsAt', () => {
        it('Returns all element at the given position', () => {
            const g = new Graphics();
            const r1 = new Rectangle(10, 10);
            const r2 = new Rectangle(10, 10);
            g.add(r1);
            g.add(r2);
            expect(g.getElementsAt(1, 1)).toEqual([r1, r2]);
        });
    });
    describe('elementExistsWithParameters', () => {
        it('Returns if an element exists satisfying all paramters', () => {
            const g = new Graphics();
            const r = new Rectangle(10, 10);
            g.add(r);
            expect(
                g.elementExistsWithParameters({
                    width: 10,
                })
            ).toBeTrue();
            expect(
                g.elementExistsWithParameters({
                    width: 10,
                    height: 11,
                })
            ).toBeFalse();
            expect(
                g.elementExistsWithParameters({
                    width: 10,
                    height: 10,
                })
            ).toBeTrue();
        });
    });
    describe('map()', () => {
        it('Rescales values in a new range', () => {
            expect(map(50, 0, 100, 0, 4)).toEqual(2);
        });
    });
    describe('cleanup()', () => {
        it('Removes all handlers', () => {
            const g = new Graphics();
            simulateEvent('keydown', { keyCode: 'testkey' }, window);
            expect(pressedKeys).toContain('testkey');
            g.cleanup();
            simulateEvent('keydown', { keyCode: 'test2' }, window);
            expect(pressedKeys).not.toContain('test2');
        });
    });
});
