let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

var line = new Line(20, 20, 30, 200);
line.setAnchor({ vertical: 0, horizontal: 0 });
line.debug = true;
if (darkMode) {
    line.setColor('blue');
}
add(line);

var line2 = new Line(50, 110, 60, 290);
line2.setAnchor({ vertical: 0.5, horizontal: 0.5 });
line2.debug = true;
if (darkMode) {
    line2.setColor('blue');
}
add(line2);

var line3 = new Line(80, 200, 90, 380);
line3.setAnchor({ vertical: 1, horizontal: 1 });
line3.debug = true;
if (darkMode) {
    line3.setColor('blue');
}
add(line3);

mouseMoveMethod(e => {
    let x = e.getX();
    let y = e.getY();
    console.log({ x, y });
});
