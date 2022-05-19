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
        this.choice = floor(random(4));

        if (this.choice === 0 && this.xPos <= width) {
            this.xPos += this.size;
        } else if (this.choice == 1 && this.xPos >= 0) {
            this.xPos -= this.size;
        } else if (this.choice == 2 && this.yPos <= height) {
            this.yPos += this.size;
        } else if (this.choice == 3 && this.yPos >= 0) {
            this.yPos -= this.size;
        }
    }
  }