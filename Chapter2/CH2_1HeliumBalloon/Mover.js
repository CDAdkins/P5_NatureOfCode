// Mover Class
class Mover {
    constructor() {
        this.loc = createVector(width/2, height/2);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(random(0, 0), random(0, 0));
        this.maxSpeed = 1000;
        this.size = 50;
        this.myColor = 0;
    }

    update() {
        //this.edgeWrap();
        this.edgeBounce();
        this.velocity.limit(this.maxSpeed);
        this.velocity.add(this.acceleration);
        this.loc.add(this.velocity);
        this.acceleration.mult(0);
    }

    display() {
        stroke(255);
        fill(this.myColor);
        ellipse(this.loc.x, this.loc.y, this.size, this.size);
        this.update();
    }

    edgeWrap() {
        if (this.loc.x > width - this.size/2) { // If too far right
            this.loc.x = this.size/2; // place mover at left edge
        }

        if (this.loc.x < this.size/2) { // If too far left
            this.loc.x = width - this.size/2; // place mover at right edge
        }

        if (this.loc.y > height - this.size/2) { // If too low
            this.loc.y = this.size/2; // Move to the top
        }

        if (this.loc.y < this.size/2) { // If too high
            this.loc.y = height - this.size/2; // move to the bottom
        }
    }

    edgeBounce() { // Use this if you want the mover to bounce off of the edge of the window
        if (this.loc.x > width - this.size/2 || this.loc.x < 0 + this.size/2) { // If hitting left or right edge
            this.velocity.x *= -1.0; // invert x velocity
        }
        if (this.loc.y > height - this.size/2 || this.loc.y < 0 + this.size/2) { // If hit top or bottom
            this.velocity.y *= -1.0; // Invert y velocity
        }
    }

    applyForce(force) {
        this.acceleration.add(force); // Add the force to the acceleration
    }
}