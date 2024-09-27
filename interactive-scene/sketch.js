// Interactive Scene
// PUT HEADER

let state = "start";
let circlecat; 

function preload() {
  circlecat = loadImage("circlecat.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // if (state === start) {
  //show start screen
  //else 
   //normal stuff so all these other fucntions
  swapState();
  image(circlecat, 20, 20, circlecat.width * 0.25, circlecat.height * 0.25);
}

function swapState() {
  if (state === "start") {
    startScreen();
  }
  else if (state === "animal cell") {
    animalCell();
  }
  else if (state === "plant cell") {
    plantCell();
  }
}

function startScreen() {
  background("#f7e7ce");
  textSize(50);
  text('Meowcrobiology', 450, 100);
}
// if (screen === 1 && mouseX > 50 && mouseX < 350 && mouseY > 50 && mouseY < 350) {
//   screen = 2; // Change screen