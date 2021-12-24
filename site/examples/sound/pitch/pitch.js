const instructions = new Text('Press squares to play notes', '12pt Arial', {
    vertical: 'center',
    horizontal: 'center',
});
instructions.setPosition(getWidth() / 2, getHeight() / 4);
add(instructions);
const cButton = new Rectangle(getWidth() / 3 - 10, 100);
cButton.setPosition(0, getHeight() / 2);
cButton.pitch = 'C4';
add(cButton);
const eButton = new Rectangle(getWidth() / 3 - 10, 100);
eButton.setPosition(getWidth() / 3, getHeight() / 2);
eButton.pitch = 'E4';
add(eButton);
const gButton = new Rectangle(getWidth() / 3 - 10, 100);
gButton.setPosition((2 * getWidth()) / 3, getHeight() / 2);
gButton.pitch = 'G4';
add(gButton);

mouseDownMethod(e => {
    const pitch = getElementAt(e.getX(), e.getY()).pitch;
    if (!pitch) {
        return;
    }
    // Construct a new Sound with a given note and sound wave type
    var sound = new Sound(pitch, 'sine');

    // Set the volume (in decibels)
    sound.setVolume(2);

    // Play the sound for 3 seconds
    sound.playFor(2);
});
