let width = 40;
let height = 40;

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;

let rectangle = new Rectangle(width, height);
rectangle.setBorderColor(Color.RED);
rectangle.setBorder(true);
rectangle.setFilled(false);
rectangle.setAnchor({ vertical: 0.5, horizontal: 0.5 });
add(rectangle);
mouseMoveMethod(e => {
    targetX = e.getX();
    targetY = e.getY();
});
setTimer(() => {
    let nextX = 0.75 * rectangle.x + 0.25 * targetX;
    let nextY = 0.75 * rectangle.y + 0.25 * targetY;
    rectangle.setPosition(nextX, nextY);
}, 20);
