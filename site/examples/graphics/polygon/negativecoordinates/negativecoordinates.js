let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

let color = 'blue';
if (darkMode) {
    color = 'yellow';
}
const t1 = new Polygon();
t1.addPoint(-30, 0);
t1.addPoint(30, 30);
t1.addPoint(0, 30);
t1.debug = true;
t1.setPosition(getWidth() / 2, getHeight() / 2);
t1.setAnchor({ horizontal: 0, vertical: 0 });
t1.setColor(color);
add(t1);
