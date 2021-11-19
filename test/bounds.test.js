import Thing from '../src/graphics/thing.js';

describe('Bounds', () => {
    describe('Updating bounds', () => {
        it('Updates the __lastCalculatedBounds of the Thing', () => {
            const t = new Thing();
            const initialBoundsID = t.__lastCalculatedBoundsID;
            t.__updateBounds();
            expect(t.__lastCalculatedBoundsID).toBeGreaterThan(initialBoundsID);
        });
        it('Updating x, y, height, and width all force updates', () => {
            const t = new Thing();
            let boundsID = t.__lastCalculatedBoundsID;
            t.x = 1;
            t.getBounds();
            expect(t.__lastCalculatedBoundsID).toBeGreaterThan(boundsID);
            boundsID = t.__lastCalculatedBoundsID;
            t.y = 1;
            t.getBounds();
            expect(t.__lastCalculatedBoundsID).toBeGreaterThan(boundsID);
            boundsID = t.__lastCalculatedBoundsID;
            t.height = 1;
            t.getBounds();
            expect(t.__lastCalculatedBoundsID).toBeGreaterThan(boundsID);
            boundsID = t.__lastCalculatedBoundsID;
            t.width = 1;
            t.getBounds();
            expect(t.__lastCalculatedBoundsID).toBeGreaterThan(boundsID);
            boundsID = t.__lastCalculatedBoundsID;
            t.setPosition(10, 10);
            t.getBounds();
            expect(t.__lastCalculatedBoundsID).toBeGreaterThan(boundsID);
            boundsID = t.__lastCalculatedBoundsID;
            t.getBounds();
            expect(t.__lastCalculatedBoundsID).toEqual(boundsID);
        });
    });
    describe('Bounds calculations', () => {
        it('Creates a bounding box for the Thing', () => {
            const t = new Thing();
            t.setPosition(20, 20);
            let bounds = t.getBounds();
            expect(bounds.left).toBeNaN();
            expect(bounds.top).toBeNaN();
            expect(bounds.right).toBeNaN();
            expect(bounds.bottom).toBeNaN();
            t.width = 5;
            t.height = 5;
            bounds = t.getBounds();
            expect(bounds.left).toEqual(20);
            expect(bounds.top).toEqual(20);
            expect(bounds.right).toEqual(25);
            expect(bounds.bottom).toEqual(25);
        });
        it("Considers the Thing's anchor for calculations", () => {
            const t = new Thing();
            t.width = 10;
            t.height = 10;
            t.setAnchor({ vertical: 0.5, horizontal: 0.5 });
            let bounds = t.getBounds();
            expect(bounds.left).toEqual(-5);
            expect(bounds.top).toEqual(-5);
            expect(bounds.right).toEqual(5);
            expect(bounds.bottom).toEqual(5);
            t.setAnchor({ vertical: 1, horizontal: 1 });
            bounds = t.getBounds();
            expect(bounds.left).toEqual(-10);
            expect(bounds.top).toEqual(-10);
            expect(bounds.right).toEqual(0);
            expect(bounds.bottom).toEqual(0);
        });
    });
});
