import Console from '../src/console/console.js';

describe('Console', () => {
    describe('Reading input', () => {
        describe('readLine', () => {
            it('Returns the input', () => {
                const c = new Console();
                // unfortunately we can't spy directly on the window.prompt,
                // because it is bound within the constructor and therefore is a separate function
                const promptSpy = spyOn(c, 'promptHandler').and.returnValue('Nice!');
                expect(c.readLine('Next line? ')).toEqual('Nice!');
                expect(promptSpy).toHaveBeenCalledOnceWith('Next line? ');
            });
        });
        describe('readNumber', () => {
            it('Loops until a number is provided', () => {
                const inputs = ['one', 'two', 3];
                let i = 0;
                const c = new Console();
                const promptSpy = jasmine.createSpy();
                c.configure({
                    prompt: (...args) => {
                        return promptSpy.and.returnValue(inputs[i++])(...args);
                    },
                });
                const int = c.readInt('Give me a number: ');
                expect(promptSpy).toHaveBeenCalledTimes(3);
                expect(promptSpy.calls.allArgs()).toEqual([
                    ['Give me a number: '],
                    ['That was not an integer. Please try again. Give me a number: '],
                    ['That was not an integer. Please try again. Give me a number: '],
                ]);
                expect(int).toBe(3);
            });
        });
        describe('readBoolean', () => {
            it('Loops until a boolean is provided', () => {
                const inputs = ['nope', 'yep', 'yes'];
                let i = 0;
                const c = new Console();
                const promptSpy = jasmine.createSpy();
                c.configure({
                    prompt: (...args) => {
                        return promptSpy.and.returnValue(inputs[i++])(...args);
                    },
                });
                const bool = c.readBoolean('Give me a bool: ');
                expect(promptSpy).toHaveBeenCalledTimes(3);
                expect(promptSpy.calls.allArgs()).toEqual([
                    ['Give me a bool: '],
                    ['That was not a boolean (true/false). Please try again. Give me a bool: '],
                    ['That was not a boolean (true/false). Please try again. Give me a bool: '],
                ]);
                expect(bool).toBeTrue();
            });
        });
    });
    describe('Configuring prompt/output', () => {
        describe('Configuring prompt', () => {
            it('Allows an async prompt', async () => {
                const c = new Console();
                c.configure({
                    prompt: async () => {
                        return await new Promise(resolve =>
                            setInterval(() => {
                                resolve('nice');
                            }, 0)
                        );
                    },
                });
                expect(await c.readLine('Give me a line: ')).toBe('nice');
            });
            it('Allows an async prompt to be treated as a Promise', () => {
                const c = new Console();
                c.configure({
                    prompt: async () => {
                        return await new Promise(resolve =>
                            setInterval(() => {
                                resolve('nice');
                            }, 0)
                        );
                    },
                });
                return c.readLine('Give me a line: ').then(input => {
                    expect(input).toBe('nice');
                });
            });
            it('Allows a blocking prompt', () => {
                const c = new Console();
                spyOn(window, 'prompt').and.returnValue('nice');
                c.configure({
                    // native prompt
                    prompt: window.prompt,
                });
                expect(c.readLine('Give me a line: ')).toBe('nice');
            });
            it('Defaults to built-in promptHandler', () => {
                const c = new Console();
                const promptSpy = spyOn(c, 'promptHandler').and.returnValue('Nice!');
                c.configure({});
                expect(c.readLine('Give me a line: ')).toBe('Nice!');
                expect(promptSpy).toHaveBeenCalledOnceWith('Give me a line: ');
            });
        });
    });
});
