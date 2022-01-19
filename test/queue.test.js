import Queue from '../src/datastructures/queue.js';

describe('Queue', () => {
    it('enqueueing and dequeueing', () => {
        const q = new Queue();
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        expect(q.dequeue()).toEqual(1);
        expect(q.dequeue()).toEqual(2);
        expect(q.dequeue()).toEqual(3);
    });
    it('isEmpty/hasNext/peek', () => {
        const q = new Queue();
        expect(q.hasNext()).toBeFalse();
        q.enqueue(1);
        expect(q.hasNext()).toBeTrue();
        expect(q.peek()).toEqual(1);
        q.enqueue(2);
        expect(q.peek()).toEqual(1);
        q.clear();
        expect(q.peek()).toBeUndefined();
        expect(q.isEmpty()).toBeTrue();
    });
});
