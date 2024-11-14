// Grid-Based Game Assignment
// Arthi Narayan
// Date

// Extra for Experts:
// - describe what you did to take this project "above and beyond" do video fo rinstructions


// Set image variables
// let ancient;
// let startFont;
// let play;
// let scroll;
// let board;

// // Game variables
// let pitRadius = 40;
// let pitSpacing = 100;
// let storeWidth = 80;
// let playerTurn = 0; // 0 for Player 1, 1 for Player 2
// let isGameOver = false;

// // Set state variable to enable start screen
// let state = "start";

// // Create array for mancala board with 6 pits (4 stones in each) and 1 store for each player
// let mancalaBoard = [
//   [4, 4, 4, 4, 4, 4, 0], // Player 1's pits
//   [4, 4, 4, 4, 4, 4, 0], // Player 2's pits
// ];

// function preload() {
//   // Load all image files
//   ancient = loadImage("ancient.avif");
//   play = loadImage("play.png");
//   scroll = loadImage("scroll.png");
//   board = loadImage("board.jpg");

//   // Load font files
//   //startFont = loadFont("MonsterFriendFore.otf");

// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// };

// function draw() {
//   swapState();
// }

// function swapState() {
//   if (state === "start") {
//     startScreen();
//   }

//   else if (state === "instructions") {
//     instructionScreen();
//   }

//   else if (state === "play") {
//     drawGame();
//   }

// }

// function startScreen() {
//   // Displays start screen font;
//   // Displays start screen images
//   image(ancient, 0, 0, windowWidth, windowHeight);
//   image(play, 600, 290, play.width*2.5, play.height*2.5);

//   if (mouseIsPressed && mouseX > 600 && mouseX < 600 + play.width * 2.5 && mouseY > 290 && mouseY < 290 + play.height * 2.5) {
//     state = "instructions"; 
//   }
  
// }
// function keyPressed() {
//   if (state === "instructions" && key === " ") { //might have to add instructions thing
//     state = "play";
//   }
// }

// function instructionScreen() {
//   // Background for instructions
//   image(scroll, 0, 0, windowWidth, windowHeight);

//   // Set up the text style and size
//   textSize(24);
//   textAlign(CENTER, TOP);

//   // Set fancy font (you can add your own fancy font by loading it in preload)
//   textFont("Georgia"); // Or use a font you like
  
//   fill(0); // Black text

//   // Display the title
//   text("Instructions", 850, 120);

//   textSize(18);
//   textAlign(LEFT, TOP);
  
//   // Instructions text
//   let instructions = `
// 1. Objective:
//    The goal is to collect more stones in your store (the pit at the end of each row) than your opponent by distributing the stones from your pits.

// 2. Game Setup:
//    - The game is played on a board with 2 rows of 6 pits, with a store (larger pit) at the end of each row.
//    - Each player starts with 4 stones in each of their 6 pits.
//    - Player 1 controls the top row (the "North" side), and Player 2 controls the bottom row (the "South" side).

// 3. How to Play:
//    - On your turn, click one of your pits to distribute the stones inside it.
//    - Stones are placed one by one into the next pit in a counter-clockwise direction (for Player 1) or clockwise direction (for Player 2).
//    - If you land a stone in your store, you get another turn.
//    - If your last stone lands in an empty pit on your side, you capture the stones from the opposite pit and place them in your store.

// 4. Ending the Game:
//    The game ends when one side of the board (either Player 1's or Player 2's pits) is empty. The remaining stones on the other side are then placed into the player's store.
   
// 5. Winning the Game:
//    The player with the most stones in their store at the end of the game wins! If both players have the same number of stones, it’s a tie.
//   `;
  
//   // Display the instructions with adjusted box size
//   text(instructions, 360, 150, windowWidth - 450, windowHeight - 150); // Adjust width and height to allow for more space at the bottom

//   // Text at the bottom: Click or press space to play
//   textSize(16);
//   textAlign(CENTER, BOTTOM);
//   text("Press SPACE to play", 850, windowHeight - 130);
// }

// // Draw the Mancala game screen
// function drawGame() {
//   image(board, 0, 0, windowWidth, windowHeight);
//   drawBoard();
//   if (isGameOver) {
//     displayWinner();
//   }
// }

// // // Function to draw the Mancala board
// function drawBoard() {
//   // Draw Top Player's pits (Player 1)
//   for (let i = 0; i < 6; i++) {
//     drawPit(pitSpacing * (i + 1), 100, mancalaBoard[0][i]);
//   }

//   // Draw Bottom Player's pits (Player 2)
//   for (let i = 0; i < 6; i++) {
//     drawPit(pitSpacing * (i + 1), 300, mancalaBoard[1][i]);
//   }

