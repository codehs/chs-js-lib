let width = 40;
let height = 40;
let widthGrowing = true;
let heightGrowing = true;
var oval = new Oval(width, height);
oval.setColor(Color.GREEN);
oval.setPosition(getWidth() / 2, getHeight() / 2);
add(oval);
setTimer(() => {
    width += widthGrowing ? 5 : -5;
    height += heightGrowing ? 5 : -5;
    if (width > 200 || width < 10) {
        widthGrowing = !widthGrowing;
    }
    if (height > 60 || height < 10) {
        heightGrowing = !heightGrowing;
    }
    oval.setWidth(width);
    oval.setHeight(height);
}, 30);
