import Text from '../src/text.js';
import Graphics from '../src/graphics.js';

describe('Text', () => {
    describe('The Text constructor', () => {
        describe('Initial alignment', () => {
            it('Defaults to {vertical: bottom, horizontal: left}', () => {
                const t = new Text('Hello World');
                expect(t.alignment).toEqual({
                    vertical: 'bottom',
                    horizontal: 'left',
                });
            });
            it('Allows configuration', () => {
                const t = new Text('Hello World', '20pt Arial', {
                    vertical: 'top',
                    horizontal: 'center',
                });
                expect(t.alignment).toEqual({
                    vertical: 'top',
                    horizontal: 'center',
                });
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
            t.setAlignment({ horizontal: 'center', vertical: 'center' });
            g.redraw();
            expect(canvasTranslateSpy).toHaveBeenCalledWith(
                -t.getWidth() / 2,
                t.getHeight() / 2
            );
            t.setPosition(10, 10);
            g.redraw();
            expect(canvasTranslateSpy).toHaveBeenCalledWith(
                10 - t.getWidth() / 2,
                10 + t.getHeight() / 2
            );
        });
    });
});
