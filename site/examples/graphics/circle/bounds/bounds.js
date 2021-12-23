let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const c1 = new Circle(20);
c1.setPosition(getWidth() / 2, getHeight() / 2);
c1.debug = true;
if (darkMode) {
    c1.setColor('blue');
}
add(c1);
setTimer(() => {
    c1.rotate(2);
}, 50);
