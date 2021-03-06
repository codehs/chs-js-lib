let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const gravity = 0.1;
class Ball extends Circle {
    constructor(x, y) {
        super(10);
        this.setPosition(x, y);
        this.velocity = {
            x: Randomizer.nextFloat(-2, 2),
            y: Randomizer.nextFloat(0, 1),
        };
        this.setColor(Randomizer.nextColor());
        add(this);
    }

    update() {
        this.y = Math.min(this.y, getHeight() - this.radius - 1);
        this.velocity.y += gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        if (this.y + this.radius >= getHeight()) {
            this.velocity.y = Randomizer.nextFloat(-2, -6);
        }
        if (this.x - this.radius < 0 || this.x + this.radius > getWidth()) {
            this.velocity.x *= -1;
        }
    }
}

class BouncingBox extends Rectangle {
    filled = true;
    hasBorder = false;
    constructor(x, y) {
        super(10, 10);
        this.setPosition(x, y);
        this.velocity = {
            x: Randomizer.nextFloat(-1, 1),
            y: Randomizer.nextFloat(0, 1),
        };
        this.setColor(Randomizer.nextColor());
        this.setRotation(Math.random() * 350);
        //this.setBorderColor(Randomizer.nextColor());
        add(this);
    }

    update() {
        this.y = Math.min(this.y, getHeight() - this.height - 1);
        this.velocity.y += gravity;
        this.x = this.x + this.velocity.x;
        this.y += this.velocity.y;
        if (this.y + this.height >= getHeight()) {
            this.velocity.y = Randomizer.nextFloat(-2, -8);
        }
        if (this.x - this.width < 0 || this.x + this.width > getWidth()) {
            this.velocity.x *= -1;
        }
    }
}

mouseMoveMethod(e => {
    for (let i = 100; i--; ) {
        new BouncingBox(e.getX(), e.getY());
    }
});

// library code
const debug = true;
let averageFPS = 0;
const fpsText = new Text(averageFPS);
const elementsLabel = new Text(0);
if (debug) {
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    fpsText.setAnchor({ vertical: 0, horizontal: 1 });
    fpsText.setPosition(getWidth(), 0);
    fpsText.setColor(darkMode ? 'white' : 'black');
    elementsLabel.setAnchor({ vertical: 0, horizontal: 1 });
    elementsLabel.setPosition(getWidth(), fpsText.height);
    elementsLabel.setColor(darkMode ? 'white' : 'black');
    add(fpsText);
    add(elementsLabel);
}

__graphics__.shouldUpdate = false;
let frameTimeBufferMS = 0;
let frameTimeLastMS = 0;
const frameRate = 60;

const lerp = (v, min, max) => {
    return min + v * (max - min);
};

const update = (frameTimeMS = 0) => {
    requestAnimationFrame(update);
    let frameTimeDeltaMS = frameTimeMS - frameTimeLastMS;
    frameTimeLastMS = frameTimeMS;
    frameTimeBufferMS = Math.min(frameTimeBufferMS + frameTimeDeltaMS, 50);
    let deltaSmooth = 0;
    if (frameTimeBufferMS < 0 && frameTimeBufferMS > -9) {
        // force an update each frame if time is close enough (not just a fast refresh rate)
        deltaSmooth = frameTimeBufferMS;
        frameTimeBufferMS = 0;
    }

    if (debug) {
        averageFPS = lerp(0.05, averageFPS, 1e3 / (frameTimeDeltaMS || 1));
        fpsText.setLabel(`fps: ${averageFPS.toFixed(1)}`);
        elementsLabel.setLabel(`elements: ${__graphics__.elementPool.length}`);
    }
    // update multiple frames if necessary in case of slow framerate
    for (; frameTimeBufferMS >= 0; frameTimeBufferMS -= 1e3 / frameRate) {
        __graphics__.elementPool.forEach(element => {
            if (element.alive) {
                element.update?.();
            }
        });
    }
    frameTimeBufferMS += deltaSmooth;

    __graphics__.redraw();
};

update();
