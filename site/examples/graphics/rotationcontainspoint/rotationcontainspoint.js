let mouseX = 0;
let mouseY = 0;
mouseMoveMethod(e => {
    mouseX = e.getX();
    mouseY = e.getY();
    point.setPosition(mouseX, mouseY);
});
const makeThing = shape => {
    setTimer(() => {
        shape.rotate(1);
        if (shape.containsPoint(point.x, point.y)) {
            shape.setColor(Color.RED);
        } else {
            shape.setColor(Color.BLUE);
        }
    }, 10);
    return shape;
};

const circle = makeThing(new Circle(20));
circle.setPosition(getWidth() / 4, getHeight() / 4);
circle.debug = true;
add(circle);

const rect = makeThing(new Rectangle(80, 40));
rect.setAnchor({ vertical: 0.5, horizontal: 0.5 });
rect.setPosition((2 * getWidth()) / 4, getHeight() / 4);
rect.debug = true;
add(rect);

const group = new Group();
const triangle = makeThing(new Polygon());
triangle.addPoint(15, 0);
triangle.addPoint(30, 30);
triangle.addPoint(0, 30);
triangle.setPosition((3 * getWidth()) / 4, getHeight() / 4);
triangle.setAnchor({ vertical: 0.5, horizontal: 0.5 });
triangle.debug = true;
add(triangle);

const oval = makeThing(new Oval(50, 30));
oval.setPosition(getWidth() / 4, (2 * getHeight()) / 4);
oval.debug = true;
add(oval);

const point = new Circle(2);
point.setColor('red');
point.setPosition(getWidth() / 2, getHeight() / 4 + 40);
add(point);
