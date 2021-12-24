---
title: Text - Anchor
layout: example
code: anchor.js
width: 500
height: 500
---

These four `Text` objects are all anchored differently:

-   Top/Left - `{vertical: 0, horizontal: 0}`
-   Top/Right - `{vertical: 0, horizontal: 1}`
-   Center/Center - `{vertical: 0.5, horizontal: 0.5}`
-   Bottom/Left - `{vertical: 1, horizontal: 0}` (default)

Anchors are set with `setAnchor({vertical: x, horizontal: y})`. The `Text` objects are in debug mode (`.debug = true`) so you can see the position of their origin (small red dot) relative to the `Text`.
