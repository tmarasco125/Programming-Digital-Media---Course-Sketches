/* PDM Course: Web Graphics Unit

Into to Arrays: Blinky Ghosts with Arrays
Code by Anthony T. Marasco -2016
*/

var eyeSize
var gValues
var colorChoice
var ghostX


function setup() {
  createCanvas(900,500);
  
  eyeSize = 25;
  
  ghostX =[//Here's an array holding all of our Ghosts' x positions
    10,
    130,
    260,
    390,
    520,
    650,
    780]
  colorChoice =[
    random (255),
    random (255),
    random (255)];
  colorChoice2 =[
    random (255),
    random (255),
    random (255)];
  //colorChoice= randomColorz();
  //colorChoice2= randomColorz();
  
}


function draw() {
  background(0, 255, 12);
   
  drawGhost(ghostX[0],height/2,colorChoice);
  //
  drawGhost(ghostX[1], height/2,colorChoice2);
  drawGhost(ghostX[2], height/2,colorChoice);
  drawGhost(ghostX[3], height/2,colorChoice2);
  drawGhost(ghostX[4], height/2, colorChoice);
  drawGhost(ghostX[5], height/2,colorChoice2);
  
  }
  
 //console.log(colorChoice); 


function drawGhost(x, y, gColor){
  fill(gColor);//fill Blinky with red
  noStroke();//make no parts of Blinky have outlines
  rect(x, y, 100, 60);//Blinky body base
  ellipse(x+50, y, 100, 100);//Blinky body head
  stroke(255);//white stroke color for Blinky eyeballs
  strokeWeight(4);//give him BIG eyeballs
  fill(71, 96, 255);//fill Blinky eyes with a beautiufl blue
  ellipse(x+25, y, eyeSize, eyeSize);//Blinky's left eye
  //translate(50, 0);//take the same code for left eye, duplicate it over for right eye
  ellipse(x+75, y, eyeSize, eyeSize);
  }
  
  
  
