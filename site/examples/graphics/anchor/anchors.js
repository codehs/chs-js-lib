const c = new Circle(20);
c.debug = true;
c.setPosition(getWidth() / 4, getHeight() / 2);
add(c);

const r = new Rectangle(20, 20);
r.debug = true;
r.setPosition((2 * getWidth()) / 4, getHeight() / 2);
add(r);

const t = new Text('Hi');
t.debug = true;
t.setPosition((3 * getWidth()) / 4, getHeight() / 2);
add(t);
let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (darkMode) {
    [c, r, t].forEach(shape => shape.setColor('yellow'));
}
