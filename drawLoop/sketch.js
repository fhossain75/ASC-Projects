var x = 0
function setup() {
    createCanvas(windowWidth,windowHeight);
}

function draw() {
    background("purple");
    fill(200,2,3,)
    ellipse(x,0,200)
    x = x + 10;
    if (x > width) {
        x = 0
    }
}