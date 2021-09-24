import Graphics from '../src/graphics.js';
import Arc from '../src/arc.js';

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
    });

    describe('Drawing arcs', () => {
        it('Calls context.arc with the appropriate args', () => {
            const g = new Graphics();
            const arc = new Arc(0, 180, 0, 0);
            const contextSpy = spyOn(g.getContext(), 'arc');
            arc.draw(g);
            expect(contextSpy).toHaveBeenCalledWith(0, 0, 0, Math.PI, 0, true);
        });
    });
});
