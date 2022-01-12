const fs = require('fs');
const path = require('path');

exports.data = {
    layout: 'base',
};

exports.render = data => {
    const codePath = path.resolve(__dirname, `../${data.page.url}${data.code}`);
    const codeText = fs.readFileSync(codePath, 'utf8');
    const canvasWidth = data.width ?? 480;
    const canvasHeight = data.width ?? 200;
    return `
    <main>
        <div style="display: flex">
            <canvas id="game" width="${canvasWidth}" height="${canvasHeight}"></
            canvas>
        </div>
        <script src="${
            process.env.GITHUB_ACTION ? this.url('/assets/chs.iife.js') : '/dist/chs.iife.js'
        }"></script>
        <script id="code" type="module">${codeText}</script>
        ${data.content}
    </main>
  `;
};
