var chsjs = (function (exports) {

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

    /*
     * Defines a cross-browser compatible way of creating a new AudioContext.
     * Returns 0 and logs an error message if creating a new AudioContext is not possible.
     */

    /**
     * Gets an audiocontext for the browser if possible. TODO docs
     * @return {Object} audiocontext
     */
    function getAudioContext() {
        // Test for browser compatibility
        // Source: https://www.safaribooksonline.com/library/view/web-audio-api/9781449332679/s01_2.html
        var contextClass =
            window.AudioContext ||
            window.webkitAudioContext ||
            window.mozAudioContext ||
            window.oAudioContext ||
            window.msAudioContext;
        if (contextClass) {
            // Web Audio API is available. Attempt to construct an AudioContext
            try {
                return new contextClass();
            } catch (e) {
                console.log(
                    'Too many AudioContexts are in use. Please close all browser windows and retry.',
                );
                return 0;
            }
        } else {
            // Web Audio API is not available
            console.log(
                'Web Audio is not supported in this browser. Please use the most up to date version of Chrome, Firefox, or Safari.',
            );
            return 0;
        }
    }

    var DEFAULT_WIDTH = 150;
    var DEFAULT_HEIGHT = (DEFAULT_WIDTH * 3) / 4;

    const WEBCAM_INDICATOR = 'WEBCAM';

    /**
     * @constructor
     * @augments Thing
     * @param {string} filename - Filepath to the video
     */
    class WebVideo extends Thing {
        constructor(filename) {
            if (typeof filename !== 'string') {
                throw new TypeError(
                    'You must pass a string to <span class="code">' +
                        "new WebVideo(filename)</span> that has the video's location.",
                );
            }
            Thing.call(this);
            var self = this;

            var vid = document.createElement('video');
            this.width = DEFAULT_WIDTH;
            this.height = DEFAULT_HEIGHT;
            this.type = 'WebVideo';

            this.isWebCam = filename === WEBCAM_INDICATOR;

            this.browserSupportsVideo = !!vid.canPlayType;
            if (this.browserSupportsVideo) {
                this.video = vid;
                if (!this.isWebCam) {
                    this.video.src = filename;
                } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    navigator.mediaDevices
                        .getUserMedia({ video: true })
                        .then(function (stream) {
                            self.video.srcObject = stream;
                            self.video.play();
                        })
                        .catch(function (error) {
                            throw new Error('Web camera access was denied: ' + error);
                        });
                } else {
                    throw new TypeError('Your browser does not support web camera access');
                }
                this.filename = filename;
                this.video.autoplay = true;
                this.video.loop = false;

                // Treat cross origin URLs as same origin. Allows for videos from different
                // origins to be loaded and played, as long as that origin allows us to load
                // the given video resource.
                this.video.crossOrigin = 'anonymous';
            }
        }
    }

    WebVideo.WEBCAM = WEBCAM_INDICATOR;

    WebVideo.prototype = new Thing();
    WebVideo.prototype.constructor = WebVideo;

    /**
     * Draws the WebVideo in the canvas.
     *
     * @param {CodeHSGraphics} __graphics__ - Instance of the __graphics__ module.
     */
    WebVideo.prototype.draw = function (__graphics__) {
        if (this.browserSupportsVideo) {
            var context = __graphics__.getContext('2d');

            // Scale and translate
            // X scale, X scew, Y scew, Y scale, X position, Y position
            context.setTransform(1, 0, 0, 1, this.x + this.width / 2, this.y + this.height / 2);
            context.rotate(this.rotation);

            context.drawImage(this.video, -this.width / 2, -this.height / 2, this.width, this.height);

            // Reset transformation matrix
            // X scale, X scew, Y scew, Y scale, X position, Y position
            context.setTransform(1, 0, 0, 1, 0, 0);
        }
    };

    /**
     * Checks if the passed point is contained in the WebVideo.
     *
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @returns {boolean} Whether the passed point is contained in the WebVideo.
     */
    WebVideo.prototype.containsPoint = function (x, y) {
        if (this.browserSupportsVideo) {
            return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
        }
        return false;
    };

    /**
     * Gets the width of the WebVideo.
     *
     * @returns {number} Width of the WebVideo.
     */
    WebVideo.prototype.getWidth = function () {
        return this.width;
    };

    /**
     * Gets the height of the WebVideo.
     *
     * @returns {number} Height of the WebVideo.
     */
    WebVideo.prototype.getHeight = function () {
        return this.height;
    };

    /**
     * Sets the size of the WebVideo.
     *
     * @param {number} width - The desired width of the resulting WebVideo.
     * @param {number} height - The desired height of the resulting WebVideo.
     */
    WebVideo.prototype.setSize = function (width, height) {
        this.width = width;
        this.height = height;
    };

    /**
     * Sets whether the WebVideo should start playing automatically once loaded.
     *
     * @param {boolean} autoplay - True/false whether the video should start playing automatically.
     */
    WebVideo.prototype.setAutoplay = function (autoplay) {
        if (this.browserSupportsVideo) {
            this.video.autoplay = autoplay;
        }
    };

    /**
     * Sets whether the WebVideo should loop and play again once finished.
     *
     * @param {boolean} loop - True/false whether the video should loop.
     */
    WebVideo.prototype.setLoop = function (loop) {
        if (this.browserSupportsVideo) {
            this.video.loop = loop;
        }
    };

    /**
     * Sets whether the WebVideo is muted or not.
     *
     * @param {boolean} muted - True/false whether the video should be muted.
     */
    WebVideo.prototype.setMuted = function (muted) {
        if (this.browserSupportsVideo) {
            this.video.muted = muted;
        }
    };

    /**
     * Starts playing the WebVideo.
     */
    WebVideo.prototype.play = function () {
        if (this.browserSupportsVideo) {
            this.video.play();
        }
    };

    /**
     * Pauses the WebVideo.
     */
    WebVideo.prototype.pause = function () {
        if (this.browserSupportsVideo) {
            this.video.pause();
        }
    };

    /**
     * Stops the WebVideo.
     */
    WebVideo.prototype.stop = function () {
        if (this.browserSupportsVideo) {
            this.video.pause();
            this.video.currentTime = 0;

            if (this.isWebCam && this.video.srcObject) {
                this.video.srcObject.getTracks().forEach(function (track) {
                    track.stop();
                });
            }
        }
    };

    /**
     * Returns whether the WebVideo is currently playing.
     *
     * @returns {boolean} True if the video is playing, false if it is not.
     */
    WebVideo.prototype.isPlaying = function () {
        if (this.browserSupportsVideo) {
            return !(this.video.paused || this.video.ended);
        }
        return false;
    };

    /**
     * Returns whether the WebVideo is currently muted.
     *
     * @returns {boolean} True if the video is muted, false if it is not.
     */
    WebVideo.prototype.isMuted = function () {
        if (this.browserSupportsVideo) {
            return this.video.muted;
        }
        return false;
    };

    /**
     * Defines a function to call once the video has loaded enough and is ready to play.
     * @param  {Function} fn A function to call when the video is ready to play.
     */
    WebVideo.prototype.onReadyToPlay = function (fn) {
        if (this.browserSupportsVideo) {
            this.video.oncanplay = fn;
        }
    };

    // module.exports = WebVideo;

    // import the npm-hosted editor utils only if the other is not available

    const DEFAULT_FRAME_RATE = 40;
    const FULLSCREEN_PADDING = 5;

    let graphicsSingleton = null;

    class CodeHSGraphics {
        audioElements = [];
        source = null;
        analyser = null;
        dataArray = null;
        elementPool = [];
        elementPoolSize = 0;

        /**
         * Set up an instance of the graphics library.
         * @constructor
         * @param {dictionary} options - Options, primarily .canvas, the selector
         *      string for the canvas.
         *      If multiple are returned, we'll take the first one.
         *      If none is passed, we'll look for any canvas
         *      tag on the page.
         */
        constructor(options) {
            options = { ...options };
            this.resetAllState();
            this.setCurrentCanvas(options.canvas);
            this.currentCanvas = null;
            this.fullscreenMode = false;
            this.fpsInterval = 1000 / DEFAULT_FRAME_RATE;
            this.lastDrawTime = Date.now();
            graphicsSingleton = this;
        }

        attachToWindow(window, options) {
            window.add = this.add.bind(this);
            window.Audio = this.Audio.bind(this);
            window.Sound = this.Sound.bind(this);
            window.mouseClickMethod = this.mouseClickMethod.bind(this);
            window.mouseMoveMethod = this.mouseMoveMethod.bind(this);
            window.stopAllTimers = this.stopAllTimers.bind(this);
            window.setMainTimer = this.setMainTimer.bind(this);
            window.stopTimer = this.stopTimer.bind(this);
            options = { ...options };
            this.resetAllState();
            this.setCurrentCanvas(options.canvas);
            this.fullscreenMode = false;
        }

        /**
         * Add an element to the graphics instance.
         * @param {Thing} elem - A subclass of Thing to be added to the graphics instance.
         */
        add(elem) {
            this.elementPool.push(elem);
            this.elementPoolSize++;
        }

        Audio(url) {
            var audioElem = new window.Audio(url);
            audioElem.crossOrigin = 'anonymous';
            this.audioElements.push(audioElem);
            return audioElem;
        }
        /**
         * Wrapper around Sound so we have reference to all Sound objects created.
         * Following the example set by tracking Audio elements.
         * @param frequency - Either a number (Hertz) or note ("C#4" for middle C Sharp)
         * @param oscillatorType {string} - several options
         * basic types: "sine", "triangle", "square", "sawtooth"
         * any basic type can be prefixed with "fat", "am" or "fm", ie "fatsawtooth"
         * any basic type can be suffixed with a number ie "4" for the number of partials
         *     ie "square4"
         * special types: "pwm", "pulse"
         * drum instrument: "membrane"
         * cymbal instrument: "metal"
         * https://tonejs.github.io/docs/13.8.25/OmniOscillator
         */
        Sound(frequency, oscillatorType) {
            frequency = frequency || 440;
            oscillatorType = oscillatorType || 'fatsawtooth';
            var soundElem = new oldSound(frequency, oscillatorType);
            this.soundElements.push(soundElem);
            return soundElem;
        }

        /**
         * Record a click.
         */
        waitForClick() {
            this.clickCount++;
        }

        /**
         * Assign a function as a callback for click (mouse down, mouse up) events.
         * @param {function} fn - A callback to be triggered on click events.
         */
        mouseClickMethod(fn) {
            this.clickCallback = fn;
        }

        /**
         * Assign a function as a callback for mouse move events.
         * @param {function} fn - A callback to be triggered on mouse move events.
         */
        mouseMoveMethod(fn) {
            this.moveCallback = fn;
        }

        /**
         * Assign a function as a callback for mouse down events.
         * @param {function} fn - A callback to be triggered on mouse down.
         */
        mouseDownMethod(fn) {
            this.mouseDownCallback = fn;
        }

        /**
         * Assign a function as a callback for mouse up events.
         * @param {function} fn - A callback to be triggered on mouse up events.
         */
        mouseUpMethod(fn) {
            this.mouseUpCallback = fn;
        }

        /**
         * Assign a function as a callback for drag events.
         * @param {function} fn - A callback to be triggered on drag events.
         */
        mouseDragMethod(fn) {
            this.dragCallback = fn;
        }

        /**
         * Assign a function as a callback for keydown events.
         * @param {function} fn - A callback to be triggered on keydown events.
         */
        keyDownMethod(fn) {
            this.keyDownCallback = fn;
        }

        /**
         * Assign a function as a callback for key up events.
         * @param {function} fn - A callback to be triggered on key up events.
         */
        keyUpMethod(fn) {
            this.keyUpCallback = fn;
        }

        /**
         * Assign a function as a callback for device orientation events.
         * @param {function} fn - A callback to be triggered on device orientation
         *                        events.
         */
        deviceOrientationMethod(fn) {
            this.deviceOrientationCallback = fn;
        }

        /**
         * Assign a function as a callback for device motion events.
         * @param {function} fn - A callback to be triggered device motion events.
         */
        deviceMotionMethod(fn) {
            this.deviceMotionCallback = fn;
        }

        /**
         * Assign a function as a callback for when audio data changes for audio
         * being played in a graphics program.
         * @param {object} tag - Audio element playing sound to analyze
         * @param {function} fn - A callback to be triggered on audio data change.
         */
        audioChangeMethod(tag, fn) {
            // get new audio context and create analyser
            this.audioCtx = getAudioContext();
            // IE browser exit gracefully
            if (!this.audioCtx) {
                return;
            }
            this.analyser = audioCtx.createAnalyser();
            // set fft -- used to set the number of slices we break our frequency range
            // in to.
            this.analyser.fftSize = 128;
            // gt bugger length and create a new array in that size
            var bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(bufferLength);
            // create media source from student's audio tag
            this.source = audioCtx.createMediaElementSource(tag);
            // should allow cors
            this.source.crossOrigin = 'anonymous';
            // connect analyzer to sound
            this.source.connect(this.analyser);
            // create gain node and connect to sound (makes speaker output possuble)
            var gainNode = this.audioCtx.createGain();
            this.source.connect(gainNode);
            gainNode.connect(this.audioCtx.destination);
            this.setGraphicsTimer(this.updateAudio.bind(this), DEFAULT_FRAME_RATE, null, 'updateAudio');
        }

        /**
         * Check if a key is currently pressed
         * @param {integer} keyCode - Key code of key being checked.
         * @returns {boolean} Whether or not that key is being pressed.
         */
        isKeyPressed(keyCode) {
            return pressedKeys.indexOf(keyCode) != -1;
        }

        /**
         * Get the width of the entire graphics canvas.
         * @returns {float} The width of the canvas.
         */
        getWidth() {
            var canvas = this.getCanvas();
            return parseFloat(canvas.getAttribute('width'));
        }

        /**
         * Get the height of the entire graphics canvas.
         * @returns {float} The height of the canvas.
         */
        getHeight() {
            var canvas = this.getCanvas();
            return parseFloat(canvas.getAttribute('height'));
        }

        /**
         * Remove a timer associated with a function.
         * @param {function} fn - Function whose timer is removed.
         * note 'fn' may also be the name of the function.
         */
        stopTimer(fn) {
            var key = typeof fn === 'function' ? fn.name : fn;
            clearInterval(this.timers[key]);
        }

        /**
         * Stop all timers.
         */
        stopAllTimers() {
            for (var i = 1; i < 99999; i++) {
                window.clearInterval(i);
            }
            this.setMainTimer();
        }

        /**
         * Create a new timer
         * @param {function} fn - Function to be called at intervals.
         * @param {integer} time - Time interval to call function `fn`
         * @param {dictionary} data - Any data associated with the timer.
         * @param {string} name - Name of this timer.
         */
        setTimer(fn, time, data, name) {
            if (arguments.length < 2) {
                throw new Error(
                    '2 parameters required for <span class="code">' +
                        'setTimer</span>, ' +
                        arguments.length +
                        ' found. You must ' +
                        'provide a callback function and ' +
                        'a number representing the time delay ' +
                        'to <span class="code">setTimer</span>',
                );
            }
            if (typeof fn !== 'function') {
                throw new TypeError(
                    'Invalid callback function. ' +
                        'Make sure you are passing an actual function to ' +
                        '<span class="code">setTimer</span>.',
                );
            }
            if (typeof time !== 'number' || !isFinite(time)) {
                throw new TypeError(
                    'Invalid value for time delay. ' +
                        'Make sure you are passing a finite number to ' +
                        '<span class="code">setTimer</span> for the delay.',
                );
            }

            var self = this;

            // Safety, set a min frequency
            if (isNaN(time) || time < 15) {
                time = 15;
            }

            if (this.waitingForClick()) {
                this.delayedTimers.push({
                    fn: fn,
                    time: time,
                    data: data,
                    clicks: self.clickCount,
                    name: name,
                });
            } else {
                this.setGraphicsTimer(fn, time, data, name);
            }
        }

        /**
         * Set the background color of the canvas.
         * @param {Color} color - The desired color of the canvas.
         */
        setBackgroundColor(color) {
            this.backgroundColor = color;
        }

        /**
         * Clear everything from the canvas.
         */
        clear(context) {
            var ctx = context || this.getContext();
            ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
        }

        /**
         * Get an element at a specific point.
         * If several elements are present at the position, return the one put there first.
         * @param {number} x - The x coordinate of a point to get element at.
         * @param {number} y - The y coordinate of a point to get element at.
         * @returns {Thing|null} The object at the point (x, y), if there is one (else null).
         */
        getElementAt(x, y) {
            for (var i = this.elementPoolSize - 1; i >= 0; i--) {
                if (this.elementPool[i].alive && this.elemementPool[i].containsPoint(x, y, this)) {
                    return this.elementPool[i];
                }
            }
            return null;
        }

        /**
         * Check if an element exists with the given paramenters.
         * @param {object} params - Dictionary of parameters for the object.
         *      Includes x, y, heigh, width, color, radius, label and type.
         * @returns {boolean}
         */
        elementExistsWithParameters(params) {
            for (let i = this.elementPoolSize - 1; i >= 0; i--) {
                const elem = this.elementPool[i];
                const checkedParams = Object.entries(params).map(([name, value]) => {
                    return value === elem[name];
                });

                if (elem.alive && checkedParams.every(param => param)) {
                    return true;
                }
            }
            return false;
        }

        /**
         * Remove all elements from the canvas.
         */
        removeAll() {
            this.stopAllVideo();
            this.elementPool = [];
        }

        /**
         * Remove a specific element from the canvas.
         * @param {Thing} elem - The element to be removed from the canvas.
         */
        remove(elem) {
            if (elem instanceof WebVideo) {
                elem.stop();
            }
            elem.alive = false;
        }

        /**
         * Set the size of the canvas.
         * @param {number} w - Desired width of the canvas.
         * @param {number} h - Desired height of the canvas.
         */
        setSize(w, h) {
            this.fullscreenMode = false;
            var canvas = this.getCanvas();
            canvas.width = w;
            canvas.height = h;
            $(canvas).css({
                'max-height': h,
                'max-width': w,
            });
        }

        /**
         * Set the canvas to take up the entire parent element
         */
        setFullscreen() {
            var self = this;
            self.fullscreenMode = true; // when this is true, canvas will resize with parent
            var canvas = this.getCanvas();
            canvas.width = canvas.parentElement.offsetWidth - FULLSCREEN_PADDING;
            canvas.height = canvas.parentElement.offsetHeight - FULLSCREEN_PADDING;
        }

        /**
         * Resets all the timers to time 0.
         */
        resetAllTimers() {
            for (var cur in this.timers) {
                clearInterval(this.timers[cur]);
            }
        }

        stopAllAudio() {
            this.audioElements.forEach(function (audio) {
                audio.pause();
            });
            this.soundElements.forEach(function (soundElem) {
                soundElem.stop();
                soundElem.disconnect();
            });
        }

        stopAllVideo() {
            for (var i = this.elementPoolSize; i--; ) {
                if (this.elementPool[i].type == 'WebVideo') {
                    this.elementPool[i].stop();
                }
            }
        }

        /**
         * Resets the graphics instance to a clean slate.
         */
        resetAllState() {
            this.backgroundColor = null;
            this.elementPool = [];
            this.audioElements = [];
            this.soundElements = [];
            this.clickCallback = null;
            this.moveCallback = null;
            this.mouseDownCallback = null;
            this.mouseUpCallback = null;
            this.dragCallback = null;
            this.keyDownCallback = null;
            this.keyUpCallback = null;
            this.deviceOrientationCallback = null;
            this.deviceMotionCallback = null;
            this.audioChangeCallback = null;

            // if audio source exists, disconnect it
            if (this.source) {
                this.source.disconnect();
                this.source = 0;
            }

            // A fast hash from timer key to timer interval #
            this.timers = {};

            // A useful list to store information about all timers.
            this.timersList = [];

            this.clickCount = 0;
            this.delayedTimers = [];

            // if audio context exists, close it and reset audioCtx
            if (this.audioCtx) {
                this.audioCtx.close();
                this.audioCtx = 0;
            }

            this.fullscreenMode = false;
        }

        /**
         * Reset all timers to 0 and clear timers and canvas.
         */
        fullReset() {
            this.stopAllAudio();
            this.stopAllVideo();
            this.resetAllTimers();
            this.resetAllState();
            this.setMainTimer();
        }

        /**
         * Return if the graphics canvas exists.
         * @returns {boolean} Whether or not the canvas exists.
         */
        canvasExists() {
            return this.getCanvas() !== null;
        }

        /**
         * Return the current canvas we are using. If there is no
         * canvas on the page this will return null.
         * @returns {object} The current canvas.
         */
        getCanvas() {
            return this.currentCanvas;
        }

        /**
         * Set the current canvas we are working with. If no canvas
         * tag matches the selectorv then we will just have the current
         * canvas set to null.
         * @param {string} canvasSelector - String representing canvas class or ID.
         *      Selected with jQuery.
         */
        setCurrentCanvas(canvasSelector) {
            let currentCanvas;
            if (canvasSelector) {
                currentCanvas = document.querySelector(canvasSelector);
            } else {
                currentCanvas = document.getElementsByTagName('canvas')[0];
            }
            if (currentCanvas === null) {
                currentCanvas = document.createElement('canvas');
                document.body.appendChild(currentCanvas);
            }
            this.currentCanvas = currentCanvas;

            // On changing the canvas reset the state.
            this.fullReset();
            this.setup();
        }

        /**
         * Draw the background color for the current object.
         */
        drawBackground() {
            if (this.backgroundColor) {
                var context = this.getContext();
                context.fillStyle = this.backgroundColor;
                context.beginPath();
                context.rect(0, 0, this.getWidth(), this.getHeight());
                context.closePath();
                context.fill();
            }
        }

        /**
         * Return the 2D graphics context for this graphics
         * object, or null if none exists.
         * @returns {context} The 2D graphics context.
         */
        getContext() {
            var drawingCanvas = this.getCanvas();
            // Check the element is in the DOM and the browser supports canvas
            if (drawingCanvas && drawingCanvas.getContext) {
                // Initaliase a 2-dimensional drawing context
                var context = drawingCanvas.getContext('2d');
                return context;
            }
            return null;
        }

        /**
         * Redraw this graphics canvas.
         */
        redraw() {
            this.clear();
            this.drawBackground();
            let elem;
            let sortPool;
            for (let i = this.elementPoolSize; i--; ) {
                elem = this.elementPool[i];

                if (!elem.alive) {
                    sortPool = true;
                    this.elementPoolSize--;
                } else {
                    elem.draw(this);
                }
            }
            // sort all dead elements to the end of the pool
            if (sortPool) {
                this.elements.sort((a, b) => b.alive - a.alive);
            }
        }

        /**
         * Set the main timer for graphics.
         */
        setMainTimer() {
            this.shouldUpdate = true;
            this.update();
        }

        update() {
            if (this.shouldUpdate) {
                requestAnimationFrame(this.update.bind(this));
            }
            this.now = Date.now();
            const elapsed = this.now - this.lastDrawTime;
            if (elapsed > this.fpsInterval) {
                this.lastDrawTime = this.now - (elapsed % this.fpsInterval);
                this.redraw();
            }
        }

        /**
         * Whether the graphics instance is waiting for a click.
         * @returns {boolean} Whether or not the instance is waiting for a click.
         */
        waitingForClick() {
            return this.clickCount !== 0;
        }

        /**
         * Whether the selected canvas already has an instance associated.
         */
        canvasHasInstance(canvas) {
            var instance;
            for (var i = 0; i < allGraphicsInstances.length; i++) {
                instance = allGraphicsInstances[i];
                if (instance.instanceId !== this.instanceId && instance.getCanvas() === canvas) {
                    return instance.instanceId;
                }
            }
            return null;
        }

        /**
         * Get the distance between two points, (x1, y1) and (x2, y2)
         * @param {number} x1
         * @param {number} y1
         * @param {number} x2
         * @param {number} y2
         * @returns {number} Distance between the two points.
         */
        getDistance(x1, y1, x2, y2) {
            return graphicsUtils.getDistance(x1, y1, x2, y2);
        }

        /**
         * Set up the graphics instance to prepare for interaction
         */
        setup() {
            var drawingCanvas = this.getCanvas();

            // self.setMainTimer();

            drawingCanvas.onclick = e => {
                if (this.waitingForClick()) {
                    this.clickCount--;

                    for (var i = 0; i < this.delayedTimers.length; i++) {
                        var timer = this.delayedTimers[i];
                        timer.clicks--;
                        if (timer.clicks === 0) {
                            this.setGraphicsTimer(timer.fn, timer.time, timer.data);
                        }
                    }
                    return;
                }

                if (this.clickCallback) {
                    this.clickCallback(e);
                }
            };

            var mouseDown = false;

            drawingCanvas.onmousemove = e => {
                if (this.moveCallback) {
                    this.moveCallback(e);
                }
                if (mouseDown && this.dragCallback) {
                    this.dragCallback(e);
                }
            };

            drawingCanvas.onmousedown = e => {
                mouseDown = true;
                if (this.mouseDownCallback) {
                    this.mouseDownCallback(e);
                }
            };

            drawingCanvas.onmouseup = e => {
                mouseDown = false;
                if (this.mouseUpCallback) {
                    this.mouseUpCallback(e);
                }
            };

            // TOUCH EVENTS!
            drawingCanvas.ontouchmove = e => {
                e.preventDefault();
                if (this.dragCallback) {
                    this.dragCallback(e);
                } else if (this.moveCallback) {
                    this.moveCallback(e);
                }
            };

            drawingCanvas.ontouchstart = e => {
                e.preventDefault();
                if (this.mouseDownCallback) {
                    this.mouseDownCallback(e);
                } else if (this.clickCallback) {
                    this.clickCallback(e);
                }

                if (this.waitingForClick()) {
                    this.clickCount--;

                    for (var i = 0; i < this.delayedTimers.length; i++) {
                        var timer = this.delayedTimers[i];
                        timer.clicks--;
                        if (timer.clicks === 0) {
                            this.setGraphicsTimer(timer.fn, timer.time, timer.data);
                        }
                    }
                    return;
                }
            };

            drawingCanvas.ontouchend = e => {
                e.preventDefault();
                if (this.mouseUpCallback) {
                    this.mouseUpCallback(e);
                }
            };
        }

        /**
         * Set a graphics timer.
         * @param {function} fn - The function to be executed on the timer.
         * @param {number} time - The time interval for the function.
         * @param {object} data - Any arguments to be passed into `fn`.
         * @param {string} name - The name of the timer.
         */
        setGraphicsTimer(fn, time, data, name) {
            if (typeof name === 'undefined') {
                name = fn.name;
            }

            this.timers[name] = setInterval(fn, time, data);

            this.timersList.push({
                name: name,
                fn: fn,
                data: data,
                time: time,
            });
        }

        /** AUDIO EVENTS **/

        /**
         * This function is called on a timer. Calls the student's audioChangeCallback
         * function and passes it the most recent audio data.
         */
        updateAudio() {
            this.analyser.getByteFrequencyData(dataArray);
            if (this.audioChangeCallback) {
                /* this is the one strange thing. Up above, we set analyser.fftSize. That
                 * determines how many 'buckets' we split our file into (fft size / 2).
                 * For some reason, the top 16 'buckets' were always coming out 0, so we
                 * used .slice() to cut out the last 18 items out of the array. In the
                 * future, if you want to experiment with different FFT sizes, it will
                 * be necessary to adjust this slice call (the size of the array will
                 * definitely change, and number of empty indexes will probably change).
                 */
                var numBuckets = 46;
                this.audioChangeCallback(dataArray.slice(0, numBuckets));
            }
        }
    }

    /** KEY EVENTS ****/
    window.onkeydown = function (e) {
        var index = pressedKeys.indexOf(e.keyCode);
        if (index === -1) {
            pressedKeys.push(e.keyCode);
        }

        graphicsSingleton?.keyDownCallback?.(e);

        return true;
    };

    window.onkeyup = function (e) {
        var index = pressedKeys.indexOf(e.keyCode);
        if (index !== -1) {
            pressedKeys.splice(index, 1);
        }
        graphicsSingleton?.keyUpCallback?.(e);
    };

    /** RESIZE EVENT ****/
    var resizeTimeout;
    window.onresize = function (e) {
        // https://developer.mozilla.org/en-US/docs/Web/Events/resize
        // Throttle the resize event handler since it fires at such a rapid rate
        // Only respond to the resize event if there's not already a response queued up
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function () {
                resizeTimeout = null;
                graphicsSingleton?.setFullscreen?.();
            }, DEFAULT_FRAME_RATE);
        }
    };

    /** MOBILE DEVICE EVENTS ****/
    if (window.DeviceOrientationEvent) {
        window.ondeviceorientation = function (e) {
            graphicsSingleton?.deviceOrientationCallback?.(e);
        };
    }

    if (window.DeviceMotionEvent) {
        window.ondevicemotion = function (e) {
            graphicsSingleton?.deviceMotionCallback?.(e);
        };
    }

    /* Mouse and Touch Event Helpers */

    // Same for MouseEvent or TouchEvent given the event and target
    // Method based on: http://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element

    CodeHSGraphics.getBaseCoordinates = function (e, target) {
        var x;
        var y;
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        var offset = target.offset();
        x -= offset.left;
        y -= offset.top;

        return { x: x, y: y };
    };

    CodeHSGraphics.getMouseCoordinates = function (e) {
        var baseCoordinates = CodeHSGraphics.getBaseCoordinates(e, $(e.currentTarget));
        var x = baseCoordinates.x;
        var y = baseCoordinates.y;

        // at zoom levels != 100%, x and y are floats.
        x = Math.round(x);
        y = Math.round(y);

        return { x: x, y: y };
    };

    CodeHSGraphics.getTouchCoordinates = function (e) {
        var baseCoordinates = CodeHSGraphics.getBaseCoordinates(e, $(e.target));
        var x = baseCoordinates.x;
        var y = baseCoordinates.y;

        // canvas almost always gets scaled down for mobile screens, need to figure
        // out the x and y in terms of the unscaled canvas size in pixels otherwise
        // touch coordinates are off
        var screenCanvasWidth = $('#game').width();
        var fullCanvasWidth = $('#game').attr('width');
        var ratio = fullCanvasWidth / screenCanvasWidth;
        x = x * ratio;
        y = y * ratio;

        // at zoom levels != 100%, x and y are floats.
        x = Math.round(x);
        y = Math.round(y);

        return { x: x, y: y };
    };

    MouseEvent.prototype.getX = function () {
        return CodeHSGraphics.getMouseCoordinates(this).x;
    };

    MouseEvent.prototype.getY = function () {
        return CodeHSGraphics.getMouseCoordinates(this).y;
    };

    if (typeof TouchEvent != 'undefined') {
        TouchEvent.prototype.getX = function () {
            return CodeHSGraphics.getTouchCoordinates(this.touches[0]).x;
        };

        TouchEvent.prototype.getY = function () {
            return CodeHSGraphics.getTouchCoordinates(this.touches[0]).y;
        };
    }

    exports.Arc = Arc;
    exports.Circle = Circle;
    exports.Graphics = CodeHSGraphics;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
