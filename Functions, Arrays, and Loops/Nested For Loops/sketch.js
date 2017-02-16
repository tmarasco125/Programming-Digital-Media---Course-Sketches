

function setup() {
  createCanvas(800, 800);
  frameRate (20);
  
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  
/* Understanding this Nested Loop: a loop repeats a certain task DURING one cycle of draw(). 
Each time through draw(), something updates or changes.
*/
//Outer loop states: Draw cirlces along the X axis. Inner loop states
//that while drawing those X axis circles, also draw a Y axis circle for
//EACH X axis circle!

  for (var x =0; x <= mouseX; x += 50){
    for (var y = 0; y <= mouseY; y += 50){
      fill(random(255), random(200), random(255));
      ellipse(x , y , 25, 25);
    }
    
  }
 
 
}

