let mouse;
let center;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  fill(255);
  textSize(15);
}

function draw() {
  background(24);

  mouse = createVector(mouseX, mouseY);
  mouse.normalize();
  mouse.mult(500);
  line(0, 0, mouse.x, mouse.y);

  rect(0, height - 20, map(mouse.mag(), 0, (width + height / 4), 0, width), 20);
  text("Vector X: " + mouse.x, 10, height - 70);
  text("Vector Y: " + mouse.y, 10, height - 50);
  text("Vector Magnitude: " + floor(mouse.mag()), 10, height - 30);
}
