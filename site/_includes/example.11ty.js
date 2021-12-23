exports.render = data => {
    return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css" />
      <link rel="stylesheet" href="/style.css" />
      <script type="text/javascript" src="/main.js"></script>
      <title>${data.title}</title>
    </head>
    <body>
        <header>
            <h1>${data.title}</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/examples">Examples</a>
                <a href="/documentation">Documentation</a>
            </nav>
        </header>
        <canvas id="game" width="480" height="200"></canvas>
        <script src="/chs.iife.js"></script>
        <script id="code">
            ${data.code}
        </script>
        <p>${data.explanation}</p>
    </body>
  </html>`;
};
