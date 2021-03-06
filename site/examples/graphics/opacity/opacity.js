setBackgroundColor(Color.BLACK);

const text = new Text('Opacity');
text.setPosition(getWidth() / 2, getHeight() / 2);
text.setColor(Color.WHITE);
text.setAnchor({ vertical: 0.5, horizontal: 0.5 });
add(text);
text.layer = 0;
text.setOpacity(0.6);
let rectangles = [];
let colors = [
    '#F72585',
    '#B5179E',
    '#7209B7',
    '#560bad',
    '#480ca8',
    '#3a0ca3',
    '#3f37c9',
    '#4361ee',
    '#4895ef',
    '#4cc9f0',
];
for (let i = 0; i < 20; i++) {
    const rect = new Rectangle(70, 70);
    rect.setColor(colors[i % colors.length]);
    rect.setOpacity(0.6);
    rect.setPosition(Math.random() * (getWidth() - 50), Math.random() * (getHeight() - 50));
    rect.dx = (Math.random() < 0.5 ? -1 : 1) * 3;
    rect.dy = (Math.random() < 0.5 ? -1 : 1) * 3;
    add(rect);
    rectangles.push(rect);
}

setTimer(() => {
    rectangles.forEach(rectangle => {
        rectangle.move(rectangle.dx, rectangle.dy);
        rectangle.rotate(Math.random() * rectangle.dx);
        if (rectangle.x + rectangle.width >= getWidth() || rectangle.x <= 0) {
            rectangle.dx = -rectangle.dx;
            rectangle.x += rectangle.dx;
        }
        if (rectangle.y + rectangle.height >= getHeight() || rectangle.y <= 0) {
            rectangle.dy = -rectangle.dy;
            rectangle.y += rectangle.dy;
        }
    });
}, 30);
