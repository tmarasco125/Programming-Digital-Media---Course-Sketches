/* PDM Course: Web Graphics Unit

Into to Variables: Basic Motion and a Conditional!

Code by Anthony T. Marasco, based on excercise by
Daniel Shiffman -2016
*/

// position of the ball
var x = 0;
// how far the ball moves every time
var speed = 5;
var ballColor
function setup() {
  createCanvas(400, 400);
  background(202, 255, 97);
  ballColor = color(18, 227, 220);
}

function draw() {
 background(202, 255, 97);//if we don't want a "trail" leftover from the ball, we need to redraw backround!
    
    x += speed;
    fill(ballColor);
    ellipse(x, 200, 50, 50);
    
    
    
    if (x > 375) {
        speed = -5;
    }
    if (x < 25) {
        speed = 5;
    }
    
    if (x > 375){
    ballColor = color(18, 227, 220);
    }
    
    if (x < 25){
       ballColor= color(255, 0, 242);
    }


    // move the ball
    
}
 