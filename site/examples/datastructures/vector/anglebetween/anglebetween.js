setBackgroundColor('white');

const drawVector = (base, vector, color, txt, group) => {
    const line = new Line(base.x, base.y, base.x + vector.x, base.y + vector.y);
    line.setColor(color);
    const point = new Polygon();
    point.setAnchor({ vertical: 0.5, horizontal: 0.5 });
    point.setColor(color);
    point.addPoint(0, 0);
    point.addPoint(0, 15);
    point.addPoint(15, 15 / 2);
    point.setRotation(vector.heading());
    point.setPosition(base.x + vector.x, base.y + vector.y);

    const label = new Text(txt, '8pt Arial');
    label.setColor(color);
    label.setPosition(base.x + vector.x, base.y + vector.y);

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

let mouseX = 0;
let mouseY = 0;
let origin = new Vector(getWidth() / 2, getHeight() / 2);

const mouseVectorArrow = new Group();
add(mouseVectorArrow);
const xAxisVectorArrow = new Group();
add(xAxisVectorArrow);

const angleArc = new Arc(0, 0, 0, Arc.DEGREES);
angleArc.setPosition(origin.x, origin.y);
angleArc.setFilled(false);
angleArc.setBorderWidth(1);
add(angleArc);

const label = new Text('');
label.setAnchor({ vertical: 0, horizontal: 0 });
label.setPosition(10, 10);
add(label);

mouseMoveMethod(e => {
    mouseX = e.getX();
    mouseY = e.getY();
    let mouseVector = new Vector(mouseX, mouseY).subtract(origin);
    let xAxis = new Vector(1, 0).multiply(getWidth() / 4);
    drawVector(origin, mouseVector, 'red', `${mouseX}, ${mouseY}`, mouseVectorArrow);
    drawVector(origin, xAxis, 'blue', ` `, xAxisVectorArrow);

    const angleBetween = mouseVector.angleBetween(xAxis);
    angleArc.radius = mouseVector.magnitude() / 2;
    angleArc.setStartAngle(0);
    angleArc.setEndAngle(angleBetween);
    label.setText(angleBetween.toFixed(2) + 'º');
});
