  
// Initialize UI Elements
let bananaImg
let scoreDisplay
let livesDisplay
let difficultySlider
let title

// Initialize Game Variables
let lives = 3
let score = 0
let winningNum = 5

function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight);
  background("lightblue");
  const heading = createElement('h1', 'CLICK THE BANANA 5 TIMES!');
  heading.style('font-size: 40px')
  heading.style('text-align: center')
  heading.style('position: absolute')
  heading.style('width: 100%')
  heading.style('top: 25px')

  // Setup Lives Display
  livesDisplay = createElement('h4', 'LIVES: ' + lives);
  livesDisplay.position(width / 20, height / 14)

  scoreDisplay = createElement('h4', 'SCORES: ' + score);
  scoreDisplay.position(width /20, height / 11)


  // Creates Difficulty Slider
  const difficultyLabel = createElement('h4', 'DIFFICULTY')
  difficultyLabel.position(width / 20, height / 8)
  difficultySlider = createSlider(1, 5, 0.5)
  difficultySlider.position(width / 20, height / 6)
  
   // Creates Banana
   createImg: bananaImg = createImg('banana.png', 'banana image')
   bananaImg.size(200, 100)
}

function draw() {
  // Adjust frameRate according to slider
  frameRate(difficultySlider.value())

  // Randomly Position Banana
  bananaImg.position(random(width - 200), random(height - 200))

  // Updates score and lives
  scoreDisplay.html("SCORE: " + score)
  livesDisplay.html("LIVES: " + lives)
}


function mousePressed() {
  if (dist(mouseX, mouseY, bananaImg.x, bananaImg.y) > 200) {
    decreaseLives()
  } else {
    increaseScore()
  }
}

function increaseScore() {
  score = score + 1
  checkWin();
}

function decreaseLives() {
lives = lives - 1
checkLose();
}

function checkWin() {
  if(score === winningNum) {
    window.location.href = 'win.html';
  }

}

function checkLose() {
  if(lives < 1){
    window.location.href = 'lose.html';
  }
}