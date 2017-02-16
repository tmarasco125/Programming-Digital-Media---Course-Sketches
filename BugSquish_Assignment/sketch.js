var bugs = [];   // our crazy bugs
var bugNumber, currentScore; 
var start, end; // states of the game
var startTime;
var counter, score; 
var backgroundImage; 

function preload() {
  backgroundImage = loadImage("background.jpg");
}

function setup() {
  createCanvas(600,400);
  
  counter = 0; 
  currentScore = 0; 
  bugNumber = 15; 
  frameRate(16);
  loadBugs();   //loads an array of bugs
  start = true; //state: start
  end = false;  //state: game over
  score = 0;
  textSize(24);
  rectMode(CENTER);
  
}

function draw() {
  
  image(backgroundImage, width/2, height/2, 600,600);
  
  //****************** Part 1 ******************************
  //What does this block below do? Comment on each line
  //and break down what each line of code creates in order to figure out how
  //the whole block works.
  if (start) { // State: New Game
    fill(100, 100, 100); 
    rect(width/2, height/2, 300, 75, 7); 
    fill(0, 0, 0); 
    textAlign(CENTER, CENTER)
    text("Squish all the bugs!\n Click anywhere to begin!", width/2, height/2);
    if (mouseIsPressed) {
      start = false;
    startTime = millis();
    }
  } else if (end) { // State: Game over
    bugs = []; 
    fill(100, 100, 100); 
    rect(width/2, height/2, 300, 150, 7); 
    fill(0, 0, 0); 
    textAlign(CENTER,CENTER)
    text("Game Over!\n Final Score: "+score+"\n Click to replay!", width/2, height/2);
    if (mouseIsPressed) {
      setup();
    }
  } else { // State: Game
    fill(0, 0, 0); 
    moveBugs();
    textAlign(LEFT,TOP)
    text("Score: "+score, 5, 30);
    text("Time: " + timer(), 5, 55); 
  }
  //************************** End Part 1**************************************
}

function timer() {
  var time = int((millis() - startTime) / 1000);
  if(time > 30) {
    end = true;
  }
  return time;
}

function loadBugs() { // load Bug objects into the array
  counter = 0; 
  bugs = [];    // clear the bug array
//********************** Part 2 *************************
//This is where we generate our colelction of Bug objects! Look at this for loop
//and leave a comment below it that explains how it works
for (i=0;i<bugNumber; i++){
  bugs[i]= new Bug (random(width), random(height), 4);
  }
}
//**********************End Part 2************************

function moveBugs() {
  for (i = 0; i < bugNumber; i++) {
    bugs[i].move();
  }
}

function mouseReleased() { 
 
//****************************** Part 3 ***************************** 
  //program a code block that checks whether the bugs have been squished,
  //You'll first need to create a method function inside of your Constructor
  //that reports when the bugs get squished!
  for(i=0; i< bugs.length; i++){
    bugs[i].checkForSquish;
    counter++;
    score++;
  }
  if (counter >= bugNumber) {
    loadBugs(); //load more bugs
  }
  push(); // Visualization of click
    fill(255, 0, 0); 
    strokeWeight(3); 
    ellipse(mouseX, mouseY, 22, 22);
  pop();
}

//********************Below this line is our Object portion of the code***********************

function Bug (initX, initY, initSpeed) {
  //***** Property Variables********
  var xPosition = initX;//Note!: This is very similar to this.xPosition in past examples
  var yPosition = initY; 
  var speed = initSpeed; 
  var dead = false; 
  var walk = []; 
  var splat;
  //This next line is a compressed version of making a this.grab() method!
  var sheet = loadImage("BugSprites.png", function() {
    walk[0] = sheet.get(0, 0, 160, 160); 
    walk[1] = sheet.get(160, 0, 160, 160); 
    walk[2] = sheet.get(0, 0, 160, 160);
    walk[3] = sheet.get(320, 0, 160, 160); 
    splat = sheet.get(480, 0, 160, 160);
  }); 
  var frame = 0;
  var direction = random(["up","right","down","left"]);
  imageMode(CENTER); 


  this.move = function() {
    if (dead) {
      drawSplatted();
    } else { 
      drawMoving();
      frame++; 
    }
  }
  
  function drawSplatted() {
    var rotateAmount = rotateIt();
    
    push();
      translate(xPosition, yPosition);
      rotate(rotateAmount); 
      image(splat, 0, 0, 80, 80);
    pop();
  }
  
  function drawMoving() {// Move the bug
//********************** Part 4********************************    
  if(direction == "up") {
      yPosition = yPosition - speed;
      if (yPosition < 0) {
        yPosition = height;
      }
    } else if(direction == "right") {
      xPosition = xPosition + speed;
      if (xPosition > width ) {
        xPosition = 0;
      }
    } else if(direction == "down") {
      yPosition = yPosition + speed; 
      if (yPosition > height) {
        yPosition = 0;
      }
    } else if(direction == "left") {
      xPosition = xPosition - speed; 
      if (xPosition < 0) {
        xPosition = width;
      }
    }
    
    
    
    
    
    
    
    
    
    
    
     
    
    
    
    
     
    
    
    
//****************************End Part 4***************************    
        // Draw the Bug
    var rotateAmount = rotateIt();
      
    push();
      translate(xPosition, yPosition); 
      rotate(rotateAmount); 
      image(walk[frame % 4], 0, 0, 80, 80);
    pop();
  }
  //Can you break down what rotateIt() does??
  function rotateIt() {
    if(direction == "up") {
      return 0;
    } else if(direction == "right") {
      return HALF_PI;
    } else if(direction == "down") {
      return PI;
    } else if(direction == "left") {
      return -HALF_PI;
    }
  }
  
//********************Part 5***********************************
  this.checkForSquish = function() {
    if (direction == "up" || direction == "down") {
      if ((mouseX <= xPosition + 20 && mouseX >= xPosition - 20) && (mouseY <= yPosition + 26 && mouseY >= yPosition - 26) && !dead) {
        dead = true; 
        return true;
      }
    } else {
      if ((mouseX <= xPosition + 26 && mouseX >= xPosition - 26) && (mouseY <= yPosition + 20 && mouseY >= yPosition - 20) && !dead) {
        dead = true; 
        return true;
      }
    }
    speed++;  // Increased speed with every click
    return false;
  }
  
}


