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


function preload() {
  // Load all image files
  ancient = loadImage("ancient.avif");

}


function setup() {
  createCanvas(windowWidth, windowHeight);
};

function draw() {
  startScreen();
}

function startScreen() {
  // Displays start screen images
  image(ancient, 0, 0, windowWidth, windowHeight);

}


// // Display start screen and images
// image(cows, 0, 0, windowWidth, windowHeight);
// image(circleCat, 20, 20, circleCat.width * 0.25, circleCat.height * 0.25);
// image(animal, 310, 35, animal.width * 0.35, animal.height * 0.35);
// image(camera1, 600, 225, camera1.width * 0.65, camera1.height * 0.65);
// image(meowcrobiology, 1127, 0, meowcrobiology.width * 0.35, meowcrobiology.height * 0.35);
  
// // If the user clicks on animal cell option, switch from start screen to animal cell diagram
// if (mouseIsPressed && mouseX > 310 && mouseX < 310 + animal.width * 0.35 && mouseY > 35 && mouseY < 35 + animal.height * 0.35) {
//   state = "animal cell"; 
// }
// // If the user clicks on plant cell option, switch from start screen to plant cell diagram
// if (mouseIsPressed && mouseX > 600 && mouseX < 600 + animal.width * 0.65 && mouseY > 225 && mouseY < 225 + animal.height * 0.65) {
//   state = "plant cell"; 
// }