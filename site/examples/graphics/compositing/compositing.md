---
title: Compositing
layout: example
code: compositing.js
---

Setting the `globalCompositeOperation` of an element will cause that operation to be used before drawing it.
The options can all be seen on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation).

In this example, a subclassed circle with `globalCompositeOperation = 'destination-out'` is used to act as an "eraser".
When you click or tap the canvas, the circle's `globalCompositeOperation` becomes `destination-in`, and will act as whatever the opposite of an eraser is.
