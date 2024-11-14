// Grid-Based Game Assignment
// Arthi Narayan
// Date

// Extra for Experts:
// - describe what you did to take this project "above and beyond" do video fo rinstructions


// Set image variables
let ancient;
let startFont;
let play;
let scroll;

// Game variables
let pitRadius = 40;
let pitSpacing = 100;
let storeWidth = 80;
let playerTurn = 0; // 0 for Player 1, 1 for Player 2
let isGameOver = false;

// Set state variable to enable start screen
let state = "start";

// Create array for mancala board with 6 pits (4 stones in each) and 1 store for each player
let mancalaBoard = [
  [4, 4, 4, 4, 4, 4, 0], // Player 1's pits
  [4, 4, 4, 4, 4, 4, 0], // Player 2's pits
];

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

  else if (state === "play") {
    // mancala board stuff draw game function
  }

}

function startScreen() {
  // Displays start screen font;
  // Displays start screen images
  image(ancient, 0, 0, windowWidth, windowHeight);
  image(play, 600, 290, play.width*2.5, play.height*2.5);

  if (mouseIsPressed && mouseX > 600 && mouseX < 600 + play.width * 2.5 && mouseY > 290 && mouseY < 290 + play.height * 2.5) {
    state = "instructions"; 
  }
  
}
function keyPressed() {
  if (key === " ") { //might have to add instructions thing
    state = "play";
  }
}

function instructionScreen() {
  // Background for instructions
  image(scroll, 0, 0, windowWidth, windowHeight);

  // Set up the text style and size
  textSize(24);
  textAlign(CENTER, TOP);

  // Set fancy font (you can add your own fancy font by loading it in preload)
  textFont("Georgia"); // Or use a font you like
  
  fill(0); // Black text

  // Display the title
  text("Instructions", 850, 120);

  textSize(18);
  textAlign(LEFT, TOP);
  
  // Instructions text
  let instructions = `
1. Objective:
   The goal is to collect more stones in your store (the pit at the end of each row) than your opponent by distributing the stones from your pits.

2. Game Setup:
   - The game is played on a board with 2 rows of 6 pits, with a store (larger pit) at the end of each row.
   - Each player starts with 4 stones in each of their 6 pits.
   - Player 1 controls the top row (the "North" side), and Player 2 controls the bottom row (the "South" side).

3. How to Play:
   - On your turn, click one of your pits to distribute the stones inside it.
   - Stones are placed one by one into the next pit in a counter-clockwise direction (for Player 1) or clockwise direction (for Player 2).
   - If you land a stone in your store, you get another turn.
   - If your last stone lands in an empty pit on your side, you capture the stones from the opposite pit and place them in your store.

4. Ending the Game:
   The game ends when one side of the board (either Player 1's or Player 2's pits) is empty. The remaining stones on the other side are then placed into the player's store.
   
5. Winning the Game:
   The player with the most stones in their store at the end of the game wins! If both players have the same number of stones, it’s a tie.
  `;
  
  // Display the instructions with adjusted box size
  text(instructions, 360, 150, windowWidth - 450, windowHeight - 150); // Adjust width and height to allow for more space at the bottom

  // Text at the bottom: Click or press space to play
  textSize(16);
  textAlign(CENTER, BOTTOM);
  text("Press SPACE to play", 850, windowHeight - 130);
}

function drawPit(x, y, marbles) {
  fill("grey");
  ellipse(x, y, pitRadius * 2);
  fill(0);
  text(marbles, x, y);
}

// Function to draw stores
function drawStore(x, y, marbles, label) {
  fill("grey");
  rect(x - storeWidth / 2, y - 60, storeWidth, 120);
  fill(0);
  textSize(20);
  text(marbles, x, y);
  textSize(16);
  text(label, x, y - 80);
}


