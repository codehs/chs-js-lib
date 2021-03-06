let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

let color = 'blue';
if (darkMode) {
    color = 'yellow';
}
const t1 = new Polygon();
t1.addPoint(15, 0);
t1.addPoint(30, 30);
t1.addPoint(0, 30);
t1.debug = true;
t1.setPosition(getWidth() / 4, getHeight() / 2);
t1.setAnchor({ horizontal: 0, vertical: 0 });
t1.setColor(color);
add(t1);
const t2 = new Polygon();
t2.addPoint(15, 0);
t2.addPoint(30, 30);
t2.addPoint(0, 30);
t2.debug = true;
t2.setPosition((2 * getWidth()) / 4, getHeight() / 2);
t2.setAnchor({ horizontal: 0.5, vertical: 0.5 });
t2.setColor(color);
add(t2);
const t3 = new Polygon();
t3.addPoint(15, 0);
t3.addPoint(30, 30);
t3.addPoint(0, 30);
t3.debug = true;
t3.setPosition((3 * getWidth()) / 4, getHeight() / 2);
t3.setAnchor({ horizontal: 1, vertical: 1 });
t3.setColor(color);
add(t3);

setTimer(() => {
    t1.rotate(2);
    t2.rotate(2);
    t3.rotate(2);
}, 50);
