import Polygon from '../src/polygon.js';
import Graphics from '../src/graphics.js';

describe('Polygon', () => {
    describe('The polygon constructor', () => {
        it('Creates a polygon with .type', () => {
            expect(new Polygon().type).toEqual('Polygon');
        });
    });
    describe('getWidth()', () => {
        it('Returns the maximum width between any two points in the x axis', () => {
            const p = new Polygon();
            p.addPoint(0, 0);
            p.addPoint(20, 0);
            p.addPoint(30, 0);
            p.addPoint(200, 0);
            expect(p.getWidth()).toBe(200);
        });
    });
    describe('getHeight()', () => {
        it('Returns the maximum height between any two points in the y axis', () => {
            const p = new Polygon();
            p.addPoint(0, 20);
            p.addPoint(0, 30);
            p.addPoint(0, 120);
            p.addPoint(0, 90);
            expect(p.getHeight()).toBe(100);
        });
    });
    describe('move()', () => {
        it('Moves each point in the Polygon by dx, dy', () => {
            const p = new Polygon();
            p.addPoint(10, 10);
            p.move(20, 20);
            expect(p.points[0]).toEqual({ x: 30, y: 30 });
        });
    });
});
