let guy;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(24);

    guy = new Walker(255, 255, 255, 2, 255);
}

function draw() {
    guy.display();
    guy.walk();
}