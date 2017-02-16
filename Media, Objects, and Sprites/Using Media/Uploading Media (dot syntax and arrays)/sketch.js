var img1;
var img2;
var img3;
//var astro

function preload() {
  img1 = loadImage('lunar.jpg');
  img2 = loadImage('capsule.jpg');
  img3 = loadImage('lunar.jpg');
}


function setup() {
  createCanvas(480, 120);
  //astro = img3.get (125, 0, 125, 125)
}

function draw() {
  //image(img1, 130, 0, 240, 120);
  //Args: image variable, location of grab window start (x,y), location of grab window end, placement of grabbed image on canvas, definition
  //image(img1, 125, 0, 125, 125, 100, 0, 125, 125);
  
  image(img2, 125, 0, 125, 125,300, 0, 125, 125 );
  //image(astro, 100, 0, 125, 125);
  
}