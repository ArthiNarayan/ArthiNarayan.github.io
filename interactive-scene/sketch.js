// Interactive Scene
// PUT HEADER/add commets/check about citations/ectra for experts//sound effect for clicking buttons and changing asnwer

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

// Set background music
let answerSound;


let soundtrack;
let muteButton;
let trackOn = false;



function preload() {
  circleCat = loadImage("circlecat.png");
  cows = loadImage("cows.png");
  animal = loadImage("animal.png");
  camera1 = loadImage("camera1.png");
  meowcrobiology = loadImage("meowcrobiology.png");
  meowcrobiology2 = loadImage("meowcrobiology2.png");
  stars = loadImage("stars.jpg");
  animalQuiz = loadImage("animalquiz.png");
  plantQuiz = loadImage("plantquiz.png");

  answerFont = loadFont("Simple Cake.otf");

  answerSound = loadSound("button.mp3");
  soundtrack = loadSound("rainy season.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  muteButton = createButton("MUSIC");
  muteButton.position(1220, 30); // Position the button on the canvas
  muteButton.mousePressed(muteTrack);
}

function draw() {
  swapState();

  textSize(80); 
  textFont(answerFont); 
  fill("pink");
  text(answer, 785, windowHeight/2);
}

function swapState() {
  if (state === "start") {
    startScreen();
  }
  else if (state === "animal cell") {
    animalCell();
  }
  else if (state === "plant cell") {
    plantCell();
  }
}

function startScreen() {
  image(cows, 0, 0, windowWidth, windowHeight);
  
  image(circleCat, 20, 20, circleCat.width * 0.25, circleCat.height * 0.25);
  image(animal, 310, 35, animal.width * 0.35, animal.height * 0.35);
  image(camera1, 600, 225, camera1.width * 0.65, camera1.height * 0.65);
  image(meowcrobiology, 1127, 0, meowcrobiology.width * 0.35, meowcrobiology.height * 0.35);
  // textSize(50);
  // text('Meowcrobiology', 100, 20);
  if (mouseIsPressed && mouseX > 310 && mouseX < 310 + animal.width * 0.35 && mouseY > 35 && mouseY < 35 + animal.height * 0.35) {
    state = "animal cell"; 
  }

  if (mouseIsPressed && mouseX > 600 && mouseX < 600 + animal.width * 0.65 && mouseY > 225 && mouseY < 225 + animal.height * 0.65) {
    state = "plant cell"; 
  }
}

function animalCell() {
  image(stars, 0, 0, windowWidth, windowHeight);
  
  image(circleCat, 20, 20, circleCat.width * 0.25, circleCat.height * 0.25);
  image(meowcrobiology2, 1127, 0, meowcrobiology2.width * 0.35, meowcrobiology2.height * 0.35);
  image(animalQuiz, 200, 30, animalQuiz.width * 1.05, animalQuiz.height * 1.05);
}

function plantCell() {
  image(stars, 0, 0, windowWidth, windowHeight);
  
  image(circleCat, 20, 20, circleCat.width * 0.25, circleCat.height * 0.25);
  image(meowcrobiology2, 1127, 0, meowcrobiology2.width * 0.35, meowcrobiology2.height * 0.35);
  image(plantQuiz, 250, 5);
}

function keyPressed() {
  if (answerSound.isLoaded()) {
    answerSound.play(); 
  }
  // dgsfdg
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
      answer = ""; // Clear word for other keys
    }
  }
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
      answer = ""; // Clear word for other keys
    }
  }
}

// Function to play the background music
function playTrack() {
  if (!trackOn && soundtrack.isLoaded()) {
    soundtrack.loop(); // Loop the background music
    trackOn = true;
  }
}

// Function to toggle music on/off
function muteTrack() {
  if (soundtrack.isPlaying()) {
    soundtrack.pause(); // Pause the music
    trackOn = false;
  }
  else {
    soundtrack.play(); // Play the music
    trackOn = true;
  }
}