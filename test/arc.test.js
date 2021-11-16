import Graphics from '../src/graphics/index.js';
import Arc from '../src/graphics/arc.js';

describe('arc', () => {
    describe('Arc constructor', () => {
        it('Errors for <4 arguments', () => {
            expect(() => {
                new Arc();
            }).toThrow();
            expect(() => {
                new Arc(1);
            }).toThrow();
            expect(() => {
                new Arc(1, 2);
            }).toThrow();
            expect(() => {
                new Arc(1, 2, 3);
            }).toThrow();
            expect(() => {
                new Arc(1, 2, 3, 0);
            }).not.toThrow();
        });
        it('Errors for a non-numerical radius', () => {
            expect(() => {
                new Arc(NaN, 0, 0, 0);
            }).toThrow();
            expect(() => {
                new Arc(Infinity, 0, 0, 0);
            }).toThrow();
            expect(() => {
                new Arc('zero', 0, 0, 0);
            }).toThrow();
            expect(() => {
                new Arc(0, 0, 0, 0);
            }).not.toThrow();
        });
        it('Errors for a non-numerical startAngle', () => {
            expect(() => {
                new Arc(0, NaN, 0, 0);
            }).toThrow();
            expect(() => {
                new Arc(0, Infinity, 0, 0);
            }).toThrow();
            expect(() => {
                new Arc(0, 'zero', 0, 0);
            }).toThrow();
            expect(() => {
                new Arc(0, 0, 0, 0);
            }).not.toThrow();
        });
        it('Errors for a non-numerical endAngle', () => {
            expect(() => {
                new Arc(0, 0, NaN, 0);
            }).toThrow();
            expect(() => {
                new Arc(0, 0, Infinity, 0);
            }).toThrow();
            expect(() => {
                new Arc(0, 0, 'zero', 0);
            }).toThrow();
            expect(() => {
                new Arc(0, 0, 0, 0);
            }).not.toThrow();
        });
        it('Errors for an invalid angleUnit', () => {
            expect(() => {
                new Arc(0, 0, 0, NaN);
            }).toThrow();
            expect(() => {
                new Arc(0, 0, 0, Infinity);
            }).toThrow();
            expect(() => {
                new Arc(0, 0, 0, 'zero');
            }).toThrow();
            expect(() => {
                new Arc(0, 0, 0, 0);
            }).not.toThrow();
            expect(() => {
                new Arc(0, 0, 0, 1);
            }).not.toThrow();
            expect(() => {
                new Arc(0, 0, 0, 2);
            }).toThrow();
        });

        it('Correctly converts angles and radians', () => {
            const arc1 = new Arc(0, 180, 0, 0);
            expect(arc1.startAngle).toBe(Math.PI);
            const arc2 = new Arc(0, Math.PI / 2, 0, 1);
            expect(arc2.startAngle).toBe(Math.PI / 2);
        });
        it('Defaults to counterclockwise', () => {
            expect(new Arc(0, 0, 0, 0).counterclockwise).toBe(true);
        });
        it('Creates an arc with .type', () => {
            expect(new Arc(0, 0, 0, 0).type).toEqual('Arc');
        });
    });

    describe('Drawing arcs', () => {
        it('Calls context.arc with the appropriate args', () => {
            const g = new Graphics();
            g.shouldUpdate = false;
            const arc = new Arc(0, 180, 0, 0);
            g.add(arc);
            const contextSpy = spyOn(g.getContext(), 'arc');
            g.redraw();
            expect(contextSpy).toHaveBeenCalledWith(0, 0, 0, Math.PI, 0, true);
        });
        it('Draws borders', () => {
            const g = new Graphics();
            g.shouldUpdate = false;
            const arc = new Arc(0, 180, 0, 0);
            g.add(arc);
            arc.setBorder(true);
            const contextBorderSpy = spyOn(g.getContext(), 'stroke');
            g.redraw();
            expect(contextBorderSpy).toHaveBeenCalledTimes(1);
        });
        it('Positions properly', () => {
            const g = new Graphics();
            g.shouldUpdate = false;
            const a = new Arc(30, -90, 0, 0);
            a.setColor('red');
            g.add(a);
            g.redraw();
            const context = g.getContext();
            const pixel = context.getImageData(0, 0, 1, 1);
            expect(pixel.data).toEqual(new Uint8ClampedArray([255, 0, 0, 255]));
        });
    });

    describe('setStartAngle', () => {
        it('Errors for fewer or greater than 1 arguments', () => {
            const arc = new Arc(0, 180, 0, 0);
            expect(() => {
                arc.setStartAngle();
            }).toThrow(Error('You should pass exactly 1 argument to `setStartAngle`'));
            expect(() => {
                arc.setStartAngle(1, 2);
            }).toThrow(Error('You should pass exactly 1 argument to `setStartAngle`'));
        });
        it('Errors for non-numerical numbers', () => {
            const arc = new Arc(0, 180, 0, 0);
            expect(() => {
                arc.setStartAngle('oops');
            }).toThrow(
                Error(
                    'Invalid value passed to `setStartAngle`. Make sure you are passing a finite number.'
                )
            );
            expect(() => {
                arc.setStartAngle(Infinity);
            }).toThrow(
                Error(
                    'Invalid value passed to `setStartAngle`. Make sure you are passing a finite number.'
                )
            );
        });
        it("Sets the arc's startAngle for both rad/degrees", () => {
            const degreeArc = new Arc(0, 180, 0, 0);
            degreeArc.setStartAngle(30);
            expect(degreeArc.startAngle).toEqual((30 / 180) * Math.PI);
            const radianArc = new Arc(0, 180, 0, 1);
            radianArc.setStartAngle(33);
            expect(radianArc.startAngle).toEqual(33);
        });
    });

    describe('setEndAngle', () => {
        it('Errors for fewer or greater than 1 arguments', () => {
            const arc = new Arc(0, 180, 0, 0);
            expect(() => {
                arc.setEndAngle();
            }).toThrow(Error('You should pass exactly 1 argument to `setEndAngle`'));
            expect(() => {
                arc.setEndAngle(1, 2);
            }).toThrow(Error('You should pass exactly 1 argument to `setEndAngle`'));
        });
        it('Errors for non-numerical numbers', () => {
            const arc = new Arc(0, 180, 0, 0);
            expect(() => {
                arc.setEndAngle('oops');
            }).toThrow(
                Error(
                    'Invalid value passed to `setEndAngle`. Make sure you are passing a finite number.'
                )
            );
            expect(() => {
                arc.setEndAngle(Infinity);
            }).toThrow(
                Error(
                    'Invalid value passed to `setEndAngle`. Make sure you are passing a finite number.'
                )
            );
        });
        it("Sets the arc's endAngle for both rad/degrees", () => {
            const degreeArc = new Arc(0, 180, 0, 0);
            degreeArc.setEndAngle(30);
            expect(degreeArc.endAngle).toEqual((30 / 180) * Math.PI);
            const radianArc = new Arc(0, 180, 0, 1);
            radianArc.setEndAngle(33);
            expect(radianArc.endAngle).toEqual(33);
        });
    });
    describe('getStartAngle', () => {
        it('Performs degree/radian conversion', () => {
            const degreeArc = new Arc(0, 180, 0, Arc.DEGREES);
            // it's internally stored as radians
            expect(degreeArc.startAngle).toEqual(Math.PI);
            expect(degreeArc.getStartAngle()).toEqual(180);
            const radianArc = new Arc(0, Math.PI, 0, Arc.RADIANS);
            // it's internally stored as radians
            expect(radianArc.startAngle).toEqual(Math.PI);
            expect(radianArc.getStartAngle()).toEqual(Math.PI);
        });
    });
    describe('getEndAngle', () => {
        it('Performs degree/radian conversion', () => {
            const degreeArc = new Arc(0, 0, 180, Arc.DEGREES);
            // it's internally stored as radians
            expect(degreeArc.endAngle).toEqual(Math.PI);
            expect(degreeArc.getEndAngle()).toEqual(180);
            const radianArc = new Arc(0, 0, Math.PI, Arc.RADIANS);
            // it's internally stored as radians
            expect(radianArc.endAngle).toEqual(Math.PI);
            expect(radianArc.getEndAngle()).toEqual(Math.PI);
        });
    });
    describe('setDirection', () => {
        it('Errors for fewer or greater than 1 arg', () => {
            const arc = new Arc(0, 0, 180, Arc.DEGREES);
            expect(() => {
                arc.setDirection();
            }).toThrow(Error('You should pass exactly 1 argument to `setDirection`'));
            expect(() => {
                arc.setDirection(Arc.CLOCKWISE, Arc.CLOCKWISE);
            }).toThrow(Error('You should pass exactly 1 argument to `setDirection`'));
        });
        it('Errors for non-boolean args', () => {
            const arc = new Arc(0, 0, 180, Arc.DEGREES);
            expect(() => {
                arc.setDirection(1);
            }).toThrow(
                Error(
                    'Invalid value passed to `setDirection`. Make sure you are passing a boolean value. `true` for counterclockwise, false for clockwise.'
                )
            );
        });
        it('Modifies arc.counterclockwise', () => {
            const arc = new Arc(0, 0, 180, Arc.DEGREES);
            arc.setDirection(Arc.CLOCKWISE);
            expect(arc.counterclockwise).toBeFalse();
            arc.setDirection(Arc.COUNTER_CLOCKWISE);
            expect(arc.counterclockwise).toBeTrue();
        });
    });

    describe('containsPoint', () => {
        // todo
    });
});
