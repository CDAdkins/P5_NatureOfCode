let numRectangles;
let gaussianNumbers;
let chosenNumber; // The number that has been randomly selected, between 0 and numRectangles
let generations; // The number of random numbers you want to generate per frame. More is faster
let rectWidth; // Width of each rectangle

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(24);
  fill(100);
  textSize(height/30);

  numRectangles = 100; // Number of rectangles
  gaussianNumbers = [];
  generations = 50;
  rectWidth = width/numRectangles;

  // Populating the gaussianNumbers array with 0's
  for (let i = 0; i < numRectangles; i++) {
    gaussianNumbers[i] = 0;
  }
}

function draw() {
  //background(24);
  text("Gaussian Distribution Between 0 and " + numRectangles, width/3, height/4);
  text("Press any key to reset", width/2.5, height/4 + 30)

  for (let i = 0; i < generations; i++) { // This code runs once per "generation" as defined above
    chosenNumber = floor(randomGaussian() * numRectangles/10 + (numRectangles/2)); 
    gaussianNumbers[chosenNumber]--;
  }

  for (let i = 0; i < numRectangles; i++) {
    //rect( i * (width/numRectangles), height, width/numRectangles, gaussianNumbers[i]);
    rect(i * rectWidth, height, rectWidth, gaussianNumbers[i]);
  }
}

function keyPressed() {
  background(24);
  for (let i = 0; i < numRectangles; i++) {
    gaussianNumbers[i] = 0;
  }
}