import Graphics, {
    KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE,
    HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE,
} from '../src/graphics/index.js';
import { simulateEvent } from './graphics.test.js';
import Thing from '../src/graphics/thing.js';

describe('Keyboard navigation', () => {
    describe('DOM elements corresponding to elements', () => {
        it('Adding an element creates a corresponding DOM element', () => {
            const g = new Graphics();
            const t = new Thing();
            g.add(t);
            const button = document.querySelector('button');
            expect(button).not.toBeNull();
            expect(button.innerHTML).toEqual(t.describe());
        });
        it('Starts hidden', () => {
            const g = new Graphics();
            const t = new Thing();
            g.add(t);
            const button = document.querySelector('button');
            expect(button.style.cssText.replace(/\s+/g, '')).toEqual(
                HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE.replace(/\s+/g, '')
            );
        });
        it('Changes style when the graphics instance switches to keyboard navigation mode', () => {
            const g = new Graphics();
            const t = new Thing();
            g.add(t);
            simulateEvent('keydown', { key: 'Tab' }, document.querySelector('#game'));
            const button = document.querySelector('button');
            expect(button.style.cssText.replace(/\s+/g, '')).toEqual(
                KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE.replace(/\s+/g, '')
            );
        });
    });
});