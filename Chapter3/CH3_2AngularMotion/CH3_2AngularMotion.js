// It would be cool to let the user change the speed by pressing any number on their
// keyboard
let angle; // The current angle of the stick
let angularVelocity; // The angular velocity at which the stick is rotating
function setup() {

  frameRate(60)
  createCanvas(windowWidth, windowHeight);
  background(24);
  angle = radians(0);
  angularVelocity = radians(1.5);
  textSize(24);
}

function draw() {
  if (angle >= radians(360)) {
    angle = 0;
  }
  angle += angularVelocity
  background(24, 24, 24, 255);
  noStroke();
  fill(240, 100, 160);
  rectMode(CENTER);
  text("Angle = " + Math.round(degrees(angle), 2) + "°", 10, 60);
  text("Rotating object at " + Math.round(degrees(angularVelocity)*60, 2) + "° /second", 10, 30);


  translate(width/2, height/2)
  rotate(angle);
  rect(0, 0, width/2, 10);
}
