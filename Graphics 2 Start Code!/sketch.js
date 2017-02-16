/* PDM Course: Web Graphics Unit

Assignment 2: Painting App
Code by Anthony T. Marasco with help from Jesse Allison - 2016
*/

//Step 1: Make a variable here that will stand in for 
//our changing "brush color."


function setup() {
 	createCanvas(1000, 1000);
 	strokeWeight(5);
 	//Step 2: Initialize your bursh color variable
 	//here, have it start with the color black
 	//Assign the color using color(0);
 
}
 
function draw() {
  
//Step 4: Make an if statement that lets this line
//be drawn only if mouse is pressed

//Step 5: Add one additional if statement INSIDE OF
//the one form Step 4 in order to make your
//brush color change only when you've clicked in the
//range of the entire color bar (you need to use
//&& symbols to measure the mouseX and mouseY values
//at the same time!)


//Step 6: Add a longer else if statement chain
//inside of the if statement from Step 5
//that allows your bursh color variable
//to update to a new color() assignment
//when the matching color block is clicked
//(Since you did step 5, you'll only need to measure
//the mouseY position of the cursor!)
    
    stroke();//stroke color will be determined by color selected
    line(mouseX, mouseY, pmouseX, pmouseY);//new beginning of line connects to where line just was


 
//Step 3: Here we code for our color selection blocks
//Make them into even squares and pay attention
//to how big they are

  noStroke();
  
  console.log(mouseX);
	console.log(mouseY);
	
}


 

