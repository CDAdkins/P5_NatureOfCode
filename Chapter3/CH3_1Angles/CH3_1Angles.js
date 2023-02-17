let i;
let speed;
function setup() {

  frameRate(60)
  createCanvas(windowWidth, windowHeight);
  background(24);
  i = 0;
  //speed = 0.017;
  speed = 0.1;
  textSize(24);
}

function draw() {
 //i *= 1.0015;
  i += speed
  background(24, 24, 24, 255);
  noStroke();
  fill(240, 100, 160);
  rectMode(CENTER);
  text("Rotating object at " + speed*60 + " radians/second", 10, 30);


  translate(width/2, height/2)
  rotate(i);
  rect(0, 0, width/2, 10);
}
