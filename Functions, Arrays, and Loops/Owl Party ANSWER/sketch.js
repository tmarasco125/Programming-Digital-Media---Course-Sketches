var owlColor1
var owlColor2

function setup() {
  createCanvas(780, 620);
  
  owlColor1 = [
    121, 
    23, 
    110]
  owlColor2 =[
    230, 
    36, 
    100]
}

function draw() {
background(121, 0, 233);  

  drawOwl(110, height/2, 1.50, owlColor1);


  drawOwl (300, height/2, 0.50, owlColor2);
  
}
function drawOwl(x, y, owlS, owlC){
  push();
  translate(x, y);//Owl placement X and Y
  scale(owlS); //keep this around and uncomment in Step 3!
  stroke(owlC);//owl body color
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


  