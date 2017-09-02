var canvas = document.getElementById('img1');
var ctx = canvas.getContext('2d');
var image = document.getElementById('source');

ctx.drawImage(image, 0, 0);

var canvas2 = document.getElementById('img2');
var ctx2 = canvas2.getContext('2d');
var image2 = document.getElementById('source2');

ctx2.drawImage(image2, 0, 0);

var canvas3 = document.getElementById('img3');
var ctx3 = canvas3.getContext('2d');

var img1 = ctx.getImageData(0, 0, 651, 651),
    img2 = ctx2.getImageData(0, 0, 651, 651),
    diff = ctx3.createImageData(651, 651);

pixelmatch(img1.data, img2.data, diff.data, 651, 651, {threshold: 0.1});

ctx3.putImageData(diff, 0, 0);
