class Walker {
    constructor(r, g, b, aSize) {
      this.xPos = width/2;
      this.yPos = height/2;
      this.choice;
      this.size = aSize;
      this.myColor = color(r, g, b);
      this.speed = 8;
    }
  
    display() {
      fill(this.myColor);
      ellipse(this.xPos, this.yPos, this.size, this.size);
    }

    walk() {
        this.choice = random(1);

        if (this.choice <= 0.5) { // 50% Probability
            if (mouseX > this.xPos) { // If the mouse is to the right of the walker
                this.xPos += this.speed/2; // Move right
            } else {
                this.xPos -= this.speed/2;
            }

            if (mouseY > this.yPos) { // If the mouse is lower than the walker
                this.yPos += this.speed/2; // Move down
            } else {
                this.yPos -= this.speed/2; // Move up
            }
        } else if (this.choice <= 0.625) { // 12.5% Probability
            this.yPos -= this.speed; // Move up
        } else if (this.choice <= 0.75) { // 12.5% Probability
            this.yPos += this.speed; // Move down
        } else if (this.choice <= 0.875) { // 12.5% Probability
            this.xPos -= this.speed; // Move left
        } else { // 12.5% Probability
            this.xPos += this.speed; // Move right
        }
    }
  }