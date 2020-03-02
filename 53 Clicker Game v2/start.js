let button;

function setup(){
  createCanvas(windowWidth, windowHeight)
  background('lightgray')
  const heading = createElement('h1', 'Welcome to Catch The Banana Game!')
  heading.style('font-family: roboto')
  heading.style('font-size: 50px')
  heading.style('text-align: center')
  heading.style('position: absolute')
  heading.style('width: 100%')
  heading.style('top: 100px')
  button = createButton('Start');
  button.position(width / 2, height / 2)
  button.mousePressed(goToLink)
}
