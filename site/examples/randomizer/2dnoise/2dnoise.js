setBackgroundColor('white');
for (let row = 0; row < getHeight(); row++) {
    for (let col = 0; col < getWidth(); col++) {
        const scaledRow = row * 0.02;
        const scaledCol = col * 0.02;
        const pxl = new Rectangle(1, 1);
        pxl.setPosition(col, row);
        const n = Randomizer.noise(50 + scaledCol, 50 + scaledRow);
        pxl.setColor(Color.createFromRGB(n * 255, n * 255, n * 255));
        add(pxl);
    }
}

// save the CPU from needing to draw so many squares again
__graphics__.redraw();
__graphics__.shouldUpdate = false;
