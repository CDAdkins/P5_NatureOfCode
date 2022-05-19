let mouse;
let center;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  fill(255);
}

function draw() {
  background(24);

  mouse = createVector(mouseX, mouseY);
  center = createVector(width/2, height/2);
  mouse.sub(center);
  mouse.mult(2);

  translate(width/2, height/2);
  line(0, 0, mouse.x, mouse.y);
}
