const g = new Group();
g.setAnchor({ vertical: 0.5, horizontal: 0.5 });
g.add(new Rectangle(80, 40));
setTimer(() => {
    g.rotate(1);
    if (g.containsPoint(mouseX, mouseY)) {
        g.getElements().forEach(el => {
            el.setColor(Color.RED);
        });
    } else {
        g.getElements().forEach(el => {
            el.setColor(Color.BLACK);
        });
    }
}, 5);
add(g);
g.setPosition(getWidth() / 2, getHeight() / 2);

let el;
let mouseX = 0;
let mouseY = 0;
mouseDownMethod(e => {
    el = getElementAt(e.getX(), e.getY());
});
mouseMoveMethod(e => {
    mouseX = e.getX();
    mouseY = e.getY();
    el?.setPosition(mouseX, mouseY);
});
mouseUpMethod(e => {
    el = null;
});
