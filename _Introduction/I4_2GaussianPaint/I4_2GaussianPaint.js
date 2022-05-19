let mean; // average
let sd; // Standard deviation
let num; // Our random number
let xPos; // x position of paint splatter
let yPos; // y position of paint splatter
let size; // Size of splatter
// Color values
let r;
let g;
let b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(24);
  noStroke();

  mean = height/3;
  sd = height/10 ;

  paint();
}

function draw() {

}

function keyPressed() {
  background(24);
  paint();
}

function paint() {
  for (let i = 0; i < 50; i++) {
    r = randomGaussian() * sd + mean;
    g = randomGaussian() * sd + mean;
    b = randomGaussian() * sd + mean;

    xPos = randomGaussian() * sd * 1.5  + mean * 3;
    yPos = randomGaussian() * sd  + mean * 1.5;
    size = randomGaussian() * sd/3 + mean/6;
    fill(r, g, b, 240);
    ellipse(xPos, yPos, size, size);
  }
}