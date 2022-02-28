import { GraphicsInstances } from '../src/graphics/index.js';

function setup() {
    const canvas = document.createElement('canvas');
    canvas.id = 'game';
    canvas.width = 400;
    canvas.height = 480;
    document.body.appendChild(canvas);
}

beforeEach(() => {
    setup();
});

afterEach(() => {
    document.body.innerHTML = '';
    window.devicePixelRatio = 1;
    Object.entries(GraphicsInstances).forEach(([id, instance]) => {
        instance.cleanup();
    });
});

setup();
