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

            const topLeftPixel = g.getContext().getImageData(0, 0, 1, 1);
            expect(topLeftPixel.data).toEqual(new Uint8ClampedArray([255, 0, 0, 255]));
        });
        it('Will draw down and to the right of a 0, 0 (default) anchor', () => {
            const g = new Graphics();
            g.shouldUpdate = false;
            const r = new Rectangle(10, 10);
            r.setPosition(g.getWidth() - 10, g.getHeight() - 1);
            r.setColor('red');
            g.add(r);
            g.redraw();
            const bottomRightPixel = g
                .getContext()
                .getImageData(g.getWidth() - 1, g.getHeight() - 1, 1, 1);
            expect(bottomRightPixel.data).toEqual(new Uint8ClampedArray([255, 0, 0, 255]));
            const oobPixel = g
                .getContext()
                .getImageData(g.getWidth() - 11, g.getHeight() - 11, 1, 1);
            expect(oobPixel.data).toEqual(new Uint8ClampedArray([0, 0, 0, 0]));
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
});
