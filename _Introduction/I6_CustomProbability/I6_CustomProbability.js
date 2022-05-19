let numRectangles;
let randomNumbers;
let p; // Number to decide whether or not the chosen number is picked.
let chosenNumber; // The number that has been randomly selected, between 0 and numRectangles
let generations; // The number of random numbers you want to generate per frame. More is faster
let rectWidth; // Width of each rectangle

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(24);
  fill(100);
  textSize(height/30);

  numRectangles = 250; // Number of rectangles
  randomNumbers = [];
  generations = 100;
  rectWidth = width/numRectangles;

  // Populating the randomNumbers array with 0's
  for (let i = 0; i < numRectangles; i++) {
    randomNumbers[i] = 0;
  }
}

function draw() {
  //background(24);
  text("Y=X^2 Between 0 and " + numRectangles, width/2.5, height/4);
  text("Press any key to reset", width/2.5, height/4 + 30)

  for (let i = 0; i < generations; i++) { // This code runs once per "generation" as defined above
    randomNumbers[chooseNumber()]--;
  }

  for (let i = 0; i < numRectangles; i++) {
    rect(i * rectWidth, height, rectWidth, randomNumbers[i]);
  }
}

function chooseNumber() {
  while (true) {
    p = floor(random(numRectangles)); // p is a random int from 0-99
    chosenNumber = floor(random(numRectangles * numRectangles)); // chosenNumber is also a random int from 0-99

    if (chosenNumber < p * p) {
      return p;
    } // If not, generate new numbers
  }
}

function keyPressed() {
  background(24);
  for (let i = 0; i < numRectangles; i++) {
    randomNumbers[i] = 0;
  }
}