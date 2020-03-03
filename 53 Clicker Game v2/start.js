let button;

function setup(){
  createCanvas(windowWidth, windowHeight)
  const heading = createElement('h1', 'Welcome to Catch The Banana Game!')
  background("lightgray");
  heading.style('font-size: 50px')
  heading.style('text-align: center')
  heading.style('position: absolute')
  heading.style('width: 100%')
  heading.style('top: 100px')
  button = createButton('START');
  button.position("center")
  button.size(100, 60);
  button.style("background-color", "lightblue")
  button.mousePressed(goToLink)
}

function goToLink() {
  window.location.href = 'game.html';
}
