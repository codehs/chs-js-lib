let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
let color = darkMode ? 'white' : 'black';
const draw = () => {
    var c = new Circle(20);
    c.setPosition(Math.random() * getWidth(), Math.random() * getHeight());
    c.setColor(color);
    add(c);
};
setTimer(draw, 20);
mouseClickMethod(() => {
    stopTimer(draw);
});
