let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
let color = darkMode ? 'white' : 'black';

var t = new Text('Bottom/Left');
t.setColor(color);
add(t);
t.setPosition(5, getHeight() - 5);
t.debug = true;

var t = new Text('Top/Left');
t.setAnchor({ horizontal: 0, vertical: 0 });
t.setColor(color);
add(t);
t.setPosition(5, 5);
t.debug = true;

var t = new Text('Top/Right');
t.setAnchor({ horizontal: 1, vertical: 0 });
t.setColor(color);
add(t);
t.setPosition(getWidth() - 5, 5);
t.debug = true;

var t = new Text('Center/Center');
t.setAnchor({ horizontal: 0.5, vertical: 0.5 });
t.setColor(color);
add(t);
t.setPosition(getWidth() / 2, getHeight() / 2);
t.debug = true;

document.querySelector('canvas').style.border = `1px solid ${color}`;
