import Graphics, {
    HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_ID,
    KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE,
} from '../src/graphics/index.js';
import Thing from '../src/graphics/thing.js';
import { simulateEvent } from './utils.js';

describe('Keyboard navigation', () => {
    describe('DOM elements corresponding to elements', () => {
        it('Adding an element creates a corresponding DOM element', () => {
            const g = new Graphics();
            const t = new Thing();
            g.add(t);
            simulateEvent('keydown', { key: 'Tab' }, document.querySelector('#game'));
            const button = document.getElementById(
                HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_ID(t._id)
            );
            expect(button).not.toBeNull();
            button.dispatchEvent(new Event('focus'));
            expect(button.textContent).toEqual(t.describe());
        });
        it('Starts hidden', () => {
            const g = new Graphics();
            const t = new Thing();
            g.add(t);
            simulateEvent('keydown', { key: 'Tab' }, document.querySelector('#game'));
            const button = document.getElementById(
                HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_ID(t._id)
            );
            expect(button.style.cssText.replace(/\s+/g, '')).toEqual(
                KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE.replace(/\s+/g, '')
            );
        });
        it('Changes style when the graphics instance switches to keyboard navigation mode', () => {
            const g = new Graphics();
            const t = new Thing();
            g.add(t);
            simulateEvent('keydown', { key: 'Tab' }, window);
            const button = document.getElementById(
                HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_ID(t._id)
            );
            expect(button.style.cssText.replace(/\s+/g, '')).toEqual(
                KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE.replace(/\s+/g, '')
            );
        });
        it('Is removed on .remove() or .removeAll()', () => {
            const g = new Graphics();
            const t = new Thing();
            g.add(t);
            simulateEvent('keydown', { key: 'Tab' }, document.querySelector('#game'));
            let button = document.getElementById(HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_ID(t._id));
            expect(button).not.toBeNull();
            g.remove(t);
            button = document.getElementById(HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_ID(t._id));
            expect(button).toBeNull();
        });
    });
});
