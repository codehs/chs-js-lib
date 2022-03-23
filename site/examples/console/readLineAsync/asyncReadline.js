const c = new Console({
    onPromptAsync: message => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(message);
            }, 500);
        });
    },
});

const input = await c.readLineAsync('Echo!');
alert(input);
