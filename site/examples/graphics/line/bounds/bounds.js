const line = new Line(
    getWidth() / 2 - 20,
    getHeight() / 2 - 20,
    getWidth() / 2 + 20,
    getHeight() / 2 + 20
);
line.setColor('blue');

const g = new Group();
g.add(line);
g.debug = true;
add(g);

setTimer(() => {
    line.rotate(1);
}, 10);
