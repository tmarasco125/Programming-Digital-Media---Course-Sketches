/* PDM Course: Web Graphics Unit, Benchmark Assignment 1:
Basic Drawing in P5.js

Image 3 Answer: Pac-Man and Blinky Ghost
Code by Anthony T. Marasco -2016

*** Uses translate() to make placement of eyes easier for students. Avoid using transtlate outside of stationary drawings
since it moves the 0,0 location on the canvas. A push() and pop() pair would be more efficient for multiple
shapes/objects ***

*/

function setup() {
  createCanvas(700, 500);
  angleMode(DEGREES);//Easier for students without experience with Radians

}

function draw() {
  background(0);
  noStroke(); //no outlines for PacMan
  fill(227, 207, 87); //fill PacMan with yellow
  arc(width / 2 - 150, height / 2, 120, 120, 220, 145); //Left-facing Pac-Man shape

//Now for our Blinky Ghost
  fill(192, 32, 32); //fill Blinky with red
  noStroke(); //make no parts of Blinky have outlines
  rect(width / 2, height / 2, 100, 60); //Blinky body base
  ellipse(width / 2 + 50, height / 2, 100, 100); //Blinky body head
  stroke(255); //white stroke color for Blinky eyeballs
  strokeWeight(4); //give him BIG eyeballs
  fill(71, 96, 255); //fill Blinky eyes with a beautiufl blue
  ellipse(width / 2 + 25, height / 2, 25, 25); //Blinky's left eye
  translate(50, 0); //take the same code for left eye, duplicate it over for right eye
  ellipse(width / 2 + 25, height / 2, 25, 25); //Blinky's right eye

}