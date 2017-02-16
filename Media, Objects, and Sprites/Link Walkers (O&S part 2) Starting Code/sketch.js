var sheet

var walkR =[]
var walkL =[]
var walkU = []
var walkD = []
var linkX =0;
var linkY = 0;
var speed = 10;




function preload(){
  sheet = loadImage('link.png');
  
}
  
function setup() {
  createCanvas(800, 800);
  frameRate(10);
  
//You need to make three more arrays like the one called walkR below.
//Each "sheet.get()"" function has parameters that relate to where the individual Link pictures on the Sprite sheet are located,
//starting with the X and Y cordinates of the upper-righthand corner of the Link, and the width and height of each Link.
//Use these numbers to help!

//Selection X numbers (each Link is 24 pixels wide) = 0 (first Link in a row), 24 (Second Link in a row), 48 (etc.), 72, 96, 120
//Selection Y number = This will change when you look at a new row of Links, but stays the same for all Links in a row
//Link Size width = 24
//Link height = 32
  
  
  walkR =[
    //Breaking down these numbers:
    //0 = First X coordinate of the first Link in the second row of the sheet
    //32 = The Y coordinate of ALL Links in the second row
    //24 = The width of each Link
    //32 = The height of each Link
    sheet.get(0, 32, 24, 32),
    sheet.get(24, 32, 24, 32),//Notice how onlt the first number has changed. This is because we're moving to the Right (increasing X axis) to 
    //look at the next Link in the row.
    sheet.get(48, 32, 24, 32)
    ]
//Now make three more arrays, called walkU, walkD, and walkL, each containing 3 images from the rows that have
//up, down, and left facing Links.
}

function draw() {
  
  
  //our variable Frame will automatically cycle between the numbers 0, 1, 2, and we can use this variable to run
  //through all the stored pictures in our arrays when the arrow keys get pressed.
  //Where should we but the variable "Frame" in the following If statement?
  var frame = frameCount % 3
  
  

  background(0, 255, 200);
  
  
  if (keyIsPressed == true){
    if(keyCode == UP_ARROW){
      linkY = linkY - speed;
      //Enter the name of the array for upward walking Links in the parenthsis
      image(, linkX, linkY, 96, 128);
      //Use this portion of the code below as an example! You need three
      //more of these, one for each direction.
    } else if(keyCode == RIGHT_ARROW){
      linkX = linkX + speed;
      image(walkR[frame], linkX, linkY, 96, 128);
      
    } else if(keyCode == LEFT_ARROW){
      linkX = linkX - speed;
       //Enter the name of the array for left walking Links in the parenthsis
      image(, linkX, linkY, 96, 128);
    } else if(keyCode == DOWN_ARROW){
      linkY = linkY + speed;
       //Enter the name of the array for downward walking Links in the parenthsis
      image(, linkX, linkY, 96, 128);
    } 
    
  }else{
      image(walkD[1], linkX, linkY, 96, 128);
  }
  
  
 
}
