/**
 * Generic class. TODO docs.
 */
class Thing {
    static DEGREES = 0;
    static RADIANS = 1;

    /**
     * Constructs a new Thing.
     */
    constructor() {
        this.alive = true;
        this.x = 0;
        this.y = 0;
        this.color = '#000000';
        this.stroke = '#000000';
        this.lineWidth = 1;
        this.filled = true;
        this.hasBorder = false;
        this.rotation = 0;
    }

    /**
     * Sets a Thing object to filled.
     * Throws an error if an argument is not passed.
     *
     * @param {bool} filled - A boolean of whether or not Thing is filled.
     */
    setFilled(filled) {
        if (arguments.length !== 1) {
            throw new Error(
                'You should pass exactly 1 argument to ' + '<span class="code">setFilled</span>',
            );
        }
        if (typeof filled !== 'boolean') {
            throw new Error(
                'Invalid value passed to <span class="code">' +
                    'setFilled</span>. Make sure you are passing a ' +
                    'boolean value.',
            );
        }
        this.filled = filled;
    }
    /**
     * Returns if a Thing is filled.
     *
     * @return {boolean} True if the Thing is filled.
     */
    isFilled() {
        return this.filled;
    }

    /**
     * Sets a Thing object to filled.
     * Throws an error if an argument is not passed.
     *
     * @param {bool} hasBorder - A boolean of whether or not Thing has a border.
     */
    setBorder(hasBorder) {
        if (arguments.length !== 1) {
            throw new Error(
                'You should pass exactly 1 argument to <span class=' + '"code">setBorder</span>',
            );
        }
        if (typeof hasBorder !== 'boolean') {
            throw new Error(
                'Invalid value passed to <span class="code">' +
                    'setBorder</span>. Make sure you are passing a ' +
                    'boolean value.',
            );
        }
        this.hasBorder = hasBorder;
    }

    /**
     * Returns if a Thing has a border.
     *
     * @return {boolean} True if the Thing has a border.
     */
    hasBorder() {
        return this.hasBorder;
    }

    /**
     * Sets a Thing object's type.
     * Questionable of whether or not this method is used.
     *
     * @param {type} type - A type to set the Thing to.
     */
    setType(type) {
        if (arguments.length !== 1) {
            throw new Error(
                'You should pass exactly 1 argument to <span ' + 'class="code">setType</span>',
            );
        }
        this.type = type;
    }

    /**
     * Returns the type of a Thing.
     *
     * @return {type} The type of the Thing.
     */
    getType() {
        return this.type;
    }

    /**
     * Sets the position of a Thing.
     * Throws an error if there are fewer than 2 params or if
     * they are not numbers.
     *
     * @param {number} x - The destination x coordinate of this Thing.
     * @param {number} y - The destination y coordinate of this Thing.
     */
    setPosition(x, y) {
        if (arguments.length !== 2) {
            throw new Error(
                'You should pass exactly 2 arguments to <span ' +
                    'class="code">setPosition(x, y)</span>',
            );
        }
        if (typeof x !== 'number' || !isFinite(x)) {
            throw new TypeError(
                'Invalid value for x-coordinate. ' +
                    'Make sure you are passing finite numbers to <span ' +
                    'class="code">setPosition(x, y)</span>. Did you ' +
                    'forget the parentheses in <span class="code">getWidth()</span> ' +
                    'or <span class="code">getHeight()</span>? Or did you perform a ' +
                    'calculation on a variable that is not a number?',
            );
        }
        if (typeof y !== 'number' || !isFinite(y)) {
            throw new TypeError(
                'Invalid value for y-coordinate. ' +
                    'Make sure you are passing finite numbers to <span ' +
                    'class="code">setPosition(x, y)</span>. Did you ' +
                    'forget the parentheses in <span class="code">getWidth()</span> ' +
                    'or <span class="code">getHeight()</span>? Or did you perform a ' +
                    'calculation on a variable that is not a number?',
            );
        }
        this.x = x;
        this.y = y;
    }

