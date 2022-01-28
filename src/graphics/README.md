# Graphics

Graphics are controlled by a manager, implemented in `index.js`, which is responsible for drawing elements to an HTML5 canvas.

The elements, implemented in `arc.js`, `circle.js`, `group.js`, `line.js`, `oval.js`, `polygon.js`, `rectangle.js`, `text.js`, `webimage.js`, and `webvideo.js` all subclass `Thing`, which is implemented in `thing.js`.

Every element that subclasses `Thing` implements the `draw` method, which is invoked by the Graphics manager to draw the element. The single argument to the `draw` function is the 2d rendering context, which the element uses to draw itself onto the screen.
