// Image Demo
// Sept 23, 2024

let spongebob; 

function preload() {
  spongebob = loadImage("bob.jpg");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function swapState() {
  // Display start screen
  if (state === "start") {
    startScreen();
  }
  // Display instructions screen
  else if (state === "instructions") {
    instructionsScreen();

}

function draw() {
  background(220);
  image(spongebob, mouseX, mouseY, spongebob.width * 0.5, spongebob.height * 0.5);
}