    /**
     * Sets the rotation of a Thing in degrees.
     * Throws an error if there are fewer than 1 params or if they
     * are not numbers.
     *
     * @param {number} degrees - The degrees to rotate degrees.
     * @param {number} angleUnit - Whether it is degrees or radians. Defaults to
     *                             degrees.
     */
    setRotation(degrees, angleUnit) {
        if (arguments.length < 1 || arguments.length > 2) {
            throw new Error(
                'You should pass 1 or 2 arguments to <span ' +
                    'class="code">setRotation(degrees, angleUnit)</span>',
            );
        }
        if (typeof degrees !== 'number' || !isFinite(degrees)) {
            throw new TypeError(
                'Invalid value for degrees. ' +
                    'Make sure you are passing finite numbers to <span ' +
                    'class="code">setRotation(degrees, angleUnit)</span>. Did you ' +
                    'perform a calculation on a variable that is not a number?',
            );
        }
        if (!angleUnit) {
            angleUnit = Thing.DEGREES;
        }
        if (typeof angleUnit !== 'number' || !isFinite(angleUnit)) {
            throw new TypeError(
                'Invalid value for <span class="code">angleUnit' +
                    '</span>. Make sure you are passing finite numbers to <span ' +
                    'class="code">setRotation(degrees, angleUnit)</span>',
            );
        }
        if (angleUnit == Thing.DEGREES) {
            this.rotation = (degrees * Math.PI) / 180;
        } else {
            this.rotation = degrees;
        }
    }

    /**
     * Rotates a Thing an additional amount of degrees.
     *
     * @param {number} degrees - The degrees to rotate degrees.
     * @param {number} angleUnit - Whether it is degrees or radians. Defaults to
     *                             degrees.
     */
    rotate(degrees, angleUnit) {
        if (arguments.length < 1 || arguments.length > 2) {
            throw new Error(
                'You should pass exactly 1 argument to <span ' +
                    'class="code">rotate(degrees, angleUnit)</span>',
            );
        }
        if (typeof degrees !== 'number' || !isFinite(degrees)) {
            throw new TypeError(
                'Invalid value for degrees. ' +
                    'Make sure you are passing finite numbers to <span ' +
                    'class="code">rotate(degrees, angleUnit)</span>. Did you perform ' +
                    'a calculation on a variable that is not a number?',
            );
        }
        if (!angleUnit) {
            angleUnit = Thing.DEGREES;
        }
        if (typeof angleUnit !== 'number' || !isFinite(angleUnit)) {
            throw new TypeError(
                'Invalid value for <span class="code">angleUnit' +
                    '</span>. Make sure you are passing finite numbers to <span ' +
                    'class="code">rotate(degrees, angleUnit)</span>',
            );
        }
        if (angleUnit == Thing.DEGREES) {
            this.rotation += (degrees * Math.PI) / 180;
        } else {
            this.rotation += degrees;
        }
    }

    /**
     * Sets the color of a Thing.
     * Throws an error if there are fewer than 1 params or if
     * the param is undefined.
     *
     * @param {Color} color - The resulting color of Thing.
     */
    setColor(color) {
        if (arguments.length !== 1) {
            throw new Error(
                'You should pass exactly 1 argument to <span ' + 'class="code">setColor</span>',
            );
        }
        if (color === undefined) {
            throw new TypeError('Invalid color');
        }
        this.color = color;
    }

    /**
     * Gets the color of a Thing.
     *
     * @return {Color} The destination y coordinate of this Thing.
     */
    getColor() {
        return this.color;
    }

    /**
     * Sets the border color of a Thing.
     * Throws an error if there are fewer than 1 params or if
     * the param is undefined.
     *
     * @param {Color} color - The resulting color of the Thing's border.
     */
    setBorderColor(color) {
        if (arguments.length !== 1) {
            throw new Error(
                'You should pass exactly 1 argument to <span ' +
                    'class="code">setBorderColor</span>',
            );
        }
        if (color === undefined) {
            throw new TypeError('Invalid color.');
        }
        this.stroke = color;
        this.hasBorder = true;
    }

    /**
     * Gets the border color of a Thing.
     *
     * @return {Color} The color of the Thing's border.
     */
    getBorderColor() {
        return this.stroke;
    }

