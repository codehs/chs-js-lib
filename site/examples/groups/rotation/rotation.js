let ghosts = [];

for (let i = 0; i < 5; i++) {
    newGhost();
}

const rotateGhosts = () => {
    ghosts.forEach(g => {
        g.rotate(g.rotRate);
    });
};

let draggedElement;
mouseDownMethod(e => {
    const element = getElementAt(e.getX(), e.getY());
    if (element instanceof Group) {
        draggedElement = element;
    }
});

mouseMoveMethod(e => {
    draggedElement?.setPosition(e.getX(), e.getY());
});

mouseUpMethod(e => {
    draggedElement = null;
});

/* This is the callback drawing function. All we do here
 * is make a call to our drawGhost function with a random
 * position and random color. */
function newGhost(x, y, r) {
    const ghostParts = drawGhost(
        x || Randomizer.nextInt(0, getWidth()),
        y || Randomizer.nextInt(0, getHeight()),
        Randomizer.nextColor()
    );

    const g = new Group(...ghostParts);
    g.setOpacity(0.5);
    add(g);
    g.setAnchor({ vertical: 0.5, horizontal: 0.5 });
    g.rotRate = r || (Math.random() < 0.5 ? 1 : -1) * Math.random() * 3;
    ghosts.push(g);
}

setTimer(rotateGhosts, 10);

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

    // This is a bit more confusing since it
    // draws a ghost with any number of feet
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
