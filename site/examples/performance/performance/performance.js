const g = new Graphics();
g.shouldUpdate = false;
const now = performance.now();
const elements = [];
for (let i = 0; i < 100000; i++) {
    const c = new Circle(5);
    elements.push(c);
    g.add(c);
}
for (let i = 100000; i--; ) {
    g.remove(elements[i]);
}
const t = performance.now() - now;
document.querySelector('#target').innerHTML = t;
