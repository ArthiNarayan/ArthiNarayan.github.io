// Arrays and Object Notation Assignment
// Arthi Narayan
// October 21st, 2024
//
// Extra for Experts:
// map() --> used to vary size of mandala layers
// sin()/cos() --> used to position mandala in a circular shape
// bezierVertex() --> used to add Bézier curve segments to mandala

// Create array to store properties of mandala patterns
let mandalaPatterns = [];

// Set layers of mandala to be five
let mandalaLayers = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  
  // Create layers and patterns of mandala
  initializeMandala();
}

function draw() {
  // Sets background to be black
  background(0);

  // Centers the mandala
  translate(width/2, height/2);

  drawMandala();
}

// Sets up layers and patterns for mandala
function initializeMandala() {
  // Creates each layer of mandala
  for (let layer = 0; layer < mandalaLayers; layer++) {
    // Random number of patterns for each layer
    let patternCount = int(random(8, 12)); 
    // Calculate the angle offset for placing patterns evenly around the mandala
    let angleOffset = TWO_PI / patternCount; 

    // Defines pattern properties
    for (let i = 0; i < patternCount; i++) {
      mandalaPatterns.push({
        // Ensures patterns are evenly-spaced and positioned slightly differently from ones in other layers
        angle: i * angleOffset + layer * 0.1,
        // As the layer number increases, its size will increase from 100 pixels to 300 pixels
        size: map(layer, 0, mandalaLayers - 1, 100, 300), 
        // Patterns will be random pastel colours
        color: color(random(200, 255), random(200, 255), random(200, 255)),
        // Tracks layer number
        layer: layer 
      });
    }
  }
}

// Draws the entire mandala
function drawMandala() {
  for (let pattern of mandalaPatterns) {
    // Draws each indvidual pattern
    drawPatterns(pattern); 
  }
}

// Draws the patterns of the mandala
function drawPatterns(pattern) {
  // Allows for transformations to only affect code between push() and pop()
  push();
  
  // Set characteristics of pattern
  rotate(pattern.angle); 
  stroke(pattern.color);
  strokeWeight(2);
  noFill();

  // Begins adding vertices to pattern
  beginShape();
  
  // Calculates each vertex's position using the shape's radius to position it evenly around a circle
  for (let j = 0; j < TWO_PI; j += TWO_PI / 10) {
    // Calculates x and y coordinates for first and last vertex of pattern
    let x = pattern.size * cos(j);
    let y = pattern.size * sin(j);
    
    // Defines first and last vertex
    vertex(x, y);
    
    // Sets up random control points for bézier
    let controlX1 = pattern.size * 0.5 * cos(j) + random(-10, 10);
    let controlY1 = pattern.size * 0.5 * sin(j) + random(-10, 10);
    let controlX2 = pattern.size * 0.9 * cos(j) + random(-10, 10);
    let controlY2 = pattern.size * 0.9 * sin(j) + random(-10, 10);
    
    // Creates bézier curve
    bezierVertex(controlX1, controlY1, controlX2, controlY2, x, y);
  }
  
  // Finishes pattern by connecting all vertices
  endShape(CLOSE);
  
  pop();
}

