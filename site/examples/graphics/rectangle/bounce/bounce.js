let width = 40;
let height = 40;
let rectangle = new Rectangle(width, height);
rectangle.setColor(Color.RED);
rectangle.setPosition(getWidth() / 2, getHeight() / 2);
add(rectangle);

let dx = 5;
let dy = 5;
setTimer(() => {
    rectangle.move(dx, dy);
    if (rectangle.x + width >= getWidth() || rectangle.x <= 0) {
        dx = -dx;
    }
    if (rectangle.y + height >= getHeight() || rectangle.y <= 0) {
        dy = -dy;
    }
}, 30);
