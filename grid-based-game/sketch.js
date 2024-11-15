// Grid-Based Game Assignment
// Arthi Narayan
// November 15th, 2024

// Extra for Experts:
// dist() --> used to check if player clicked pit
// every() --> used to check if all pits in one row was empty to end game
// reduce() --> used to add remaining stones into players pits' at end of game


// Set image variables
let ancient;
let startFont;
let play;
let scroll;
let board;

// Set state to enable start screen 
let state = "start";

// Create array for board (6 pits + 1 store for each player)
let mancalaBoard = [
  [4, 4, 4, 4, 4, 4, 0], // Top row (Player 1's pits)
  [4, 4, 4, 4, 4, 4, 0], // Bottom row (Player 2's pits)
];

// Set game and board variables
let pitRadius = 40;
let pitSpacing = 100;
let storeWidth = 80;
let playerTurn = 0; // 0 for Player 1, 1 for Player 2
let isGameOver = false;


function preload() {
  // Load all image files
  ancient = loadImage("ancient.avif");
  play = loadImage("play.png");
  scroll = loadImage("scroll.png");
  board = loadImage("board.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Set all font to Georgia
  textFont("Georgia")
}

function draw() {
  // Enables switches from start, instructions, and game screen
  swapState();
}


function swapState() {
  // Displays start screen
  if (state === "start") {
    startScreen();
  } 
  // Displays instructions screen
  else if (state === "instructions") {
    instructionScreen();
  } 
  // Displays game screen
  else if (state === "play") {
    drawGame();
  }
}


function startScreen() {
  // Displays background and play button
  image(ancient, 0, 0, windowWidth, windowHeight);
  image(play, 450, 235, play.width * 2.5, play.height * 2.5);

  // If user clicks play button, screen will switch to instructions 
  if (mouseIsPressed && mouseX > 450 && mouseX < 450 + play.width * 2.5 && mouseY > 235 && mouseY < 235 + play.height * 2.5) {
    state = "instructions";
  }
}

function instructionScreen() {
  // Displays background
  image(scroll, 0, 0, windowWidth, windowHeight);

  // Formats text for instructions
  textSize(18);
  textAlign(LEFT, TOP);
  
  // Instructions text
  let instructions = `
Objective:  
Collect more stones in your store than your opponent by distributing stones from your pits.

Game Setup: 
- The board has 2 rows of 6 pits, each with a store at the end.  
- Each player starts with 4 stones in each pit. Player 1 controls the top row  and Player 2 controls the bottom row.

How to Play:  
- Click a pit to distribute its stones.  
- Stones are placed one by one in a counter-clockwise (Player 1) or clockwise (Player 2) direction.  
- If a stone lands in your store, take another turn.  
- Landing your last stone in an empty pit on your side lets you capture stones from the opposite pit.

Ending Game:  
The game ends when a player’s row is empty. Remaining stones go into the other player’s store. The player with the most stones in their store wins. A tie occurs if both have the same number of stones.
  `;
  
  // Display the instructions
  text(instructions, 335, 80, windowWidth - 450, windowHeight - 200); 

  // Text to signal user to start playing
  textSize(16);
  textAlign(CENTER, BOTTOM);
  text("PRESS SPACE TO START", 705, 515);
}

// User will go to game screen if they click space bar
function keyPressed() {
  if (state === "instructions" && key === " ") {
    state = "play";
  }
}

// Draws mancala game screen
function drawGame() {
  image(board, 0, 0, windowWidth, windowHeight);
  drawBoard();
  if (isGameOver) {
    displayWinner();
  }
}

// Draws mancala board
function drawBoard() {
  // Draws Player 1's pits
  for (let i = 0; i < 6; i++) {
    drawPit(pitSpacing * (i + 1), 100, mancalaBoard[0][i]);
  }

  // Draws Player 2's pits
  for (let i = 0; i < 6; i++) {
    drawPit(pitSpacing * (i + 1), 300, mancalaBoard[1][i]);
  }

  // Draws stores
  drawStore(43, 200, mancalaBoard[0][6], "P1");
  drawStore(660, 200, mancalaBoard[1][6], "P2");

  // Displays player turn
  fill(0);
  textSize(32);
  text(`Player ${playerTurn + 1}'s Turn`, 900, 270);
}

// Draws pits
function drawPit(x, y, marbles) {
  // Formats shape and text of pit
  fill("darkred");
  ellipse(x, y, pitRadius * 2);
  textSize(20);
  fill("white");
  text(marbles, x, y);

  // Lets player select pit
  if (mouseIsPressed && dist(mouseX, mouseY, x, y) < pitRadius) {
    // Checks that game is ongoing and player is selecting correct row
    if (!isGameOver && ((y === 100 && playerTurn === 0) || (y === 300 && playerTurn === 1))) {
      // Determines row based on y-coordinate
      if (y === 100) {
        row = 0;
      } 
      else {
        row = 1;
      }
      // Calculates index of pit (which pit it is)
      let index = (x - pitSpacing) / pitSpacing;
      // Lets player distributes pit's stones only if there is more than 0
      if (mancalaBoard[row][index] > 0) {
        distributeStones(row, index);
      }
    }
  }
}

// Draws stores
function drawStore(x, y, marbles, label) {
  fill("darkred");
  rect(x - storeWidth / 2, y - 60, storeWidth, 120);

  // Displays which player store belongs to
  fill("white");
  textSize(20);
  text(marbles, x, y);

  // Displays number of stones
  fill("black")
  textSize(16);
  text(label, x, y - 80);
}

// Function to distribute stones from the selected pit
function distributeStones(row, index) {
  let marbles = mancalaBoard[row][index]; // Get the number of marbles in the selected pit
  mancalaBoard[row][index] = 0; // Empty the selected pit
  let currentRow = row;
  let currentIndex = index;

  while (marbles > 0) { // Distribute marbles
    currentIndex++;

    if (currentIndex === 7) { // If user reaches the end of the row
      if (currentRow === playerTurn) { // If it's the player's turn
        mancalaBoard[currentRow][6]++; // Place a marble in the store
        marbles--;
        if (marbles === 0) return; // Stop if no marbles left to distribute
      }

      currentRow = 1 - currentRow; // Switch rows
      currentIndex = 0; // Reset the column index
    }

    mancalaBoard[currentRow][currentIndex]++; // Distribute a marble
    marbles--; // Decrease the number of marbles left
  }

  // Switch the turn if marbles didn't land in the current player's store
  if (!(currentRow === playerTurn && currentIndex === 6)) {
    playerTurn = 1 - playerTurn;
  }

  checkForGameOver(); // Check if the game is over
}

// Check if the game is over
function checkForGameOver() {
  // Check if all pits in the top or bottom row are empty
  let topRowEmpty = mancalaBoard[0].slice(0, 6).every(stone => stone === 0);
  let bottomRowEmpty = mancalaBoard[1].slice(0, 6).every(stone => stone === 0);

  if (topRowEmpty || bottomRowEmpty) { // If either row is empty, game is over
    isGameOver = true;
    // Add remaining marbles to the stores
    mancalaBoard[0][6] += mancalaBoard[0].slice(0, 6).reduce((a, b) => a + b, 0);
    mancalaBoard[1][6] += mancalaBoard[1].slice(0, 6).reduce((a, b) => a + b, 0);
    // Clear the pits
    mancalaBoard[0].fill(0, 0, 6);
    mancalaBoard[1].fill(0, 0, 6);
  }
}

// Display the winner at the end of the game
function displayWinner() {
  fill(0); // Set text color
  textSize(50); // Set text size
  let winner;
  if (mancalaBoard[0][6] > mancalaBoard[1][6]) { // Compare store values to decide the winner
    winner = "Player 1 wins!";
  } else if (mancalaBoard[0][6] < mancalaBoard[1][6]) {
    winner = "Player 2 wins!";
  } else {
    winner = "It's a tie!"; // If stores are equal, it's a tie
  }
  text(winner, 450, 480); // Display the winner message
}

