let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const g = new Group();
const r = new Rectangle(40, 40);
r.setColor(darkMode ? 'yellow' : 'blue');
g.add(r);
g.setRotation(180);
g.setAnchor({ vertical: 0.5, horizontal: 0.5 });
add(g);

mouseMoveMethod(e => {
    g.setPosition(e.getX(), e.getY());
});
