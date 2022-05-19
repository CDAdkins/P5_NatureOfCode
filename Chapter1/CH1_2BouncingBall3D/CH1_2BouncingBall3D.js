let myLocation;
let velocity;
let z;
let zSpeed;
let size;
let physics;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(24);
  //noStroke();  
  stroke(255);
  //fill(255);
  noFill();

  physics = false;
  myLocation = createVector(random(width), random(height));
  velocity = createVector(5, 5);
  z = 0;
  size = 100;
  zSpeed = 5;
}

function draw() {
  background(24);
  lights();

  //line(0, height, width, height);

  translate(myLocation.x, myLocation.y, z);
  sphere(size);

  if (myLocation.x >= width - size || location.x <= 0 + size) {
    velocity.x *= -1;
  }

  if (myLocation.y >= height - size || myLocation.y <= 0 + size) {
    velocity.y *= -1;
  }

  if (z >= 0 || z <= -500) {
    zSpeed *= -1;
  }

  if (myLocation.y > height - 1) {
    myLocation.y = height -5;
  }

  if (physics) {
    velocity.y += 1;
  }

  myLocation.add(velocity);
  z += zSpeed;



  
}
