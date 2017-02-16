var ellipseX = 0;
var ellipseH = 120;
var ellipseD = 120;
var pacColor = [
  227,
  207,
  87
  ];
var Mat= [
  220,
  200]
var Mab =[
  145,
  175]

var frame

function setup() {
  createCanvas (900, 500);
  angleMode(DEGREES)
  
}

function draw() {
  //background(0)
  frame = frameCount % 2
    ellipseX = 0//we've reassigned the value of our variable to be at 100 pixels more than the 100 base value on the x-axis in our drawPacman function

  drawPacman(ellipseX, pacColor[0],Mat[frame], Mab[frame])
    //we've reassigned the value of our variable to be at 100 pixels more than the 100 base value on the x-axis in our drawPacman function

  drawPacman(ellipseX = ellipseX + 150, 98,Mat[frame], Mab[frame])
  
  //now we call another pacman function, while the variable is itself (100)+150 pixels
  drawPacman(ellipseX += 150, 76, Mat[frame], Mab[frame])
  
  //and yet another, moved over by 150 more pixels
  drawPacman(ellipseX += 150, 36, Mat[frame], Mab[frame])
  
  
  drawPacman(ellipseX += 150, 110, Mat[frame], Mab[frame])
  
  
}

function drawPacman(x,c, mt, mb){
  noStroke()//no outlines for PacMan
  fill(c);//fill PacMan with yellow
  arc(x + 100, height/2, ellipseH, ellipseD, mt, mb); //Left-facing Pac-Man shape

}
