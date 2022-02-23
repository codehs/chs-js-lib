var img = new WebImage('https://codehs.com/uploads/056e56f7b32cdc9ed21c681c31166108');
img.setAnchor({ vertical: 0.5, horizontal: 0.5 });
img.setPosition(getWidth() / 2, getHeight() / 2);
add(img);

mouseClickMethod(e => {
    img.setImage('https://codehs.com/uploads/1e38851d76e7691d923a3d3f3f7eae1d');
});
