// Programming Digital Media
// 
// Jesse Allison 2016
//
// Example of final program for the Bug Squish Game
//

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
  for (var i = 0; i < bugNumber; i++) {
    bugs[i] = new Bug(random(width), random(height), 4);
  }
}

function moveBugs() {
  for (i = 0; i < bugNumber; i++) {
    bugs[i].move();
  }
}

function mouseReleased() { 
  for (i = 0; i < bugs.length; i++) { //Puts dead bugs first in array so they are drawn first
    if (bugs[i].isHit()) {
      counter++; 
      score++;
    }
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



function Bug (initX, initY, initSpeed) {
  
  var xPosition = initX; 
  var yPosition = initY; 
  var speed = initSpeed; 
  var dead = false; 
  var walk = []; 
  var splat;
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
  
  var drawSplatted = function() {
    var rotateAmount = rotateIt();
    
    push();
      translate(xPosition, yPosition);
      rotate(rotateAmount); 
      image(splat, 0, 0, 80, 80);
    pop();
  }
  
  var drawMoving = function() {
    
        // Move the bug
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
        // Draw the Bug
    var rotateAmount = rotateIt();
      
    push();
      translate(xPosition, yPosition); 
      rotate(rotateAmount); 
      image(walk[frame % 4], 0, 0, 80, 80);
    pop();
  }
  
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
  
  
  this.isHit = function() {
    if (direction == 0 || direction == 2) {
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


