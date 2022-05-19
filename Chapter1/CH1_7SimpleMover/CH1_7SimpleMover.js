let guy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);

  guy = new Mover();
}

function draw() {
  background(24);

  stroke(255);
  fill(255);

  //ellipse(guy.loc.x, guy.loc.y, guy.size, guy.size);
  guy.display();
  //guy.edgeWrap();

}
