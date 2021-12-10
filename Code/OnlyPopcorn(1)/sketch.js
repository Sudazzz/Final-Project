// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-2: Bouncing Ball, with p5.Vector!

let b; //we declare an individual b which will become an instance of the Ball class

function setup() {
  createCanvas(640, 360);
  b = new Ball(); //we create our b instance of Ball;
}

function draw() {
  background(255);
  b.update(); 
  b.display();
}

class Ball {
  constructor() {
    this.position = new createVector(random(100), random(100));
    this.velocity = new createVector(random(-5,5), random(-5,5));
  }
  
  update() {
    // Add the current speed to the position.
    this.position.add(this.velocity);
    
    if ((this.position.x > width) || (this.position.x < 0)) {
      this.velocity.x = this.velocity.x * -1;
    }
    if ((this.position.y > height) || (this.position.y < 0)) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
  display() {
    // Display circle at x position
    stroke(0);
    fill(175);
    ellipse(this.position.x, this.position.y, 48, 48);
  }
}