let colors = ['#F72585', '#B5179E', '#7209B7', '#560bad'];
for (let i = 0; i < 4; i++) {
    if (i % 2 == 0) {
        const circle = new Circle(getWidth() / 10);
        circle.setColor(colors[i]);
        circle.setPosition(i * (5 + getWidth() / 5) + getWidth() / 10, getWidth() / 10);
        add(circle);
    } else {
        const rect = new Rectangle(getWidth() / 5, 100);
        rect.setColor(colors[i]);
        rect.setPosition(i * (5 + getWidth() / 5), 0);
        add(rect);
    }
}
mouseDownMethod(e => {
    console.log(`${e.getX()}, ${e.getY()}`);
    const el = getElementAt(e.getX(), e.getY());
    el.setColor('#4cc9f0');
});
