let x; // X position
let y; // y position
let xSpeed; // horizontal speed
let ySpeed; // vertical speed of object
let xSize; // x size of object
let ySize; // y size of object
let maxSpeed; // Maximum speed of object

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20, 120, 20);
  stroke(0);
  fill(255, 255, 255, 255);
  strokeWeight(2);

  xSize = 100;
  ySize = 160;
  maxSpeed = 35;

  x = random(width/2.5, width - width/2.5);
  y = -ySize;

  chooseXSpeed();
  ySpeed = random(-10, -15);

  rect(x, y, xSize, ySize);
}

function draw() {
  //background(24);
  if (ySpeed < maxSpeed) {
    ySpeed += 0.5;
  }
  if (x >= width + xSize || x <= 0 - xSize) {
    x = random(width/2.5, width - width/2.5);
    y = -ySize;
    ySpeed = random(-10, -15);
    chooseXSpeed();
  }
  if (y >= height - ySize && ySpeed > 10) {
    y = height - ySize;
    ySpeed *= -.75;
  }

  if (ySpeed < 0.0001 && y > 0) {

  }

  x += xSpeed;
  y += ySpeed;
  rect(x, y, xSize, ySize);
}

function chooseXSpeed() {
  if (x < width/2) {
    xSpeed = random(2, 3);
  } else {
    xSpeed = random(-3, -2);
  }
}

function keyPressed() {
  background(20, 120, 20);
}