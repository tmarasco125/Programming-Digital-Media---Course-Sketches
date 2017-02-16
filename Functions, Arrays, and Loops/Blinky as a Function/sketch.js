/* PDM Course: Web Graphics Unit

Into to Functions: Blinky Ghost as a Function
Code by Anthony T. Marasco -2016
*/


function setup() {
  createCanvas(900, 500);
  background(0, 255, 12);
}

function draw() {

  
}

function drawGhost(x, y, colorG) { //looking for some argument called "head"

  fill(colorG); //fill Blinky with red
  noStroke(); //make no parts of Blinky have outlines
  rect(x, y, 100, 60); //Blinky body base
  ellipse(x + 50, y, 100, 100); //Blinky body head
  stroke(255); //white stroke color for Blinky eyeballs
  strokeWeight(4); //give him BIG eyeballs
  fill(71, 96, 255); //fill Blinky eyes with a beautiufl blue
  ellipse(x + 25, y, 25, 25); //Blinky's left eye
  ellipse(x + 75, y, 25, 25);
}