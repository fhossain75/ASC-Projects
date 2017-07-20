var word = ["First", "Second"]
var points = "Current Points:"
var directions = "Please type the sentence below"
var inp

function draw() { //Directions + Prompted Sentence
textSize (25)
fill(0,102,153)
text(directions,200,30)
text(sentence1,325,100)
text(points,200,400)
}

function setup() {
    createCanvas(windowWidth,windowHeight);
inp = createInput ('', "text");
inp.position(250,225);
    inp.size(275,65)
}

function keyTyped() {
    if(keyCode === ENTER) {
        if (inp.value() === sentence1) {
            alert ("You Win!")
        clear()

        }
    else{
        alert ("You Lost!");
    }
    }
}
