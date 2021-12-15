class Popcorn {
  constructor(a, b, c, d) {
    this.position = new createVector(a, b);//create vector
    this.velocity = new createVector(c, d);
  }

  update(e, f) {
    // Add the current speed to the position.
    this.position.add(this.velocity);
    if (this.position.y > e || this.position.y < f) {
      this.velocity.y = this.velocity.y * -1;//make popcorn bouce up and down by adding another vector
    }
  }

  display(pic) {
    // Display circle at x position
    stroke(0);
    fill(175);
    image(pic, this.position.x, this.position.y, 80, 80);//affirm the position and size of each image of popcorns;
  }
}
