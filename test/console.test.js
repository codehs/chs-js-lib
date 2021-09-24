import Console from '../src/console/console.js';

describe('Console', () => {
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
                    prompt: prompt,
                });
                expect(c.readLine('Give me a line: ')).toBe('nice');
            });
        });
    });
});
