function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
}

function draw() {
  background(24);
  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width/2, height/2);

  mouse.sub(center);

  translate(width/2, height/2);
  line(0, 0, mouse.x, mouse.y);
}
