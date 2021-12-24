const POP_URL = 'https://codehs.com/uploads/2b40bf21f8a1b10f6e11ef774e3812c9';

const pop = new Audio(POP_URL);
setBackgroundColor(Color.BLACK);
const CIRCLE_DIAMETER = 30;
for (let row = 0; row < (getHeight() - CIRCLE_DIAMETER) / CIRCLE_DIAMETER; row++) {
    for (let col = 0; col < getWidth() / CIRCLE_DIAMETER; col++) {
        const bubble = new Group();
        const circle = new Circle(CIRCLE_DIAMETER / 2);
        circle.setColor(Color.WHITE);
        circle.setOpacity(0.5);
        bubble.add(circle);

        const highlight = new Circle(CIRCLE_DIAMETER / 5);
        highlight.setColor(Color.WHITE);
        highlight.setPosition(CIRCLE_DIAMETER / 4, -CIRCLE_DIAMETER / 4);
        highlight.setOpacity(0.5);
        bubble.add(highlight);

        bubble.setPosition(col * CIRCLE_DIAMETER, row * CIRCLE_DIAMETER);
        add(bubble);
    }
}

mouseDragMethod(e => {
    const el = getElementAt(e.getX(), e.getY());
    if (el) {
        if (document.querySelector('#sound').checked) {
            if (pop.paused) {
                pop.play();
            } else {
                pop.currentTime = 0;
            }
        }
        remove(el);
    }
});

const soundInput = document.createElement('input');
soundInput.id = 'sound';
soundInput.type = 'checkbox';
soundInput.label = 'Play sound?';
document.body.appendChild(soundInput);
const inputLabel = document.createElement('Label');
inputLabel.setAttribute('for', sound);
inputLabel.innerHTML = 'Play sound?';
document.body.appendChild(inputLabel);
