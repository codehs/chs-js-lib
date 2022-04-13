import WebImage from '../src/graphics/webimage.js';
import Graphics from '../src/graphics/index.js';
import Rectangle from '../src/graphics/rectangle.js';

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
                    let topLeftPixel = g.getPixel(0, 0);
                    expect(topLeftPixel).toEqual([255, 0, 0, 255]);
                    wi.setPosition(50, 50);
                    g.redraw();
                    topLeftPixel = g.getPixel(50, 50);
                    expect(topLeftPixel).toEqual([255, 0, 0, 255]);
                    resolve();
                });
            });
        });
        it('Appropriately closes its path so it doesnt affect other elements', () => {
            const g = new Graphics({ shouldUpdate: false });
            const r = new Rectangle(100, 100);
            r.setColor('red');
            g.add(r);
            g.redraw();
            expect(g.getPixel(0, 0)).toEqual([255, 0, 0, 255]);

            const wi = new WebImage(RGBURL);
            wi.setPosition(100, 100);
            g.add(wi);
            return new Promise(resolve => {
                wi.loaded(() => {
                    g.redraw();
                    expect(g.getPixel(0, 0)).toEqual([255, 0, 0, 255]);
                    expect(g.getPixel(131, 101)).toEqual([0, 255, 0, 255]);
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
                    const topLeftPixel = g.getPixel(0, 0);
                    expect(topLeftPixel).toEqual([0, 0, 0, 255]);
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
            const topLeftPixel = g.getPixel(0, 0);
            expect(topLeftPixel).toEqual([0, 0, 255, 255]);
        });
    });
    describe('setImage', () => {
        it('Allows replacing the image of the WebImage', () => {
            const g = new Graphics({ shouldUpdate: false });
            const img = new WebImage('www.codehs.com/doesnt-matter.gif');
            img.setImage(RGBURL);
            g.add(img);
            img.loaded(() => {
                g.redraw();
                expect(g.getPixel(0, 0)).toEqual([255, 0, 0, 255]);
            });
        });
        it('Cancels the original onload of the image', () => {
            const g = new Graphics({ shouldUpdate: false });
            const img = new WebImage('www.codehs.com/doesnt-matter.gif');
            const firstLoadedSpy = jasmine.createSpy();
            // we have to inspect here to get the actual onload event
            img.image.onload = firstLoadedSpy;
            img.setImage(RGBURL);
            g.add(img);
            img.loaded(() => {
                g.redraw();
                expect(g.getPixel(0, 0)).toEqual([255, 0, 0, 255]);
                expect(firstLoadedSpy).not.toHaveBeenCalled();
            });
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
                    let topLeftPixel = g.getPixel(0, 0);
                    expect(topLeftPixel).toEqual([255, 0, 0, 255]);
                    img.setRotation(180);
                    g.redraw();
                    topLeftPixel = g.getPixel(0, 0);
                    expect(topLeftPixel).toEqual([0, 0, 255, 255]);
                    resolve();
                });
            });
        });
    });
    describe('Resizing', () => {
        it('Properly shrinks the WebImage', () => {
            const img = new WebImage(RGBURL);
            const g = new Graphics({ shouldUpdate: false });
            g.add(img);
            return new Promise(resolve => {
                img.loaded(() => {
                    g.redraw();
                    // the img is 90x90
                    let bottomRightPixel = g.getPixel(89, 89);
                    expect(bottomRightPixel).toEqual([0, 0, 255, 255]);
                    img.setSize(50, 50);
                    g.redraw();
                    bottomRightPixel = g.getPixel(49, 49);
                    expect(bottomRightPixel).toEqual([0, 0, 255, 255]);
                    resolve();
                });
            });
        });
    });
});
