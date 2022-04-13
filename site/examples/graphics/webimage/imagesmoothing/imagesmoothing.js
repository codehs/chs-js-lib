const smoothed = new WebImage('https://codehs.com/uploads/72e9b6f60ac412f32a2fd3a955990c3b');
smoothed.imageSmoothingEnabled = true;
const unsmoothed = new WebImage('https://codehs.com/uploads/72e9b6f60ac412f32a2fd3a955990c3b');
unsmoothed.imageSmoothingEnabled = false;

add(smoothed);
add(unsmoothed);

unsmoothed.setPosition(getWidth() / 2, 0);

const smoothedLoaded = new Promise(resolve => smoothed.loaded(resolve));
const unsmoothedLoaded = new Promise(resolve => unsmoothed.loaded(resolve));

const allLoaded = Promise.all([smoothedLoaded, unsmoothedLoaded]).then(() => {
    const imageWidth = smoothed.width;
    const scale = getWidth() / 2 / imageWidth;
    smoothed.setSize(scale * smoothed.width, scale * smoothed.height);
    unsmoothed.setSize(scale * unsmoothed.width, scale * unsmoothed.height);
    setSize(smoothed.width * 2, smoothed.height);
});
