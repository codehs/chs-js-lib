const c1 = new Circle(20);
c1.setPosition(getWidth() / 4, getHeight() / 2);
c1.setAnchor({ vertical: 0, horizontal: 0 });
c1.setColor('blue');
c1.debug = true;
add(c1);

const c2 = new Circle(20);
c2.setPosition((2 * getWidth()) / 4, getHeight() / 2);
c2.setColor('blue');
c2.debug = true;
add(c2);

const c3 = new Circle(20);
c3.setPosition((3 * getWidth()) / 4, getHeight() / 2);
c3.setColor('blue');
c3.setAnchor({ vertical: 1, horizontal: 1 });
c3.debug = true;
add(c3);
