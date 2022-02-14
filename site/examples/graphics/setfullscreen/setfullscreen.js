function circleAt(radius, color, x, y) {
    var circle = new Circle(radius);
    circle.setColor(color);
    circle.setPosition(x, y);
    return circle;
}

function rectAt(width, height, color, x, y) {
    var rect = new Rectangle(width, height);
    rect.setColor(color);
    rect.setPosition(x, y);
    return rect;
}
function drawGhost(cx, cy, color) {
    var HEAD_RADIUS = 35;
    var BODY_WIDTH = HEAD_RADIUS * 2;
    var BODY_HEIGHT = 60;
    var NUM_FEET = 3;
    var FOOT_RADIUS = BODY_WIDTH / (NUM_FEET * 2);
    var PUPIL_RADIUS = 4;
    var PUPIL_LEFT_OFFSET = 8;
    var PUPIL_RIGHT_OFFSET = 20;
    var EYE_RADIUS = 10;
    var EYE_OFFSET = 14;
    const parts = [];
    parts.push(circleAt(HEAD_RADIUS, color, cx, cy));
    parts.push(rectAt(BODY_WIDTH, BODY_HEIGHT, color, cx - BODY_WIDTH / 2, cy));
    for (let i = 0; i < NUM_FEET; i++) {
        var start = -NUM_FEET + 1 + i * 2;
        parts.push(circleAt(FOOT_RADIUS, color, cx + start * FOOT_RADIUS, cy + BODY_HEIGHT));
    }
    const leftEyeGroup = new Group();
    leftEyeGroup.add(circleAt(EYE_RADIUS, Color.white, cx - EYE_OFFSET, cy));
    leftEyeGroup.add(circleAt(PUPIL_RADIUS, Color.blue, cx - PUPIL_LEFT_OFFSET, cy));
    const rightEyeGroup = new Group();
    rightEyeGroup.add(circleAt(EYE_RADIUS, Color.white, cx + EYE_OFFSET, cy));
    rightEyeGroup.add(circleAt(PUPIL_RADIUS, Color.blue, cx + PUPIL_RIGHT_OFFSET, cy));
    parts.push(leftEyeGroup);
    parts.push(rightEyeGroup);
    setTimer(() => {
        leftEyeGroup.rotate(3);
        rightEyeGroup.rotate(3);
    }, 50);
    return parts;
}
const g = new Group(...drawGhost(100, 100, Randomizer.nextColor()));
add(g);

setFullscreen();
document.querySelector('canvas').style.border = '1px solid white';
