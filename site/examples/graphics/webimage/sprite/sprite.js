class Sprite extends Thing {
    constructor(options) {
        super();
        options = {
            spriteSheetURL: 'https://codehs.com/uploads/72e9b6f60ac412f32a2fd3a955990c3b',
            spriteWidth: 13,
            spriteHeight: 14,
            nRows: 2,
            nCols: 3,
            borderWidth: 1,
            spacingWidth: 1,
            scale: 5,
            x: 0,
            y: 0,
            ...options,
        };
        this.x = options.x;
        this.y = options.y;
        this.frames = [];
        this.animations = {};
        this.activeAnimationStep = 0;
        this.spriteWidth = options.spriteWidth;
        this.spriteHeight = options.spriteHeight;
        this.nRows = options.nRows;
        this.nCols = options.nCols;
        this.borderWidth = options.borderWidth;
        this.spacingWidth = options.spacingWidth;
        this.scale = options.scale;
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.spriteWidth * this.scale;
        this.canvas.height = this.spriteHeight * this.scale;
        this.canvas.style.display = 'none';
        document.body.appendChild(this.canvas);

        this.context = this.canvas.getContext('2d');
        this.context.imageSmoothingEnabled = false;
        this.context.scale(this.scale, this.scale);
        const spriteSheetImage = new Image();
        spriteSheetImage.src = options.spriteSheetURL;
        spriteSheetImage.crossOrigin = true;
        spriteSheetImage.onload = () => {
            for (let row = 0; row < this.nRows; row++) {
                for (let col = 0; col < this.nCols; col++) {
                    const spriteWebImage = new WebImage('');
                    spriteWebImage.width = this.spriteWidth * this.scale;
                    spriteWebImage.height = this.spriteHeight * this.scale;
                    spriteWebImage.setPosition(getWidth() / 2, getHeight() / 2);
                    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    const sourceImagePosition = this.spritePositionToImagePosition(row, col);
                    this.context.drawImage(
                        spriteSheetImage,
                        sourceImagePosition.x,
                        sourceImagePosition.y,
                        this.spriteWidth,
                        this.spriteHeight,
                        0,
                        0,
                        this.spriteWidth,
                        this.spriteHeight
                    );
                    spriteWebImage.setImageData(
                        this.context.getImageData(
                            0,
                            0,
                            this.spriteWidth * this.scale,
                            this.spriteHeight * this.scale
                        )
                    );
                    this.frames.push(spriteWebImage);
                }
                this.activeFrame = this.frames[0];
            }
            this.ready();
            this.initialized = true;
        };
    }

    ready() {
        if (typeof this.ready === 'function') {
            this.onReady(this);
        }
    }

    onReady(handler) {
        this.onReady = handler;
    }

    spritePositionToImagePosition(row, col) {
        return {
            x: this.borderWidth + col * (this.spacingWidth + this.spriteWidth),
            y: this.borderWidth + row * (this.spacingWidth + this.spriteHeight),
        };
    }

    draw() {
        this.activeFrame.draw.apply(this.activeFrame, arguments);
    }

    focus() {
        this.frames.forEach(f => f.focus());
    }

    unfocus() {
        this.frames.forEach(f => f.unfocus());
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
        this.activeFrame.setPosition.apply(this.activeFrame, arguments);
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
        this.activeFrame.move.apply(this.activeFrame, arguments);
    }

    addAnimation(options) {
        options = Object.assign(
            {
                name: 'idle',
                frameIndices: [0],
                timePerFrame: 250,
                onEnd: 'repeat',
            },
            options
        );
        this.animations[options.name] = {
            frameIndices: options.frameIndices,
            timePerFrame: options.timePerFrame,
            onEnd: options.onEnd,
        };
    }

    animate(animationName, smoothStep) {
        var animation = this.animations[animationName];
        if (animation === undefined) {
            return;
        }
        this.activeAnimation = animation;
        this.activeAnimationStep =
            smoothStep && this.activeAnimationStep < this.activeAnimation.frameIndices.length
                ? this.activeAnimationStep
                : 0;
        var frameIndex = animation.frameIndices[this.activeAnimationStep];
        this.clearAnimation();
        this.advanceFrame();
        this.activeAnimationID = setInterval(
            function () {
                this.advanceFrame();
            }.bind(this),
            animation.timePerFrame
        );
    }

    advanceFrame() {
        if (this.activeAnimationStep >= this.activeAnimation.frameIndices.length) {
            if (this.activeAnimation.onEnd === 'repeat') {
                this.activeAnimationStep = 0;
            } else {
                this.clearAnimation();
            }
        }
        const frameIndex = this.activeAnimation.frameIndices[this.activeAnimationStep];
        const frame = this.frames[frameIndex];
        frame.x = this.x;
        frame.y = this.y;
        this.activeFrame = frame;
        this.activeAnimationStep += 1;
    }

    setFrame(frameIndex) {
        this.activeFrame = this.frames[frameIndex];
    }

    clearAnimation() {
        clearInterval(this.activeAnimationID);
        this.activeAnimationID = -1;
    }
}

const sprite = new Sprite({
    spriteSheetURL: 'https://codehs.com/uploads/72e9b6f60ac412f32a2fd3a955990c3b',
    nRows: 2,
    nCols: 3,
    spriteWidth: 13,
    spriteHeight: 14,
    borderWidth: 1,
    spacingWidth: 1,
    x: getWidth() / 2,
    y: getHeight() / 2,
});

var v1 = 1;
sprite.onReady(function () {
    add(sprite);
    sprite.addAnimation({
        name: 'walkright',
        frameIndices: [0, 1, 2, 1],
    });
    sprite.addAnimation({
        name: 'walkleft',
        frameIndices: [3, 4, 5, 4],
    });

    sprite.animate('walkright');

    setInterval(function () {
        if (sprite.activeFrame.x + sprite.activeFrame.width > getWidth()) {
            v1 = -1;
            sprite.animate('walkleft', true);
        }
        if (sprite.activeFrame.x <= 0) {
            v1 = 1;
            sprite.animate('walkright', true);
        }
        sprite.move(v1, 0);
    }, 10);
});

const sprite2 = new Sprite({
    spriteSheetURL: 'https://codehs.com/uploads/72e9b6f60ac412f32a2fd3a955990c3b',
    nRows: 2,
    nCols: 3,
    spriteWidth: 13,
    spriteHeight: 14,
    borderWidth: 1,
    spacingWidth: 1,
    x: 0,
    y: getHeight() - 60,
});

let v2 = 1;
sprite2.onReady(function () {
    add(sprite2);
    sprite2.addAnimation({
        name: 'walkright',
        frameIndices: [0, 1, 2, 1],
    });
    sprite2.addAnimation({
        name: 'walkleft',
        frameIndices: [3, 4, 5, 4],
    });

    sprite2.animate('walkright');

    setInterval(function () {
        if (sprite2.activeFrame.x + sprite2.activeFrame.width >= getWidth()) {
            v2 = -1;
            sprite2.animate('walkleft', true);
        }
        if (sprite2.activeFrame.x <= 0) {
            v2 = 1;
            sprite2.animate('walkright', true);
        }
        sprite2.move(v2, 0);
    }, 10);
});
