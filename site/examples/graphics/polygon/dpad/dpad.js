const shapes = [];
const position = { x: 0, y: 0 };
const points = [
    { x: 0, y: 0 },
    { x: 15, y: 15 },
    { x: 50, y: 15 },
    { x: 50, y: -15 },
    { x: 15, y: -15 },
];
const directions = ['right', 'down', 'left', 'up'];
for (var i = 0; i < 4; i++) {
    const rotation = (i * Math.PI) / 2;
    const button = new Polygon();
    points.forEach(function (point) {
        const x = point.x * Math.cos(rotation) - point.y * Math.sin(rotation) + getWidth() / 2;
        const y = point.x * Math.sin(rotation) + point.y * Math.cos(rotation) + getHeight() / 2;
        button.addPoint(x, y);
    });
    button.setColor(Color.GRAY);
    button.direction = directions[i];
    shapes.push(button);
    add(button);
}

const press = function (direction) {
    shapes.forEach(shape => {
        if (shape.direction === direction) {
            shape.setColor('#a8a8a8');
            shape.pressed = true;
            needsUpdate = true;
        }
    });
};

const unpress = function (direction) {
    shapes.forEach(shape => {
        if (shape.direction === direction) {
            if (shape.pressed) {
                shape.setColor(Color.GRAY);
                shape.pressed = false;
            }
        }
    });
};

mouseDownMethod(e => {
    let x;
    let y;
    if (e.touches) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
    } else {
        x = e.getX();
        y = e.getY();
    }
    shapes.forEach(shape => {
        if (shape.containsPoint(x, y)) {
            press(shape.direction);
        }
    });
});
mouseUpMethod(e => {
    shapes.forEach(shape => {
        unpress(shape.direction);
    });
});
