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
for (let i = 0; i < 10; i++) {
    const rect = new Rectangle(getWidth() / 5, 100);
    rect.setColor(colors[i]);
    rect.setPosition((i * getWidth()) / 10 - 50, i * 10);
    add(rect);
    rectangles.push(rect);
}

let reverse = true;
setInterval(() => {
    rectangles.forEach((rectangle, i) => {
        rectangle.layer = reverse ? 10 - i : i;
    });
    reverse = !reverse;
}, 1000);
