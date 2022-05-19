let balloon;
let gravity;
let wind;
let noiseValue;
let noiseOffset;
let t; // Perlin noise time seed
let antiGrav;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    textSize(24);

    balloon = new Mover();

    gravity = createVector(0, -0.02);
    antiGrav = false;

    t = random(10000);
    noiseValue = 0;
    noiseOffset = 0.00001;
}

function draw() {
    background(24);

    noiseOffset += 0.00001;
    wind = createVector(noise(noiseOffset), 0);

    balloon.applyForce(gravity);

    calculateNoise();
    balloon.applyForce(wind);

    balloon.display();

    fill(255);
    text("Wind Speed: " + wind.x * 1000, 24, 24);
}

function calculateNoise() {
    t += noiseOffset;
    noiseValue = map(noise(t), 0, 1, -0.01, 0.01);
    wind = createVector(noiseValue, 0);
}

function keyPressed() {
  if (!antiGrav) {
    gravity = createVector(0, 0.5);
    antiGrav = true;
  } else {
    gravity = createVector(0, -0.02);
    antiGrav = false;
  }
}