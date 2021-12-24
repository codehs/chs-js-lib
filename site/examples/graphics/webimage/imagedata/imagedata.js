const RGBURL = 'https://codehs.com/uploads/4cd36a1bacbd8cdd22cf75947f4caea8';
const img = new WebImage(RGBURL);
const size = getWidth() * getHeight();
const arr = new Uint8ClampedArray(size * 4);
for (let i = 0; i < arr.length; i += 4) {
    arr[i + 0] = 255; // R value
    arr[i + 1] = 0; // G value
    arr[i + 2] = 0; // B value
    arr[i + 3] = 255; // A value
}
const imageData = new ImageData(arr, getWidth(), getHeight());
img.setImageData(imageData);
add(img);

mouseMoveMethod(e => {
    const x = e.getX();
    const y = e.getY();
    img.setPixel(x, y, 2, 255);
    img.setPixel(x, y, 0, 0);
});
