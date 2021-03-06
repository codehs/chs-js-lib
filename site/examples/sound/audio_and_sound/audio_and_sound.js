let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// rooster sound from https://www.fesliyanstudios.com/royalty-free-sound-effects-download/rooster-chicken-259
const instructions = new Text('Press squares to play notes or sounds', '12pt Arial');
instructions.setAnchor({ vertical: 0.5, horizontal: 0.5 });
instructions.setPosition(getWidth() / 2, getHeight() / 4);
darkMode && instructions.setColor('white');
add(instructions);

const chickenSound = new Audio('https://codehs.com/uploads/27c456d459b009c6c7835c89b9ead6bb');

const cButton = new Rectangle(getWidth() / 2 - 10, 100);
cButton.setPosition(0, getHeight() / 2);
cButton.pitch = 'C4';
darkMode && cButton.setColor('white');

add(cButton);
const chickenButton = new Rectangle(getWidth() / 2 - 10, 100);
chickenButton.setPosition(getWidth() / 2, getHeight() / 2);
chickenButton.pitch = 'E4';
darkMode && chickenButton.setColor('white');
add(chickenButton);

mouseDownMethod(e => {
    const element = getElementAt(e.getX(), e.getY());
    if (element === cButton) {
        var sound = new Sound('C4', 'sine');
        sound.setVolume(2);
        sound.playFor(2);
    } else if (element === chickenButton) {
        if (chickenSound.paused) {
            chickenSound.play();
        } else {
            chickenSound.currentTime = 0;
        }
    }
});
