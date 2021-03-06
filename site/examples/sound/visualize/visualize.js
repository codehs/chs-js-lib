const instructions = new Text('Press to start', '15pt Arial', {
    vertical: 'center',
    horizontal: 'center',
});
instructions.setPosition(getWidth() / 2, getHeight() / 2);
add(instructions);
mouseDownMethod(() => {
    remove(instructions);
    start();
});
const GAP = 2;
const WIDTH = getWidth();
const MAX_COLOR_VAL = 255;

const start = () => {
    // Create the Audio
    const song = new Audio('https://codehs.com/uploads/8179d3793582c02c44438d0160d6f0a5');

    // Play the song
    song.play();
    song.loop = true;

    // Visualize the song data
    audioChangeMethod(song, visualize);
};

/*
 * Visualizes the frame array by making a vertical bar for each index
 * of the array. The height of the bar represents how loud that note of the
 * music is. Low indices represent low frequencies in the song (low notes)
 * high indices represent high frequencies in the song (high notes)
 */
function visualize(frame) {
    // Remove all the bars from the last point in the song
    removeAll();

    // Set the width of the bars
    var barWidth = (WIDTH - GAP) / frame.length - GAP;

    // Loop over the song data and make one bar for each index in the array
    for (var i = 0; i < frame.length; i++) {
        // Set the height of this bar to be the loudness at this index
        var barHeight = frame[i];

        // Make the bar
        var bar = new Rectangle(barWidth, barHeight);
        bar.setPosition(GAP + (barWidth + GAP) * i, getHeight() - barHeight);

        /*
         * The color can be expressed as three values RGB for red, green, blue.
         * Set the red value to be the max possible value
         * Set the green value to be the max value minus how high the bar is
         * Set the blue value to be the same as the bar height
         * The result is a yellow bar that gets more pink the higher it is!
         */
        var color = new Color(MAX_COLOR_VAL, MAX_COLOR_VAL - barHeight, barHeight);
        bar.setColor(color);

        add(bar);
    }
}
