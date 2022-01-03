import Vector from '../src/datastructures/vector.js';

describe('vector', () => {
    describe('Constructors', () => {
        it('Succeeds for 0-n arguments', () => {
            expect(() => {
                const v = new Vector();
            }).not.toThrow();
            expect(() => {
                const v = new Vector(1);
            }).not.toThrow();
            expect(() => {
                new Vector(1, 2);
            }).not.toThrow();
            expect(() => {
                new Vector(1, 2, 3);
            }).not.toThrow();
            expect(() => {
                new Vector(1, 2, 3, 4);
            }).not.toThrow();

            const v1 = new Vector();
            expect(v1.x).toEqual(0);
            expect(v1.y).toEqual(0);
            expect(v1.z).toEqual(0);

            const v2 = new Vector(1);
            expect(v2.x).toEqual(1);
            expect(v2.y).toEqual(0);
            expect(v2.z).toEqual(0);

            const v3 = new Vector(1, 2);
            expect(v3.x).toEqual(1);
            expect(v3.y).toEqual(2);
            expect(v3.z).toEqual(0);

            const v4 = new Vector(1, 2, 3);
            expect(v4.x).toEqual(1);
            expect(v4.y).toEqual(2);
            expect(v4.z).toEqual(3);
        });
    });
    describe('add', () => {
        it('Supports calling with numbers', () => {
            const v = new Vector();
            v.add(1, 2, 3);
            expect(v.x).toEqual(1);
            expect(v.y).toEqual(2);
            expect(v.z).toEqual(3);
        });
        it('Supports calling with another Vector', () => {
            const v = new Vector();
            v.add(new Vector(1, 2, 3));
            expect(v.x).toEqual(1);
            expect(v.y).toEqual(2);
            expect(v.z).toEqual(3);
        });
        it('Supports calling with an array', () => {
            const v = new Vector();
            v.add([1, 2, 3]);
            expect(v.x).toEqual(1);
            expect(v.y).toEqual(2);
            expect(v.z).toEqual(3);
        });
    });
    describe('multiply', () => {
        it('Succeeds when calling with a vector', () => {
            const a = new Vector(1, 2, 3);
            a.multiply(new Vector(2, 2, 2));
            expect(a.x).toEqual(2);
            expect(a.y).toEqual(4);
            expect(a.z).toEqual(6);
        });
        describe('Calling with an array', () => {
            it("Will multiply every element by the scalar in array[0] if the array's length is 0", () => {
                const a = new Vector(1, 2, 3);
                a.multiply([2]);
                expect(a.x).toEqual(2);
                expect(a.y).toEqual(4);
                expect(a.z).toEqual(6);
            });
            it("Will multiply the x and y components if the array's length is 2", () => {
                const a = new Vector(1, 2, 3);
                a.multiply([2, 2]);
                expect(a.x).toEqual(2);
                expect(a.y).toEqual(4);
                expect(a.z).toEqual(3);
            });
            it('Will multiply all components if the length of the array is 3', () => {
                const a = new Vector(1, 2, 3);
                a.multiply([2, 2, 2]);
                expect(a.x).toEqual(2);
                expect(a.y).toEqual(4);
                expect(a.z).toEqual(6);
            });
        });
        describe('Calling with numbers', () => {
            it("Will multiply everything by a scalar if there's just one argument", () => {
                const a = new Vector(1, 2, 3);
                a.multiply(2);
                expect(a.x).toEqual(2);
                expect(a.y).toEqual(4);
                expect(a.z).toEqual(6);
            });
            it('Will multiply the x and y components if there are two arguments', () => {
                const a = new Vector(1, 2, 3);
                a.multiply(2, 2);
                expect(a.x).toEqual(2);
                expect(a.y).toEqual(4);
                expect(a.z).toEqual(3);
            });
            it('Will multiply all components if there are three arguments', () => {
                const a = new Vector(1, 2, 3);
                a.multiply(2, 2, 2);
                expect(a.x).toEqual(2);
                expect(a.y).toEqual(4);
                expect(a.z).toEqual(6);
            });
        });
        describe('Invalid calls', () => {
            it('Throws', () => {
                expect(() => {
                    new Vector(1, 2, 3).multiply('one');
                }).toThrow(new TypeError('Invalid arguments for multiply.'));
            });
        });
    });
    describe('clone/copy', () => {
        it('Copies the vector', () => {
            let v = new Vector(1, 2, 3).clone();
            expect(v.x).toEqual(1);
            expect(v.y).toEqual(2);
            expect(v.z).toEqual(3);
            v = new Vector(1, 2, 3).copy();
            expect(v.x).toEqual(1);
            expect(v.y).toEqual(2);
            expect(v.z).toEqual(3);
        });
        it('Deep copies, preventing mutating shared memory', () => {
            let v1 = new Vector(0, 0, 0);
            let v2 = v1.clone();
            v2.x = 1;
            expect(v1.x).toEqual(0);
            v2 = v1.copy();
            expect(v2.x).toEqual(0);
        });
    });
    describe('normalize', () => {
        it('Normalizes the vector by its magnitude', () => {
            const a = new Vector(4, 3);
            a.normalize();
            expect(a.x).toBeCloseTo(4 / 5, 5);
            expect(a.y).toBeCloseTo(3 / 5, 5);
        });
    });
});
