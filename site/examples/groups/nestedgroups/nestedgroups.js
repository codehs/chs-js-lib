let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const g1 = new Group();
const r = new Rectangle(40, 40);
darkMode && r.setColor('white');
g1.add(r);
g1.setPosition(getWidth() / 2, getHeight() / 2);
g1.debug = true;

const g2 = new Group();
g2.add(g1);
g2.debug = true;
g2.setPosition(getWidth() / 2, getHeight() / 2);

const g3 = new Group();
g3.add(g2);
g3.setPosition(getWidth() / 2, getHeight() / 2);
g3.debug = true;

add(g3);

setTimer(() => {
    r.rotate(1);
    g1.rotate(1);
    g2.rotate(1);
}, 10);
