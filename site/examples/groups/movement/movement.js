setBackgroundColor(Color.BLACK);
const fgGroup = new Group();
const mgGroup = new Group();
const bgGroup = new Group();

[bgGroup, mgGroup, fgGroup].forEach((group, groupI) => {
    for (let i = 0; i < 50; i++) {
        const c = new Circle((groupI + 1) * 1.5);
        c.setColor(Color.WHITE);
        c.setPosition(Math.random() * 2 * getWidth(), Math.random() * 2 * getHeight());
        group.add(c);
    }
});
add(bgGroup);
add(mgGroup);
add(fgGroup);

setTimer(() => {
    fgGroup.move(-5, -5);
    mgGroup.move(-2.5, -2.5);
    bgGroup.move(-1, -1);
}, 50);
