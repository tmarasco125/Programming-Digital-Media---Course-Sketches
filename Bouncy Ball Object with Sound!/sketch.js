var pinkBall;
var tealBall;
var pink 
var teal
var blip
var quackAttack

/* First we load our soundfile, just
like we do with an image or a movie
*/

function preLoad(){
  quackAttack = loadSound("Quack_Quack_2.wav");
  blip = loadSound("blip.wav");
}

function setup() {
  createCanvas(400, 400);
  background(202, 255, 97);
  pink = color(255, 0, 242);
  teal = color(18, 227, 220);
  pinkBall = new Ball (width/2, 50, 60, pink, 15);
  tealBall = new Ball (0, width/2, 25, teal, 5);
  blip.play();
}

function draw() {
 background(202, 255, 97);
 pinkBall.bounce();
 pinkBall.display();
 tealBall.bounce();
 tealBall.display();
 
}

function Ball(startX, startY,tempDiameter,ballColor, tempSpeed){
  this.xPos = startX;
  this.yPos = startY;
  this.size = tempDiameter;
  this.ballColor = ballColor;
  this.speed = tempSpeed;
  this.direction = "right"
  
  
  this.display = function (){
    fill(this.ballColor);
    ellipse(this.xPos, this.yPos, this.size, this.size);
  }
  
  this.bounce = function(){
     if (this.xPos > 375) {
        this.direction = "left"
        
    }
    if (this.xPos < 25) {
        this.direction = "right";
    }

    // move the ball
    if(this.direction == "right"){
       this.xPos = this.xPos + this.speed;
    } else{
       this.xPos = this.xPos - this.speed;
    }
   
  }
}