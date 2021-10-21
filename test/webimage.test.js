import WebImage from '../src/webimage.js';
import Graphics from '../src/graphics.js';

// a 90x90 image with R, G, and B vertical stripes of 30px width
const RGBURL = 'https://codehs.com/uploads/4cd36a1bacbd8cdd22cf75947f4caea8';

describe('WebImage', () => {
    describe('Displaying images from URL', () => {
        const wi = new WebImage(RGBURL);
        const g = new Graphics();
        g.add(wi);

        it('Invokes a callback when loaded', () => {
            const wi = new WebImage(RGBURL);
            return new Promise((resolve, reject) => {
                wi.loaded(() => {
                    expect(true).toBe(true);
                    resolve();
                });
            });
        });

        it('Draws to the canvas after loading', () => {
            const wi = new WebImage(RGBURL);
            const g = new Graphics();
            g.add(wi);
            return new Promise((resolve, reject) => {
                wi.loaded(() => {
                    g.redraw();
                    const context = g.getContext();
                    let topLeftPixel = context.getImageData(0, 0, 1, 1);
                    expect(topLeftPixel.data).toEqual(new Uint8ClampedArray([255, 0, 0, 255]));
                    wi.setPosition(50, 50);
                    g.redraw();
                    topLeftPixel = context.getImageData(50, 50, 1, 1);
                    expect(topLeftPixel.data).toEqual(new Uint8ClampedArray([255, 0, 0, 255]));
                    resolve();
                });
            });
        });
    });

    describe('setPixel', () => {
        it('Modifies the existing ImageData of a loaded image', () => {
            const wi = new WebImage(RGBURL);
            const g = new Graphics();
            g.add(wi);
            return new Promise((resolve, reject) => {
                wi.loaded(() => {
                    wi.setPixel(0, 0, 1, 123);
                    g.redraw();
                    const context = g.getContext();
                    const topLeftPixel = context.getImageData(0, 0, 1, 1);
                    const pixelData = topLeftPixel.data;
                    expect(pixelData).toEqual(new Uint8ClampedArray([255, 123, 0, 255]));
                    resolve();
                });
            });
        });
    });
    describe('setImageData', () => {
        it('Allows replacing the entire underliny imagedata for the next draw', () => {
            const img = new WebImage('www.codehs.com/doesnt-matter.gif');
            const imageData = new ImageData(new Uint8ClampedArray([0, 0, 255, 255]), 1, 1);
            const g = new Graphics();
            g.add(img);
            img.setImageData(imageData);
            g.redraw();
            const context = g.getContext();
            const topLeftPixel = context.getImageData(0, 0, 1, 1);
            expect(topLeftPixel.data).toEqual(new Uint8ClampedArray([0, 0, 255, 255]));
        });
    });
});
