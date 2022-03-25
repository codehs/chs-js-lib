let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const input = document.createElement('input');
input.type = 'text';
document.body.appendChild(input);

const submitButton = document.createElement('button');
submitButton.innerHTML = 'Submit!';
document.body.appendChild(submitButton);

const rerunButton = document.createElement('button');
rerunButton.innerHTML = 'Rerun';
document.body.appendChild(rerunButton);

const console = new Console({
    onPrompt: promptMessage => {
        const text = new Text(promptMessage);
        text.color = darkMode ? 'white' : 'black';
        text.setPosition(getWidth() / 2, getHeight() / 2);
        text.setAnchor({ vertical: 0.5, horizontal: 0.5 });
        add(text);
        return new Promise(resolve => {
            submitButton.disabled = false;
            submitButton.addEventListener(
                'click',
                () => {
                    resolve(input.value);
                    input.value = '';
                    submitButton.disabled = true;
                    remove(text);
                },
                { once: true }
            );
        });
    },
});

const run = async () => {
    rerunButton.disabled = true;
    const x = await console.readFloatAsync('Give me a float in the input box!!');
    alert(`You input ${x}!`);
    rerunButton.disabled = false;
    rerunButton.addEventListener('click', run, { once: true });
};

run();
