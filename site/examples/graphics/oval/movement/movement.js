let width = 40;
let height = 100;
var oval = new Oval(width, height);
oval.setColor(Color.GREEN);
oval.setPosition(getWidth() / 2, getHeight() / 2);
add(oval);
mouseMoveMethod(e => {
    oval.setPosition(e.getX(), e.getY());
});
mouseClickMethod(e => {
    oval.setAnchor({ vertical: 0.5, horizontal: 0 });
});
