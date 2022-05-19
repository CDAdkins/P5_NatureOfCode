// Mover Class
class Mover {
    constructor() {
        this.loc = createVector(random(0, width), random(0, height));
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
        this.maxSpeed = 1000;
        this.size = 50;
        this.myColor = 0;
    }

    update() {
        //this.edgeWrap();
        this.velocity.limit(this.maxSpeed);
        this.velocity.add(this.acceleration);
        this.loc.add(this.velocity);
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
}