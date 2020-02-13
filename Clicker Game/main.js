let button;
function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('Go To Main Page');
  button.position(width / 2, height / 2)
  button.mousePressed(goToLink)
}
function draw() {
  //background(220);
  
  document.body.style.backgroundImage = "url('background.png')";
}
function goToLink() {
  window.location.href = 'game.html'; // Same tab
}
