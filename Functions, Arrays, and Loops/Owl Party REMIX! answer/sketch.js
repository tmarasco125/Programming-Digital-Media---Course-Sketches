var owlColor1
var owlColor2
var owlX
var owlY

function setup() {
  createCanvas(1080, 620);
  
  owlX=[
    100,
    250,
    400,
    550,
    700,
    850,
    1000]
    
  owlY=[
    250,
    300,
    350,
    110,
    500,
    420,
    600]
  
  owlScale=[
    0.50,
    1.25,
    .45,
    .75,
    2.0,
    1.0,
    0.60]
   
  owlColorz =[
    color(random(205), random(205), random(205)),
    color(random(205), random(205), random(205)),
    color(random(205), random(205), random(205)),
    color(random(205), random(205), random(205)),
    color(random(205), random(205), random(205)),
    color(random(205), random(205), random(205)),
    color(random(205), random(205), random(205))]
    
  
}

function draw() {
background(121, 0, 233);  

  for(var i = 0; i< 7; i++){
  drawOwl(owlX[i], owlY[i], owlScale[i],owlColorz[i]);
}

  


 
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


  