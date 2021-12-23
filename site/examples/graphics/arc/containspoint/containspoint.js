const a = new Arc(30, 270, 360, 0);
a.setPosition(30, 30);
a.setColor(Color.BLUE);
add(a);
mouseMoveMethod(e => {
    if (a.containsPoint(e.getX(), e.getY())) {
        a.setColor(Color.RED);
    } else {
        a.setColor(Color.BLUE);
    }
});
