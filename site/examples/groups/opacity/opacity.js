let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const g = new Group();
const c = new Circle(20);
c.setColor(darkMode ? 'yellow' : 'blue');
g.add(c);

const c2 = new Circle(20);
c2.setPosition(20, 20);
c2.setOpacity(0.5);
c2.setColor('red');
g.add(c2);

g.setPosition(getWidth() / 2, getHeight() / 2);
g.setOpacity(0.5);
add(g);