//   // Draw Stores
//   drawStore(43, 200, mancalaBoard[0][6], "P1");
//   drawStore(660, 200, mancalaBoard[1][6], "P2");

//   // Display Player Turn
//   fill("black");
//   textSize(20);
//   text(`Player ${playerTurn + 1}'s Turn`, 975, 300);
// }


// // Creates pits
// function drawPit(x, y, marbles) {
//   fill("grey");
//   ellipse(x, y, pitRadius * 2);
//   fill(0);
//   text(marbles, x, y);

//   if (mouseIsPressed && dist(mouseX, mouseY, x, y) < pitRadius) {
//     if (!isGameOver && ((y === 100 && playerTurn === 0) || (y === 300 && playerTurn === 1))) {
//       let row;
//       if (y === 100) {
//         row = 0;
//       } 
//       else {
//         row = 1;
//       }
//       let index = (x - pitSpacing) / pitSpacing;
//       if (mancalaBoard[row][index] > 0) {
//         distributeStones(row, index);
//       }
//     }
//   }
// }

// // Creates stores
// function drawStore(x, y, marbles, label) {
//   fill("grey");
//   rect(x - storeWidth / 2, y - 60, storeWidth, 120);
//   fill(0);
//   textSize(20);
//   text(marbles, x, y);
//   textSize(16);
//   text(label, x, y - 80);
// }

// // Function to distribute stones from the selected pit
// function distributeStones(row, index) {
//   let marbles = mancalaBoard[row][index];
//   mancalaBoard[row][index] = 0;
//   let currentRow = row;
//   let currentIndex = index;

//   while (marbles > 0) {
//     currentIndex++;

//     if (currentIndex === 7) {
//       if (currentRow === playerTurn) {
//         mancalaBoard[currentRow][6]++;
//         marbles--;
//         if (marbles === 0) return;
//       }
//       currentRow = 1 - currentRow;
//       currentIndex = 0;
//     }

//     mancalaBoard[currentRow][currentIndex]++;
//     marbles--;
//   }

//   if (!(currentRow === playerTurn && currentIndex === 6)) {
//     playerTurn = 1 - playerTurn;
//   }

//   checkForGameOver();
// }

// // Check if the game is over
// function checkForGameOver() {
//   let topRowEmpty = mancalaBoard[0].slice(0, 6).every(stone => stone === 0);
//   let bottomRowEmpty = mancalaBoard[1].slice(0, 6).every(stone => stone === 0);

//   if (topRowEmpty || bottomRowEmpty) {
//     isGameOver = true;
//     mancalaBoard[0][6] += mancalaBoard[0].slice(0, 6).reduce((a, b) => a + b, 0);
//     mancalaBoard[1][6] += mancalaBoard[1].slice(0, 6).reduce((a, b) => a + b, 0);
//     mancalaBoard[0].fill(0, 0, 6);
//     mancalaBoard[1].fill(0, 0, 6);
//   }
// }

// // Display the winner at the end of the game
// function displayWinner() {
//   fill(0);
//   textSize(32);
//   let winner;
//   if (mancalaBoard[0][6] > mancalaBoard[1][6]) {
//     winner = "Player 1 Wins!";
//   } else if (mancalaBoard[0][6] < mancalaBoard[1][6]) {
//     winner = "Player 2 Wins!";
//   } else {
//     winner = "It's a Tie!";
//   }
//   text(winner, width/2, 500);
// }

// Set image variables
let ancient;
let startFont;
let play;
let scroll;
let board;

let state = "start";

// Mancala Game Board using 2D array (6 pits + 1 store for each player)
let mancalaBoard = [
  [4, 4, 4, 4, 4, 4, 0], // Top row (Player 1's pits)
  [4, 4, 4, 4, 4, 4, 0], // Bottom row (Player 2's pits)
];

// Game variables
let pitRadius = 40;
let pitSpacing = 100;
let storeWidth = 80;
let playerTurn = 0; // 0 for Player 1, 1 for Player 2
let isGameOver = false;

// Preload function
function preload() {
  ancient = loadImage("ancient.avif");
  play = loadImage("play.png");
  scroll = loadImage("scroll.png");
  board = loadImage("board.png");
}

// Setup function
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Georgia")
}

// Main draw loop
function draw() {
  swapState();
}

// State management
function swapState() {
  if (state === "start") {
    startScreen();
  } else if (state === "instructions") {
    instructionScreen();
  } else if (state === "play") {
    drawGame();
  }
}

// Start screen
function startScreen() {
  image(ancient, 0, 0, windowWidth, windowHeight);
  image(play, 450, 235, play.width * 2.5, play.height * 2.5);

  if (mouseIsPressed && mouseX > 450 && mouseX < 450 + play.width * 2.5 && mouseY > 235 && mouseY < 235 + play.height * 2.5) {
    state = "instructions";
  }
}

