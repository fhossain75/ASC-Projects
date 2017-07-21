//IMAGES
//function preload() {
//PLAYER 1
//sco = loadImage("sco.jpg")
// }
function setup() {
    createCanvas (5000,6000)
    background("1.jpg")
//PLAYER 1
//[HP]
fill(255,0,0) //red
rect(0,20,2000,100)
textSize(100)
fill("black")
text("HP",2050,100)
//[Energy]
fill(0,0,255) //blue
rect(0,120,1500,100)
textSize(100)
fill("black")
text("Energy",1550,210)
//PLAYER 2
//[HP]
fill(255,0,0) //red
rect(3500,20,2000,100)
textSize(100)
fill("black")
text("HP",3300,100)
//[Energy]
fill(0,0,255) //blue
rect(4000,120,1500,100)
textSize(100)
fill("black")
text("Energy",3650,210)
//MIDDLE
//[TIME]
fill(255,248,220) //cream
ellipse(windowWidth/2,150,300,300)
fill("black")
line(2735,150,2735,20)
fill("black")
line(2735,170,2865,170)
//[SCORE]
fill(255,255,240) //ivory
rect(2450,350,600,200)
}
