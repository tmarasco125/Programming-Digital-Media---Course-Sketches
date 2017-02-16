var sheet
var walk_N
var walk_S
var walk_E
var walk_W
var xPos
var yPos
var speed

function preload(){
  
  sheet = loadImage("link.png");//string for image name
  
  
}

function setup() {
  createCanvas(600,400);
  walk_N=[
   sheet.get(0, 0, 24, 32),
   sheet.get(24, 0, 24, 32),
   sheet.get(48, 0, 24, 32),
   sheet.get(72, 0, 24, 32),
   sheet.get(96, 0, 24, 32),
   sheet.get(120, 0, 24, 32)
  ];
  //walk_E = [
   // ]
  
  
  //walk_E[0] = ;
  //walk_E[1] = sheet.get( 24, 32, 24, 32);
  //walk_E[2] = sheet.get( 48, 32, 24, 32);
  //walk_E[3] = sheet.get( 24, 32, 24, 32);

  //walk_S[0] = sheet.get(  0, 64, 24, 32);
  //walk_S[1] = sheet.get( 24, 64, 24, 32);
  //walk_S[2] = sheet.get( 48, 64, 24, 32);
  //walk_S[3] = sheet.get( 24, 64, 24, 32);
//
  //walk_W[0] = sheet.get(  0, 96, 24, 32);
  //walk_W[1] = sheet.get( 24, 96, 24, 32);
  //walk_W[2] = sheet.get( 48, 96, 24, 32);
  //walk_W[3] = sheet.get( 24, 96, 24, 32);
}

function draw() {
  background(255);
  image(walk_N[1], 300, 200, 96, 128);//args: 3-5 - image variable,x pos, y pos , aspect)
}