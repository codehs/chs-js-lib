import Circle from '../src/graphics/circle.js';
import Rectangle from '../src/graphics/rectangle.js';
import Group from '../src/graphics/group.js';
import Graphics from '../src/graphics/index.js';
import WebImage from '../src/graphics/webimage.js';
import { RGBURL } from './webimage.test.js';

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

            let topLeftPixel = g.getPixel(0, 0);
            expect(topLeftPixel).toEqual([0, 0, 0, 128]);

            group.add(r);
            g.redraw();
            topLeftPixel = g.getPixel(0, 0);
            expect(topLeftPixel).toEqual([0, 0, 0, 128]);
        });
    });
    describe('Rotation', () => {
        const img = new WebImage(RGBURL);

        beforeAll(done => {
            img.loaded(() => {
                done();
            });
        });

        it('Should rotate the entire content of the group', () => {
            const g = new Group();
            const gfx = new Graphics();
            gfx.shouldUpdate = false;
            g.add(img);
            g.rotate(180);
            gfx.add(g);
            gfx.redraw();
            const topLeftPixel = gfx.getPixel(0, 0);
            expect(topLeftPixel).toEqual([0, 0, 255, 255]);
        });
        it('Should rotate the entire content of the group around its center', () => {
            const g = new Group();
            const gfx = new Graphics();
            gfx.shouldUpdate = false;
            g.add(img);
            g.rotate(180);
            const chartreuseRect = new Rectangle(90, 90);
            chartreuseRect.setColor('chartreuse');
            chartreuseRect.setPosition(90, 90);
            g.add(chartreuseRect);
            gfx.add(g);
            gfx.redraw();
            const topLeftPixel = gfx.getPixel(0, 0);
            expect(topLeftPixel).toEqual([127, 255, 0, 255]);
        });
    });
    describe('Bounds calculations', () => {
        it('Should update bounds whenever an element is added/removed', () => {
            const g = new Group();
            g.add(new Circle(10));
            expect(g.getBounds()).toEqual({
                top: -10,
                left: -10,
                right: 10,
                bottom: 10,
            });
            const rect = new Rectangle(5, 5);
            rect.setPosition(10, 10);
            g.add(rect);
            expect(g.getBounds()).toEqual({
                top: -10,
                left: -10,
                right: 15,
                bottom: 15,
            });
            g.remove(rect);
            expect(g.getBounds()).toEqual({
                top: -10,
                left: -10,
                right: 10,
                bottom: 10,
            });
            expect(g._boundsInvalidated).toBeFalse();
        });
        it('Should update bounds whenever a child is rotated', () => {
            const g = new Group();
            const r = new Rectangle(100, 10);
            r.setAnchor({ vertical: 0.5, horizontal: 0.5 });
            g.add(r);
            expect(g.getBounds()).toEqual({
                top: -5,
                bottom: 5,
                left: -50,
                right: 50,
            });
            r.rotate(Math.PI / 2, 1);
            // weird rounding
            const bounds = Object.entries(g.getBounds()).reduce((acc, [k, v]) => {
                acc[k] = Math.round(v);
                return acc;
            }, {});
            expect(bounds).toEqual({
                top: -50,
                bottom: 50,
                left: -5,
                right: 5,
            });
        });
    });
    describe('Positioning', () => {
        it('A groups x is its left bound', () => {
            const g = new Group();
            g.add(new Rectangle(20, 20));
            expect(g.x).toEqual(g.getBounds().left);
            g.setPosition(10, 10);
            expect(g._boundsInvalidated).toBeTrue();
            expect(g.x).toEqual(g.getBounds().left);
            expect(g.x).toEqual(10);
        });
    });
    describe('containsPoint', () => {
        it('Should be true if any of its children contain the point', () => {
            const g = new Group();
            expect(g.containsPoint(10, 10)).toBeFalse();
            const r = new Rectangle(11, 11);
            g.add(r);
            expect(g.containsPoint(10, 10)).toBeTrue();
            g.remove(r);
            expect(g.containsPoint(10, 10)).toBeFalse();
        });
        it("Considers childrens' rotations", () => {
            const g = new Group();
            const r = new Rectangle(100, 10);
            r.setAnchor({ vertical: 0.5, horizontal: 0.5 });
            g.add(r);
            expect(g.containsPoint(0, 11)).toBeFalse();
            r.rotate(90);
            expect(g.containsPoint(0, 11)).toBeTrue();
        });
        it('Considers anchoring', () => {
            const g = new Group(new Rectangle(20, 20));
            expect(g.containsPoint(10, 10)).toBeTrue();
            expect(g.containsPoint(-5, -5)).toBeFalse();
            g.setAnchor({ vertical: 0.5, horizontal: 0.5 });
            expect(g.containsPoint(-5, -5)).toBeTrue();
        });
    });
    describe('Drawing', () => {
        it('Draws according to layer', () => {
            const g = new Group();
            const red = new Rectangle(20, 20);
            red.setColor('red');
            const blue = new Rectangle(20, 20);
            blue.setColor('blue');
            g.add(red);
            g.add(blue);

            const gfx = new Graphics({ shouldUpdate: false });
            gfx.add(g);
            gfx.redraw();

            let topLeftPixel = gfx.getPixel(0, 0);
            expect(topLeftPixel).toEqual([0, 0, 255, 255]);

            red.layer = 2;
            gfx.redraw();
            topLeftPixel = gfx.getPixel(0, 0);
            expect(topLeftPixel).toEqual([255, 0, 0, 255]);
        });
    });
});
