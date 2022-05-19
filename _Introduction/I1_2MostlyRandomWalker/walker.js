// This walker moves randomly, but tends to moves down and to the right.
class Walker {
    constructor(r, g, b, aSize, anAlpha) {
      this.xPos = width/2;
      this.yPos = height/2;
      this.choice;
      this.size = aSize;
      this.myColor = color(r, g, b, anAlpha);
    }
  
    display() {
      fill(this.myColor);
      rect(this.xPos, this.yPos, this.size, this.size);
    }

    walk() {
        this.choice = floor(random(6));

        if (this.choice === 0) {
            this.xPos -= this.size; // Move left
        } else if (this.choice === 1) {
            this.yPos -= this.size; // Move up
        } else if (this.choice <= 3) {
            this.xPos += this.size; // Move right
        } else {
            this.yPos += this.size; // Move down
        }
    }
  }