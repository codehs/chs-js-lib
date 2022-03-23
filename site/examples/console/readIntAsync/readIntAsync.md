---
title: Console - readIntAsync
code: readIntAsync.js
layout: example.11ty.js
---

Console can be configured to use async/await input methods.
If the Console's `onPrompt` is configured to return a Promise, then both `readInt` and `readIntAsync` will return a promise.
`readIntAsync` will always return a Promise, even if `onPrompt` is synchronous.
