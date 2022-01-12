const rightColor = Randomizer.nextColor();
const leftColor = Randomizer.nextColor();
const bgColor = Randomizer.nextColor();

const toRad = angle => {
    return (angle * Math.PI) / 180;
};

setSize(400, 600);

setBackgroundColor(bgColor);

const rightVanishingPoint = new Vector(Randomizer.nextInt(600, 1000), (3 * getHeight()) / 4);
const leftVanishingPoint = new Vector(-Randomizer.nextInt(600, 1000), (3 * getHeight()) / 4);

class ClipPolygon extends Polygon {
    draw(context) {
        context.save();
        context.globalCompositeOperation = 'destination-out';
        super.draw(context);
        context.restore();
    }
}

const projectRectangle = (rectangle, vanishingPoint, isLeft = false) => {
    let top = rectangle.y;
    let left = rectangle.x;
    let right = rectangle.x + rectangle.width;
    if (isLeft) {
        left = rectangle.x + rectangle.width;
        right = rectangle.x;
    }
    const v = vanishingPoint.clone().subtract(new Vector(left, top));
    if (isLeft) {
        v.multiply(-1, -1);
    }

    let theta = toRad(v.heading() % 90);
    theta = Math.abs(theta);
    const dy = rectangle.width * Math.atan(theta);

    const clip = new ClipPolygon();
    clip.setAnchor({ ...rectangle.anchor });
    // go off the top a bit for subpixel stuff
    clip.addPoint(left, top - 1);
    clip.addPoint(right, top - 1);
    clip.addPoint(right, top + dy - 1);
    clip.setColor('red');
    return clip;
};

let buildingLayer = 0;
const makeBuilding = (height, leftWidth, rightWidth, x, lColor, rColor) => {
    buildingLayer++;
    const building = new Group();
    building.layer = buildingLayer;
    const rightRect = new Rectangle(rightWidth, height);
    rightRect.setAnchor({ vertical: 0, horizontal: 0 });
    rightRect.setPosition(x, getHeight() - rightRect.height);
    rightRect.setColor(rColor);
    building.add(rightRect);
    const clipRight = projectRectangle(rightRect, rightVanishingPoint);
    clipRight.clip = true;
    building.add(clipRight);
    const leftRect = new Rectangle(leftWidth, height);
    leftRect.setAnchor({ vertical: 0, horizontal: 1.0 });
    leftRect.setPosition(x, getHeight() - leftRect.height);
    leftRect.setColor(lColor);
    building.add(leftRect);
    const clipLeft = projectRectangle(leftRect, leftVanishingPoint, true);
    building.add(clipLeft);
    add(building);
};

for (let i = 0; i < 15; i++) {
    const leftWidth = Randomizer.nextInt(50, 60);
    const rightWidth = Randomizer.nextInt(50, 60);
    const x = Randomizer.nextInt(0, getWidth());
    const height = Randomizer.nextInt(150, 450);
    makeBuilding(height, leftWidth, rightWidth, x, leftColor, rightColor);
}
