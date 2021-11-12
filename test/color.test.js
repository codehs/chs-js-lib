import Color from '../src/graphics/color.js';

describe('Color', () => {
    describe('Constructor', () => {
        it('Sets the r,g,b properties of the color', () => {
            const color = new Color(1, 2, 3);
            expect(color.r).toBe(1);
            expect(color.g).toBe(2);
            expect(color.b).toBe(3);
        });
    });
    describe('toString', () => {
        it('Creates a hex string', () => {
            expect(new Color(10, 10, 10).toString()).toBe('#0a0a0a');
        });
    });
    describe('createFromRGB', () => {
        it('Converts RGB components to hex strings', () => {
            expect(Color.createFromRGB(255, 0, 0)).toBe('#ff0000');
            expect(Color.createFromRGB(0, 255, 0)).toBe('#00ff00');
            expect(Color.createFromRGB(0, 0, 255)).toBe('#0000ff');
        });
        it('Throws for invalid components', () => {
            expect(() => {
                Color.createFromRGB(256, 0, 0);
            }).toThrow('Invalid color component');
        });
    });
    describe('randomRed', () => {
        it('Has no G or B components', () => {
            for (let i = 0; i < 10; i++) {
                expect(Color.randomRed().slice(3)).toBe('0000');
            }
        });
    });
    describe('randomGreen', () => {
        it('Has no R or B components', () => {
            for (let i = 0; i < 10; i++) {
                expect(Color.randomGreen().slice(1, 3)).toBe('00');
                expect(Color.randomGreen().slice(5)).toBe('00');
            }
        });
    });
    describe('randomBlue', () => {
        it('Has no R or G components', () => {
            for (let i = 0; i < 10; i++) {
                expect(Color.randomBlue().slice(1, 5)).toBe('0000');
            }
        });
    });
    describe('hslToRgb', () => {
        it('Handles 0 saturation', () => {
            expect(Color.hslToRgb(0, 0, 0.6)).toEqual([153, 153, 153]);
        });
        it('Handles non-0 saturation', () => {
            expect(Color.hslToRgb(0.5, 0.45, 0.32)).toEqual([
                44.88000000000001, 118.31999999999996, 118.32,
            ]);
        });
        it('Handles luminosity > 0.5', () => {
            expect(Color.hslToRgb(0.5, 0.45, 0.65)).toEqual([
                125.58749999999998, 205.91250000000002, 205.91250000000002,
            ]);
        });
    });
});
