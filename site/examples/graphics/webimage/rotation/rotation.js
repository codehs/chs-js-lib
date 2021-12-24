const RGBURL = 'https://codehs.com/uploads/4cd36a1bacbd8cdd22cf75947f4caea8';
const img = new WebImage(RGBURL);
let rotation = 0;
setTimer(() => {
    img.setRotation(rotation++);
}, 40);
add(img);
