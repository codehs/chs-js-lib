---
title: Console - readBooleanAsync
code: readBooleanAsync.js
layout: example.11ty.js
---

`readBooleanAsync` will return a Promise that resolves with the input. It will re-prompt until it receives a boolean or `null`.
By default, `readBooleanAsync` will use `prompt` and block the window, but it can be configured to receive input other ways, like via an input.
In this case, it's configured to get input from an input box.
