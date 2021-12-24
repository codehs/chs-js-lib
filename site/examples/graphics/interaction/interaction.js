let label;
let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
label = new Text('Hello!');
if (darkMode) {
    label.setColor('white');
}
label.setAnchor({ vertical: 0, horizontal: 0 });
add(label);
mouseMoveMethod(e => {
    label.setText(`(${e.getX()}, ${e.getY()})`);
});
