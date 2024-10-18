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
  for (let i = 0; i < 6, i++;) {
    resetMatrix();
    let angle = TWO_PI/6*i;
    translate (
      sin(angle)*100,
      cos(angle)*100
    );  
    ellipse(0, 0, 100);
  }
}










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

