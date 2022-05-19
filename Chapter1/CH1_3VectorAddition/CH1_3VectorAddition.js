function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  textSize(16);
}

function draw() {
  background(24);

  let myMouseX = mouseX - width/2;
  let myMouseY = mouseY - height/2;
  let mouse = createVector(myMouseX, myMouseY);
  let center = createVector(width/4, height/4);
  mouse.add(center);

  translate(width/2, height/2);

  stroke(0, 255, 0);
  fill(0, 255, 0);
  line(0, 0, myMouseX, myMouseY); // Poits from the center to my mouse coords
  text("Mouse: (" + myMouseX + ", " + myMouseY + ")", -width/2 + 10, -height/2 + 20);

  stroke(255, 0, 255);
  fill(255, 0, 255);
  line(0, 0, center.x, center.y); // Points from the center in a direction as an example
  text("Center: (" + center.x + ", " + center.y + ")", -width/2 + 10, -height/2 + 40);

  stroke(255, 255, 255);
  fill(255, 255, 255);
  line(0, 0, mouse.x, mouse.y); // Points to the result of mouse - center
  text("mouse.add(center): (" + mouse.x + ", " + mouse.y + ")", -width/2 + 10, -height/2 + 60);
}
