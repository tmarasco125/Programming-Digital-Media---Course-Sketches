var walkS = []
var sheet
var walkL =[]
var walkR =[]
var walkU = []

function preload(){
  sheet = loadImage("link.png");
}

function setup() {
  createCanvas (800, 800);
  frameRate(6);
  
  walkS = [
    sheet.get(0, 64, 24, 32),
    sheet.get(24, 64, 24, 32),
    sheet.get(48, 64, 24, 32),
    //sheet.get(72, 64, 24, 32),
    //sheet.get(96, 64, 24, 32),
    //sheet.get(120, 64, 24, 32)
  ];
  
 
  
  
  
  
  
  spriteWidth = 24
  
  for(var i = 0; i < 3; i++){
    walkL[i] = sheet.get(i * spriteWidth, 96, 24, 32);
  }
    
  for(var i = 0; i < 3; i++) {
  walkU[i] = sheet.get(i * spriteWidth, 0, 24, 32);
    }
  
  for(var i = 0; i < 3; i++) {
  walkS[i] = sheet.get(i * spriteWidth, 0, 24, 32);
    }
}

function draw() {
  var frame = frameCount % 3
  
  
  background(0, 255, 200);
  
  image(walkS[frame], 110, 20, 96, 128);
  image(walkL[frame], 330, 20, 96, 128);
  
  
  //console.log(mouseY);
}