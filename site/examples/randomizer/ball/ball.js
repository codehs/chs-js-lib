let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const ball = new Circle(20);
ball.setPosition(getWidth() / 2, getHeight() / 2);
darkMode && ball.setColor('white');
add(ball);

let t = 0;
setTimer(() => {
    t += 0.1;
    const noise = Randomizer.noise(t);
    ball.setPosition(map(noise, 0, 1, 0, getWidth()), getHeight() / 2);
}, 40);
