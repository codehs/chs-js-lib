setBackgroundColor('#1d9bf0');
let base = 0;
let lastUpdate = Date.now();
const UPDATE_INTERVAL = 30;
const update = () => {
    let now = Date.now();
    const elapsedTime = now - lastUpdate;
    if (elapsedTime > UPDATE_INTERVAL) {
        lastUpdate = now;
        base += 5;
        removeAll();
        for (let i = 0; i < getWidth(); i += 1) {
            const p = new Circle(1);
            p.setColor(Color.WHITE);
            p.setPosition(i, getHeight() / 2 + 100 * (0.5 - Randomizer.noise((i + base) / 50)));
            add(p);
        }
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);
