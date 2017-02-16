var sheet
var linkyRighty

function preload(){
  sheet = loadImage('link.png');
}
  
function setup() {
  createCanvas(800, 800);
  frameRate(20);
  linkyRighty =[
    sheet.get(0, 32, 24, 32),
    sheet.get(24, 32, 24, 32),
    sheet.get(48, 32, 24, 32)
    //sheet.get(72, 32, 24, 32),
    //sheet.get(96, 32, 24, 32),
    //sheet.get(120, 32, 24, 32)
    ]
}

function draw() {
  var frame
  frame= frameCount % 3
  
  background(0, 255, 200);
  
  image(linkyRighty[frame], 100, 100, 96, 128)
  
  console.log(mouseX);
}
//Selection X numbers = 0, 24, 48, 72, 96, 120
//Selection Y number = 32
//Link Size width = 24
//Link height = 32