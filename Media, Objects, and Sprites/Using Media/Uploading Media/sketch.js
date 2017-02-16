var img1;
var img2;
var img3;
var img4;



function preload(){
  img1 = loadImage('lunar.jpg');
  img2 = loadImage('capsule.jpg');
  img3 = loadImage('car.jpg');
  img4= loadImage('robot48.png')
}
  
  

function setup() {
  createCanvas(1600, 720);
  //astro = img3.get (125, 0, 125, 125)
}

function draw() {
  background(255);
  //image(img1, mouseX, mouseY, 240, 120);
  
  //for (i = 0; i<4; i++){
  //  image(img1, i*240, 0, 240, 120);
  //}
  //image(img2, 400, 0, mouseX, mouseY);
  //image(img3, 267, 170, 77, 56, 0, 0, 77, 56);
  console.log(mouseY);
  //Start of Selection X-267 ,Start of Selection Y-170, Selection Width -77 , Selection -56
  
  //Args: image variable, location of grab window start (x,y), location of grab window end, placement of grabbed image on canvas, definition
  //image(img1, 125, 0, 125, 125, 100, 0, 125, 125);
  
  //image(img2, 125, 0, 125, 125,300, 0, 125, 125 );
  //image(img3, 679, 380, 53, 30, 0, 0, 153, 130);
//679 windowX  392 windowY  windowHeight 14, windowWidth 53
image(img1, 0, 0, 240, 120);
}