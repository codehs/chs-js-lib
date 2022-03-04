import Graphics from '../src/graphics/index.js';
import Rectangle from '../src/graphics/rectangle.js';
import Thing from '../src/graphics/thing.js';

describe('Thing', () => {
    describe('The Thing constructor', () => [
        it('Creates a thing with .type', () => {
            expect(new Thing().type).toEqual('Thing');
        }),
    ]);
    describe('Layering', () => {
        it('Changing layer forces a re-sort', () => {
            const g = new Graphics();
            const t1 = new Thing();
            const t2 = new Thing();
            g.add(t1);
            g.add(t2);
            t1.layer = 2;
            expect(g.elementPool.indexOf(t1)).toBe(0);
            g.redraw();
            expect(g.elementPool.indexOf(t1)).toBe(1);
            expect(g.elementPool.indexOf(t2)).toBe(0);
        });
        it('Forces a re-sort before the next draw', () => {
            const g = new Graphics({ shouldUpdate: false });
            const rRed = new Rectangle(5, 5);
            const rBlue = new Rectangle(5, 5);
            rRed.setColor('red');
            rBlue.setColor('blue');
            g.add(rRed);
            g.add(rBlue);
            g.redraw();
            // before changing layer, the blue square is on top
            expect(g.getPixel(0, 0)).toEqual([0, 0, 255, 255]);
            rRed.layer = 2;
            g.redraw();
            // after changing layer, on very next draw the red square is on top
            expect(g.getPixel(0, 0)).toEqual([255, 0, 0, 255]);
        });
        it('Layering works through removal', () => {
            const g = new Graphics();
            const t1 = new Thing();
            const t2 = new Thing();
            const t3 = new Thing();
            g.add(t1);
            g.add(t2);
            g.add(t3);
            t3.layer = 2;
            expect(g.elementPool.indexOf(t1)).toBe(0);
            g.redraw();
            expect(g.elementPool.indexOf(t1)).toBe(0);
            expect(g.elementPool.indexOf(t2)).toBe(1);
            expect(g.elementPool.indexOf(t3)).toBe(2);
            g.remove(t1);
            g.redraw();
            expect(g.elementPool.indexOf(t2)).toBe(0);
            expect(g.elementPool.indexOf(t3)).toBe(1);
            expect(g.elementPool.indexOf(t1)).toBe(2);

            g.removeAll();
            g.add(t1);
            g.add(t2);
            g.redraw();
            expect(g.elementPool.indexOf(t1)).toBe(0);
            expect(g.elementPool.indexOf(t2)).toBe(1);
            g.remove(t1);
            g.redraw();
            expect(g.elementPool.indexOf(t2)).toBe(0);
            expect(g.elementPool.indexOf(t1)).toBe(1);
            g.add(t3);
            expect(g.elementPool.indexOf(t2)).toBe(0);
            expect(g.elementPool.indexOf(t3)).toBe(1);
            expect(g.elementPool.indexOf(t1)).toBe(-1);
        });
    });
    describe('Opacity', () => {
        it('Changing the opacity updates globalAlpha', () => {
            const g = new Graphics();
            const t = new Thing();
            t.setOpacity(0.5);
            g.add(t);
            const globalAlphaSpy = spyOnProperty(
                g.getContext(),
                'globalAlpha',
                'set'
            ).and.callThrough();
            g.redraw();
            expect(globalAlphaSpy).toHaveBeenCalledOnceWith(0.5);
        });
    });
    describe('containsPoint', () => {
        it('Performs rotation before checking the subclass', () => {
            const containsPointSpy = jasmine.createSpy();
            class Subclass extends Thing {
                width = 10;
                height = 10;
                _containsPoint(x, y) {
                    containsPointSpy(x, y);
                }
            }
            const subThing = new Subclass();
            subThing.setRotation(45);
            subThing.containsPoint(10, 10);
            expect(containsPointSpy).toHaveBeenCalledOnceWith(12.071067811865476, 5);
        });
    });
    describe('setFilled', () => {
        it('modifies .filled', () => {
            const t = new Thing();
            expect(t.filled).toBeTrue();
            t.setFilled(false);
            expect(t.filled).toBeFalse();
        });
        it('skips .fillStyle sets in draw', () => {
            const g = new Graphics({ shouldUpdate: false });
            const t = new Thing();
            t.setFilled(false);
            g.add(t);
            const fillSpy = spyOnProperty(g.getContext(), 'fillStyle', 'set').and.callThrough();
            g.redraw();
            expect(fillSpy).not.toHaveBeenCalled();
        });
    });
    describe('.type', () => {
        it('Is modified with setType and getType', () => {
            const t = new Thing();
            t.setType('newType');
            expect(t.type).toEqual('newType');
            expect(t.getType()).toEqual('newType');
        });
    });
});
