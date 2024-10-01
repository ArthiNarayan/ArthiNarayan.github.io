// Interactive Scene - Meowcrobiology
// Arthi Narayan
// October 1, 2024
//
// Extra for Experts:
// p5. sound library --> for sound effects and background music
// createButton() --> to play and mute the background music
// loadFont() --> downloaded and imported font to use for cell diagram

// Set state to enable start screen
let state = "start";

// Set image variables 
let circleCat; 
let cows;
let animal;
let camera1;
let meowcrobiology;
let meowcrobiology2;
let stars;
let animalQuiz;
let plantQuiz;

// Set cell diagram answers to be empty
let answer = "";

// Set font for cell diagram answers
let answerFont;

// Set variable for cell diagram sound effect
let answerSound;

// Set variables for background music and its mute button
let soundtrack;
let muteButton;
let trackOn = false;



function preload() {
  // Load all image files
  circleCat = loadImage("circlecat.png");
  cows = loadImage("cows.png");
  animal = loadImage("animal.png");
  camera1 = loadImage("camera1.png");
  meowcrobiology = loadImage("meowcrobiology.png");
  meowcrobiology2 = loadImage("meowcrobiology2.png");
  stars = loadImage("stars.jpg");
  animalQuiz = loadImage("animalquiz.png");
  plantQuiz = loadImage("plantquiz.png");

  // Load font for cell diagram answers
  answerFont = loadFont("Simple Cake.otf");

  // Load sound effect and background music
  answerSound = loadSound("button.mp3");
  soundtrack = loadSound("rainy season.wav");
}

function setup() {
  // Set canvas size based on window dimensions
  createCanvas(windowWidth, windowHeight);

  // Create a button to play and mute background music
  muteButton = createButton("MUSIC");
  muteButton.position(1220, 30); // Display the button on top right
  muteButton.mousePressed(muteTrack);
}

function draw() {
  // Switch from start screen to animal or plant cell diagram
  swapState();

  // Set cell diagram answers to be centered vertically
  text(answer, 785, windowHeight/2);
}

function swapState() {
  // Display start screen
  if (state === "start") {
    startScreen();
  }
  // Display animal cell diagram
  else if (state === "animal cell") {
    animalCell();
  }
  // Display plant cell diagram
  else if (state === "plant cell") {
    plantCell();
  }
}

function startScreen() {
  // Display start screen and images
  image(cows, 0, 0, windowWidth, windowHeight);
  image(circleCat, 20, 20, circleCat.width * 0.25, circleCat.height * 0.25);
  image(animal, 310, 35, animal.width * 0.35, animal.height * 0.35);
  image(camera1, 600, 225, camera1.width * 0.65, camera1.height * 0.65);
  image(meowcrobiology, 1127, 0, meowcrobiology.width * 0.35, meowcrobiology.height * 0.35);
  
  // If the user clicks on animal cell option, switch from start screen to animal cell diagram
  if (mouseIsPressed && mouseX > 310 && mouseX < 310 + animal.width * 0.35 && mouseY > 35 && mouseY < 35 + animal.height * 0.35) {
    state = "animal cell"; 
  }
  // If the user clicks on plant cell option, switch from start screen to plant cell diagram
  if (mouseIsPressed && mouseX > 600 && mouseX < 600 + animal.width * 0.65 && mouseY > 225 && mouseY < 225 + animal.height * 0.65) {
    state = "plant cell"; 
  }
}

function animalCell() {
  // Display the background for the animal cell screen
  image(stars, 0, 0, windowWidth, windowHeight);
  
  // Display the animal cell screen images and diagram
  image(circleCat, 20, 20, circleCat.width * 0.25, circleCat.height * 0.25);
  image(meowcrobiology2, 1127, 0, meowcrobiology2.width * 0.35, meowcrobiology2.height * 0.35);
  image(animalQuiz, 200, 30, animalQuiz.width * 1.05, animalQuiz.height * 1.05);
}

function plantCell() {
  // Display the background for the plant cell screen
  image(stars, 0, 0, windowWidth, windowHeight);

  // Display the plant cell screen images and diagram
  image(circleCat, 20, 20, circleCat.width * 0.25, circleCat.height * 0.25);
  image(meowcrobiology2, 1127, 0, meowcrobiology2.width * 0.35, meowcrobiology2.height * 0.35);
  image(plantQuiz, 250, 5);
}

// Reveal answers for the cell diagram
function keyPressed() {
  // Set font properties for cell diagram answers
  textSize(80); 
  textFont(answerFont); 
  fill("pink");

  // Play the sound effect whenever a key is pressed
  if (answerSound.isLoaded()) {
    answerSound.play(); 
  }
  // If user chose animal cell option, display the animal cell answers whenever the corresponding key is pressed
  if (state === "animal cell") {
    if (key === "k" || key === "K") {
      answer = "Lysosomes";
    } 
    else if (key === "l" || key === "L") {
      answer = "Vacuole";
    }
    else if (key === "m" || key === "M") {
      answer = "Centrosome";
    } 
    else if (key === "n" || key === "N") {
      answer = "Nucleolus";
    } 
    else {
      answer = ""; // Clear word whenever other keys are pressed
    }
  }
  // If user chose plant cell option, display the plant cell answers whenever the corresponding key is pressed
  else if (state === "plant cell") {
    if (key === "a" || key === "A") {
      answer = "Mitochondrion";
    } 
    else if (key === "b" || key === "B") {
      answer = "Ribosomes";
    } 
    else if (key === "c" || key === "C") {
      answer = "Nucleus";
    }
    else if (key === "d" || key === "D") {
      answer = "Smooth ER";
    } 
    else if (key === "e" || key === "E") {
      answer = "Golgi";
    }
    else if (key === "f" || key === "F") {
      answer = "Cell Membrane";
    }
    else if (key === "g" || key === "G") {
      answer = "Vacuole";
    } 
    else if (key === "h" || key === "H") {
      answer = "Cell Wall";
    }
    else if (key === "i" || key === "I") {
      answer = "Chloroplasts";
    }
    else if (key === "j" || key === "J") {
      answer = "Filaments";
    }
    else {
      answer = ""; // Clear word whenever other keys are pressed
    }
  }
}

// Play background music
function playTrack() {
  if (!trackOn && soundtrack.isLoaded()) {
    soundtrack.loop(); // Loop background music
    trackOn = true;
  }
}

// Plays and mutes background music
function muteTrack() {
  if (soundtrack.isPlaying()) {
    soundtrack.pause(); // Mute the music
    trackOn = false;
  }
  else {
    soundtrack.play(); // Play the music
    trackOn = true;
  }
}