const a1 = new Arc(20, 0, 350, Arc.DEGREES);
a1.setPosition(getWidth() / 4, getHeight() / 2);
a1.setAnchor({ vertical: 0, horizontal: 0 });
a1.setColor('blue');
a1.debug = true;
add(a1);

const a2 = new Arc(20, 0, 350, Arc.DEGREES);
a2.setPosition((2 * getWidth()) / 4, getHeight() / 2);
a2.setColor('blue');
a2.debug = true;
add(a2);

const a3 = new Arc(20, 0, 350, Arc.DEGREES);
a3.setPosition((3 * getWidth()) / 4, getHeight() / 2);
a3.setColor('blue');
a3.setAnchor({ vertical: 1, horizontal: 1 });
a3.debug = true;
add(a3);
