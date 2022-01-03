setBackgroundColor('white');

let origin = new Vector(getWidth() / 2, getHeight() / 2);
const radius = 50;

const secondHand = new Line(origin.x, origin.y, origin.x, origin.y - radius);
add(secondHand);
const minuteHand = new Line(origin.x, origin.y, origin.x, origin.y - radius);
add(minuteHand);
const hourHand = new Line(origin.x, origin.y, origin.x, origin.y - radius);
add(hourHand);

const secondHandVector = new Vector(0, -1).multiply(radius);
const minuteHandVector = new Vector(0, -1).multiply((2 * radius) / 3);
const hourHandVector = new Vector(0, -1).multiply((1 * radius) / 3);

const face = new Circle(radius);
face.setFilled(false);
face.setBorderWidth(2);
face.setPosition(origin.x, origin.y);
add(face);

let tickTime = 1000;
const tick = () => {
    const dAngleSeconds = 360 / 60;
    const dAngleMinutes = dAngleSeconds / 60;
    const dAngleHours = dAngleMinutes / 60;
    secondHandVector.rotate(dAngleSeconds);
    minuteHandVector.rotate(dAngleMinutes);
    hourHandVector.rotate(dAngleHours);

    secondHand.setEndpoint(origin.x + secondHandVector.x, origin.y + secondHandVector.y);
    minuteHand.setEndpoint(origin.x + minuteHandVector.x, origin.y + minuteHandVector.y);
    hourHand.setEndpoint(origin.x + hourHandVector.x, origin.y + hourHandVector.y);
    setTimeout(tick, tickTime);
};

setTimeout(tick, 1000);

const slider = document.createElement('input');
slider.id = 'tick-slider';
slider.type = 'range';
slider.min = 1;
slider.max = 50;
slider.step = 1;
slider.value = 1;
slider.addEventListener('change', () => {
    tickTime = 1000 / slider.value;
});
document.body.appendChild(slider);

const label = document.createElement('label');
label.for = 'tick-slider';
label.innerHTML = 'Clock speed (1x - 50x).';
document.body.appendChild(label);
