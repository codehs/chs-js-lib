import * as Randomizer from '../src/randomizer.js';
import Color, { hexToRgb } from '../src/graphics/color.js';

describe('Randomizer', () => {
    describe('nextInt', () => {
        it('Supports a single boundary equal to arg - 1', () => {
            expect(Randomizer.nextInt(3)).toBeLessThanOrEqual(2);
        });
        it('Supports a max and min', () => {
            const n = Randomizer.nextInt(1, 3);
            expect(n).toBeLessThanOrEqual(3);
            expect(n).toBeGreaterThanOrEqual(1);
        });
    });
    describe('nextFloat', () => {
        it('Supports a single boundary equal', () => {
            expect(Randomizer.nextFloat(3)).toBeLessThan(3);
        });
        it('Supports a max and min', () => {
            const n = Randomizer.nextFloat(1, 3);
            expect(n).toBeLessThan(3);
            expect(n).toBeGreaterThan(1);
        });
    });
    describe('nextHex', () => {
        it('Always returns a valid 0-255 hex', () => {
            expect(parseInt(Randomizer.nextHex(), 16)).toBeLessThanOrEqual(255);
        });
    });
    describe('nextColor', () => {
        it('Always returns a valid color', () => {
            expect(() => {
                new Color(hexToRgb(Randomizer.nextColor()));
            }).not.toThrow();
        });
    });
    describe('nextBoolean', () => {
        it('Returns a boolean', () => {
            const bool = Randomizer.nextBoolean();
            expect([true, false]).toContain(bool);
        });
    });
    describe('Perlin', () => {
        it("Maps nearby values to similar y values (it's continuous)", () => {
            for (let i = 0; i < 100; i += 0.1) {
                const x1 = i;
                const x2 = i + 0.1;
                expect(Randomizer.noise(x2) - Randomizer.noise(x1)).toBeLessThan(0.2);
            }
        });
        describe('2d noise', () => {
            it('Is continuous past PERLIN_SIZE_2D', () => {
                for (let i = 0; i < 127; i += 0.01) {
                    const x1 = i;
                    const x2 = i + 0.01;
                    expect(Randomizer.noise(x2, x2) - Randomizer.noise(x1, x1)).toBeLessThan(0.1);
                }
            });
        });
    });
});
