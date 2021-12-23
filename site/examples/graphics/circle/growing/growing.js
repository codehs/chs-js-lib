let radius = 20;
let growing = true;
var c = new Circle(20);
c.setColor(Color.RED);
c.setPosition(getWidth() / 2, getHeight() / 2);
add(c);
setTimer(() => {
    radius = growing ? radius + 1 : radius - 1;
    if (radius > 60 || radius < 10) {
        growing = !growing;
    }
    c.setRadius(radius);
}, 30);
