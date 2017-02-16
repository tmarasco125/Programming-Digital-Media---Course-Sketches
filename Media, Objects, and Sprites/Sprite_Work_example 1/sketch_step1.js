var img;
var walkN;
var walkS;
var walkE;
var walkW;
var sheet
var stand

function preload(){
  
  sheet = loadImage("link.png");//string for image name
  
}

function setup() {
  createCanvas(600,400);
  


  walkS = [
    sheet.get(0, 64, 24, 32),
    sheet.get(24, 64, 24, 32),
    sheet.get(48, 64, 24, 32),
    sheet.get(72, 64, 24, 32),
    sheet.get(96, 64, 24, 32),
    sheet.get(120, 64, 24, 32)
  ];
  
    // creating each frame separately
  walkN[0] = sheet.get(0, 0, 24, 32);
  walkN[1] = sheet.get(24, 0, 24, 32);
  walkN[2] = sheet.get(48, 0, 24, 32);
  walkN[3] = sheet.get(72, 0, 24, 32);
  walkN[4] = sheet.get(96, 0, 24, 32);
  walkN[5] = sheet.get(120, 0, 24, 32);
  
    // looping through and loading the frames
  var spriteWidth = 24;
  for(var i = 0; i < 6; i++) {
    walkE[i] = sheet.get(i * spriteWidth, 32, 24, 32);
  }
  
  for(var i = 0; i < 6; i++) {
    walkW[i] = sheet.get(i * spriteWidth, 96, 24, 32);
  }
  
  
}

function draw() {
  
  var frame = frameCount % 6;
  
  background(255);
  // image(sheet, 0, 0); //args: 3-5 - image variable,x pos, y pos , aspect)
  
  //image(walkN[frame], 110, 20, 96, 128);
  //image(walkS[frame], 100, 150, 96, 128);
  
  //image(walkE[frame], 200, 150, 96, 128);
  //image(walkW[frame], 200, 20, 96, 128);
  

  
}



