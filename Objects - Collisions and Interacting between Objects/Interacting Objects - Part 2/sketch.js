var bubbles = []
var plucky
var filt
var crusher

function setup() {
  createCanvas(1000, 800);
  filt = new Tone.LowpassCombFilter(0.5, 2, 3500).toMaster();
  crusher = new Tone.BitCrusher(4).connect(filt);
  plucky = new Tone.PluckSynth().connect(crusher);
  
  
  for (var i = 0; i < 12; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }

}

function draw() {
  background(23, 244, 255);

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
    //for this second loop, we need a new variable to check within each set of objects
    //i.e. : "for every bubble, check every other bubble", "for every i, run for every j" 
    for (var j = 0; j < bubbles.length; j++) {
      //i.e. : "as long as i is NOT equal to j (the same object) AND they are intersecting..."
      if (i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();
        bubbles[j].changeColor();
        plucky.triggerAttack("D4");
      } 
      
    }
  }

}



