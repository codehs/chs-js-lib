import Graphics from '../src/graphics.js';
import Thing from '../src/thing.js';

describe('Thing', () => {
    describe('Layering', () => {
        it('Changing layer forces a re-sort', () => {
            const g = new Graphics();
            const t1 = new Thing();
            const t2 = new Thing();
            g.add(t2);
            g.add(t1);
            t1.layer = 2;
            expect(g.elementPool.indexOf(t2)).toBe(0);
            g.redraw();
            expect(g.elementPool.indexOf(t1)).toBe(0);
            expect(g.elementPool.indexOf(t2)).toBe(1);
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
});
