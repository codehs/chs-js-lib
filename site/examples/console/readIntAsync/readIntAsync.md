---
title: Console - readIntAsync
code: readIntAsync.js
layout: example.11ty.js
---

`readIntAsync` will return a Promise that resolves with an integer. It will re-prompt until it receives an integer or `null`.
By default, `readIntAsync` will use `prompt` and block the window, but it can be configured to receive input other ways, like via an input.
In this case, it's configured to get input from an input box.
