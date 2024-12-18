// Sierpinksi Triangle
// Recursion Demo

let initialTriangle = [
  {x: 625, y: 50},
  {x: 50. y: 800},
  {x: 950, y: 800}
];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinksi(initialTriangle)
}

function sierpinksi(points) {
  triangle(points[0].x, points[0].y, [pomts[1].x, points[1].y, points[2].x, points[1].y);
}

function midpoint(point1, point2) {
  let midX = (point)
}