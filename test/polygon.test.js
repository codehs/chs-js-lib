import Polygon from '../src/graphics/polygon.js';

describe('Polygon', () => {
    describe('The polygon constructor', () => {
        it('Creates a polygon with .type', () => {
            expect(new Polygon().type).toEqual('Polygon');
        });
    });
    describe('addPoint', () => {
        it("Invalidates the superclass's bounds", () => {
            const p = new Polygon();
            const initialBoundsID = p.__lastCalculatedBoundsID;
            p.addPoint(0, 10);
            p.addPoint(0, 20);
            expect(p.__boundsInvalidated).toBeTrue();
            p.getBounds();
            expect(p.__boundsInvalidated).toBeFalse();
            expect(initialBoundsID).toBeLessThan(p.__lastCalculatedBoundsID);
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
