/* PDM Course: Web Graphics Unit

Assignment 2: Painting App (Starting Code!)
Code by Anthony T. Marasco with help from Jesse Allison - 2016
*/

//Step 1: Make a variable that stands in for the color of your
//paint brush. This will get updated when you
//select a new color block.

function setup() {
  createCanvas(1000, 1000);
  strokeWeight(5);
  //Step 2: Initialize your variable here, assign
  //it the following function: color(0);
  //This will make your default paint brush color
  //black

}

function draw() {

  //Here is where we draw our color selection blocks

  noStroke();
  fill(0); //black paint
  rect(0, 0, 60, 60);
  fill(228, 32, 32); //red paint
  rect(0, 60, 60, 60);

  //Step 3: Add 5 more color blocks of your choosing directly
  //below these first two. They must ALL
  //be the same size as the first two, and all
  //line up vertically (Use the same X coordinates
  //for all blocks as you see in the black and red
  //blocks. The Y coordinates will be dfferent.)











  //Step 4: Here is out nested if statement. Study how this works, 
  //then continue to builf the else if statement so
  //that we can measure A) when the mouse is clicked
  //in the range of a color block (you need to measure
  //the X and Y axis together!) and B) tell it to 
  //update your brush color variable to match the
  //color block you clicked on
  
  if (mouseIsPressed == true) {
    if (mouseY < 420) { //looking at the location of color bar
      if (mouseX < 60 && mouseY < 60) { 
        * PUT BRUSH COLOR VARIABLE HERE = color(0); //first color block - black
      } else if (mouseX < 60 && mouseY < 120) { 
        * PUT BRUSH COLOR VARIABLE HERE = color(228, 32, 32); //second color block - red
      } //else if (*Start here! ) {

      //}

    }
    strokeWeight(5);
    stroke(*What should go here??); //stroke color will be determined by color selected
    line(mouseX, mouseY, pmouseX, pmouseY); 
  }
}