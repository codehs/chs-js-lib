import Oval from '../src/graphics/oval.js';
import Graphics from '../src/graphics/index.js';
import Color from '../src/graphics/color.js';

describe('Oval', () => {
    describe('Drawing ovals', () => {
        it('Invokes context.ellipse', () => {
            const g = new Graphics();
            g.shouldUpdate = false;
            const o = new Oval(40, 20);
            o.setPosition(30, 20);
            const contextSpy = spyOn(g.getContext(), 'ellipse');
            g.add(o);
            g.redraw();
            expect(contextSpy).toHaveBeenCalledOnceWith(0, 0, 20, 10, Math.PI * 2, 0, 2 * Math.PI);
        });
        it("Translates the context to the oval's center", () => {
            const g = new Graphics();
            g.shouldUpdate = false;
            const o = new Oval(30, 10);
            o.setPosition(50, 50);
            const contextSpy = spyOn(g.getContext(), 'translate');
            g.add(o);
            g.redraw();
            expect(contextSpy).toHaveBeenCalledWith(o.width / 2, o.height / 2);
            expect(contextSpy).toHaveBeenCalledWith(-o.width / 2, -o.height / 2);
        });
        it("Colors pixels at the oval's position", () => {
            const g = new Graphics();
            g.shouldUpdate = false;
            const o = new Oval(40, 20);
            o.setColor(Color.RED);
            const context = g.getContext();
            o.setPosition(20, 20);
            g.add(o);
            g.redraw();
            const pixel = context.getImageData(20, 20, 1, 1);
            expect(pixel.data).toEqual(new Uint8ClampedArray([255, 0, 0, 255]));
        });
    });
    describe('containsPoint', () => {
        it('Succeeds for points within the circle', () => {
            const o = new Oval(40, 20);
            expect(o.containsPoint(19, 0)).toBeTrue();
        });
        it('Fails for points === the radius', () => {
            const o = new Oval(40, 20);
            expect(o.containsPoint(0, 20)).toBeFalse();
        });
        it('Fails for points > the radius', () => {
            const o = new Oval(40, 20);
            expect(o.containsPoint(0, 21)).toBeFalse();
        });
        it('Accounts for anchor', () => {
            const o = new Oval(10, 10);
            expect(o.containsPoint(5.1, 2)).toBeFalse();
            o.setAnchor({ vertical: 0, horizontal: 0 });
            expect(o.containsPoint(5.1, 2)).toBeTrue();
        });
    });
    describe('Anchoring ovals', () => {
        it('Should apply anchors when drawing the oval', () => {
            const o = new Oval(40, 40);
            o.setColor(Color.RED);
            expect(o.getAnchor()).toEqual({
                vertical: 0.5,
                horizontal: 0.5,
            });
            const g = new Graphics();
            g.shouldUpdate = false;
            g.add(o);

            // a circle at the top left should be placed exactly
            // at the origin, with the bottom right quadrant visible
            g.redraw();
            let topLeftPixel = g.getContext().getImageData(0, 0, 1, 1);
            expect(topLeftPixel.data).toEqual(new Uint8ClampedArray([255, 0, 0, 255]));

            // a circle at the top left with anchor 0, 0 should be drawn
            // down and to the right of the origin, with its entire
            // self visible
            o.setAnchor({ vertical: 0, horizontal: 0 });
            g.redraw();
            topLeftPixel = g.getContext().getImageData(0, 0, 1, 1);
            expect(topLeftPixel.data).toEqual(new Uint8ClampedArray([0, 0, 0, 0]));

            o.setPosition(g.getWidth(), g.getHeight());
            o.setAnchor({ vertical: 1, horizontal: 1 });
            g.redraw();
            let bottomRightPixel = g
                .getContext()
                .getImageData(g.getWidth() - 1, g.getHeight() - 1, 1, 1);
            expect(bottomRightPixel.data).toEqual(new Uint8ClampedArray([0, 0, 0, 0]));
            o.setAnchor({ vertical: 0.5, horizontal: 0.5 });
            g.redraw();
            bottomRightPixel = g
                .getContext()
                .getImageData(g.getWidth() - 1, g.getHeight() - 1, 1, 1);
            expect(bottomRightPixel.data).toEqual(new Uint8ClampedArray([255, 0, 0, 255]));
        });
    });

    describe('Bounds', () => {
        it('Bounds the oval', () => {
            const o = new Oval(50, 20);
            expect(o.getBounds()).toEqual({
                top: -10,
                right: 25,
                left: -25,
                bottom: 10,
            });
            o.setPosition(20, 20);
            expect(o.getBounds()).toEqual({
                top: 10,
                right: 45,
                left: -5,
                bottom: 30,
            });
        });
    });
    describe('Oval setters/getters', () => {
        const o = new Oval(40, 40);
        it('set/getWidth', () => {
            o.setWidth(50);
            expect(o.getWidth()).toEqual(50);
        });
        it('set/getHeight', () => {
            o.setHeight(50);
            expect(o.getHeight()).toEqual(50);
        });
    });
});
