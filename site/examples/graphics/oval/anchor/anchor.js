const o1 = new Oval(40, 20);
o1.setPosition(getWidth() / 4, getHeight() / 2);
o1.setAnchor({ vertical: 0, horizontal: 0 });
o1.setColor('blue');
o1.debug = true;
add(o1);

const o2 = new Oval(40, 20);
o2.setPosition((2 * getWidth()) / 4, getHeight() / 2);
o2.setColor('blue');
o2.debug = true;
add(o2);

const o3 = new Oval(40, 20);
o3.setPosition((3 * getWidth()) / 4, getHeight() / 2);
o3.setColor('blue');
o3.setAnchor({ vertical: 1, horizontal: 1 });
o3.debug = true;
add(o3);

let mouseX;
let mouseY;
mouseMoveMethod(e => {
    mouseX = e.getX();
    mouseY = e.getY();
    let el = getElementAt(mouseX, mouseY);
    if (el) {
        el.setColor(Color.RED);
    } else {
        o1.setColor(Color.BLUE);
        o2.setColor(Color.BLUE);
        o3.setColor(Color.BLUE);
    }
});
