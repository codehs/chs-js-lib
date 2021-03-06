let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
var grabbedImage;
var allImages = [];
let started = false;

function start() {
    started = true;
    // Try adding and filtering images
    var crossOrigin = new WebImage(
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Bl%C3%BCten_1.jpg/800px-Bl%C3%BCten_1.jpg'
    );
    crossOrigin.rotate(45);
    crossOrigin.setSize(100, 100);
    crossOrigin.setPosition(100, 100);
    add(crossOrigin);
    allImages.push(crossOrigin);

    mouseDownMethod(grabImage);
    mouseDragMethod(moveImage);
    mouseUpMethod(dropImage);
    setTimer(filterImages, 20);

    var rect = new Rectangle(100, 100);
    rect.setPosition(200, 350);
    rect.setColor(Color.green);
    add(rect);
}

function filterImages() {
    for (var i = 0; i < allImages.length; i++) {
        filter(allImages[i]);
        allImages[i].rotate(2);
    }
}

function grabImage(e) {
    grabbedImage = getElementAt(e.getX(), e.getY());
}

function moveImage(e) {
    if (grabbedImage) {
        var x = e.getX();
        var y = e.getY();
        grabbedImage.setPosition(x - grabbedImage.getWidth() / 2, y - grabbedImage.getHeight() / 2);
    }
}

function dropImage(e) {
    if (grabbedImage && grabbedImage instanceof WebImage) {
        filter(grabbedImage);
        grabbedImage.setSize(grabbedImage.getWidth() + 10, grabbedImage.getHeight() + 10);
    } else if (grabbedImage && grabbedImage instanceof Rectangle) {
        grabbedImage.setWidth(grabbedImage.getWidth() - 10);
        grabbedImage.setHeight(grabbedImage.getHeight() + 10);
    }
    grabbedImage = null;
}

function filter(img) {
    var randomRed = Randomizer.nextInt(0, 255);
    var randomGreen = Randomizer.nextInt(0, 255);
    for (var x = 0; x < img.getWidth(); x++) {
        for (var y = 0; y < img.getHeight(); y++) {
            var blue = img.getBlue(x, y);
            blue = (blue + 1) % 255;
            img.setBlue(x, y, blue);
            img.setGreen(x, y, randomGreen);
            img.setRed(x, y, randomRed);
        }
    }
}

(() => {
    const t = new Text(
        'Caution:\nThis example has flashing lights. Click to continue',
        '12pt Arial'
    );
    t.setColor(darkMode ? 'white' : 'black');
    t.setAnchor({ vertical: 0.5, horizontal: 0.5 });
    t.setPosition(getWidth() / 2, getHeight() / 2);
    add(t);

    mouseDownMethod(() => {
        remove(t);
        !started && start();
    });
})();
