let width = 40;
let height = 40;
let rectangle = new Rectangle(width, height);
rectangle.setColor(Color.RED);
rectangle.setAnchor({ vertical: 0.5, horizontal: 0.5 });
add(rectangle);
mouseMoveMethod(e => {
    rectangle.setPosition(e.getX(), e.getY());
});
