document.addEventListener('DOMContentLoaded', () => {
    console.log('wee');
    const code = document.getElementById('code')?.innerHTML;
    if (code) {
        const leftPadding = code.length - code.trimStart().length;
        const leftAlignedCode = code
            .split('\n')
            .map(line => {
                return line.slice(leftPadding - 1);
            })
            .join('\n');
        const codeBlock = document.createElement('code');
        const preWrapper = document.createElement('pre');
        codeBlock.innerHTML = leftAlignedCode;
        preWrapper.appendChild(codeBlock);
        document.body.appendChild(preWrapper);
    }
});
