let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const group = new Group();

const r = new Rectangle(40, 40);
r.setPosition(50, 50);
r.rotate(45);
r.setColor(darkMode ? 'yellow' : 'black');

setTimer(() => {
    r.rotate(1);
}, 20);

group.add(r);
group.debug = true;
add(group);
