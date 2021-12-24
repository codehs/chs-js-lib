let rectangle = new Rectangle(100, 10);
rectangle.setAnchor({ vertical: 0.5, horizontal: 0.5 });
rectangle.debug = true;
rectangle.setPosition(getWidth() / 2, getHeight() / 2);
rectangle.setRotation(90);
mouseDownMethod(() => {
    rectangle.rotate(90);
});
add(rectangle);
