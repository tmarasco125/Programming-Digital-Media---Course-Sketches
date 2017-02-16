var sheet
var moon
var linkyRighty
var walkL =[]
var walkU = []
var walkD = []
var linkX =0;
var linkY = 0;
var speed = 10;




function preload(){
  sheet = loadImage('link.png');
  
}
  
function setup() {
  createCanvas(800, 800);
  frameRate(10);
  
  linkyRighty =[
    sheet.get(0, 32, 24, 32),
    sheet.get(24, 32, 24, 32),
    sheet.get(48, 32, 24, 32),
    sheet.get(72, 32, 24, 32),
    sheet.get(96, 32, 24, 32),
    sheet.get(120, 32, 24, 32)
    ]
  var spriteWidth =24
  
  for(var i = 0; i < 3; i++){
    walkL[i] = sheet.get(i * spriteWidth, 96, 24, 32);
  }
    
  for(var i = 0; i < 3; i++) {
  walkU[i] = sheet.get(i * spriteWidth, 0, 24, 32);
    }
  
  for(var i = 0; i < 3; i++) {
    walkD[i] = sheet.get(i * spriteWidth, 64, 24, 32);
    }
}

function draw() {
  
  
  var frame = frameCount % 3
  

  background(0, 255, 200);
  
  this.walk = function(){
    
  }
  if (keyIsPressed == true){
    if(keyCode == UP_ARROW){
      linkY = linkY - speed;
      image(walkU[frame], linkX, linkY, 96, 128);
    } else if(keyCode == RIGHT_ARROW){
      linkX = linkX + speed;
      image(linkyRighty[frame], linkX, linkY, 96, 128);
    } else if(keyCode == LEFT_ARROW){
      linkX = linkX - speed;
      image(walkL[frame], linkX, linkY, 96, 128);
    } else if(keyCode == DOWN_ARROW){
      linkY = linkY + speed;
      image(walkD[frame], linkX, linkY, 96, 128);
    } 
    
  }else{
      image(walkD[1], linkX, linkY, 96, 128);
  }
  //image(linkyRighty[frame], 100, 100, 96, 128)
  
 
}
//Selection X numbers = 0, 24, 48, 72, 96, 120
//Selection Y number = 32
//Link Size width = 24
//Link height = 32