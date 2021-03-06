let mouseX = 0;
let mouseY = 0;
mouseMoveMethod(e => {
    mouseX = e.getX();
    mouseY = e.getY();
});

const withHover = element => {
    setTimer(() => {
        if (element.containsPoint(mouseX, mouseY)) {
            element.setColor(Color.RED);
        } else {
            element.setColor(Color.BLUE);
        }
    }, 10);
    return element;
};
var t = withHover(new Rectangle(20, 20));
t.debug = true;
t.setPosition(getWidth() / 4, getHeight() / 2);
add(t);

var t2 = withHover(new Rectangle(20, 20));
t2.setAnchor({ vertical: 0.5, horizontal: 0.5 });
t2.debug = true;
t2.setPosition((2 * getWidth()) / 4, getHeight() / 2);
add(t2);

var t3 = withHover(new Rectangle(20, 20));
t3.setAnchor({ vertical: 1.0, horizontal: 1.0 });
t3.debug = true;
t3.setPosition((3 * getWidth()) / 4, getHeight() / 2);
add(t3);
