import Set from '../src/datastructures/set.js';

describe('Set', () => {
    describe('isEmpty', () => {
        it('new Set().isEmpty', () => {
            expect(new Set().isEmpty()).toBeTrue();
        });
        it('A set containing elements is not empty', () => {
            expect(new Set([1, 2, 3]).isEmpty()).toBeFalse();
        });
    });
    describe('contains', () => {
        it('Checks if an element is in the set using deep equality', () => {
            const s = new Set([1, 2, 3]);
            expect(s.contains(1)).toBeTrue();
            const s1 = new Set([[1, 2, 3]]);
            expect(s.contains([1, 2, 3])).toBeFalse();
        });
    });
    describe('elems', () => {
        it('Creates an array from the elements in the set', () => {
            const s = new Set([1, 2, 3]);
            expect(s.elems()).toEqual([1, 2, 3]);
        });
    });
    describe('union', () => {
        it('Does not modify the inputs', () => {
            const a = new Set([1, 2, 3]);
            const b = new Set([4, 5, 6]);
            const u = a.union(b);
            expect(a).toEqual(new Set([1, 2, 3]));
            expect(b).toEqual(new Set([3, 4, 5]));
        });
        it('Unions two sets', () => {
            const a = new Set([1, 2, 3]);
            const b = new Set([4, 5, 6]);
            const u = a.union(b);
            expect(u).toEqual(new Set([1, 2, 3, 4, 5, 6]));
        });
    });
    describe('intersect', () => {
        it('Does not modify the inputs', () => {
            const a = new Set([1, 2, 3]);
            const b = new Set([4, 5, 6]);
            const i = a.intersect(b);
            expect(a).toEqual(new Set([1, 2, 3]));
            expect(b).toEqual(new Set([3, 4, 5]));
        });
        it('Intersects two sets', () => {
            const a = new Set([1, 2, 3]);
            const b = new Set([4, 5, 6]);
            const i = a.intersect(b);
            expect(i).toEqual(new Set([]));
            a.add(4);
            expect(a.intersect(b)).toEqual(new Set([4]));
        });
    });
    describe('toString', () => {
        it('Formats everything properly', () => {
            const s = new Set([1, 2, 3]);
            expect(s.toString()).toEqual('Set: {1, 2, 3}');
        });
    });
});
