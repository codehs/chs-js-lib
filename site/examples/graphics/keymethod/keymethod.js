let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const t = new Text('Press a key to display its .key property');
t.setAnchor({ vertical: 0.5, horizontal: 0.5 });
t.setPosition(getWidth() / 2, getHeight() / 2);
add(t);

if (darkMode) {
    t.setColor('white');
}

keyDownMethod(e => {
    t.setLabel(e.key);
});
