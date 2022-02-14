let countdownText = new Text('Full reset in 3...');
countdownText.setAnchor({ vertical: 0.5, horizontal: 0.5 });
countdownText.setPosition(getWidth() / 2, getHeight() / 2);
countdownText.setColor('white');
countdownText.layer = 2;
add(countdownText);

let timeToReset = 3;
setTimer(() => {
    timeToReset--;
    countdownText.setLabel(`Full reset in ${timeToReset}...`);

    if (timeToReset === 0) {
        fullReset();
    }
}, 1000);

setTimer(() => {
    let element = new Circle(20);
    element.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, getHeight()));
    element.setColor(Randomizer.nextColor());
    add(element);
}, 15);
