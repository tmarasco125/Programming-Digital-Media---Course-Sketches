var sheet
var linkA
var speed = 10;
var frame 

function preload(){
  
  sheet = loadImage("link.png");//string for image name
  
}

function setup() {
  createCanvas(600,600);
  frameRate(10);
  
  linkA = new Link(100, 100, sheet);
  linkB = new Link (300, 200, sheet);
  linkC= new Link (200, 350, sheet);
  linkA.load();
  linkB.load();
  linkC.load();

}

function draw() {
  background(255);
  
  linkA.drawLinkNorth();
  linkB.drawLinkSouth();
  linkC.walk();
  
  
}

function Link(linkX,linkY, tempSprite){
  this.xPosition = linkX;
  this.yPosition = linkY;
  this.sprite =tempSprite;
  var walkN = [];
  var walkS = [];
  var walkE = [];
  var walkW = []; 
  
  
  
  this.load = function(){
    walkS = [
    this.sprite.get(0, 64, 24, 32),
    this.sprite.get(24, 64, 24, 32),
    this.sprite.get(48, 64, 24, 32),
    this.sprite.get(72, 64, 24, 32),
    this.sprite.get(96, 64, 24, 32),
    this.sprite.get(120, 64, 24, 32)
  ];
  
    // creating each frame separately
  walkN[0] = this.sprite.get(0, 0, 24, 32);
  walkN[1] = this.sprite.get(24, 0, 24, 32);
  walkN[2] = this.sprite.get(48, 0, 24, 32);
  walkN[3] = this.sprite.get(72, 0, 24, 32);
  walkN[4] = this.sprite.get(96, 0, 24, 32);
  walkN[5] = this.sprite.get(120, 0, 24, 32);
    
    // looping through and loading the frames
  var spriteWidth = 24;
  for(var i = 0; i < 6; i++) {
    walkE[i] = this.sprite.get(i * spriteWidth, 32, 24, 32);
  }
  
  for(var i = 0; i < 6; i++) {
    walkW[i] = this.sprite.get(i * spriteWidth, 96, 24, 32);
  }
  
  }
  
  this.drawLinkNorth = function(){
    var frame = frameCount % 6;
    image(walkN[frame], this.xPosition, this.yPosition, 96, 128);
  }
  
  this.drawLinkSouth = function(){
    var frame = frameCount % 6;
    image(walkS[frame], this.xPosition, this.yPosition, 96, 128);
  }
  this.drawLinkStand = function(){
    image(walkS[1],this.xPosition, this.yPosition, 96, 128);
  }
  
  this.walk = function(){
    var frame = frameCount % 6;
      if (keyIsPressed == true){
      if(keyCode == UP_ARROW){
        this.yPosition = this.yPosition - speed;
        image(walkN[frame], this.xPosition, this.yPosition, 96, 128);
      } else if(keyCode == RIGHT_ARROW){
        this.xPosition = this.xPosition + speed;
        image(walkE[frame], this.xPosition, this.yPosition, 96, 128);
      } else if(keyCode == LEFT_ARROW){
        this.xPosition = this.xPosition - speed;
        image(walkW[frame], this.xPosition, this.yPosition, 96, 128);
      } else if(keyCode == DOWN_ARROW){
        this.yPosition = this.yPosition + speed;
        image(walkS[frame], this.xPosition, this.yPosition, 96, 128);
      } 
      
    }else{
        image(walkS[1], this.xPosition, this.yPosition, 96, 128);
    }
  }
  
}




