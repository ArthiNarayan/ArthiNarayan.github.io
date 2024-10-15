// Arrays and Object Notation Assignment
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let mandala = [];
// const NUMBER_OF_CIRCLES = 2000;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   let howWide = NUMBER_OF_CIRCLES;
//   mandala_pattern(howWide);

// }

// function draw() {
//   background(220);

//   for (let someCircle of mandala) {
//     rect(someCircle.x, someCircle.y, someCircle.w, someCircle.h);
//   }
// }

// function mandala_pattern() {
//   let time = 0;
//   let deltaTime = 0.001;
//   for (let x = 0; x < width; x += theWidth) {
//     let height = noise(time) * height;
//     let someCircle = spawnCircle(x, theHeight, theWidth);
//     mandala.push(someCircle);
//     time += deltaTime;
//   }
// }

// function spawnCircle(widthCenter, heightCenter, diameter) {
//   let theCircle = {
//     x: widthCenter,
//     y: heightCenter, 
//     d: diameter,
//   };
//   return theCircle;
// }

let terrain = [];
const NUMBER_OF_RECTS = 2000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let howWide = width / NUMBER_OF_RECTS;
  generateTerrain(howWide);
}

function draw() {
  background(220);

  for (let someRect of terrain) {
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
  }
}

function generateTerrain(theWidth) {
  let time = 0;
  let deltaTime = 0.001;
  for (let x = 0; x < width; x += theWidth) {
    let theHeight = noise(time) * height;
    let someRect = spawnRectangle(x, theHeight, theWidth);
    terrain.push(someRect);
    time += deltaTime;
  }
}

function spawnRectangle(leftSide, rectHeight, rectWidth) {
  let theRect = {
    x: leftSide,
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight,
  };
  return theRect;
}