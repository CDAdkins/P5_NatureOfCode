let gravity;
let wind;
let noiseValue;
let noiseOffset;
let t; // Perlin noise time seed
let balloons;
let numBalloons;
let grav = false; // gravity boolean

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(24);
    textSize(24);
    fill(255);
    numBalloons = 500;
    balloons = [];

    for (let i = 0; i < numBalloons; i++) {
        balloons[i] = new Mover(random(width), random(height), random(0.05, 10));
    }

    gravity = createVector(0, 0.8);

    t = random(10000);
    noiseValue = 0;
    noiseOffset = 0.01;
}

function draw() {
    background(24);

    noiseOffset += 0.0001;
    wind = createVector(noise(noiseOffset), 0);
    wind.div(5);
    calculateNoise();

    if (mouseIsPressed) {
        grav = !grav;
    }


    for (let i = 0; i < numBalloons; i++) {
        if(grav) {
            balloons[i].applyGravity(gravity); 
        } else {
            balloons[i].vel.y = 0;
        }
        balloons[i].applyForce(wind);
        //balloons[i].applyGravity(gravity);
        balloons[i].display();
    }
    fill(255);
    text("Wind Speed: " + round(wind.x * 10), 24, 24);
}

function calculateNoise() {
    t += noiseOffset;
    noiseValue = map(noise(t), 0, 1, -2.5, 2.75);
    wind = createVector(noiseValue/10, 0);
}

function keyPressed() {
  for (let i = 0; i < numBalloons; i++) {
    balloons[i].pos = createVector(random(width), random(height));
    balloons[i].vel = createVector(0, 0);
  }
}