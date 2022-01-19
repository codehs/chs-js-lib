import Stack from '../src/datastructures/stack.js';

describe('Stack', () => {
    it('pushing and poppying', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toEqual(2);
        expect(stack.pop()).toEqual(1);
        expect(stack.pop()).toEqual(undefined);
        expect(stack.pop()).toEqual(undefined);
    });
    it('isEmpty/hasNext/peek', () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBeTrue();
        stack.push(1);
        expect(stack.isEmpty()).toBeFalse();
        expect(stack.peek()).toEqual(1);
        stack.push(2);
        expect(stack.peek()).toEqual(2);
        stack.clear();
        expect(stack.isEmpty()).toBeTrue();
        expect(stack.peek()).toBeUndefined();
    });
});
