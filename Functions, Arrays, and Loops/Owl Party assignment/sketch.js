
function setup() {
  createCanvas(780, 620);
  background(121, 0, 233);
  
}

function draw() {
 push();
  translate(110, 110);//Owl placement X and Y
  //scale(0.25); //keep this around and uncomment in Step 3!
  stroke(7);//owl body color
  strokeWeight(70);
  line(0, -32, 0, -65); // Body
  noStroke();
  fill(255);//owl face color
  ellipse(-17.5, -65, 35, 35);  // Left eye dome
  ellipse(17.5, -65, 35, 35);   // Right eye dome
  arc(0, -65, 70, 70, 0, PI);   // Chin
  fill(0);
  ellipse(-14, -65, 8, 8);  // Left eye
  ellipse(14, -65, 8, 8);   // Right eye
  quad(0, -58, 4, -51, 0, -44, -4, -51); // Bea
  pop();
  
}

  



  