    /**
     * Sets the width of a Thing's border.
     * Throws an error if there is not 1 argument.
     *
     * @param {number} width - The resulting width of the Thing's border.
     */
    setBorderWidth(width) {
        if (arguments.length !== 1) {
            throw new Error(
                'You should pass exactly 1 argument to <span ' +
                    'class="code">setBorderWidth</span>',
            );
        }
        if (typeof width !== 'number' || !isFinite(width)) {
            throw new Error(
                'Invalid value for border width. Make sure you are ' +
                    'passing a finite number to <span class="code">' +
                    'setBorderWidth</span>',
            );
        }
        this.lineWidth = width;
        this.hasBorder = true;
    }

    /**
     * Gets the width of the Thing's border.
     *
     * @return {number} The width of the Thing's border.
     */
    getBorderWidth() {
        return this.lineWidth;
    }

    /**
     * Changes the possition of a thing by a specified x and y amount.
     *
     * @param {number} dx - The resulting change in the Thing's x position.
     * @param {number} dy - The resulting change in the Thing's y position.
     */
    move(dx, dy) {
        if (arguments.length !== 2) {
            throw new Error(
                'You should pass exactly 2 arguments to <span ' + 'class="code">move</span>',
            );
        }
        if (typeof dx !== 'number' || !isFinite(dx)) {
            throw new TypeError(
                'Invalid number passed for <span class="code">' +
                    'dx</span>. Make sure you are passing finite numbers to <span ' +
                    'class="code">move(dx, dy)</span>',
            );
        }
        if (typeof dy !== 'number' || !isFinite(dy)) {
            throw new TypeError(
                'Invalid number passed for <span class="code">' +
                    'dy</span>. Make sure you are passing finite numbers to <span ' +
                    'class="code">move(dx, dy)</span>',
            );
        }
        this.x += dx;
        this.y += dy;
    }

    /**
     * Gets the x position of the Thing.
     *
     * @return {number} The x position of the Thing.
     */
    getX() {
        return this.x;
    }

    /**
     * Gets the y position of the Thing.
     *
     * @return {number} The y position of the Thing.
     */
    getY() {
        return this.y;
    }

    /**
     * This function is overridden in subclasses of Thing.
     */
    draw() {}

    /**
     * Check if a given point is within the Thing.
     * This function only works in subclasses of Thing.
     *
     * @param {number} x - The x coordinate of the point being checked.
     * @param {number} y - The y coordinate of the point being checked.
     * @return {boolean} Whether the point x, y is within the Thing.
     */
    containsPoint(x, y) {
        return false;
    }
}

/**
 * Get the distance between two points, (x1, y1) and (x2, y2)
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {number} Distance between the two points.
 */
