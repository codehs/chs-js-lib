document.addEventListener('DOMContentLoaded', () => {
    __graphics__.shouldUpdate = false;
    const populateElements = (shapeName, color, roundPositions) => {
        for (let i = 0; i < 100000; i++) {
            let shape;
            if (shapeName === 'rectangle') {
                shape = new Rectangle(10, 10);
            } else if (shapeName === 'rectwithborder') {
                shape = new Rectangle(10, 10);
                shape.setBorder(true);
            } else if (shapeName === 'emptyrectangle') {
                shape = new Rectangle(10, 10);
                shape.setFilled(false);
                shape.setBorder(true);
            } else if (shapeName === 'circle') {
                shape = new Circle(5);
            } else if (shapeName === 'circlewithborder') {
                shape = new Circle(5);
                shape.setBorder(true);
            } else if (shapeName === 'emptycircle') {
                shape = new Circle(5);
                shape.setFilled(false);
                shape.setBorder(true);
            }
            shape.setColor(color);
            let x = Math.random() * getWidth();
            let y = Math.random() * getHeight();
            if (roundPositions) {
                x = ~~x;
                y = ~~y;
            }
            shape.setPosition(x, y);
            add(shape);
        }
    };
    const redraw = () => {
        const shape = document.querySelector('#shape').value;
        const round = document.querySelector('#round').checked;
        __graphics__.removeAll();
        populateElements(shape, Randomizer.nextColor(), round);
        const now = performance.now();
        __graphics__.redraw();
        return performance.now() - now;
    };

    document.querySelector('#redraw').addEventListener('click', () => {
        updateDOM(redraw());
    });
    const updateDOM = t => {
        document.querySelector('#target').innerHTML = t;
    };
    updateDOM(redraw());
});
