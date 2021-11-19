import Text from '../src/graphics/text.js';
import Graphics from '../src/graphics/index.js';

describe('Text', () => {
    describe('The Text constructor', () => {
        describe('Initial alignment', () => {
            it('Defaults to {vertical: bottom, horizontal: left}', () => {
                const t = new Text('Hello World');
                expect(t.anchor).toEqual({
                    vertical: 1,
                    horizontal: 0,
                });
            });
            it('Allows configuration', () => {
                const t = new Text('Hello World', '20pt Arial', {
                    vertical: 0,
                    horizontal: 0.5,
                });
                expect(t.anchor).toEqual({
                    vertical: 0,
                    horizontal: 0.5,
                });
            });
            it('Creates a text with .type', () => {
                expect(new Text('Hello').type).toEqual('Text');
            });
        });
    });
    describe('Alignment', () => {
        it('Affects the translated position of text', () => {
            const g = new Graphics();
            const t = new Text('Hello!');
            const canvasTranslateSpy = spyOn(g.getContext(), 'translate').and.callThrough();
            g.add(t);
            g.redraw();
            expect(canvasTranslateSpy).toHaveBeenCalledWith(0, 0);
            t.setAnchor({ horizontal: 0.5, vertical: 0.5 });
            g.redraw();
            expect(canvasTranslateSpy).toHaveBeenCalledWith(-t.getWidth() / 2, -t.getHeight() / 2);
            t.setPosition(10, 10);
            g.redraw();
            expect(canvasTranslateSpy).toHaveBeenCalledWith(t.getWidth() / 2, t.getHeight() / 2);
        });
    });
});
