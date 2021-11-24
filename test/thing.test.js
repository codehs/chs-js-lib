import Graphics from '../src/graphics/index.js';
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
});
