import GraphicsManager from '../src/graphics/index.js';
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
            const initialBoundsID = p._lastCalculatedBoundsID;
            p.addPoint(0, 10);
            p.addPoint(0, 20);
            expect(p._boundsInvalidated).toBeTrue();
            p.getBounds();
            expect(p._boundsInvalidated).toBeFalse();
            expect(initialBoundsID).toBeLessThan(p._lastCalculatedBoundsID);
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
    describe('Drawing polygons', () => {
        it('Invokes moveTo, then lineTo, for each point', () => {
            const polygon = new Polygon();
            polygon.addPoint(10, 10);
            polygon.addPoint(20, 10);
            polygon.addPoint(0, 0);
            const g = new GraphicsManager();
            const moveToSpy = spyOn(g.getContext(), 'moveTo');
            const lineToSpy = spyOn(g.getContext(), 'lineTo');
            g.shouldUpdate = false;
            g.add(polygon);
            g.redraw();
            expect(moveToSpy).toHaveBeenCalledOnceWith(10, 10);
            expect(lineToSpy).toHaveBeenCalledWith(20, 10);
            expect(lineToSpy).toHaveBeenCalledWith(0, 0);
        });
    });
    describe('containsPoint', () => {
        it('Succeeds for complex polygons', () => {
            const p = new Polygon();
            p.addPoint(30, 0);
            p.addPoint(0, 30);
            p.addPoint(30, 30);
            expect(p.containsPoint(15, 15)).toBeTrue();
            expect(p.containsPoint(10, 10)).toBeFalse();
        });
    });
    describe('setPosition', () => {
        it('Translates every point by the distance moved', () => {
            const p = new Polygon();
            p.addPoint(30, 0);
            p.addPoint(0, 30);
            p.addPoint(30, 30);
            p.setPosition(10, 10);
            expect(p.points).toEqual([
                { x: 40, y: 10 },
                { x: 10, y: 40 },
                { x: 40, y: 40 },
            ]);
        });
    });
});
