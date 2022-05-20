let movers = [];
let numMovers;
let force;
let otherForce;
let distanceSq;
let direction;
let G; // gravitational constant
let strength;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(24);
  frameRate(60);
  textSize(24);

  numMovers = 5;

  for (let i = 0; i < numMovers; i++) {
    // movers[i] = new Mover(random(width), random(height), 50);
    // movers[i].applyForce(createVector(100, 0));
  }

  movers[0] = new Mover(width/2, height/4, 25);
  movers[1] = new Mover(width/2, height - height/4, 25);
  movers[2] = new Mover(width/2, height/2, 25);
  movers[3] = new Mover(width/2.5, height/2, 25);
  movers[4] = new Mover(width - width/2.5, height/2, 25);

  movers[0].applyForce(createVector(90, 0));
  movers[1].applyForce(createVector(-90, 0));
  movers[3].applyForce(createVector(0, -90));
  movers[4].applyForce(createVector(0, 90));
}

function draw() {
  background(24, 24, 24);
  fill(255);
  text("Click the mouse to destabilize", 10, 30);

  for (let i = 0; i < numMovers; i++) {
    movers[i].display();
  }

  for (let mover of movers) {
    for (let other of movers) {
      if (mover !== other) {
        mover.attract(other);
      }
    }
  }

  if (mouseIsPressed) {
    movers[2].applyForce(createVector(random(-100, 100), random(-100, 100)));
  }
}