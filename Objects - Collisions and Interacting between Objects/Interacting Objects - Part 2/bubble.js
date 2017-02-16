function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.r = 48;
  this.col = color(255, 100)

  //the .intersects method will test to see if one instance of a class
  //(object) interacts with another specific instance of a class

  this.intersects = function(other) { //"other" argument makes this a general function, checking objects against objects
    //it will test and return either True or False states

    //dist() calculates the distances between to points
    //(paired X&Y coordnates)
    var d = dist(this.x, this.y, other.x, other.y); //every object instance will now check to see if it hits another object instance

    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  this.changeColor = function() {
    this.col = color(random(255), random(255), random(255))
  }
}