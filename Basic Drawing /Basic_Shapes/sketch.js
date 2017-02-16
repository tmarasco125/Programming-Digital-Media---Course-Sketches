function setup() {
  createCanvas(840, 840);
  angleMode(DEGREES);
  background(120)
}

function draw() {
  strokeWeight(8);
  strokeJoin(BEVEL);
  fill(255, 127, 18);
  rect(180, 100, 100, 50);
  strokeJoin(ROUND);
  strokeWeight(4);
  fill(56, 142, 142);
  quad(440, 23, 600, 26, 540, 300, 400, 310)
  noStroke();
  fill(227, 207, 87);
  arc(120, 120, 120, 120, 40, 320); //Pac-Man shape
  
  
}