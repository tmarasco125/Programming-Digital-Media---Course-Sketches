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
  
  //If statements!
  
  if(mouseIsPressed){
    if(mouseX > 649 && mouseY > 673){
      fill(255, 255, 51);
      beginShape()
      vertex(380, 280);//380, 280
      vertex(405, 330);//405, 330
      vertex(480, 380);//480, 380
      vertex(330, 380);//330, 380
      vertex(330, 280);//330, 280
      vertex(354, 253); //354, 253
      endShape(CLOSE);
    }else if(mouseX...)
    
    
  }
  
  
  
  
  
  
  
  
  
  
  //Add two more vertex()points to this custom shape
  fill(255, 255, 51);
  beginShape()
  vertex(700, 700);
  vertex(725, 750);
  vertex(800, 800);
  vertex(650, 800);
  vertex(650, 700);
  vertex(674,673);
  endShape(CLOSE);
  
  
//Now you need to make a chain of conditionals! 




console.log(mouseX)//use this to report location of mouseX in the console below!
console.log(mouseY)//use this to report mouse Y location 
} 
  

  



