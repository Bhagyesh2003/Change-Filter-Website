function upload() {
  var imgcanvas = document.getElementById("can");
  var fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}

function makeGray() {
   for (var pixel of image.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
   }

   var imgcanvas = document.getElementById("can");
   image.drawTo(imgcanvas);
}

function makeRed() {
  for (var pixel of image.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg<128) {
      pixel.setRed(2 * avg);      
      pixel.setGreen(0);      
      pixel.setBlue(0);      
    } else {
      pixel.setRed(255);      
      pixel.setGreen(2 * avg - 255);      
      pixel.setBlue(2 * avg - 255); 
    }
  }

  var imgcanvas = document.getElementById("can");
   image.drawTo(imgcanvas);
}

function ensureInImage (coordinate, size) {
  // coordinate cannot be negative
  if (coordinate < 0) {
      return 0;
  }
  // coordinate must be in range [0 .. size-1]
  if (coordinate >= size) {
      return size - 1;
  }
  return coordinate;
}

function makeBlur (image, x, y, diameter) {
  var dx = Math.random() * diameter - diameter / 2;
  var dy = Math.random() * diameter - diameter / 2;
  var nx = ensureInImage(x + dx, image.getWidth());
  var ny = ensureInImage(y + dy, image.getHeight());
  return image.getPixel(nx, ny);
}

  var imgcanvas = document.getElementById("can");
   image.drawTo(imgcanvas);

for (var pixel of image.values()) {
  var x = pixel.getX();
  var y = pixel.getY();
  if (Math.random() > 0.5) {
      var other = makeBlur(image, x, y, 10);
      output.setPixel(x, y, other);
  }
  else {
      output.setPixel(x, y, pixel);
  }
}

// function Reset() {
//   document.getElementById("finput").reset();

//   var imgcanvas = document.getElementById("can");
//    image.drawTo(imgcanvas);
// }







