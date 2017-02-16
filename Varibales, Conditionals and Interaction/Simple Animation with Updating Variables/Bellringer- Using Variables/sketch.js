/* PDM Course: Web Graphics Unit

Variables Bellringer! 

Code by Anthony T. Marasco, based on excercise by
Daniel Shiffman -2016
*/

//What variables do you need to create to move the pink ball?


// position of the ball

// how far the ball moves every time
var ballX;
var speed;
var ballY;

function setup() {
  createCanvas(400, 400);
  background(202, 255, 97);
  ballX = 200;
  speed = 7;
  ballY = 200;
}

function draw() {
 background(202, 255, 97);//if we don't want a "trail" leftover from the ball, we need to redraw backround!
    
    //teal ball
    fill(18, 227, 220);
    ellipse(100,ballY, 50, 50);
    
    if(ballY< 0){
      speed = 7;
    }else if(ballY > 400){
      speed = -7;
    }
    ballY = ballY + speed;
    
    
    
    //pink ball
    fill(233, 18, 129);
    ellipse(ballX, 200, 50 ,50);
    
    if(ballX < 0){
      speed = 7;
    } else if(ballX> 400){
      speed = -7;
    }
    
    ballX = ballX + speed;
    
}
 