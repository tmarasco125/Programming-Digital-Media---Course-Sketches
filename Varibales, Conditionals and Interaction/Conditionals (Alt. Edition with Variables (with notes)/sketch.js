/* PDM Course: Web Graphics Unit

Conditionals: Conditional Squares (Alt. Editon with variable)
Code by Anthony T. Marasco -2016
*/

var squareColor


function setup() {
  createCanvas(600, 900);
  strokeWeight(4);
  
  
}
//*Now lets make some Conditionals!


function draw() {
  background(200);
 
  //lets change the color of the square based on where the cursor is
  if (mouseX < 300){//if the mouseX value less than 300?
    squareColor = color(2, 200, 200);
    fill(squareColor);//make a teal square
  } else { //if mouseX value is 300 or more...
    squareColor = color(255, 0, 242);
    fill(squareColor);//make a pink square!
  }
  
//now we draw a square only when the mouse is pressed
  if (mouseIsPressed == true){//check: is the mouse pressed?
    rect(mouseX, mouseY, 50, 50)//if it is, draw a square at cursor location
  }
  
}
