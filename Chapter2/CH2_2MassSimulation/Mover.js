// Mover Class
class Mover {
    constructor(x, y, m) { // x - xposition, y - yposition, m - mass
        this.pos = createVector(x, y); // Vector representing the position of the mover
        this.vel = createVector(0, 0); // Vector representing the current speed of the mover
        this.acc = createVector(random(0, 0), random(0, 0)); // Vector representing the current acceleration of the mover
        this.mass = m; // The mass, or weight, of the mover
        this.r = sqrt(this.mass) * 10; // The radius of the ellipse representing the mover, based on the mass
    }

    update() {
        // Choose one of the three functions below to dictate how the mover reacts to edges
        //this.edgeWrap(); // Wrap around the edges of the screen
        //this.edgeBounce(); // Bounce off all edges of the screen
        this.groundBounce(); // Bounce off of the ground, but not on the other edges

        this.vel.add(this.acc); // Add the acceleration vector to the velocity vector
        this.pos.add(this.vel); // Move the mover based on the velocity
        this.acc.mult(0); // Zero the acceleration after adding it to the velocity
    }

    display() {
        stroke(255);
        fill(100, 100, 100, 200);
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
        this.update();
    }

    edgeWrap() { // Use this if you want the mover to teleport from one edge of the screen to the other.
        if (this.pos.x > width - this.r/2) { // If too far right
            this.pos.x = this.r/2; // place mover at left edge
        }
        if (this.pos.x < this.r/2) { // If too far left
            this.pos.x = width - this.r/2; // place mover at right edge
        }
        if (this.pos.y > height - this.r/2) { // If too low
            this.pos.y = this.r/2; // Move to the top
        }
        if (this.pos.y < this.r/2) { // If too high
            this.pos.y = height - this.r/2; // move to the bottom
        }
    }

    edgeBounce() { // Use this if you want the mover to bounce off of all edges of the window
        if (this.pos.x > width - this.r/2) { // If hitting the right edge
            this.pos.x = width - this.r/2; // Resetting the position to avoid the object getting stuck
            this.vel.x *= -1.0; // Invert x velocity
        }
        if (this.pos.x < this.r/2) { // If hitting the left edge
            this.pos.x = this.r/2; // Resetting the position to avoid the object getting stuck
            this.vel.x *= -1.0; // Invert x velocity
        }
        if (this.pos.y <= this.r/2) { // If it hits the top
            this.pos.y = this.r/2; // Resetting the position to avoid the object getting stuck
            this.vel.y *= -1.0; // Invert y velocity
        }
        if (this.pos.y >= height - this.r/2) { // If hitting the bottom
            this.pos.y = height - this.r/2; // Resetting the position to avoid the object getting stuck
            this.vel.y *= -1; // Invert y velocity
        }
    }

    groundBounce() { // Use this if you only want the mover to bounce off of the bottom edge
        if (this.pos.y >= height - this.r/2) { // If hitting the bottom
            this.pos.y = height - this.r/2; // Resetting the position to avoid the object getting stuck
            this.vel.y *= -1; // Invert y velocity
        }
    }

    applyForce(force) { // Add a vector to the acceleration of the mover
        let f = p5.Vector.div(force, this.mass); // Take mass into account when adding the force
        this.acc.add(f); // Add the force to the acceleration
    }

    applyGravity(force) { // Same as applyForce() but ignores mass because gravity
        this.acc.add(force); // Add the force to the acceleration
    }
}