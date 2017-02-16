/* PDM Course: Web Graphics Unit

For Loops and Arrays Combinded: Blinky Ghosts with Arrays
Code by Anthony T. Marasco -2016
*/

var eyeSize

var gValues
var colorChoice
var ghostX


function setup() {
  createCanvas(930,500);
  
  eyeSize = 25;
  
  ghostX =[//HERE'S AN ARRAY OF ALL GHOST X PLACEMENTS
    10,
    110,
    210,
    310,
    410,
    510,
    610,
    710,
    810]
  
  
  
  ghostColor =[
    randomColorz(),
    randomColorz(),
    randomColorz(),
    randomColorz(),
    randomColorz(),
    randomColorz(),
    randomColorz(),
    randomColorz(),
    randomColorz()]
}


function draw() {
  background(230);
   
  //Take a look at this for loop. How do each of it's parts work??
  for(var i=0;i<ghostX.length;i++){
    drawGhost(ghostX[i],height/2,ghostColor[i]);
  }
  

}



//here is our Ghost making function!
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
  
  //How does this other homemade function work???
  function randomColorz() {
    var tempColor =[
      random (255),
      random (255),
      random (255)
    ];
    
    return tempColor;
  }
