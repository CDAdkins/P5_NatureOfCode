let orbital;
let attractor;
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

  orbital = new Mover(100, height - height/4, 50);
  attractor = new Mover(100, height/2, 50);
  orbital.applyForce(createVector(-200, 0));
  attractor.applyForce(createVector(100, 0));
}

function draw() {
   background(24, 24, 24, 50);

  attractor.display();
  

  orbital.display();
  //orbital.update();

  calcGravity();
  orbital.applyForce(force);
  //attractor.applyForce(otherForce);
  attractor.edgeBounce();
  fill(255);
  text("Gravitational Force: " + force.mag(), 10, 30);

}

function calcGravity() {
  force = p5.Vector.sub(attractor.pos, orbital.pos); // The force pulling the orbital towards the attractor
  distanceSq = force.magSq(); // The distance between the two bodies
  G = 150;
  strength = G * (attractor.mass * orbital.mass) / distanceSq;

  force.setMag(strength);
  otherForce = force.copy();
  otherForce.mult(-1);
}