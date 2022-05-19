let numWalkers; // Number of walkers per color.
let walkerSize; // Size of each walker.
let walkerAlpha; // Opacity of each walker.

let redGuys = [];
let blueGuys = [];
let yellowGuys = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(24);
  noStroke();

  numWalkers = 100;
  walkerSize = 10;
  walkerAlpha = 255;

  for (let i = 0; i < numWalkers; i++) {
    redGuys[i] = new Walker(255, 0, 0, walkerSize, walkerAlpha);
    blueGuys[i] = new Walker(0, 0, 255, walkerSize, walkerAlpha);
    yellowGuys[i] = new Walker(255, 255, 0, walkerSize, walkerAlpha);
  }

  guy = new Walker(255, 0, 0, walkerSize, walkerAlpha);
}

function draw() {
  // background(24);
  //guy.display();

  fill(255);
  //ellipse(guy, 50, 50, 50);

  for (let i = 0; i < numWalkers; i++) {
    redGuys[i].display();
    redGuys[i].walk();
    blueGuys[i].display();
    blueGuys[i].walk();
    yellowGuys[i].display();
    yellowGuys[i].walk();
  }

}