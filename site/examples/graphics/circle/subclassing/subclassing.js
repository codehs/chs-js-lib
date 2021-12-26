setBackgroundColor('gray');

let flakeID = 0;
class Snowflake extends Circle {
    theta = Randomizer.nextFloat(Math.PI * 2);
    dTheta = 0.04;

    constructor(x, y, dy) {
        super(Randomizer.nextInt(1, 3));
        this.id = flakeID++;
        this.startX = x;
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.color = 'white';
        setTimer(this.update, 50, {}, this.id);
    }

    update = () => {
        this.y += this.dy;
        const x = this.startX - (Math.sin(this.theta) * getWidth()) / 2;
        this.setPosition(x, this.y);

        this.theta += this.dTheta;

        if (this.y > getHeight()) {
            stopTimer(this.id);
            remove(this);
        }
    };
}

setTimer(() => {
    add(new Snowflake(Randomizer.nextInt(getWidth()), 0, Randomizer.nextInt(1, 3)));
}, 10);
