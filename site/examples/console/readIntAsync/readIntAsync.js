const c = new Console({
    onPromptAsync: message => {
        return new Promise(resolve => {
            console.log(message);
            setTimeout(() => {
                resolve(123);
            }, 0);
        });
    },
});

const x = await c.readIntAsync('Give me an integer!');
const text = new Text(`${x} * 12 = ${x * 12}`);
text.setPosition(50, 50);
add(text);
