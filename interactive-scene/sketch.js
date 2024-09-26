// Interactive Scene
// PUT HEADER

let start = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  swapState();
}

function swapState() {
  if (start === true) {
    background("5BB450");
  }
}

// function startScreen
// if (start) {
//   // all code
// }

// else {

// }