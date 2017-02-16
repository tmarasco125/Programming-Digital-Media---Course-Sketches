var buggy
var claire
var color1

function setup() {
  createCanvas(800, 800);
  background(128)
  color1 = [
    200,
    34,
    125]
  buggy = new JitterBug(100, 15, 10, color1);
  claire = new JitterBug(300, 50, 25, color1);
}

function draw() {
  buggy.move();
  buggy.display();
  claire.move();
  claire.display();
}
//Here is our Constructor Function
function JitterBug(tempX, tempY,tempDiameter, tempColor){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.color = tempColor
  this.speed =2.5;
//Here are the Method Functions that live inside of the Constructor (think of machines in a factory)
  this.display = function(){
    fill(this.color)
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  
  this.move = function(){
    this.x = this.x + random(-this.speed, this.speed);
    this.y = this.y + random(-this.speed, this.speed);
  }
  

}