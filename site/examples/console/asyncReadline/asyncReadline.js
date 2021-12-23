import { Console } from '/chs.mjs';
const c = new Console({
    onPrompt: message => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(message);
            }, 1000);
        });
    },
});

(async () => {
    const input = await c.readLine('Echo!');
    alert(input);
})();
