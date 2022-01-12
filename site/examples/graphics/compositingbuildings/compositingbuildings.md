---
title: Compositing
layout: example
code: compositingbuildings.js
---

Setting the `globalCompositeOperation` of the context will cause elements drawn after its set to be blended with those operations.
The options can all be seen on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation).

In this example, a subclass of Polygon is created that will set the context's `globalCompositeOperation` to be `'destination-out'`, which will "erase" the content underneath it in the canvas.

The argument to the `draw` function is the `context`, and can be modified with `context.globalCompositeOperation`.
