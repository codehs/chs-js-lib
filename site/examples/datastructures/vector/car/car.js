const FORWARD = 38;
const W = 87;
const LEFT = 37;
const A = 65;
const RIGHT = 39;
const D = 68;
const DOWN = 40;
const S = 83;
const DRAG = 0.95;
const TURN_RADIUS = 0.001;
const ACCELERATION = 0.001;
const MIN_ACCELERATION = 0;
const MAX_ACCELERATION = 0.025;
const DRY_TURNING_THRESHOLD = 0.0025;
const ARROW_SIZE = 10;

setBackgroundColor('white');

const drawVector = (base, vector, color, txt, group) => {
    const line = new Line(base.x, base.y, base.x + vector.x, base.y + vector.y);
    line.setLineWidth(4);
    line.setColor(color);
    const point = new Polygon();
    point.setAnchor({ vertical: 0.5, horizontal: 0.5 });
    point.setColor(color);
    point.addPoint(0, 0);
    point.addPoint(0, ARROW_SIZE);
    point.addPoint(ARROW_SIZE, ARROW_SIZE / 2);
    point.setRotation(vector.heading());
    point.setPosition(base.x + vector.x, base.y + vector.y);

    const label = new Text(txt, '8pt Arial');
    label.setColor(color);
    label.setPosition(base.x + vector.x - 5, base.y + vector.y - 5);

    const elements = [line, point, label];
    if (group) {
        group.elements = [];
        elements.forEach(el => {
            group.add(el);
        });
        return;
    }
    const g = new Group(...elements);
    return g;
};

const clamp = (v, min, max) => {
    return Math.max(min, Math.min(v, max));
};

const getDistance = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

const xAxis = new Vector(1, 0);
const yAxis = new Vector(0, 1);

const car = new Rectangle(20, 10);
car.setColor('red');
car.setAnchor({ vertical: 0.5, horizontal: 0.5 });
car.setPosition(getWidth() / 2, getHeight() / 2);
car.setRotation(-90);
car.acceleration = 0;
car.velocity = new Vector(0, 0);
car.angularVelocity = 0;
car.position = new Vector(car.x, car.y);
add(car);
let mouseX = car.x;
let mouseY = car.y - 1;
let touchingOrMousing = mouseX && mouseY;

let velocityVectorX = new Group();
let velocityVectorY = new Group();
let velocityVector = new Group();
let mouseVector = new Group();
add(velocityVectorX);
add(velocityVectorY);
add(velocityVector);
add(mouseVector);

const drawVectors = car => {
    const xProjection = xAxis.clone().multiply(car.velocity.x * 100);
    const yProjection = yAxis.clone().multiply(car.velocity.y * 100);
    drawVector(car.position, xProjection, 'blue', 'x', velocityVectorX);
    drawVector(car.position, yProjection, 'purple', 'y', velocityVectorY);
    drawVector(
        car.position,
        xProjection.clone().add(yProjection),
        'green',
        'x + y',
        velocityVector
    );
};

const update = () => {
    if (car.accelerating) {
        car.acceleration = clamp(car.acceleration + ACCELERATION, 0, MAX_ACCELERATION);
    } else {
        car.acceleration = clamp(car.acceleration - ACCELERATION, 0, MAX_ACCELERATION);
    }
    if (car.turningLeft) {
        car.angularVelocity -= TURN_RADIUS;
    }
    if (car.turningRight) {
        car.angularVelocity += TURN_RADIUS;
    }
    drawVectors(car);
    car.velocity.x += Math.cos(car.rotation) * car.acceleration;
    car.velocity.y += Math.sin(car.rotation) * car.acceleration;
    car.velocity.multiply(DRAG);
    car.position.add(car.velocity);
    car.rotation += car.angularVelocity;
    car.angularVelocity *= DRAG;
    car.setPosition(car.position.x, car.position.y);
};

let previousUpdate = Date.now();
setTimer(() => {
    let now = Date.now();
    let dt = now - previousUpdate;
    previousUpdate = now;
    if ([FORWARD, LEFT, RIGHT, DOWN, W, A, S, D].some(key => isKeyPressed(key))) {
        mouseX = null;
        mouseY = null;
        touchingOrMousing = false;
    }

    let angleToMouse;
    if (mouseX && mouseY) {
        touchingOrMousing = true;
        const vectorToMouse = new Vector(mouseX, mouseY).subtract(car.position);
        const headingVector = new Vector(Math.cos(car.rotation), Math.sin(car.rotation));
        angleToMouse = headingVector.angleBetween(vectorToMouse);
        // drawVector(car.position, vectorToMouse, 'black', angleToMouse.toFixed(2), mouseVector);
    }

    if (
        isKeyPressed(FORWARD) ||
        isKeyPressed(W) ||
        (touchingOrMousing && getDistance(mouseX, mouseY, car.position.x, car.position.y) > 10)
    ) {
        car.accelerating = true;
    } else if (isKeyPressed(DOWN) || isKeyPressed(S)) {
        car.reversing = true;
    } else {
        car.accelerating = false;
        car.reversing = false;
    }
    if (
        (isKeyPressed(LEFT) || isKeyPressed(A) || (touchingOrMousing && angleToMouse < 1)) &&
        car.acceleration > DRY_TURNING_THRESHOLD
    ) {
        car.turningLeft = true;
    } else {
        car.turningLeft = false;
    }
    if (
        (isKeyPressed(RIGHT) || isKeyPressed(D) || (touchingOrMousing && angleToMouse > -1)) &&
        car.acceleration > DRY_TURNING_THRESHOLD
    ) {
        car.turningRight = true;
    } else {
        car.turningRight = false;
    }
    while (dt > 0) {
        dt -= 5;
        update();
    }
}, 1000 / 60);

mouseMoveMethod(e => {
    mouseX = e.getX();
    mouseY = e.getY();
});
