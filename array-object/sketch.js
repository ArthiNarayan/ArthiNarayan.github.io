// Arrays and Object Notation Assignment
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

}

function mandala_pattern {
  let time = 0;
  let deltaTime = 0.001;
  for (let x = 0; x < width; x += theWidth) {
    let height = noise(time) * height;
    let someCircle = spawnRectangle(x, theHeight, theWidth);
    terrain.push(someRect);
    time += deltaTime;
  }
}

function spawnCircle(widthCenter, heightCenter, diameter) {
  let theCircle = {
    x: widthCenter,
    y: heightCenter, 
    d: diameter,
  };
  return theCircle;
