/* PDM Course: Web Graphics Unit

Into to Variables: Overlapping RGB Circle with Mouse Position
Code by Anthony T. Marasco -2016
*/


function setup() {
  createCanvas(700, 700)
  
}

function draw() {
  background(255)//background needs to redraw each loop
  noStroke()
  fill(255, 102, 102, 150)
  ellipse(mouseX, mouseY, 250, 250)
  noStroke()
  fill(121, 121, 235, 150)
  ellipse(width/2-150, height/2+50, 250, 250)
  translate(150, 0)
  fill(102, 255, 102, 150)
  ellipse(width/2-100, height/2+50, 250, 250)
  
}