/* PDM Course: Web Graphics Unit

Into to Variables: Overlapping RGB Circle with Mouse Position
Code by Anthony T. Marasco -2016
*/

var circleSize
var circleSize2
var speed

function setup() {
  createCanvas(700, 1200);
  
  
  circleSize = 200;
  circleSize2 = 200;
  speed = 7;
}

function draw() {
  background(255);
  
  circleSize = circleSize + speed;
  circleSize2 = circleSize2 + speed;
  
  noStroke();
  fill(255, 102, 102, 150);//red circle
  ellipse(mouseX, mouseY, circleSize2, circleSize);
  noStroke();
  fill(121, 121, 235, 150);//blue circle
  ellipse(width/2-150, height/2+50, circleSize2, circleSize);
  fill(102, 255, 102, 150);//green circle
  ellipse(width/2+50, height/2+50, circleSize2, circleSize);
  
}