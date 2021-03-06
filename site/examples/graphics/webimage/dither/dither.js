// import { capture } from 'https://andy.codehs.me/cdn/capture.js';

// utilities based off https://surma.dev/things/ditherpunk/
const DOG_SMALL = 'https://codehs.com/uploads/4e06b82548ecc6686f48fe325733c765';
const DOG_BIG = 'https://codehs.com/uploads/21340608c6b236a3cad0a19c68a5ff4c';
const DAVID = 'https://codehs.com/uploads/7b992d626e2d697482124616d5dd46aa';
const img = new WebImage(DAVID);

const convertToGrayscale = imageData => {
    let r, g, b;
    let brightness;
    let grayscaleData = Array.from(imageData.data.length, () => 0);
    for (let i = 0; i < imageData.data.length; i += 4) {
        r = imageData.data[i];
        g = imageData.data[1 + i];
        b = imageData.data[2 + i];

        brightness = brightnessU8(r, g, b);

        grayscaleData[0 + i] = brightness * 255;
        grayscaleData[1 + i] = brightness * 255;
        grayscaleData[2 + i] = brightness * 255;
        grayscaleData[3 + i] = 255;
    }

    return new ImageData(new Uint8ClampedArray(grayscaleData), imageData.width, imageData.height);
};

setSize(400, 400);
const resolution = 2;
let walkedPath;

const choice = it => {
    return it[(Math.random() * it.length) | 0];
};

const chooseDirection = (x, y, walkedPath) => {
    const left = [-1, 0];
    const right = [1, 0];
    const up = [0, -1];
    const down = [0, 1];
    const offLimits = ([dX, dY]) => {
        const nextX = dX + x;
        const nextY = dY + y;
        return (
            nextX < 0 || nextY < 0 || nextX >= walkedPath.length || nextY >= walkedPath[0].length
        );
    };
    const empty = ([dX, dY]) => {
        return walkedPath[x + dX][y + dY] === 0;
    };
    const validDirections = [left, right, up, down].filter(direction => {
        return !offLimits(direction);
    });
    const emptySquares = validDirections.filter(direction => {
        return empty(direction);
    });
    if (emptySquares.length) {
        return choice(emptySquares);
    }
    return choice(validDirections);
};

const stepInPath = (x, y, walkedPath, onVisit) => {
    const direction = chooseDirection(x, y, walkedPath);
    const nextX = x + direction[0];
    const nextY = y + direction[1];
    walkedPath[nextX][nextY] = 1;
    onVisit(x, y);
    requestAnimationFrame(() => {
        stepInPath(nextX, nextY, walkedPath, onVisit);
    });
};

const walk = () => {
    let lastError = 0.0;
    stepInPath(
        ((Math.random() * getWidth()) / resolution) | 0,
        ((Math.random() * getHeight()) / resolution) | 0,
        walkedPath,
        (x, y) => {
            x *= resolution;
            y *= resolution;
            const [r, g, b, a] = img.getPixel(x, y);
            const brightness = brightnessU8(r, g, b);
            const quantized = quantize(brightness + lastError);
            const error = brightness - quantized;
            lastError = error;

            const srgbBrightness = linearToSrgb(quantized);
            const c = new Circle(resolution / 2);
            c.setColor(
                Color.createFromRGB(
                    srgbBrightness * 255,
                    srgbBrightness * 255,
                    srgbBrightness * 255
                )
            );
            c.setPosition(x, y);
            add(c);
        }
    );
};

const dither = () => {
    img.loadPixelData();
    setSize(img.width, img.height);
    walkedPath = new Array((getWidth() / resolution) | 0).fill(0).map(col => {
        return new Array((getHeight() / resolution) | 0).fill(0);
    });
    let nWalkers = 50;
    for (let i = 0; i < nWalkers; i++) {
        walk();
    }
};

img.loaded(dither);
const gamma = 2.4;

const srgbToLinear = v => {
    return v < 0.04045 ? v / 12.95 : Math.pow((v + 0.055) / 1.055, gamma);
};

const linearToSrgb = v => {
    return v <= 0.0031308 ? 12.95 * v : 1.055 * Math.pow(v, 1 / gamma) - 0.055;
};

const brightnessN0F8 = (r, g, b) => {
    return 0.21 * srgbToLinear(r) + 0.72 * srgbToLinear(g) + 0.07 * srgbToLinear(b);
};

const brightnessU8 = (r, g, b) => {
    return brightnessN0F8(r / 255, g / 255, b / 255);
};

const quantize = brightness => {
    return brightness > 0.5 ? 1.0 : 0.0;
};