const getDistance = function(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

/**
 * @namespace Arc
 */

/**
 * Arc class. TODO docs
 */
class Arc extends Thing {
    static COUNTER_CLOCKWISE = true;
    static CLOCKWISE = false;
    static DEGREES = 0;
    static RADIANS = 1;

    /**
     * @class Arc
     * @augments Thing
     * @param {number} radius - Desired radius of the arc.
     * @param {number} startAngle - Start angle of the arc.
     * @param {number} endAngle - End angle of the arc.
     * @param {number} angleUnit - Integer representing unit.
     * Degrees ===0, Radians ===1
     */
    constructor(radius, startAngle, endAngle, angleUnit) {
        super();
        if (arguments.length !== 4) {
            throw new Error(
                'You should pass exactly 4 arguments to <span ' +
                    'class="code">new Arc(raduis, startAngle, endAngle, ' +
                    'angleUnit)</span>',
            );
        }
        if (typeof radius !== 'number' || !isFinite(radius)) {
            throw new TypeError(
                'Invalid value for <span class="code">radius' +
                    '</span>. Make sure you are passing finite numbers to <span ' +
                    'class="code">new Arc(raduis, startAngle, endAngle, ' +
                    'angleUnit)</span>',
            );
        }
        if (typeof startAngle !== 'number' || !isFinite(startAngle)) {
            throw new TypeError(
                'Invalid value for <span class="code">startAngle' +
                    '</span>. Make sure you are passing finite numbers to <span ' +
                    'class="code">new Arc(raduis, startAngle, endAngle, ' +
                    'angleUnit)</span>',
            );
        }
        if (typeof endAngle !== 'number' || !isFinite(endAngle)) {
            throw new TypeError(
                'Invalid value for <span class="code">endAngle' +
                    '</span>. Make sure you are passing finite numbers to <span ' +
                    'class="code">new Arc(raduis, startAngle, endAngle, ' +
                    'angleUnit)</span>',
            );
        }
        if (typeof angleUnit !== 'number' || !isFinite(angleUnit)) {
            throw new TypeError(
                'Invalid value for <span class="code">angleUnit' +
                    '</span>. Make sure you are passing finite numbers to <span ' +
                    'class="code">new Arc(raduis, startAngle, endAngle, ' +
                    'angleUnit)</span>',
            );
        }

        Thing.call(this);

        this.radius = radius;
        this.angleUnit = angleUnit == Arc.DEGREES ? Arc.DEGREES : Arc.RADIANS;

        this.counterclockwise = Arc.COUNTER_CLOCKWISE;
        this.type = 'Arc';

        if (this.angleUnit == Arc.DEGREES) {
            startAngle = degreesToRadians(startAngle);
            endAngle = degreesToRadians(endAngle);
        }

        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }

    /**
     * Draws the arc in the canvas.
     *
     * @param {CodeHSGraphics} __graphics__ - Instance of the __graphics__ module.
     */
    draw(__graphics__) {
        var context = __graphics__.getContext();
        // http://stackoverflow.com/questions/17125632/html5-canvas-rotate-object-without-moving-coordinates
        context.save();
        context.beginPath();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.arc(
            0,
            0,
            this.radius,
            prepareAngle(this.startAngle),
            prepareAngle(this.endAngle),
            this.counterclockwise,
        );
        context.lineTo(0, 0);

        if (this.hasBorder) {
            context.lineWidth = this.lineWidth;
            context.strokeStyle = this.stroke.toString();
            context.stroke();
        }

        context.fillStyle = this.color.toString();
        context.fill();
        context.restore();
    }

    /**
     * Sets the starting angle of the arc.
     * Note: All angles are stored in radians, so we must first convert
     * to radians (if the unit is degrees) before storing the new angle.
     * @param {number} angle - The desired start angle of the arc.
     */
    setStartAngle(angle) {
        if (arguments.length !== 1) {
            throw new Error(
                'You should pass exactly 1 argument to ' +
                    '<span class="code">setStartAngle</span>',
            );
        }
        if (typeof angle !== 'number' || !isFinite(angle)) {
            throw new Error(
                'Invalid value passed to <span class="code">' +
                    'setStartAngle</span>. Make sure you are passing a ' +
                    'finite number.',
            );
        }
        if (this.angleUnit == Arc.DEGREES) {
            angle = degreesToRadians(angle);
        }
        this.startAngle = angle;
    }

    /**
     * Sets the ending angle of the arc.
     * Note: All angles are stored in radians, so we must first convert
     * to radians (if the unit is degrees) before storing the new angle.
     * @param {number} angle - The desired end angle of the arc.
     */
    setEndAngle(angle) {
        if (arguments.length !== 1) {
            throw new Error(
                'You should pass exactly 1 argument to ' + '<span class="code">setEndAngle</span>',
            );
        }
        if (typeof angle !== 'number' || !isFinite(angle)) {
            throw new Error(
                'Invalid value passed to <span class="code">' +
                    'setEndAngle</span>. Make sure you are passing a ' +
                    'finite number.',
            );
        }
        if (this.angleUnit == Arc.DEGREES) {
            angle = degreesToRadians(angle);
        }
        this.endAngle = angle;
    }

    /**
     * Gets the starting angle of the arc.
     * @return {number} The start angle of the arc.
     */
    getStartAngle() {
        var angle = this.startAngle;
        if (this.angleUnit == Arc.DEGREES) {
            angle = radiansToDegrees(this.startAngle);
        }

        return Math.round(angle);
    }

    /**
     * Gets the starting angle of the arc.
     * @return {number} The start angle of the arc.
     */
    getEndAngle() {
        var angle = this.endAngle;
        if (this.angleUnit == Arc.DEGREES) {
            angle = radiansToDegrees(this.endAngle);
        }
        return Math.round(angle);
    }

    /**
     * Gets the direction of the arc (CW or CCW).
     * @param {boolean} val - Boolean representing CW or CCW.
     * `True` sets counterclockwise to true.
     */
    setDirection(val) {
        if (arguments.length !== 1) {
            throw new Error(
                'You should pass exactly 1 argument to ' + '<span class="code">setDirection</span>',
            );
        }
        if (typeof val !== 'boolean') {
            throw new Error(
                'Invalid value passed to <span class="code">' +
                    'setDirection</span>. Make sure you are passing a ' +
                    'boolean value. true for counterclockwise, false for clockwise.',
            );
        }
        this.counterclockwise = val;
    }

    /**
     * Checks if a given point is contained within the arc. We always fill the arc
     * so it is technically a segment of the circle
     *
     * @param {number} x - x coordinate of the point being tested.
     * @param {number} y - y coordinate of the point being tested.
     * @return {boolean}
     */
    containsPoint(x, y) {
        // First check whether the point is in the circle
        var dist = getDistance(this.x, this.y, x, y);
        if (dist > this.radius) {
            return false;
        }

        // Get vector/ angle for the point
        var vx = x - this.x;
        var vy = this.y - y;
        var theta = Math.atan(vy / vx);

        // Adjust the arctan based on the quadran the point is in using the
        // position of the arc as the origin
        // Quadrant II and III
        if (vx < 0) {
            theta += Math.PI;
            // Quadrant IV
        } else if (vy < 0) {
            theta += 2 * Math.PI;
        }

        // Check whether angle is between start and end, take into account fill
        // direction
        var betweenCCW = theta >= this.startAngle && theta <= this.endAngle;
        if (this.counterclockwise) {
            return betweenCCW;
        } else {
            return !betweenCCW;
        }
    }
}

/**
 * Prepares an angle to be drawn.
 *
 * @memberof Arc
 * @param {number} angle - The angle to be prepared.
 * @return {number} The prepared angle.
 */
const prepareAngle = function (angle) {
    // First, convert to degrees (may lose some accuracy)
    angle = radiansToDegrees(angle);
    angle = Math.round(angle);

    // The canvas arc angles go clockwise, but we want them
    // to go counterclockwise (like the unit circle). Here,
    // we adjust the angle for that.
    angle = (360 - angle) % 360;
    angle = degreesToRadians(angle);

    return angle;
};

/**
 * Helper to convert degrees to radians.
 *
 * @memberof Arc
 * @param {number} angleInDegrees - The angle represented as degrees.
 * @return {number} The angle represented as radians.
 */
const degreesToRadians = function (angleInDegrees) {
    return (angleInDegrees / 180) * Math.PI;
};

/**
 * Helper to convert radians to degrees.
 *
 * @memberof Arc
 * @param {number} angleInRadians - The angle represented as radians.
 * @return {number} The angle represented as degrees.
 */
const radiansToDegrees = function (angleInRadians) {
    return (angleInRadians / Math.PI) * 180;
};

/**
 * @module Randomizer
 */

/**
 * Get a random integer between low to high, inclusive.
 * If only one parameter is given, a random integer
 * from (0, low-1) inclusive.
 * @param {number} low - Lower bound on range of random int.
 * @param {number} high - Upper bound on range of random int.
 * @returns {number} Random number between low and high, inclusive.
 */
const nextInt = function (low, high) {
    if (typeof high == 'undefined') {
        high = low - 1;
        low = 0;
    }

    low = Math.floor(low);
    var r = Math.random();
    return low + Math.floor(r * (high - low + 1));
};

/**
 * Generates a random number in range (0,255) in hexadecimal.
 * @returns {string} Random number in hexadecimal form.
 */
const nextHex = function () {
    var val = nextInt(0, 255);
    if (val < 16) return '0' + val.toString(16);
    return val.toString(16);
};

/**
 * Generate a random hexadecimal color code of the format #RRGGBB.
 * @returns {string} Hexadecimal representation of random color.
 */
const nextColor = function () {
    var r = nextHex();
    var g = nextHex();
    var b = nextHex();
    return '#' + r + g + b;
};

/**
 * @class Color
 * @param {number} r - Red value.
 * @param {number} g - Green value.
 * @param {number} b - Blue value.
 */
class Color {
    static random = nextColor;
    static red = '#FF0000';
    static RED = '#FF0000';
    static green = '#00FF00';
    static GREEN = '#00FF00';
    static blue = '#0000FF';
    static BLUE = '#0000FF';
    static yellow = '#FFFF00';
    static YELLOW = '#FFFF00';
    static cyan = '#00FFFF';
    static CYAN = '#00FFFF';
    static orange = '#FFA500';
    static ORANGE = '#FFA500';
    static white = '#FFFFFF';
    static WHITE = '#FFFFFF';
    static black = '#000000';
    static BLACK = '#000000';
    static gray = '#cccccc';
    static GRAY = '#cccccc';
    static grey = '#cccccc';
    static GREY = '#cccccc';
    static purple = '#9B30FF';
    static PURPLE = '#9B30FF';

    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    /**
     * Generate a hex representation of the color.
     * @returns {string}
     */
    toString() {
        return Color.createFromRGB(this.r, this.g, this.b);
    }

    /**
     * Create a hex color from RGB values.
     *
     * @param {number} r - Red value.
     * @param {number} g - Green value.
     * @param {number} b - Blue value .
     * @returns {string}
     */
    static createFromRGB(r, g, b) {
        return getColor(r, g, b);
    }

    /**
     * Generate a random red value.
     *
     * @returns {string} Hex representation of random red color.
     */
    static randomRed() {
        var r = nextInt(50, 255);
        return Color.createFromRGB(r, 0, 0);
    }

    /**
     * Generate a random green value.
     *
     * @returns {string} Hex representation of random green color.
     */
    static randomGreen() {
        var g = nextInt(50, 255);
        return Color.createFromRGB(0, g, 0);
    }

    /**
     * Generate a random blue value.
     *
     * @returns {string} Hex representation of random blue color.
     */
    static randomBlue() {
        var b = nextInt(50, 255);
        return Color.createFromRGB(0, 0, b);
    }

    /**
     * Creates a hex color string from a (r,g,b) value as well
     * as a lightness value l from [0, 1]. To do this we convert
     * the rgb color to hsl. Then we modify the l, take it back to
     * rgb, and then convert to a color string.
     *
     * @param {number} r - The red color value.
     * @param {number} g - The green color value.
     * @param {number} b - The blue color value.
     * @param {number} l - The lightness value [0,1].
     * @returns {string} The hex color string.
     */
    static createFromRGBL(r, g, b, l) {
        var hsl = Color.rgbToHsl(r, g, b);

        if (l < 0) {
            l = 0;
        }
        if (l > 1) {
            l = 1;
        }

        var rgb = Color.hslToRgb(hsl[0], hsl[1], l);
        return Color.createFromRGB(rgb[0], rgb[1], rgb[2]);
    }

    /**
     * Converts an RGB color value to HSL. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes r, g, and b are contained in the set [0, 255] and
     * returns h, s, and l in the set [0, 1].
     *
     * @param {number} r - The red color value.
     * @param {number} g - The green color value.
     * @param {number} b - The blue color value.
     * @returns {array} The HSL representation.
     */
    static rgbToHsl(r, g, b) {
        (r /= 255), (g /= 255), (b /= 255);
        var max = Math.max(r, g, b),
            min = Math.min(r, g, b);
        var h,
            s,
            l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }

        return [h, s, l];
    }

    /**
     * Converts an HSL color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes h, s, and l are contained in the set [0, 1] and
     * returns r, g, and b in the set [0, 255].
     *
     * @param {number} h - The hue.
     * @param {number} s - The saturation.
     * @param {number} l - The lightness.
     * @returns {object} The RGB representation.
     */
    static hslToRgb(h, s, l) {
        var r, g, b;

        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return [r * 255, g * 255, b * 255];
    }

    /**
     * Generate the average of two hex colors.
     *
     * @param {string} colorOne - First hex color.
     * @param {string} colorTwo - Second hex color.
     * @returns {string} Averaged hex color.
     */
    static average(colorOne, colorTwo) {
        // functions for converting to/from hex/dec
        function getHex(num) {
            return num.toString(16);
        }
        function getDec(hex) {
            return parseInt(hex, 16);
        }

        var componentRegEx = /[\da-z]{2}/gi;

        var componentsOne = colorOne.match(componentRegEx);
        var componentsTwo = colorTwo.match(componentRegEx);

        var averageHex = '#';
        var colorOneComponent;
        var colorTwoComponent;
        var averageDec;
        var h;
        for (var i = 0; i < componentsOne.length; i++) {
            colorOneComponent = getDec(componentsOne[i]);
            colorTwoComponent = getDec(componentsTwo[i]);
            averageDec = Math.floor((colorOneComponent + colorTwoComponent) >> 1);
            h = getHex(averageDec);
            if (h.length == 1) h = '0' + h;
            averageHex += h;
        }

        return averageHex;
    }

    static getColor(colorString) {
        return Color.constants[colorString];
    }

    static getHexColor(hexString) {
        return hexString;
    }
}

