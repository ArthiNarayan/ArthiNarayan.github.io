// Translate and Rotate




function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);

  push();
  translate(200, 200);
  rotate(mouseX);
  fill("pink");
  square(0, 0, 100);
  pop(); //reset to the push version

  fill("pink");
  rect(width/2, height - 200, width * 2, 400);
}


