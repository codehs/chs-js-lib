setBackgroundColor('white');
setSize(100, 100);
const webImage = new WebImage('x');
const blackPixel = [0, 0, 0, 255];
const width = 100;
const height = 100;
const hiddenMessage = new Text('Hi!');
hiddenMessage.setAnchor({ vertical: 0.5, horizontal: 0.5 });
hiddenMessage.setPosition(width / 2, height / 2);
const flashlightRadius = 30;
const dataArray = new Array(width * height).fill(blackPixel).flat();
const imageData = new ImageData(new Uint8ClampedArray(dataArray), width, height);
webImage.setImageData(imageData);

const g = new Group();
g.add(hiddenMessage);
g.add(webImage);
add(g);

mouseMoveMethod(e => {
    const x = e.getX();
    const y = e.getY();
    for (let row = 0; row < webImage.height; row++) {
        for (let col = 0; col < webImage.width; col++) {
            const dx = col - x;
            const dy = row - y;
            const d2 = dx * dx + dy * dy;
            if (d2 <= flashlightRadius * flashlightRadius) {
                webImage.setAlpha(
                    col,
                    row,
                    map(d2, 0, flashlightRadius * flashlightRadius, 0, 255)
                );
            } else {
                webImage.setAlpha(col, row, 255);
            }
        }
    }
});
