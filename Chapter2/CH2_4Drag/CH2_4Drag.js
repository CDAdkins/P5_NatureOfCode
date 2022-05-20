let balls = [];
let numBalls = 10;
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 1);
  frameRate(60);

  for (let i = 0; i < numBalls; i ++) {
    balls[i] = new Mover(200 * i, 100, i * i * 5);
    //balls[i].applyForce(createVector(500, 0));
  }

}

function draw() {
  background(24);

  for (let i = 0; i < numBalls; i ++) {
    balls[i].applyGravity(gravity);
    balls[i].display();
    
    if (balls[i].pos.y > height/2) {
      balls[i].dragC = 2;
    } else {
      balls[i].dragC = 0.1;
    }
  }

  if (mouseIsPressed) {
    for (let i = 0; i < numBalls; i ++) {
      balls[i].pos.x = mouseX;
      balls[i].pos.y = mouseY;
      balls[i].vel.mult(0);
      balls[i].applyForce(createVector(100, 0));
    }
  }

  fill(0, 0, 255, 50);
  noStroke();
  rect(0, height/2, width, height);
}


