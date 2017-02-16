function setup() {
  createCanvas(600,600);
}

function draw() {
  if(mouseIsPressed){
    strokeWeight(4);
  } else{
    strokeWeight(1);
  }
  for(d =600; d>0; d -=10){
    ellipse(width/2, height/2, d, d);
    if(d%20 == 0){
      stroke(mouseX/2.5, mouseY/2.5, 200);
    } else {
      stroke(mouseY/2.5, 34, mouseX/2.5);
    }
  }
  
  
}