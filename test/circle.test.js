import Circle from '../src/graphics/circle.js';
import Color from '../src/graphics/color.js';
import Graphics from '../src/graphics/index.js';

describe('Circle', () => {
    describe('The circle constructor', () => {
        it('Errors for fewer than or greater than one argument', () => {
            expect(() => {
                new Circle();
            }).toThrow(Error('You should pass exactly 1 argument to `new Circle(radius)`.'));
        });
        it('Errors for non-numerical radii', () => {
            expect(() => {
                new Circle(Infinity);
            }).toThrow(
                Error(
                    'You must pass a finite number to `new Circle(radius)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
                )
            );
            expect(() => {
                new Circle('one');
            }).toThrow(
                Error(
                    'You must pass a finite number to `new Circle(radius)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
                )
            );
        });
        it('Forces a positive radius', () => {
            expect(new Circle(-10).radius).toBe(0);
        });
        it('Initializes radius', () => {
            expect(new Circle(10).radius).toBe(10);
        });
        it('Defaults to be black', () => {
            expect(new Circle(0).color).toBe(Color.BLACK);
        });
        it('Defaults to lineWidth 3', () => {
            expect(new Circle(0).lineWidth).toBe(3);
        });
        it('Creates a circle with a .type', () => {
            expect(new Circle(1).type).toEqual('Circle');
        });
    });
    describe('Drawing circles', () => {
        it('Invokes context.arc', () => {
            const g = new Graphics();
            g.shouldUpdate = false;
            const circle = new Circle(50);
            circle.setPosition(30, 20);
            const contextSpy = spyOn(g.getContext(), 'arc');
            g.add(circle);
            g.redraw();
            expect(contextSpy).toHaveBeenCalledOnceWith(-25, -25, 50, 0, Math.PI * 2, true);
        });
        it('Applies the appropriate fillStyle', () => {
            const g = new Graphics();
            g.shouldUpdate = false;
            const circle = new Circle(30);
            circle.setPosition(30, 20);
            circle.setColor(Color.BLUE);
            const fillStyleSpy = spyOnProperty(
                g.getContext(),
                'fillStyle',
                'set'
            ).and.callThrough();
            g.add(circle);
            g.redraw();
            expect(fillStyleSpy).toHaveBeenCalledOnceWith(Color.BLUE);
        });
        it('Applies the appropriate border strokestyle and width, and invokes .stroke()', () => {
            const g = new Graphics();
            g.shouldUpdate = false;
            const circle = new Circle(30);
            circle.setPosition(30, 20);
            circle.setBorderColor(Color.RED);
            circle.setBorderWidth(123);
            const strokeStyleSpy = spyOnProperty(
                g.getContext(),
                'strokeStyle',
                'set'
            ).and.callThrough();
            const lineWidthSpy = spyOnProperty(
                g.getContext(),
                'lineWidth',
                'set'
            ).and.callThrough();
            g.add(circle);
            g.redraw();
            expect(strokeStyleSpy).toHaveBeenCalledOnceWith(Color.RED);
            expect(lineWidthSpy).toHaveBeenCalledOnceWith(123);
        });
        it("Colors pixels at the circle's position", () => {
            const g = new Graphics();
            g.shouldUpdate = false;
            const circle = new Circle(2);
            circle.setColor(Color.RED);
            const context = g.getContext();
            circle.setPosition(20, 20);
            g.add(circle);
            g.redraw();
            const pixel = context.getImageData(20, 20, 1, 1);
            expect(pixel.data).toEqual(new Uint8ClampedArray([255, 0, 0, 255]));
        });
    });
    it('getRadius returns radius', () => {
        expect(new Circle(123).getRadius()).toBe(123);
    });
    it('getHeight returns 2 * radius', () => {
        expect(new Circle(123).getHeight()).toBe(246);
    });
    it('getWidth returns 2 * radius', () => {
        expect(new Circle(123).getWidth()).toBe(246);
    });
    describe('setRadius', () => {
        it('Errors for fewer or greater than 1 argument', () => {
            expect(() => {
                new Circle(0).setRadius();
            }).toThrow(Error('You should pass exactly 1 argument to `setRadius(radius)`.'));
        });
        it('Errors for non-numerical arguments', () => {
            expect(() => {
                new Circle(0).setRadius(Infinity);
            }).toThrow(
                Error(
                    'You must pass a finite number to `setRadius(radius)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
                )
            );
        });
        it('Errors for non-numerical arguments', () => {
            expect(() => {
                new Circle(0).setRadius('one');
            }).toThrow(
                Error(
                    'You must pass a finite number to `setRadius(radius)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
                )
            );
        });
        it('Will force a non-negative radius', () => {
            const c = new Circle(0);
            c.setRadius(-1);
            expect(c.getRadius()).toBe(0);
        });
    });
    describe('containsPoint', () => {
        it('Succeeds for points within the circle', () => {
            const c = new Circle(5);
            expect(c.containsPoint(0, 4.999)).toBeTrue();
        });
        it('Fails for points === the radius', () => {
            const c = new Circle(5);
            expect(c.containsPoint(0, 5)).toBeFalse();
        });
        it('Fails for points > the radius', () => {
            const c = new Circle(5);
            expect(c.containsPoint(0, 5.01)).toBeFalse();
        });
        it("Considers the circle's borderWidth", () => {
            const c = new Circle(1);
            c.setBorderWidth(2);
            expect(c.containsPoint(0, 1.5)).toBeTrue();
        });
    });
});
