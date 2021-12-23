const fs = require('fs');
const path = require('path');

exports.render = data => {
    const codePath = path.resolve(__dirname, `../${data.page.url}${data.code}`);
    console.log(`lookin for code in ${codePath}`);
    const codeText = fs.readFileSync(codePath, 'utf8');
    return `
<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css" />
      <link rel="stylesheet" href="${this.url('/assets/style.css')}" />
      <script type="text/javascript" src="${this.url('/assets/main.js')}"></script>
      <title>${data.title}</title>
    </head>
    <body>
        <header>
            <h1>${data.title}</h1>
            <nav>
                <a href="${this.url('/')}">Home</a>
                <a href="${this.url('/examples')}">Examples</a>
                <a href="${this.url('/documentation')}">Documentation</a>
            </nav>
        </header>
        <canvas id="game" width="480" height="200"></canvas>
        <script src="${this.url('/assets/chs.iife.js')}"></script>
        <script id="code" type="module">${codeText}</script>
        ${data.content}
    </body>
  </html>`;
};
