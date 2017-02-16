/* PDM Course: Web Graphics Unit, Benchmark Assignment 1:
Basic Drawing in P5.js

Image 4 Answer: Red Star in Green Circle on Blue Background
Code by Anthony T. Marasco -2016
*/

function setup() {
  createCanvas(500, 500);
  background(0, 0, 255);
}

function draw() {
  strokeWeight(2);
  stroke(255); //white colored stroke lines
  fill(35, 101, 0);
  ellipse(250, 250, 100, 100);
  fill(255, 0, 0);
  //We'll use a series of vertex() functions to create the points
  //of our star shape
  beginShape(); //star shape!
  vertex(250, 200); //top point (1)
  vertex(265, 240); //bottom-right of top point (2)
  vertex(300, 240); //top right point (3)
  vertex(270, 260); //inner-right point (4)
  vertex(280, 290); //bottom right point (5)
  vertex(250, 275); //bottom center point (6)
  vertex(220, 290); //bottom left point (7)
  vertex(230, 260); //inner-left point (8)
  vertex(200, 240); //top left point (9)
  vertex(235, 240); //bottom-left of top point (10)
  endShape(CLOSE); //needed to close line segments together


  //figuring out points for star
  //stroke(0)
  //strokeWeight(2)
  //point(250, 200)
  //point(300, 240)
  //point(280, 290)
  //point(220, 290)
  //point(200, 240)


}