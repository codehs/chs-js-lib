let width = 40;
let height = 40;
let rectangle = new Rectangle(width, height);
rectangle.setColor(Color.RED);
rectangle.setPosition(getWidth() / 2, getHeight() / 2);
add(rectangle);

mouseMoveMethod(e => {
    rectangle.setPosition(e.getX(), e.getY());
});
