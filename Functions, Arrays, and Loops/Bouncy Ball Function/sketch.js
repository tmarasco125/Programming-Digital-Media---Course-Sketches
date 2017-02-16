// position of the ball
var x = 20;
// how far the ball moves every time
var speed = 5;



function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(202, 255, 97);
  bouncyBall(200, 50, 210, 10);
  bouncyBall(100, 100,197, 110);
  x = x + speed;
 
}

function bouncyBall(ballY, ballD, ballC1, ballC2){
  
  
  ellipse(x, ballY, ballD, ballD);//here is our ball
  
    if (x > 375){
        fill(ballC1);
    }
    if (x < 25){
        fill(ballC2);
    }
    
    
    
    if (x > 375) {
        speed = -5;
    }
    if (x < 25) {
        speed = 5;
    }
}