var ghostColors

function setup() {
  createCanvas(1000, 830);
  background(221);
  
  ghostColors = randomColorz();
  
  
}

function draw() {
  
  
/* Understanding this Nested Loop: a loop repeats a certain task DURING one cycle of draw(). 
Each time through draw(), something updates or changes.
*/
//Outer loop states: Draw Blinkies along the X axis. Inner loop states
//that while drawing those X axis Blinkies, also draw a Y axis circle for
//EACH X axis circle!

  for (var x =0; x <= width-100; x += 110){
    for (var y = 50; y <= width-60; y += 120){
      
      drawGhost(x, y, ghostColors)
    }
    
  }
 
 
}

function drawGhost(x, y, gColor){
  fill(gColor);//fill Blinky with red
  noStroke();//make no parts of Blinky have outlines
  rect(x, y, 100, 60);//Blinky body base
  ellipse(x+50, y, 100, 100);//Blinky body head
  stroke(255);//white stroke color for Blinky eyeballs
  strokeWeight(4);//give him BIG eyeballs
  fill(71, 96, 255);//fill Blinky eyes with a beautiufl blue
  ellipse(x+25, y, 25, 25);//Blinky's left eye
  //translate(50, 0);//take the same code for left eye, duplicate it over for right eye
  ellipse(x+75, y, 25, 25);
  }
  
  function randomColorz() {
    var tempColor =[
      random (255),
      random (255),
      random (255)
    ];
    
    return tempColor;
  }