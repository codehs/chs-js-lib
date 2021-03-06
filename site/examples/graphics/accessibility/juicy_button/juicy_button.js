const pressSound = new Audio('https://codehs.com/uploads/dd88edcce7e47d974c87b8a30f9b5ec7');
const unpressSound = new Audio('https://codehs.com/uploads/2ff810a64e356f59c9be92db8f616fee');
setBackgroundColor(Color.GREY);
class Button extends Thing {
    constructor() {
        super();
        this.x = getWidth() / 2;
        this.y = getHeight() / 2;
        this.elements = [];
        // the little edge bits are needed
        const shadowLeft = new Rectangle(10, 8);
        shadowLeft.setPosition(getWidth() / 2 - 50, getHeight() / 2);
        shadowLeft.setColor('#a11f1f');
        const shadowRight = new Rectangle(10, 8);
        shadowRight.setPosition(getWidth() / 2 + 40, getHeight() / 2);
        shadowRight.setColor('#a11f1f');
        const buttonShadow = new Oval(100, 40);
        buttonShadow.setPosition(getWidth() / 2, getHeight() / 2 + 10);
        buttonShadow.setColor('#a11f1f');
        const button = new Oval(100, 40);
        button.setPosition(getWidth() / 2, getHeight() / 2);
        button.setColor(Color.RED);
        this.topButton = button;
        this.squares = [shadowLeft, shadowRight];
        this.elements = [shadowLeft, shadowRight, buttonShadow, button];
    }

    focus() {
        this.topButton.focus();
    }
    unfocus() {
        this.topButton.unfocus();
    }

    draw(g) {
        this.elements.forEach(e => e.draw(g));
    }

    press() {
        this.topButton.move(0, 5);
        this.squares.forEach(s => {
            s.move(0, 5);
        });
        pressSound.play();
    }

    unpress() {
        this.topButton.move(0, -5);
        this.squares.forEach(s => {
            s.move(0, -5);
        });
        unpressSound.play();
    }
    contains(x, y) {
        return this.elements.some(e => e.containsPoint(x, y));
    }
}

const b = new Button();
mouseDownMethod(e => {
    if (b.contains(e.getX(), e.getY())) {
        b.press();
    }
});
mouseUpMethod(e => {
    if (b.contains(e.getX(), e.getY())) {
        b.unpress();
    }
});

const rules = new Text('Sound on. Use Tab navigation and spacebar or mouse', '12pt Arial');
rules.setAnchor({ vertical: 0.5, horizontal: 0.5 });
rules.setPosition(getWidth() / 2, getHeight() / 4);
add(rules);
add(b);