// Instructions screen
// function instructionScreen() {
//   image(scroll, 0, 0, windowWidth, windowHeight);
//   fill("black");
//   textSize(20);
//   text("Press SPACE to start the game", width/2, height - 50);
// }

function instructionScreen() {
  // Background for instructions
  image(scroll, 0, 0, windowWidth, windowHeight);

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
  
  // Display the instructions with adjusted box size
  text(instructions, 335, 80, windowWidth - 450, windowHeight - 200); // Adjust width and height to allow for more space at the bottom

  // Text at the bottom: Click or press space to play
  textSize(16);
  textAlign(CENTER, BOTTOM);
  text("PRESS SPACE TO START", 705, 515);
}

// Handle key press to start the game
function keyPressed() {
  if (state === "instructions" && key === " ") {
    state = "play";
  }
}

// Draw the Mancala game screen
function drawGame() {
  image(board, 0, 0, windowWidth, windowHeight);
  drawBoard();
  if (isGameOver) {
    displayWinner();
  }
}

// Function to draw the Mancala board
function drawBoard() {
  // Draw Top Player's pits (Player 1)
  for (let i = 0; i < 6; i++) {
    drawPit(pitSpacing * (i + 1), 100, mancalaBoard[0][i]);
  }

  // Draw Bottom Player's pits (Player 2)
  for (let i = 0; i < 6; i++) {
    drawPit(pitSpacing * (i + 1), 300, mancalaBoard[1][i]);
  }

  // Draw Stores
  drawStore(43, 200, mancalaBoard[0][6], "P1");
  drawStore(660, 200, mancalaBoard[1][6], "P2");

  // Display Player Turn
  fill(0);
  textSize(32);
  text(`Player ${playerTurn + 1}'s Turn`, 900, 270);
}

// Function to draw individual pits
function drawPit(x, y, marbles) {
  fill("darkred");
  ellipse(x, y, pitRadius * 2);
  textSize(20);
  fill("white");
  text(marbles, x, y);

  // Handle mouse click for selecting a pit
  if (mouseIsPressed && dist(mouseX, mouseY, x, y) < pitRadius) {
    if (!isGameOver && ((y === 100 && playerTurn === 0) || (y === 300 && playerTurn === 1))) {
      if (y === 100) {
        row = 0;
      } 
      else {
        row = 1;
      }
      let index = (x - pitSpacing) / pitSpacing;
      if (mancalaBoard[row][index] > 0) {
        distributeStones(row, index);
      }
    }
  }
}

// Function to draw stores
function drawStore(x, y, marbles, label) {
  fill("darkred");
  rect(x - storeWidth / 2, y - 60, storeWidth, 120);

  fill("white");
  textSize(20);
  text(marbles, x, y);

  fill("black")
  textSize(16);
  text(label, x, y - 80);
}

// Function to distribute stones from the selected pit
function distributeStones(row, index) {
  let marbles = mancalaBoard[row][index];
  mancalaBoard[row][index] = 0;
  let currentRow = row;
  let currentIndex = index;

  while (marbles > 0) {
    currentIndex++;

    if (currentIndex === 7) {
      if (currentRow === playerTurn) {
        mancalaBoard[currentRow][6]++;
        marbles--;
        if (marbles === 0) return;
      }

      currentRow = 1 - currentRow;
      currentIndex = 0;
    }

    mancalaBoard[currentRow][currentIndex]++;
    marbles--;
  }

  if (!(currentRow === playerTurn && currentIndex === 6)) {
    playerTurn = 1 - playerTurn;
  }

  checkForGameOver();
}

// Check if the game is over
function checkForGameOver() {
  let topRowEmpty = mancalaBoard[0].slice(0, 6).every(stone => stone === 0);
  let bottomRowEmpty = mancalaBoard[1].slice(0, 6).every(stone => stone === 0);

  if (topRowEmpty || bottomRowEmpty) {
    isGameOver = true;
    mancalaBoard[0][6] += mancalaBoard[0].slice(0, 6).reduce((a, b) => a + b, 0);
    mancalaBoard[1][6] += mancalaBoard[1].slice(0, 6).reduce((a, b) => a + b, 0);
    mancalaBoard[0].fill(0, 0, 6);
    mancalaBoard[1].fill(0, 0, 6);
  }
}

// Display the winner at the end of the game
function displayWinner() {
  fill(0);
  textSize(50);
  let winner;
  if (mancalaBoard[0][6] > mancalaBoard[1][6]) {
    winner = "Player 1 wins!";
  } else if (mancalaBoard[0][6] < mancalaBoard[1][6]) {
    winner = "Player 2 wins!";
  } else {
    winner = "It's a tie!";
  }
  text(winner, 450, 480);
}
