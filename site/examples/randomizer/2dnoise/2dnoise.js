setBackgroundColor('white');
for (let row = 0; row < getHeight(); row++) {
    for (let col = 0; col < getWidth(); col++) {
        const scaledRow = row * 0.01;
        const scaledCol = col * 0.01;
        const pxl = new Rectangle(1, 1);
        pxl.setPosition(col, row);
        const n = Randomizer.noise(scaledCol, scaledRow);
        pxl.setColor(Color.createFromRGB(n * 255, n * 255, n * 255));
        add(pxl);
    }
}
