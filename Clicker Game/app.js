let bananaImg
let heading

function setup(){
    frameRate(2)
    createCanvas(windowWidth, windowHeight)
    createImg: bananaImg = createImg('banana.png', 'banana image')
    bananaImg.size(200, 100)
    heading = createElement('h2', 'Click The Banana!')
    heading.position(width / 3, height / 4)
}

function draw(){
    bananaImg.position(random(width), random(height))
    bananaImg.mousePressed(youWon)
}

function youWon(){
    heading.html('You Won!')
    bananaImg.remove()
}