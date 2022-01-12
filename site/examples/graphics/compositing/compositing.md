---
title: Compositing
layout: example
code: compositing.js
---

Setting the `globalCompositeOperation` of the context will cause that operation mode to be used when drawing.
The options can all be seen on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation).

In this example, a subclassed circle with `globalCompositeOperation = 'destination-out'` is used to act as an "eraser".

The only argument to the `draw` function is the 2d context, and modifying the `globalCompositeOperation` before invoking `super.draw` will modify the context for the duration of the `Circle`'s draw.

When you click or tap the canvas, the circle's `globalCompositeOperation` becomes `destination-in`, and will act as whatever the opposite of an eraser is.
