let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

let color = darkMode ? 'yellow' : 'blue';
const r1 = new Rectangle(20, 20);
r1.setPosition(getWidth() / 4, getHeight() / 2);
r1.debug = true;
r1.setColor(color);
add(r1);

const r2 = new Rectangle(20, 20);
r2.setPosition((2 * getWidth()) / 4, getHeight() / 2);
r2.setAnchor({ vertical: 0.5, horizontal: 0.5 });
r2.debug = true;
r2.setColor(color);
add(r2);

const r3 = new Rectangle(20, 20);
r3.setPosition((3 * getWidth()) / 4, getHeight() / 2);
r3.setAnchor({ vertical: 1, horizontal: 1 });
r3.debug = true;
r3.setColor(color);
add(r3);
