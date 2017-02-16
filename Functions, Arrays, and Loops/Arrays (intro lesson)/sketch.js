/* PDM Course: Web Graphics Unit

Into to Arrays: Overlapping RGB Circle with Mouse Position
Code by Anthony T. Marasco -2016
*/

var numbers = [
  46,//0
  450,//1
  700,//2
  ];
var mouseXPositions =[];
var current
var total
  
function setup() {
  createCanvas(900, 600);
  current = 0;
  total = 10;//number of mouse potiions to keep track of
}

function draw() {
  background(255);
  strokeWeight(3);
  for (var i=0; i < mouseXPositions.length; i++){
    stroke(233, 35, 125);
    line(mouseXPositions[i], 0, numbers[2], height);
    stroke(123, 65, 15);
    line(numbers[1], 0, mouseXPositions[i], height);
    stroke(23, 165, 115);
    line(mouseXPositions[i], 0, numbers[1], height);
  }
  
  
  mouseXPositions[current] = mouseX;
  current++;//adds 1 to the current value each time
  if(current > total){
    current = 0;
  }//loop: save last ten mouse positions, then reset
  
}