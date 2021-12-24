const IMG_URL = 'https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg';

const image = new WebImage(IMG_URL);

let w = 10;
let h = 10;
let aspectRatio = 1;
let maxW;
let dh = -4;
image.loaded(() => {
    add(image);
    aspectRatio = image.width / image.height;
    maxW = image.width;
    w = image.width;
    h = image.height;
    start();
});
const start = () => {
    setTimer(() => {
        h += dh;
        w = aspectRatio * h;
        image.setSize(w, h);
        if (h <= 50 || w > maxW) {
            dh = -dh;
        }
    }, 30);
};
