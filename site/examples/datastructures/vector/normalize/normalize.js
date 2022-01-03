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
const radius = 50;
let origin = new Vector(getWidth() / 2, getHeight() / 2);

const mouseVectorArrow = new Group();
add(mouseVectorArrow);
const normalizedVectorArrow = new Group();
add(normalizedVectorArrow);

let circle = new Circle(radius);
circle.setFilled(false);
circle.setBorderWidth(4);
circle.setPosition(origin.x, origin.y);
add(circle);
circle.layer = 0;
mouseMoveMethod(e => {
    mouseX = e.getX();
    mouseY = e.getY();
    let mouseVector = new Vector(mouseX, mouseY).subtract(origin);
    drawVector(origin, mouseVector, 'red', `${mouseX}, ${mouseY}`, mouseVectorArrow);
    let normal = mouseVector.clone().normalize().multiply(radius);
    drawVector(origin, normal, 'blue', ` `, normalizedVectorArrow);
});
