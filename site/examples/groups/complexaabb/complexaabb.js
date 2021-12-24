let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const group = new Group();

const r = new Rectangle(40, 40);
r.setPosition(50, 50);
r.rotate(45);

const c = new Circle(30);
c.setPosition(50, 50);

if (darkMode) {
    r.setColor('yellow');
    c.setColor('yellow');
}

setTimer(() => {
    r.rotate(1);
}, 5);

group.add(r);
group.add(c);

group.debug = true;
add(group);
