/* PDM Course: Web Graphics Unit

Assignment 2: Painting App
Code by Anthony T. Marasco with help from Jesse Allison - 2016
*/

var brushColor //here are our variables, assigned to set draw color


function setup() {
 	createCanvas(1000, 1000);
 	brushColor = color(0);
 	strokeWeight(5);
 
}
 
function draw() {
  // display instructions on top of screen
	noStroke();
	fill(200);
	rect(0, 0, width, 25);
	fill(0);
	text("Select paint color by clicking on buttons", 10, 15);
//****Above text block is optional for assignment****

  
//if mouse is pressed, we draw a line
if (mouseIsPressed == true){
  if (mouseY < 445){//looking at the location of color bar
    if (mouseY < 25) {//instruction bar click does nothing
    } else if (mouseX < 60 && mouseY < 85){
      brushColor = color(0);//first color block - black
    } else if (mouseX < 60 &&mouseY < 145){//second color block
      brushColor = color(228, 32, 32);
    } else if (mouseX < 60 &&mouseY < 205){
      brushColor = color(74, 137, 11);
    } else if (mouseX < 60 &&mouseY < 265){//fourthc olor
      brushColor = color(0, 0, 204);
    } else if (mouseX < 60 &&mouseY < 325){//fifth color
      brushColor = color(255, 255, 0);
    } else if (mouseX < 60 &&mouseY < 385){//sixth color
      brushColor = color(255, 128, 0);
    } else if (mouseX < 60 &&mouseY < 445){//seventh color
      brushColor = color(255, 255, 255);
      strokeWeight(70);
    }
  }
    strokeWeight(5);
    stroke(brushColor);//stroke color will be determined by color selected
    line(mouseX, mouseY, pmouseX, pmouseY);//new beginning of line connects to where line just was
}

 
//Here are our color selection blocks
  noStroke();
  fill(0);//black paint
	rect(0, 25, 60, 60);
	fill(228, 32, 32);//red paint
	rect(0, 85, 60, 60);
	fill(74, 137, 11);//green paint
	rect(0, 145, 60, 60);
  fill(0, 0, 204);//blue paint
	rect(0, 205, 60, 60);
  fill(255, 255, 0);//yellow
	rect(0, 265, 60, 60);
  fill(255, 128, 0);//orange
	rect(0, 325, 60, 60);
	stroke(51);//border for white
	strokeWeight(1);//border for weight thickness
	fill(255);//white
	rect(0, 385, 58, 60);
	//console.log(mouseY);
}


 

