// Arrays and Object Notation Assignment
// Arthi Narayan
// October 21st, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Create array to store properties of mandala patterns
let mandalaPatterns = [];

// Set layers in mandala to be five
let mandalaLayers = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  
  // Initialize mandala patterns
  initializeMandalaPatterns();
}

function draw() {
  // Set background to be black
  background(0);

}

// Set up patterns for mandala
function initializeMandalaPatterns() {
  
  // Creates each layer of mandala
  for (let layer = 0; layer < mandalaLayers; layer++) {
    // Random number of patterns for each layer
    let patternCount = int(random(8, 12)); 
    // Calculate the angle offset for placing patterns evenly around the mandala
    let angleOffset = TWO_PI / patternCount; 

    // Creates pattern for each layer
    for (let i = 0; i < patternCount; i++) {
      mandalaPatterns.push({
        // Ensures patterns are evenly-spaced and positioned slightly differently from ones in other layers
        angle: i * angleOffset + (layer * 0.1),
        // As the layer number increases, its size will increase from 100 pixels to 300 pixels
        size: map(layer, 0, mandalaLayers - 1, 100, 300), 
        // Patterns will be random pastel colours
        color: color(random(150, 255), random(150, 255), random(150, 255))
        // Tracks layer number
        layer: layer 
      });
    }
  }
}
