import Console from '../src/console/index.js';

describe('Console', () => {
    describe('The constructor', () => {
        it('Allows prompt configuration', () => {
            const promptSpy = jasmine.createSpy();
            const c = new Console({ input: promptSpy });
            c.readLineAsync('Give me a line: ');
            expect(promptSpy).toHaveBeenCalledOnceWith('Give me a line: ');
        });
        it('Allows print configuration', () => {
            const printSpy = jasmine.createSpy();
            const c = new Console({ output: printSpy });
            c.print('Hey!');
            expect(printSpy).toHaveBeenCalledOnceWith('Hey!');
        });
        it('Allows clear configuration', () => {
            const clearSpy = jasmine.createSpy();
            const c = new Console({ clear: clearSpy });
            c.clear();
            expect(clearSpy).toHaveBeenCalledTimes(1);
        });
    });
    describe('Configuring prompt/output/clear', () => {
        describe('Configuring prompt', () => {
            it('Allows an async prompt', async () => {
                const c = new Console();
                c.configure({
                    input: async () => {
                        return await new Promise(resolve =>
                            setInterval(() => {
                                resolve('nice');
                            }, 0)
                        );
                    },
                });
                expect(await c.readLineAsync('Give me a line: ')).toBe('nice');
            });
            it('Allows an async prompt to be treated as a Promise', () => {
                const c = new Console();
                c.configure({
                    input: async () => {
                        return await new Promise(resolve =>
                            setInterval(() => {
                                resolve('nice');
                            }, 0)
                        );
                    },
                });
                return c.readLineAsync('Give me a line: ').then(input => {
                    expect(input).toBe('nice');
                });
            });
            it('Allows a blocking prompt', () => {
                const c = new Console();
                spyOn(window, 'prompt').and.returnValue('nice');
                c.configure({
                    // native prompt
                    input: window.prompt,
                });
                expect(c.readLine('Give me a line: ')).toBe('nice');
            });
            it('Defaults to built-in window.prompt', () => {
                const c = new Console();
                const promptSpy = spyOn(window, 'prompt').and.returnValue('Nice!');
                c.configure({});
                expect(c.readLine('Give me a line: ')).toBe('Nice!');
                expect(promptSpy).toHaveBeenCalledOnceWith('Give me a line: ');
            });
        });
        describe('Configuring clear', () => {
            it('Defaults to an empty function', () => {
                const c = new Console();
                const clearSpy = spyOn(c, 'clear');
                c.configure();
                c.clear();
                expect(clearSpy).toHaveBeenCalledTimes(1);
            });
            it('Allows a handler to be attached', () => {
                const c = new Console();
                const clearSpy = jasmine.createSpy();
                c.configure({ clear: clearSpy });
                c.clear();
                expect(clearSpy).toHaveBeenCalledTimes(1);
            });
        });
        describe('Configuring print', () => {
            it('Allows a handler to be attached', () => {
                const c = new Console();
                const printSpy = jasmine.createSpy();
                c.configure({ output: printSpy });
                c.print('Hellooo');
                expect(printSpy).toHaveBeenCalledOnceWith('Hellooo');
            });
        });
    });
    describe('Input', () => {
        describe('Aborting the prompt (default behavior in headless chrome)', () => {
            it('Returns null for each input method', async () => {
                const c = new Console();
                expect(c.readLine('')).toBeNull();
                expect(c.readInt('')).toBeNull();
                expect(c.readFloat('')).toBeNull();
                expect(c.readBoolean('')).toBeNull();
                expect(await c.readLineAsync('')).toBeNull();
                expect(await c.readIntAsync('')).toBeNull();
                expect(await c.readFloatAsync('')).toBeNull();
                expect(await c.readBooleanAsync('')).toBeNull();
            });
        });
        describe('readLine', () => {
            it('Returns the input', () => {
                const c = new Console();
                const promptSpy = spyOn(window, 'prompt').and.returnValue('Nice!');
                expect(c.readLine('Next line? ')).toEqual('Nice!');
                expect(promptSpy).toHaveBeenCalledOnceWith('Next line? ');
            });
            it('Errors for >1 argument', () => {
                const c = new Console();
                expect(() => {
                    c.readLine('Next line? ', 'Oops');
                }).toThrow(Error('You should pass exactly 1 argument to readLine'));
            });
            it('Defaults to null if the prompt is aborted', () => {
                const c = new Console();
                expect(c.readLine('Next line?')).toBeNull();
            });
        });
        describe('readFloat', () => {
            it('Errors for >1 argument', () => {
                const c = new Console();
                expect(() => {
                    c.readFloat('Next Float? ', 'Oops');
                }).toThrow(Error('You should pass exactly 1 argument to readFloat'));
            });
            it('Loops until a number is provided', () => {
                const inputs = ['one', 'two', 3.0];
                const c = new Console();
                const promptSpy = spyOn(window, 'prompt').and.returnValues(...inputs);
                const int = c.readFloat('Give me a float: ');
                expect(promptSpy).toHaveBeenCalledTimes(3);
                expect(promptSpy.calls.allArgs()).toEqual([
                    ['Give me a float: '],
                    ["'one' was not a float. Please try again.\nGive me a float: "],
                    ["'two' was not a float. Please try again.\nGive me a float: "],
                ]);
                expect(int).toBe(3.0);
            });
        });
        describe('readInt', () => {
            it('Errors for >1 argument', () => {
                const c = new Console();
                expect(() => {
                    c.readInt('Next int? ', 'Oops');
                }).toThrow(Error('You should pass exactly 1 argument to readInt'));
            });
            it('Loops until a number is provided', () => {
                const inputs = ['one', 'two', 3];
                let i = 0;
                const c = new Console();
                const promptSpy = spyOn(window, 'prompt').and.returnValues(...inputs);
                const int = c.readInt('Give me a number: ');
                expect(promptSpy).toHaveBeenCalledTimes(3);
                expect(promptSpy.calls.allArgs()).toEqual([
                    ['Give me a number: '],
                    ["'one' was not an integer. Please try again.\nGive me a number: "],
                    ["'two' was not an integer. Please try again.\nGive me a number: "],
                ]);
                expect(int).toBe(3);
            });
            it('Exits with default after 100 invalid inputs with default prompt', () => {
                const c = new Console();
                const promptSpy = spyOn(window, 'prompt').and.returnValue('invalid');
                const int = c.readInt('Give me a number: ');
                expect(promptSpy).toHaveBeenCalledTimes(100);
                expect(int).toBe(0);
            });
            it('Exits with default after 100 invalid inputs with async prompt', async () => {
                const c = new Console();
                const promptSpy = jasmine.createSpy();
                c.configure({
                    input: (...args) => {
                        return promptSpy.and.returnValue('invalid')(...args);
                    },
                });
                const int = await c.readIntAsync('Give me a number: ');
                expect(promptSpy).toHaveBeenCalledTimes(100);
                expect(int).toBe(0);
            });
        });
        describe('readBoolean', () => {
            it('Errors for >1 argument', () => {
                const c = new Console();
                expect(() => {
                    c.readBoolean('Next boolean? ', 'Oops');
                }).toThrow(Error('You should pass exactly 1 argument to readBoolean'));
            });
            it('Casts yes/no to true/false', () => {
                const c = new Console();
                const inputs = ['yes', 'no'];
                let i = 0;
                spyOn(window, 'prompt').and.returnValues(...inputs);
                expect(c.readBoolean('')).toBeTrue();
                expect(c.readBoolean('')).toBeFalse();
            });
            it('Casts true/false to true/false', () => {
                const c = new Console();
                const inputs = ['true', 'false'];
                let i = 0;
                spyOn(window, 'prompt').and.returnValues(...inputs);
                expect(c.readBoolean('')).toBeTrue();
                expect(c.readBoolean('')).toBeFalse();
            });
            it('Loops until a boolean is provided', () => {
                const inputs = ['nope', 'yep', 'yes'];
                let i = 0;
                const c = new Console();
                const promptSpy = spyOn(window, 'prompt').and.returnValues(...inputs);
                const bool = c.readBoolean('Give me a bool: ');
                expect(promptSpy).toHaveBeenCalledTimes(3);
                expect(promptSpy.calls.allArgs()).toEqual([
                    ['Give me a bool: '],
                    ["'nope' was not a boolean (true/false). Please try again.\nGive me a bool: "],
                    ["'yep' was not a boolean (true/false). Please try again.\nGive me a bool: "],
                ]);
                expect(bool).toBeTrue();
            });
        });
    });
    describe('Output', () => {
        describe('print', () => {
            it('Errors for 0 arguments', () => {
                const c = new Console();
                expect(() => {
                    c.print();
                }).toThrow(Error('You should pass at least 1 argument to print'));
            });
            it("Doesn't add a newline to its output", () => {
                const c = new Console();
                const printSpy = jasmine.createSpy();
                c.configure({ output: printSpy });
                c.print('Hello!');
                expect(printSpy).toHaveBeenCalledOnceWith('Hello!');
            });
        });
        describe('println', () => {
            it('Does not error for 0 arguments', () => {
                const c = new Console();
                c.println();
                expect(true).toBeTrue();
            });
            it('Errors for >1 arguments', () => {
                const c = new Console();
                expect(() => {
                    c.println(1, 2);
                }).toThrow(Error('You should pass exactly 1 argument to println'));
            });
            it('Prints an empty newline for no input', () => {
                const c = new Console();
                const printSpy = jasmine.createSpy();
                c.configure({ output: printSpy });
                c.println();
                expect(printSpy).toHaveBeenCalledOnceWith('', '\n');
            });
            it('Adds a newline to its output', () => {
                const c = new Console();
                const printSpy = jasmine.createSpy();
                c.configure({ output: printSpy });
                c.println('Hello!');
                expect(printSpy).toHaveBeenCalledOnceWith('Hello!', '\n');
            });
        });
    });
    describe('Asynchronous inputs', () => {
        describe('readLineAsync', () => {
            it('Returns a promise', () => {
                const c = new Console();
                expect(typeof c.readLineAsync('give me a line!').then).toBe('function');
            });
            it('Will not reprompt', async () => {
                const c = new Console({
                    input: promptMessage => {
                        return promptMessage;
                    },
                });
                expect(await c.readLineAsync('echo')).toEqual('echo');
            });
        });
        describe('readIntAsync', () => {
            it('Returns a promise', () => {
                const c = new Console();
                expect(typeof c.readIntAsync('Give me an int!').then).toBe('function');
            });
            it('Will reprompt', async () => {
                let i = 0;
                const promptSpy = jasmine.createSpy();
                const c = new Console({
                    input: promptMessage => {
                        promptSpy(promptMessage);
                        i += 1;
                        if (i < 3) {
                            return 'huh?';
                        }
                        return 12321;
                    },
                });
                expect(await c.readIntAsync('input pls')).toEqual(12321);
                expect(promptSpy.calls.allArgs()).toEqual([
                    ['input pls'],
                    ["'huh?' was not an integer. Please try again.\ninput pls"],
                    ["'huh?' was not an integer. Please try again.\ninput pls"],
                ]);
            });
            it('Will default after 100 loops', async () => {
                const promptSpy = jasmine.createSpy();
                const c = new Console({
                    input: promptMessage => {
                        promptSpy(promptMessage);
                        return 'ack';
                    },
                });
                expect(await c.readIntAsync('input pls')).toEqual(0);
                expect(promptSpy).toHaveBeenCalledTimes(100);
            });
        });
        describe('readFloatAsync', () => {
            it('Returns a promise', () => {
                const c = new Console();
                expect(typeof c.readFloatAsync('give me a float!').then).toBe('function');
            });
            it('Will reprompt', async () => {
                let i = 0;
                const promptSpy = jasmine.createSpy();
                const c = new Console({
                    input: promptMessage => {
                        promptSpy(promptMessage);
                        i += 1;
                        if (i < 3) {
                            return 'huh?';
                        }
                        return 12.1212;
                    },
                });
                expect(await c.readFloatAsync('input pls')).toEqual(12.1212);
                expect(promptSpy.calls.allArgs()).toEqual([
                    ['input pls'],
                    ["'huh?' was not a float. Please try again.\ninput pls"],
                    ["'huh?' was not a float. Please try again.\ninput pls"],
                ]);
            });
        });
        describe('readBooleanAsync', () => {
            it('Returns a promise', () => {
                const c = new Console();
                expect(typeof c.readBooleanAsync('Give me a boolean').then).toBe('function');
            });
            it('Will reprompt', async () => {
                let i = 0;
                const promptSpy = jasmine.createSpy();
                const c = new Console({
                    input: promptMessage => {
                        promptSpy(promptMessage);
                        i += 1;
                        if (i < 3) {
                            return 'huh?';
                        }
                        return 'true';
                    },
                });
                expect(await c.readBooleanAsync('input pls')).toEqual(true);
                expect(promptSpy.calls.allArgs()).toEqual([
                    ['input pls'],
                    ["'huh?' was not a boolean (true/false). Please try again.\ninput pls"],
                    ["'huh?' was not a boolean (true/false). Please try again.\ninput pls"],
                ]);
            });
        });
        describe('Not configuring an inputAsync', () => {
            it('Will still return a promise', () => {
                const c = new Console();
                const result = c.readLineAsync('Give me a line!');
                // this is how you check that something is a Promise!
                expect(Promise.resolve(result)).toEqual(result);
            });
            it('Will still abort with null', async () => {
                const c = new Console();
                const result = c.readIntAsync('Give me an int!');
                expect(await result).toEqual(null);
            });
        });
    });
});
