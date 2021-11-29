import WebImage from '../src/graphics/webimage.js';
import Graphics from '../src/graphics/index.js';

// a 90x90 image with R, G, and B vertical stripes of 30px width, i.e.
/**
 * +--+--+--+
 * |rr|gg|bb|
 * |rr|gg|bb|
 * |rr|gg|bb|
 * +--+--+--+
 * @type {string}
 */
export const RGBURL = 'https://codehs.com/uploads/4cd36a1bacbd8cdd22cf75947f4caea8';

describe('WebImage', () => {
    describe('The WebImage constructor', () => {
        it('Creates a WebImage with .type', () => {
            expect(new WebImage(RGBURL).type).toEqual('WebImage');
        });
    });
    describe('Displaying images from URL', () => {
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

    describe('Width and Height', () => {
        it('Loads width and height from image', () => {
            const wi = new WebImage(RGBURL);
            return new Promise((resolve, reject) => {
                wi.loaded(() => {
                    expect(wi.width).toEqual(90);
                    expect(wi.height).toEqual(90);
                    resolve();
                });
            });
        });
        it('Yields to specific width and height overrides', () => {
            const wi = new WebImage(RGBURL);
            wi.setSize(123, 123);
            return new Promise((resolve, reject) => {
                wi.loaded(() => {
                    expect(wi.width).toEqual(123);
                    expect(wi.height).toEqual(123);
                    resolve();
                });
            });
        });
        it('Marks the canvas as out of sync after changing dimension', () => {
            const wi = new WebImage(RGBURL);
            const g = new Graphics();
            g.add(wi);
            wi.setSize(123, 123);
            expect(wi._hiddenCanvasOutOfSync).toBeTrue();
            g.redraw();
            expect(wi._hiddenCanvasOutOfSync).toBeTrue();
            wi.loaded(() => {
                g.redraw();
                expect(wi._hiddenCanvasOutOfSync).toBeFalse();
            });
        });
    });

    describe('setPixel', () => {
        it('Modifies the existing ImageData of a loaded image', () => {
            const wi = new WebImage(RGBURL);
            const g = new Graphics();
            g.shouldUpdate = false;
            g.add(wi);
            return new Promise((resolve, reject) => {
                wi.loaded(() => {
                    wi.setPixel(0, 0, 0, 0);
                    g.redraw();
                    const context = g.getContext();
                    const topLeftPixel = context.getImageData(0, 0, 1, 1);
                    const pixelData = topLeftPixel.data;
                    expect(pixelData).toEqual(new Uint8ClampedArray([0, 0, 0, 255]));
                    resolve();
                });
            });
        });
        it('Updates the internal _hidenCanvasOutOfSync', () => {
            const wi = new WebImage(RGBURL);
            const g = new Graphics();
            g.add(wi);
            return new Promise((resolve, reject) => {
                wi.loaded(() => {
                    wi.setPixel(0, 0, 1, 123);
                    expect(wi._hiddenCanvasOutOfSync).toBeTrue();
                    const hiddenCanvas = wi._hiddenCanvas;
                    let hiddenContext = hiddenCanvas.getContext('2d');
                    let modifiedPixel = hiddenContext.getImageData(0, 0, 1, 1);
                    expect(modifiedPixel.data).toEqual(new Uint8ClampedArray([255, 0, 0, 255]));
                    g.redraw();
                    expect(wi._hiddenCanvasOutOfSync).toBeFalse();
                    hiddenContext = hiddenCanvas.getContext('2d');
                    modifiedPixel = hiddenContext.getImageData(0, 0, 1, 1);
                    expect(modifiedPixel.data).toEqual(new Uint8ClampedArray([255, 123, 0, 255]));
                    resolve();
                });
            });
        });
    });
    describe('getPixel, getRed/Blue/Green/Alpha', () => {
        it('Returns undefined data for an out-of-bounds position', () => {
            const img = new WebImage(RGBURL);
            expect(img.getPixel(-1, -1)).toEqual([-1, -1, -1, -1]);
            return new Promise(resolve => {
                img.loaded(() => {
                    expect(img.getPixel(-1, -1)).toEqual([-1, -1, -1, -1]);
                    resolve();
                });
            });
        });
        it('Returns valid data for a valid position', () => {
            const img = new WebImage(RGBURL);
            expect(img.getPixel(1, 1)).toEqual([-1, -1, -1, -1]);
            return new Promise(resolve => {
                img.loaded(() => {
                    expect(img.getPixel(1, 1)).toEqual([255, 0, 0, 255]);
                    expect(img.getRed(1, 1)).toEqual(255);
                    expect(img.getBlue(1, 1)).toEqual(0);
                    expect(img.getGreen(1, 1)).toEqual(0);
                    expect(img.getAlpha(1, 1)).toEqual(255);
                    resolve();
                });
            });
        });
    });
    describe('setImageData', () => {
        it('Allows replacing the entire underlying imagedata for the next draw', () => {
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
    describe('setRed/Blue/Green/Alpha', () => {
        it('Updates the underlying data', () => {
            const img = new WebImage(RGBURL);
            return new Promise(resolve => {
                img.loaded(() => {
                    img.setRed(1, 1, 1);
                    expect(img.getPixel(1, 1)).toEqual([1, 0, 0, 255]);
                    img.setGreen(1, 1, 1);
                    expect(img.getPixel(1, 1)).toEqual([1, 1, 0, 255]);
                    img.setBlue(1, 1, 1);
                    expect(img.getPixel(1, 1)).toEqual([1, 1, 1, 255]);
                    img.setAlpha(1, 1, 1);
                    expect(img.getPixel(1, 1)).toEqual([1, 1, 1, 1]);
                    resolve();
                });
            });
        });
    });
    describe('rotation', () => {
        it('Rotates the ImageData drawn to the canvas', () => {
            const img = new WebImage(RGBURL);
            const g = new Graphics();
            g.shouldUpdate = false;
            g.add(img);
            return new Promise((resolve, reject) => {
                img.loaded(() => {
                    g.redraw();
                    const context = g.getContext();
                    let topLeftPixel = context.getImageData(0, 0, 1, 1);
                    expect(topLeftPixel.data).toEqual(new Uint8ClampedArray([255, 0, 0, 255]));
                    img.setRotation(180);
                    g.redraw();
                    topLeftPixel = context.getImageData(0, 0, 1, 1);
                    expect(topLeftPixel.data).toEqual(new Uint8ClampedArray([0, 0, 255, 255]));
                    resolve();
                });
            });
        });
    });
});
