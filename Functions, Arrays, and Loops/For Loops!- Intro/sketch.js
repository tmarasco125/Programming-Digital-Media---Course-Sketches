/* PDM Course: Web Graphics Unit

Into to For Loops: Looping Squares
Code by Anthony T. Marasco -2016
*/


function setup() {
  createCanvas(600, 600);
  background(200);
  strokeWeight(4);
  
}

function draw() {
  
  for(var X = 0;X <100;X++){
    
    rect(X*20, height/2, 110, 110);
    
    if(X%2 == 0){
      fill(2, 200, 200);
    }else{
      fill(255, 0, 242);
    }
  }
  //This procedure below can be used to show how 
  //for loops speed up the creation of repeative
  //code
  
  //fill(2, 200, 200);
  //rect(0, height/2, 110, 110);
  //fill(255, 0, 242);
  //rect(40, height/2, 110, 110);
  //fill(2, 200, 200);
  //rect(80, height/2, 110, 110);
  //fill(255, 0, 242);
  //rect(120, height/2, 110, 110);//the LONG way of coding
}
  