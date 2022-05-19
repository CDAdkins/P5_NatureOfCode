let flies = [];
let numFlies;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(24);
  numFlies = 200;

  for (let i = 0; i < numFlies; i++) {
    flies[i] = new Walker(50, 150, 255, 20);
  }
}

function draw() {
  background(24);

  for (let i = 0; i < numFlies; i++) {
    flies[i].display();
    flies[i].walk();
  }
}