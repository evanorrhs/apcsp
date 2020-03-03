let button;
let heading;

function setup(){
  createCanvas(windowWidth, windowHeight)
  const heading = createElement('h1', 'YOU WIN :)')
  const finalscore = createElement('h3', 'Final Score: 5');
  background("lightgreen");
  heading.style('font-size: 50px')
  heading.style('text-align: center')
  heading.style('position: absolute')
  heading.style('width: 100%')
  heading.style('top: 100px')
  finalscore.style('font-size: 25px')
  finalscore.style('text-align: center')
  finalscore.style('position: absolute')
  finalscore.style('width: 100%')
  finalscore.style('top: 200px')
  button = createButton('PLAY AGAIN?');
  button.position("center")
  button.size(100, 60);
  button.style("background-color", "lightgray")
  button.mousePressed(goToLink)
}

function goToLink() {
    window.location.href = 'game.html';
  }
  