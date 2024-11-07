// Grid-Based Game Assignment
// Arthi Narayan
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mancalaBoard;
const mancalaWidth = 7;
const mancalaHeight = 2;

// Set image variables
let ancient;
let startFont;
let play;
let scroll;

let state = "start";


function preload() {
  // Load all image files
  ancient = loadImage("ancient.avif");
  play = loadImage("play.png");
  scroll = loadImage("scroll.png");

  // Load font files
  //startFont = loadFont("MonsterFriendFore.otf");

}


function setup() {
  createCanvas(windowWidth, windowHeight);
};

function draw() {
  swapState();
}

function swapState() {
  if (state === "start") {
    startScreen();
  }

  else if (state === "instructions") {
    instructionScreen();
  }

}

function startScreen() {
  // Displays start screen font;
  // Displays start screen images
  image(ancient, 0, 0, windowWidth, windowHeight);
  image(play, 590, 290, play.width*2.5, play.height*2.5);

  if (mouseIsPressed && mouseX > 600 && mouseX < 600 + play.width * 2.5 && mouseY > 290 && mouseY < 290 + play.height * 2.5) {
    state = "instructions"; 
  }
  
}

// instructions screen

function instructionScreen() {
  image(scroll, 0, 0, windowWidth, windowHeight);
}
