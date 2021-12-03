import Text from '../src/graphics/text.js';
import Graphics from '../src/graphics/index.js';
import GraphicsManager from '../src/graphics/index.js';

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
            it('Creates a text with .type', () => {
                expect(new Text('Hello').type).toEqual('Text');
            });
        });
    });
    describe('Anchoring', () => {
        it('Affects the translated position of text', () => {
            const g = new Graphics();
            const t = new Text('Hello!');
            const canvasTranslateSpy = spyOn(g.getContext(), 'translate').and.callThrough();
            g.add(t);
            g.redraw();
            expect(canvasTranslateSpy).toHaveBeenCalledWith(0, t.getAnchor().vertical * t.height);
            t.setAnchor({ horizontal: 0.5, vertical: 0.5 });
            g.redraw();
            expect(canvasTranslateSpy).toHaveBeenCalledWith(-t.getWidth() / 2, -t.getHeight() / 2);
            t.setPosition(10, 10);
            g.redraw();
            expect(canvasTranslateSpy).toHaveBeenCalledWith(t.getWidth() / 2, t.getHeight() / 2);
        });
    });
    describe('setFont', () => {
        it('Errors for invalid arguments', () => {
            const t = new Text('asdf');
            expect(() => {
                t.setFont(1, 2, 3);
            }).toThrow(Error('You should pass exactly 1 argument to `setFont`'));
            expect(() => {
                t.setFont(1);
            }).toThrow(
                TypeError(
                    'Invalid value passed to `setFont`. You passed a value of type ' +
                        typeof 1 +
                        ', but a string is required.'
                )
            );
        });
        it('Modifies the font used when rendering', () => {
            const t = new Text('asdf');
            t.setFont('1000pt Arial');
            const g = new GraphicsManager();
            const fontSpy = spyOnProperty(g.getContext(), 'font', 'set').and.callThrough();
            g.shouldUpdate = false;
            g.add(t);
            g.redraw();
            expect(fontSpy).toHaveBeenCalledOnceWith('1000pt Arial');
        });
        it('Updates dimensions', () => {
            const t = new Text('mmmm');
            const originalWidth = t.getWidth();
            t.setFont('100pt Arial');
            expect(t.getWidth()).toBeGreaterThan(originalWidth);
        });
    });
    describe('setText', () => {
        it('Errors for invalid arguments', () => {
            const t = new Text('asdf');
            expect(() => {
                t.setText();
            }).toThrow(Error('You should pass exactly 1 argument to `setText`'));
            expect(() => {
                t.setText({});
            }).toThrow(
                TypeError(
                    'Invalid value passed to `setText`. You passed a value of type ' +
                        typeof {} +
                        ', but a string or number is required.'
                )
            );
        });
        it('Modifies the label', () => {
            const t = new Text('asdf');
            t.setText('fdsa');
            expect(t.label).toEqual('fdsa');
        });
    });
    describe('setLabel', () => {
        it('Errors for invalid arguments', () => {
            const t = new Text('asdf');
            expect(() => {
                t.setLabel();
            }).toThrow(Error('You should pass exactly 1 argument to `setLabel`'));
            expect(() => {
                t.setLabel({});
            }).toThrow(
                TypeError(
                    'Invalid value passed to `setLabel`. You passed a value of type ' +
                        typeof {} +
                        ', but a string or number is required.'
                )
            );
        });
        it('Modifies the label', () => {
            const t = new Text('asdf');
            t.setLabel('fdsa');
            expect(t.label).toEqual('fdsa');
        });
    });
    describe('containsPoint', () => {
        it('Checks if a point is contained in the Text', () => {
            const t = new Text('hello world');
            expect(t.containsPoint(5, 5)).toBeFalse();
            expect(t.containsPoint(5, -5)).toBeTrue();
        });
        it('Considers anchoring', () => {
            const t = new Text('hello world');
            t.setAnchor({ vertical: 0, horizontal: 0 });
            expect(t.containsPoint(5, -5)).toBeFalse();
            expect(t.containsPoint(5, 5)).toBeTrue();
        });
    });
});
