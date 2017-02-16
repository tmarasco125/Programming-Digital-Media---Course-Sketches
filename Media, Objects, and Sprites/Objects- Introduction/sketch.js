var muncher;
var chomper;
var globalSpeed;

function setup() {
  frameRate(50);
  globalSpeed = 1;
  angleMode(DEGREES)
  createCanvas(900, 600);
  
  
  muncher = new Pacman(width/2, height/2);//define parameters of object here
  
  
  chomper = new Pacman(100, 100);
}

function draw() {
  background(100);
  
//  if (keyIsPressed === true && key == "m"){
//    muncher.isMoving = true;
//  } else {
//    muncher.isMoving = false;
//  }
  muncher.draw();
 
  
  
//  if (keyIsPressed == true && key == "c"){
//    chomper.bounce();
//  }
  
  if (key == "c" && !chomper.isMoving){
    chomper.isMoving = true;
  } else if (key == "c" && chomper.isMoving){
    chomper.isMoving = false;
  }
  
  chomper.draw();
  
}

function keyTyped(){
  console.log(key);
  if (key == "m" && !muncher.isMoving){
    muncher.isMoving = true;
  } else if (key == "m" && muncher.isMoving){
    muncher.isMoving = false;
  }
  
}



//here is our PacMan constructor
var Pacman = function(startX, startY){//assign arguments of object here
  //properties of PacMan first
  this.x = startX; //these values get passed through the constructor and into the object itself
  this.y = startY;
  this.pacColor = color(255);
  var speed = 5 * globalSpeed;
  this.isMoving = false;// always "not moving" by default
  
  //methods next
  this.draw = function() {
    //by moving this (typically in draw()) into our constructor,
    //our code that uses a PacMan object doesn't have to worry about
    //the specific details of how it is drawn each time we want to
    //have a new one.
    if (this.isMoving) {
      this.bounce();
    }
    
    fill(this.pacColor);
    arc(this.x, this.y, 120, 120, 220, 145);
    //console.log(this.x);
  }
  
  //a second method, this updates the Pacman x,y locations randomly
  this.bounce = function() {
    if (this.x > width - 60){
      speed = -5 * globalSpeed;
      this.randomColor();
    }
  
    if (this.x < 60){
      speed = 5 * globalSpeed;
      this.randomColor();
      // console.log(this.x);
    } 
    this.x = this.x + speed
  }
  
  
  
  this.randomColor = function(){
    this.pacColor = color(random (50), random (100), random (150));
  }
  
  
}

