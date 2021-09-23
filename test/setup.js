import Graphics from '../src/graphics.js'

function setup() {
    const canvas = document.createElement('canvas');
    canvas.id = 'mainCanvas';
    canvas.width = 400;
    canvas.height = 480;
    document.body.appendChild(canvas);
}

beforeEach(() => {
    setup();
});

afterEach(() => {
    document.querySelectorAll('canvas').forEach(canvas => canvas.remove());
});

setup();
