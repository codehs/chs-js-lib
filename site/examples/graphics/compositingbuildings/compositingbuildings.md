---
title: Compositing
layout: example
code: compositingbuildings.js
---

Setting the `globalCompositeOperation` of an element will cause that operation to be used before drawing it.
The options can all be seen on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation).

In this example, a small Polygon with `globalCompositeOperation = 'destination-out'` is used to "erase" the content underneath it in the canvas.
