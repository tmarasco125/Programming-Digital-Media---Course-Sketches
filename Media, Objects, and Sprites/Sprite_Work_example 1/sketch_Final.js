var linkCount = 4;
var linkSprite = [];  // an array of link based Sprite objects.

function preload(){
      // create the link objects and preload the images.
  linkSprite[0] = new Sprite("link.png",50,50);
  linkSprite[1] = new Sprite("link.png",random(600),random(400));
  linkSprite[2] = new Sprite("link.png",random(600),random(400));
  linkSprite[3] = new Sprite("link.png",random(600),random(400));
  
}

function setup() {
  createCanvas(600,400);

    // Set any properties you would like...  
  linkSprite[0].speed = 10;

}

function draw() {
  
  background(255);

  if (frameCount % 4 == 0)    // Instead of slowing down the entire framerate, you can just draw every x frames
  {
    if (keyIsPressed)   // Am I walking?
    {
      for (var i = 0; i < linkCount; i++) {
        linkSprite[i].walk(keyCode);    // update position and animation frame
      }
    }
    else
    {
      for (var i = 0; i < linkCount; i++) {
        linkSprite[i].stop();   // stop walking and reset animagtion
      }
    }
  }
  
  for (var i = 0; i < linkCount; i++) {
    linkSprite[i].draw();   // draw each sprite!
  }
  
}



// *************************** SPRITE OBJECT ********


var Sprite = function(nameOfSpriteFile, initX, initY) {//our Class Constructor
  
  // Create all variables  
  // this.variable for properties
  // var variable for internal variables
  var sheet;
  var sheetFileName = nameOfSpriteFile;//assigning title more permanent so it can be called other places
  var walkN = [];
  var walkS = [];
  var walkE = [];
  var walkW = new Array();  // Same as literal creation above.
  var walkP = []; // Our current walking set of sprites to draw
  
  var xPos= initX;
  var yPos = initY;
  this.speed = 5;   // Default Speed of movement this is accessible outside the object
  var frame = 1;  // Initial frame of animation

  this.draw = function() {
    image(walkP[frame], xPos, yPos, 96,128);
  }
  
  this.walk = function(pressedKey) {//pressed key gets passed into here
    if (pressedKey == UP_ARROW) {
      walkP = walkN;
      yPos = yPos - this.speed;
    }
    if (pressedKey == RIGHT_ARROW) {
      walkP = walkE;
      xPos = xPos + this.speed;
    }
    if (pressedKey == DOWN_ARROW) {
      walkP = walkS;
      yPos = yPos + this.speed;
    }
    if (pressedKey == LEFT_ARROW) {
      walkP = walkW;
      xPos = xPos - this.speed;
    }
    
    frame = (frame+1) % 6;     // limiting the frame to 6 animation frames by using modulo
  }
  
  this.stop = function() {
    frame = 1;
  }
  
  
      // Loads the sprite sheet -- MUST be done in the preload function!!!
  this.loadSheet = function(){
    
        // loadImage with the file name to load, and a function to then chop up the sheet into animation arrays
    sheet = loadImage(sheetFileName, function() {
      // 3 ways to create the animation arrays:
        // Explicitly with array literals
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
        walkW[i] = sheet.get(i * spriteWidth, 96, 24, 32);
      }
      
      walkP = walkS;  // Setting the first drawing state.
      
    });//string for image name
    
  }
  
  
  
  this.loadSheet();
}

