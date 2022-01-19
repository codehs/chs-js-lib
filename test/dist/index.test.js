import {
    Console,
    Queue,
    Stack,
    Grid,
    ExtendedSet,
    Vector,
    Arc,
    Circle,
    Color,
    map,
    Group,
    Graphics,
    Keyboard,
    Line,
    Oval,
    Polygon,
    Rectangle,
    Text,
    Thing,
    WebImage,
    WebVideo,
    Randomizer,
    AudioManager,
    Audio,
    Sound,
} from '../../dist/chs.mjs';

describe('Distributed build', () => {
    it('Constructors', () => {
        expect(() => {
            new Queue();
        }).not.toThrow();
        expect(() => {
            new Stack();
        }).not.toThrow();
        expect(() => {
            new Grid(1, 1);
        }).not.toThrow();
        expect(() => {
            new ExtendedSet([1, 2, 3]);
        }).not.toThrow();
        expect(() => {
            new Vector(1, 1);
        }).not.toThrow();
        expect(() => {
            new Arc(1, 2, 3, 1);
        }).not.toThrow();
        expect(() => {
            new Circle(10);
        }).not.toThrow();
        expect(() => {
            new Color(10, 10, 1);
        }).not.toThrow();
        expect(() => {
            new Group();
        }).not.toThrow();
        expect(() => {
            new Line(0, 0, 10, 10);
        }).not.toThrow();
        expect(() => {
            new Oval(10, 20);
        }).not.toThrow();
        expect(() => {
            new Polygon();
        }).not.toThrow();
        expect(() => {
            new Rectangle(10, 20);
        }).not.toThrow();
        expect(() => {
            new Text('hello');
        }).not.toThrow();
        expect(() => {
            new Thing();
        }).not.toThrow();
        expect(() => {
            new WebImage('');
        }).not.toThrow();
        expect(() => {
            new WebVideo('');
        }).not.toThrow();
        expect(() => {
            new Audio('');
        }).not.toThrow();
        expect(() => {
            new Sound('C5');
        }).not.toThrow();
    });
});
