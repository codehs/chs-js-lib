import Circle from '../src/graphics/circle.js';
import Rectangle from '../src/graphics/rectangle.js';
import Group from '../src/graphics/group.js';
import Graphics from '../src/graphics/index.js';

describe('Groups', () => {
    describe('Constructing a group', () => {
        it('Should be constructed with elements', () => {
            const c = new Circle(10);
            const r = new Rectangle(10, 10);
            const g = new Group(c, r);
            expect(g.getElements()).toEqual([c, r]);
        });
    });
    describe('Adding and removing elements', () => {
        it('Should allow elements to be added', () => {
            const g = new Group();
            const c = new Circle(50);
            g.add(c);
            expect(g.getElements()).toEqual([c]);
        });
        it('Should allow elements to be removed', () => {
            const g = new Group();
            const c = new Circle(50);
            g.add(c);
            expect(g.getElements()).toEqual([c]);
            g.remove(c);
            expect(g.getElements()).toEqual([]);
        });
    });
    describe('Movement', () => {
        it('Should move all elements when moved', () => {
            const g = new Group();
            const c = new Circle(50);
            c.setPosition(50, 50);
            g.add(c);
            g.move(10, 10);
            expect(c.x).toEqual(60);
            expect(c.y).toEqual(60);
        });
    });
    describe('Opacity', () => {
        it('Should apply opacity to all elements', () => {
            const g = new Graphics();
            g.shouldUpdate = false;
            const group = new Group();
            const r = new Rectangle(g.getWidth(), g.getHeight());
            group.add(r);
            group.setOpacity(0.5);
            g.add(group);
            g.redraw();

            let context = g.getContext();
            let topLeftPixel = context.getImageData(0, 0, 1, 1);
            expect(topLeftPixel.data).toEqual(new Uint8ClampedArray([0, 0, 0, 128]));

            group.add(r);
            g.redraw();
            context = g.getContext();
            topLeftPixel = context.getImageData(0, 0, 1, 1);
            expect(topLeftPixel.data).toEqual(new Uint8ClampedArray([0, 0, 0, 128]));
        });
    });
});
