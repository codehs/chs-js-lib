setBackgroundColor('gray');

let flakeID = 0;
class Snowflake {
    theta = Randomizer.nextFloat(Math.PI * 2);
    dTheta = 0.04;

    constructor(x, y, dy) {
        this.id = flakeID++;
        this.x = x;
        this.y = y;
        this.dy = dy;

        this.shape = new Circle(Randomizer.nextInt(1, 3));
        this.shape.setColor('white');
        this.shape.setPosition(x, y);
        add(this.shape);
        setTimer(this.update, 50, {}, this.id);
    }

    update = () => {
        this.y += this.dy;
        const x = this.x - (Math.sin(this.theta) * getWidth()) / 2;
        this.shape.setPosition(x, this.y);

        this.theta += this.dTheta;

        if (this.y > getHeight()) {
            stopTimer(this.id);
            remove(this.shape);
        }
    };
}

setTimer(() => {
    new Snowflake(Randomizer.nextInt(getWidth()), 0, Randomizer.nextInt(1, 3));
}, 10);
