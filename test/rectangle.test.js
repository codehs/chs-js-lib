import Graphics from '../src/graphics/index.js';
import Rectangle from '../src/graphics/rectangle.js';

describe('Rectangle', () => {
    describe('Anchors', () => {
        it('Will draw up and to the left of a 1, 1 anchor', () => {
            const g = new Graphics();
            g.shouldUpdate = false;
            const r = new Rectangle(10, 10);
            r.setColor('red');
            expect(r.getAnchor()).toEqual({ vertical: 0, horizontal: 0 });
            r.setPosition(10, 10);
            r.setAnchor({ vertical: 1, horizontal: 1 });
            g.add(r);
            g.redraw();

            const topLeftPixel = g.getPixel(0, 0);
            expect(topLeftPixel).toEqual([255, 0, 0, 255]);
        });
        it('Will draw down and to the right of a 0, 0 (default) anchor', () => {
            const g = new Graphics();
            g.shouldUpdate = false;
            const r = new Rectangle(10, 10);
            r.setPosition(g.getWidth() - 10, g.getHeight() - 1);
            r.setColor('red');
            g.add(r);
            g.redraw();
            const bottomRightPixel = g.getPixel(g.getWidth() - 1, g.getHeight() - 1);
            expect(bottomRightPixel).toEqual([255, 0, 0, 255]);
            const oobPixel = g.getPixel(g.getWidth() - 11, g.getHeight() - 11);
            expect(oobPixel).toEqual([0, 0, 0, 0]);
        });
        it('Affects containsPoint() calculations', () => {
            const r = new Rectangle(5, 5);
            r.setPosition(10, 10);
            expect(r.containsPoint(9, 9)).toBeFalse();
            r.setAnchor({ vertical: 0.5, horizontal: 0.5 });
            console.log(r.anchor.horizontal);
            expect(r.containsPoint(9, 9)).toBeTrue();
        });
    });
    describe('containsPoint', () => {
        it('Considers rotation of the rectangle', () => {
            const r = new Rectangle(100, 10);
            r.setAnchor({ vertical: 0.5, horizontal: 0.5 });
            expect(r.containsPoint(0, 11)).toBeFalse();
            r.setRotation(90);
            expect(r.containsPoint(0, 11)).toBeTrue();
        });
    });
    describe('Rectangle set/getters', () => {
        const r = new Rectangle(0, 0);
        it('setSize', () => {
            r.setSize(10, 10);
            expect(r.getHeight()).toEqual(10);
            expect(r.getWidth()).toEqual(10);
            expect(() => {
                r.setSize();
            }).toThrow(Error('You should pass exactly 2 arguments to `setSize(width, height)`.'));
            expect(() => {
                r.setSize('ten', 'ten');
            }).toThrow(
                Error(
                    'Invalid value for `width`. Make sure you are passing finite numbers to `setSize(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
                )
            );
            expect(() => {
                r.setSize(10, 'ten');
            }).toThrow(
                Error(
                    'Invalid value for `height`. Make sure you are passing finite numbers to `setSize(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
                )
            );
        });
        it('set/getWidth', () => {
            r.setWidth(12);
            expect(r.getWidth()).toEqual(12);
            expect(() => {
                r.setWidth();
            }).toThrow(Error('You should pass exactly 1 argument to `setWidth(width)`'));
            expect(() => {
                r.setWidth('ten');
            }).toThrow(
                Error(
                    'Invalid value for `width`. Make sure you are passing finite numbers to `setWidth(width)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
                )
            );
        });
        it('set/getHeight', () => {
            r.setHeight(12);
            expect(r.getHeight()).toEqual(12);
            expect(() => {
                r.setHeight();
            }).toThrow(Error('You should pass exactly 1 argument to `setHeight(height)`'));
            expect(() => {
                r.setHeight('ten');
            }).toThrow(
                Error(
                    'Invalid value for `height`. Make sure you are passing finite numbers to `setHeight(height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
                )
            );
        });
    });
});
