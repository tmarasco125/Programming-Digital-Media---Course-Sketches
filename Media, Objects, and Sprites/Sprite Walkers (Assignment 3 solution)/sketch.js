var carl//these variables are the names of our object instances
var speed
var bgColor1
var bgColor2
var backColor

function preload(){
  robots = loadImage('robot_new.png');//loading the sprite sheets into memory
  spelunky =loadImage('spelunky_new.png');
  pirate = loadImage('pirate_new.png');
}

function setup() {
  createCanvas(800,800);
  frameRate(12);//set our frame rate to 12 frames/second
  //Here is where we call for new instances of an object
  bgColor1 = [
    23,
    45,
    124];
    
  bgColor2 = [
    230,
    39,
    123];
    
  backColor = 255
    
  carl = new Sprite (0, 0, robots);//starting X, Y coordinates, variable of image to pull Sprites from
  rodger = new Sprite (100, 100, spelunky);
  sally = new Sprite (200, 250, pirate);
  //Look into our Object portion of the code: 
  // .load function grabs the single Sprites from the Sprite sheets
  // and then fills them into arrays. We need to do this for each instance
  // of an object that we call for.
  
  carl.load();
  sally.load();
  rodger.load();
  
  //Speed is a universal variable (how "fast" the Sprites walk) 
  //so it needs to go here.
  speed = 10
  
  
  
}

function draw() {
  background(backColor);
  
  //Look into our Object building code below: .walk function is all that needs
  // to be called here in walk for the Sprites to be displayed onto the screen
  //and to respond to key presses to move around.
  sally.walk();
  carl.walk();
  rodger.walk();
}

function mousePressed(){
  if(carl.clickTest()== true){
    backColor = bgColor1;
  }
  
  if(sally.clickTest() == true){
    backColor = bgColor2
  }
  
}

//********************* Everything Below Here is our Object Building Code ******************

//Here is our "Constructor" Function

function Sprite (tempX, tempY, tempCharacter){
//Properties of our Sprites: where our Sprites are currently standing at X,Y coordinates
  this.xPosition = tempX;
  this.yPosition = tempY;
//This Property is used to choose which Sprite Character we are using
  this.sprite = tempCharacter;
//These Arrays used in this.load below...
  var walkU =[];
  var walkD = [];
  var walkR = [];
  var walkL = [];

//Here is our first Method Function. It looks at our Sprite Sheet, grabs
//indivdual Sprites, and stores their positions into our Arrays
  
  this.load = function(){
    var spriteWidth = 80;
    for (i=0; i<6; i++){
      walkU[i] = this.sprite.get(i*spriteWidth, 400, 80, 80)
    }
    
    for (i=0; i<6; i++){
      walkD[i] = this.sprite.get(i*spriteWidth+480, 400, 80, 80)
    }
    
    for (i=0; i<8; i++){
      walkR[i] = this.sprite.get(i*spriteWidth, 0, 80, 80)
      }
      
    
    //for (i=8; i>1; i--){
    //  walkL[i] = this.sprite.get(i*spriteWidth, 80, 80, 80)
    //  }
    walkL = [
    this.sprite.get(560, 80, 80, 80),
    this.sprite.get(480, 80, 80, 80),
    this.sprite.get(400, 80, 80, 80),
    this.sprite.get(320, 80, 80, 80),
    this.sprite.get(240, 80, 80, 80),
    this.sprite.get(160, 80, 80, 80),
    this.sprite.get(80, 80, 80, 80)
    ];
  
  }
  
//Here is our next Method Function. It checks to see if an arrow key is pressed,
//and then moves your Sprite around the screen while cycling through items in
//certain arrays

  this.walk = function(){
    var frame = frameCount % 6;
    var frame2 = frameCount %8;
    var frame3 = frameCount %7;
    if (keyIsPressed == true){
      if(keyCode == UP_ARROW){
        this.yPosition = this.yPosition - speed;
        image(walkU[frame], this.xPosition, this.yPosition, 96, 128);
      } else if(keyCode == RIGHT_ARROW){
        this.xPosition = this.xPosition + speed;
        image(walkR[frame2], this.xPosition, this.yPosition, 96, 128);
      } else if(keyCode == LEFT_ARROW){
        this.xPosition = this.xPosition - speed;
        image(walkL[frame3], this.xPosition, this.yPosition, 96, 128);
      } else if(keyCode == DOWN_ARROW){
        this.yPosition = this.yPosition + speed;
        image(walkD[frame], this.xPosition, this.yPosition, 96, 128);
      } 
      
    }else{
        image(walkD[1], this.xPosition, this.yPosition, 96, 128);
    }
  }
  this.clickTest = function(){
    return (mouseX>this.xPosition && mouseX<this.xPosition+96 && mouseY>this.yPosition && mouseY <this.yPosition + 128)
  }
  
}