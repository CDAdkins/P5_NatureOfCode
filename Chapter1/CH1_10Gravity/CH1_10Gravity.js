let mouse;
let object;
let direction;
let distance;
let xVelo;
let yVelo;
let totalVelo;
let redraw;

let guy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  redraw = true;
  noCursor();
  textSize(24);
  background(24);
  stroke(255);
  fill(255);

  guy = new Mover();
}

function draw() {
  if (redraw) {
    background(24);
  }

  stroke(255);
  fill(255);

  xVelo = abs(guy.velocity.x);
  yVelo = abs(guy.velocity.y);
  totalVelo = xVelo + yVelo;
  // Rounding velo
  totalVelo *= 100;
  totalVelo = round(totalVelo);

  text("Planet Velocity " + round(totalVelo) + " m/s", 10, 30);
  text("Press any key to toggle background refresh", 10, 60);

  ellipse(mouseX, mouseY, 5, 5);

  mouse = createVector(mouseX, mouseY);

  direction = p5.Vector.sub(mouse, guy.loc);

  distance = direction.mag();

  direction.normalize();
  direction.div(distance * 0.005);
  guy.acceleration = createVector(direction.x, direction.y);

  guy.display();
}

function keyPressed() {
  if (redraw) {
    redraw = false;
  } else {
    redraw = true;
  }
}