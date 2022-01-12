setBackgroundColor('white');

for (let i = 0; i < 100; i++) {
    const rect = new Rectangle(50, 50);
    rect.setColor(Randomizer.nextColor());
    rect.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, getHeight()));
    add(rect);
}

class EraserClass extends Circle {
    constructor(radius) {
        super(radius);
        this.erasing = true;
    }

    draw(context) {
        context.save();
        if (this.erasing) {
            context.globalCompositeOperation = 'destination-out';
        } else {
            context.globalCompositeOperation = 'destination-in';
        }
        super.draw(context);
        context.restore();
    }
}

let mouseX = 0;
let mouseY = 0;
const eraser = new Eraser(50);
add(eraser);

mouseMoveMethod(e => {
    mouseX = e.getX();
    mouseY = e.getY();
    eraser.setPosition(mouseX, mouseY);
});

mouseClickMethod(e => {
    eraser.erasing = !eraser.erasing;
});
