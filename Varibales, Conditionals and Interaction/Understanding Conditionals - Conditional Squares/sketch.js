/* PDM Course: Web Graphics Unit

Into to Conditionals: Conditional Squares
Code by Anthony T. Marasco -2016
*/

function setup() {
  createCanvas(600, 900);
  strokeWeight(4);
  background(200);
}


function draw() {
  //The optimal way to show this is to have a nested if statement,
  //seen here:

  if (mouseIsPressed == true) {
    if (mouseX < 300) {
      fill(2, 200, 200);
    } else {
      fill(255, 0, 242);
    }
    rect(mouseX, mouseY, 50, 50);
  }

  //An alternate way to teach this is to start by showing
  //two seperate if statements first, before eventually
  //nesting them like above

 // if (mouseIsPressed == true) {
 //   rect(mouseX, mouseY, 50, 50);
 // }
//
 // if (mouseX < 300) {
 //   fill(2, 200, 200);
 // } else {
 //   fill(255, 0, 242);
 // }

}