let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const color = darkMode ? 'yellow' : 'black';
const g1 = new Group();
const a1 = new Circle(15);
a1.setPosition(-10, -10);
a1.setColor(color);
g1.add(a1);
const c1 = new Circle(15);
c1.setPosition(10, 10);
c1.setColor(color);
g1.add(c1);
g1.setPosition(getWidth() / 4, getHeight() / 2);
g1.setAnchor({ vertical: 0, horizontal: 0 });
g1.debug = true;
add(g1);

const g2 = new Group();
const a2 = new Circle(15);
a2.setPosition(-10, -10);
a2.setColor(color);
g2.add(a2);
const c2 = new Circle(15);
c2.setPosition(10, 10);
c2.setColor(color);
g2.add(c2);
g2.setPosition((2 * getWidth()) / 4, getHeight() / 2);
g2.setAnchor({ vertical: 0.5, horizontal: 0.5 });
g2.debug = true;
add(g2);

const g3 = new Group();
const a3 = new Circle(15);
a3.setPosition(-10, -10);
a3.setColor(color);
g3.add(a3);
const c3 = new Circle(15);
c3.setPosition(10, 10);
c3.setColor(color);
g3.add(c3);
g3.setPosition((3 * getWidth()) / 4, getHeight() / 2);
g3.setAnchor({ vertical: 1, horizontal: 1 });
g3.debug = true;
add(g3);

console.log(g1.getBounds());
console.log(g2.getBounds());
console.log(g3.getBounds());
