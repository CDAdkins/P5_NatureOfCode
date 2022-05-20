let balls = [];
let numBalls = 10;
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 1);

  for (let i = 0; i < numBalls; i ++) {
    balls[i] = new Mover(100, height - 100, i * 10);
    balls[i].applyForce(createVector(500, 0));
  }

}

function draw() {
  background(24);

  for (let i = 0; i < numBalls; i ++) {
    balls[i].applyGravity(gravity);
    balls[i].display();
  }

  

  if (mouseIsPressed) {

    for (let i = 0; i < numBalls; i ++) {
      balls[i].pos.x = mouseX;
      balls[i].pos.y = mouseY;
      balls[i].vel.mult(0);
      balls[i].applyForce(createVector(100, 0));
    }
  }
}


