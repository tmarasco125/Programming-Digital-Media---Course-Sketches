/* PDM Course: Web Graphics Unit

Conditionals Mini Assignment!: Shape Selector
Code by Anthony T. Marasco -2016


**Instructions: Make 3 shapes that reside in the
corners of the canvas, and add two new vertex() points
to the custom shape that already exists. When you click on a shape,
a duplicate copy of that shape should appear
in the center of the screen!**

*/

function setup() {
  createCanvas(800, 800);
}

function draw() {
  //Place your shape "buttons" on the screen
  background(94, 223, 249);
  fill(255, 128, 0);
  rect(0, 0, 100, 100);
  fill(128, 255, 0);
  ellipse(width-50, 50, 100, 100);
  fill(204, 0, 204);
  triangle(50, 700, 100, 800, 0, 800);
  fill(255, 255, 51);
  beginShape()
  vertex(700, 700);
  vertex(725, 750);
  vertex(800, 800);
  vertex(650, 800);
  vertex(650, 700);
  endShape(CLOSE);
  
//Now you need to make a chain of conditionals! 
if (mouseIsPressed == true){//check to see if the mouse is pressed
  if (mouseX < 100 && mouseY < 100){//if it's pressed, check is press is in this location:
    fill(255, 128, 0);//draw square in center
    rect(350, 350, 100, 100);
  } else if (mouseX > 700 && mouseY < 100){//if the press is in THIS location:
    fill(128, 255, 0);//draw circle in center
    ellipse(width/2, height/2, 100, 100);
  } else if (mouseX < 100 && mouseY > 700){//if press is in THIS location:
    fill(204, 0, 204);//draw triangle in center
    triangle(width/2, height/2-50, width/2+50, height/2+50, width/2-50, height/2+50);
  } else if (mouseX > 650 && mouseY > 700){//if press is in THIS location:
    fill(255, 255, 51);//draw custome shape in center
    beginShape();
    vertex(400, 350);//look at this! cool beans
    vertex(425, 400);
    vertex(500, 450);
    vertex(350, 450);
    vertex(350, 350);
    endShape(CLOSE);
  }
}   
    
console.log(mouseX)//use this to report location of mouseX in the console below!
console.log(mouseY)//use this to report mouse Y location 
} 
  

  



