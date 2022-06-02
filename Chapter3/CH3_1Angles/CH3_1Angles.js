let i;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(24);
  i = 10;
  textSize(24);
}

function draw() {
  i *= 1.0015;
  background(24, 24, 24, i);
  noStroke();
  fill(240, 100, 160);
  rectMode(CENTER);
  text("Rotating object at " + round(i) + " radians/frame", 10, 30);


  translate(width/2, height/2)
  rotate(i);
  rect(0, 0, width/3, 50);
}
