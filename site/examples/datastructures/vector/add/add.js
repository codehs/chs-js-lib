let origin = new Vector(0, 0);
let arrowSize = 10;
let mouseX = 100;
let mouseY = 100;
setBackgroundColor('white');

const draw = (base, vector, color) => {
    const line = new Line(base.x, base.y, base.x + vector.x, base.y + vector.y);
    line.setLineWidth(4);
    line.setColor(color);
    add(line);
    const point = new Polygon();
    point.setAnchor({ vertical: 0.5, horizontal: 0.5 });
    point.setColor(color);
    point.addPoint(0, 0);
    point.addPoint(0, arrowSize);
    point.addPoint(arrowSize, arrowSize / 2);
    point.setRotation(vector.heading());
    point.setPosition(base.x + vector.x, base.y + vector.y);
    add(point);
};

const update = () => {
    removeAll();
    let v1 = new Vector(mouseX, mouseY);
    let v2 = new Vector(-30, 20);
    draw(origin, v1, 'red');
    let v3 = v1.copy().add(v2);
    draw(origin, v3, 'purple');
    draw(v1, v2, 'blue');
};
update();

mouseMoveMethod(e => {
    mouseX = e.getX();
    mouseY = e.getY();
    update();
});