/**
 * Helpers for createFromRGB
 */

/**
 * Convert RGB to a hex string.
 *
 * @memberof Color
 * @param {number} r - Red component.
 * @param {number} g - Green component.
 * @param {number} b - Blue component.
 * @returns {string} Hex representation.
 */
const rgbToHex = (r, g, b) => {
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    if (r > 255 || g > 255 || b > 255) {
        throw 'Invalid color component';
    }
    return ((r << 16) | (g << 8) | b).toString(16);
};

const getColor = (r, g, b) => {
    return '#' + ('000000' + rgbToHex(r, g, b)).slice(-6);
};

/**
 * Helpers for hslToRgb
 */

/**
 * Converts an HSL representation to RGB.
 *
 * @memberof Color
 * @param {number} p
 * @param {number} q
 * @param {number} t
 * @returns {number} RGB representation of component.
 */
const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
};

/**
 * @class Circle
 * @augments Thing
 * @param {number} radius - Desired radius
 */
class Circle extends Thing {
    constructor(radius) {
        super();
        if (arguments.length !== 1) {
            throw new Error(
                'You should pass exactly 1 argument to <span ' +
                    'class="code">new Circle(radius)</span>',
            );
        }
        if (typeof radius !== 'number' || !isFinite(radius)) {
            throw new TypeError(
                'You must pass a finite number to <span class=' +
                    '"code">new Circle(radius)</span>. Did you forget the ' +
                    'parentheses in <span class="code">getWidth()</span> or <span ' +
                    'class="code">getHeight()</span>? Or did you perform a ' +
                    'calculation on a variable that is not a number?',
            );
        }

        this.radius = Math.max(0, radius);
        this.color = Color.black;
        this.lineWidth = 3;
        this.type = 'Circle';
    }

