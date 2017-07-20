var sco
function setup() {
    createCanvas (windowWidth,windowHeight)

//PLAYER 1
//[HP]
fill(255,0,0) //red
rect(0,20,2000,100)
//[Energy]
fill(0,0,255) //blue
rect(0,120,1500,100)
image(sco,0,0)

//PLAYER 2
//[HP]
fill(255,0,0) //red
rect(3500,20,2000,100)
//[Energy]
fill(0,0,255) //blue
rect(4000,120,1500,100)

//MIDDLE
//[TIME]
fill(255,248,220) //cream
ellipse(windowWidth/2,150,300,300)
//[SCORE]
fill(255,255,240) //ivory
rect(2450,350,600,200)
}

//IMAGES
 function preload() {
//PLAYER 1
sco = loadImage("faisal-pokeBattle/1.jpg")
 }
