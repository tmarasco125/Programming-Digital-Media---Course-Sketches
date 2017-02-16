/* PDM Course: Web Graphics Unit, Benchmark Assignment 1:
Basic Drawing in P5.js

Image 4 ALTERNATE Answer: Red Star
Code by Anthony T. Marasco -2016

**** This is an ALTERNATE answer for Image 4. It uses two six-point
stars with no stroke to create a red star with a white outline (actually another white star
layered behind it. Pretty sneaky, Sis. ****

*/
function setup() {
  createCanvas(500, 500);
  background(57, 52, 216);
}

function draw() {
  strokeWeight(2);
  stroke(255);//white colored stroke lines
  fill(35, 101, 0);//fill green circle
  ellipse(250, 250, 100, 100)
  fill(216, 52, 52);
  
  //white star shape behind red star shape
  beginShape();//star shape!
  stroke(255)
  strokeWeight(3)
  fill(255, 255, 255)
  vertex(250, 200);//top point (1)
  vertex(280, 290);//bottom right point (5)
  vertex(200, 240);//top left point (9)
  vertex(300, 240);//top right point (3)
  vertex(220, 290);//bottom left point (7)
  vertex(250, 200);//top point (1)
  endShape(CLOSE);
  //redstar shape on right
  beginShape();//star shape!
  noStroke()
  fill(255, 0, 0)
  vertex(250, 200);//top point (1)
  vertex(280, 290);//bottom right point (5)
  vertex(200, 240);//top left point (9)
  vertex(300, 240);//top right point (3)
  vertex(220, 290);//bottom left point (7)
  vertex(250, 200);//top point (1)
  endShape(CLOSE);
  
  
  

}