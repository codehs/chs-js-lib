---
title: Console - readFloatAsync
code: readFloatAsync.js
layout: example.11ty.js
---

`readFloatAsync` will return a Promise that resolves with the input. It will re-prompt until it receives a number or `null`.
By default, `readFloatAsync` will use `prompt` and block the window, but it can be configured to receive input other ways, like via an input.
In this case, it's configured to get input from an input box.
