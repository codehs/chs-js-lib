let line = new Line(0, 0, 100, 100);
line.setColor('blue');
add(line);

mouseMoveMethod(e => {
    line.setEndpoint(e.getX(), e.getY());
});
