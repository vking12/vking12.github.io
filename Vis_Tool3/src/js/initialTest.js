var canvas = document.getElementById('img1');
var ctx = canvas.getContext('2d');
var data = [];
var bounds = {};

// read the csv file
d3.csv("data/image01_2014_03_17.csv")
// iterate over the rows of the csv file
    .row(function(d) {
        // get the min bounds
        bounds.minX = Math.min(bounds.minX || Infinity, d.X);
        bounds.minY = Math.min(bounds.minY || Infinity, d.Y);

        // get the max bounds
        bounds.maxX = Math.max(bounds.maxX || -Infinity, d.X);
        bounds.maxY = Math.max(bounds.maxY || -Infinity, d.Y);

        // add the element to the data collection
        data.push({
            // Position
            X: Number(d.X),
            Y: Number(d.Y),
            // RGB stored somewhere
            R: Number(d.B3),
            G: Number(d.B2),
            B: Number(d.B1)
        });
    })
    // when done loading
    .get(function() {
        // create the image
        var imgdata = ctx.getImageData(0,0, 651, 651);
        var imgdatalen = imgdata.data.length;
        for(var i=0;i<imgdatalen/4;i++){  //iterate over every pixel in the canvas
          imgdata.data[4*i] = data[i].R;    // RED (0-255)
          imgdata.data[4*i+1] = data[i].G;    // GREEN (0-255)
          imgdata.data[4*i+2] = data[i].B;    // BLUE (0-255)
          imgdata.data[4*i+3] = 255;  // APLHA (0-255)
        }
        ctx.putImageData(imgdata,0,0);

    });