    /**
     * Draws the circle in the canvas.
     * @param {CodeHSGraphics} __graphics__ - Instance of the Graphics module.
     */
    draw(__graphics__) {
        var context = __graphics__.getContext();
        context.beginPath();

        if (this.hasBorder) {
            context.strokeStyle = this.stroke.toString();
            context.lineWidth = this.lineWidth;
        }
        context.fillStyle = this.color.toString();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        context.closePath();

        if (this.hasBorder) {
            context.stroke();
        }
        context.fill();
    }

    /**
     * Gets the radius of the circle
     * @returns {number} Radius of the circle.
     */
    getRadius() {
        return this.radius;
    }

    /**
     * Gets the height (diamter) of the circle.
     * @returns {number} Height (diameter) of the circle.
     */
    getHeight() {
        return this.radius * 2;
    }

    /**
     * Gets the width (diamter) of the circle.
     * @returns {number} Width (diameter) of the circle.
     */
    getWidth() {
        return this.radius * 2;
    }

    /**
     * Sets the radius of the circle.
     * @param {number} radius - Desired resulting radius of the circle.
     */
    setRadius(radius) {
        if (arguments.length !== 1) {
            throw new Error(
                'You should pass exactly 1 argument to <span ' +
                    'class="code">setRadius(radius)</span>',
            );
        }
        if (typeof radius !== 'number' || !isFinite(radius)) {
            throw new TypeError(
                'You must pass a finite number to <span class=' +
                    '"code">setRadius(radius)</span>. Did you forget the ' +
                    'parentheses in <span class="code">getWidth()</span> or <span ' +
                    'class="code">getHeight()</span>? Or did you perform a ' +
                    'calculation on a variable that is not a number?',
            );
        }

        this.radius = Math.max(0, radius);
    }

    /**
     * Checks if the passed point is contained in the circle.
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {boolean} Whether the passed point is contained in the circle.
     */
    containsPoint(x, y) {
        var circleEdge = this.radius;
        if (this.hasBorder) {
            circleEdge += this.lineWidth;
        }
        var dist = getDistance(this.x, this.y, x, y);
        return dist < circleEdge;
    }
}

export { Arc, Circle };
