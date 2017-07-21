//[GOLBAL VAR]
var Px = 550/2;
var Py = 475;
var Ex = 550/2
var Ey = 475
var Bx = 550/2
var By = 475
var bullet
var yIncrement = -3
var fr = 60
var enemy = []
//[CANVAS]
function setup() {
  createCanvas(550,550);
  frameRate(fr)
}
function draw() { 
//[CANVAS]
//background color
     background("grey")
//[FLUFF]
//lives
  textSize (32)
  fill("white")
  text("SCORE:", 10, 35)
//score
  textSize (32)
  fill("white")
  text("LIVES:", 375, 35)
//position
  textSize (15)
  fill("white")
  text("X:",20, 525)  
  fill('white')
  textSize(15)
  text(Px,40,525)
  textSize (15)
  fill("white")
  text("Y :",80, 525)  
  fill('white')
  textSize(15)
  text(Py,100,525)
//[PLAYER]
//movement
  if (keyIsDown(LEFT_ARROW))
    Px-=5;
  if (keyIsDown(RIGHT_ARROW))
    Px+=5
//color&size
  fill("green");
  rect(Px, Py, 50, 50)
  if (Px < 0)
    Px = 550
  if (Px > 550)
    Px = 0
//bullet
  fill("gold")
   if (keyIsDown(UP_ARROW))
  rect(Px+20,By-=-yIncrement*3,10,10)
  if (By < 0)
    By = 450; 
//[ENEMY]
stroke(50);
//color&size
  function enemies(x,y)
  this.x = x
  this.y = y
  fill("red");
  ellipse(Ex+75, Ey-400, 24, 24)
  ellipse(Ex, Ey-400, 24, 24)
  ellipse(Ex-75, Ey-400, 24, 24)
  ellipse(Ex-150, Ey-400, 24, 24)
  ellipse(Ex-225, Ey-400, 24, 24)
  ellipse(Ex-300, Ey-400, 24, 24)
  ellipse(Ex-375, Ey-400, 24, 24)
  ellipse(Ex-450, Ey-400, 24, 24)
  ellipse(Ex, Ey-350, 24, 24)
  ellipse(Ex+75, Ey-350, 24, 24)
  ellipse(Ex-75, Ey-350, 24, 24)
  ellipse(Ex-150, Ey-350, 24, 24)
  ellipse(Ex-225, Ey-350, 24, 24)
  ellipse(Ex-300, Ey-350, 24, 24)
  ellipse(Ex-375, Ey-350, 24, 24)
  ellipse(Ex-450, Ey-350, 24, 24)
  ellipse(Ex, Ey-300, 24, 24)
  ellipse(Ex+75, Ey-300, 24, 24)
  ellipse(Ex-75, Ey-300, 24, 24)
  ellipse(Ex-150, Ey-300, 24, 24)
  ellipse(Ex-225, Ey-300, 24, 24)
  ellipse(Ex-300, Ey-300, 24, 24)
  ellipse(Ex-375, Ey-300, 24, 24)
  ellipse(Ex-450, Ey-300, 24, 24)
  ellipse(Ex, Ey-250, 24, 24)
  ellipse(Ex+75, Ey-250, 24, 24)
  ellipse(Ex-75, Ey-250, 24, 24)
  ellipse(Ex-150, Ey-250, 24, 24)
  ellipse(Ex-225, Ey-250, 24, 24)
  ellipse(Ex-300, Ey-250, 24, 24)
  ellipse(Ex-375, Ey-250, 24, 24)
  ellipse(Ex-450, Ey-250, 24, 24)
  ellipse(Ex, Ey-200, 24, 24)
  ellipse(Ex+75, Ey-200, 24, 24)
  ellipse(Ex-75, Ey-200, 24, 24)
  ellipse(Ex-150, Ey-200, 24, 24)
  ellipse(Ex-225, Ey-200, 24, 24)
  ellipse(Ex-300, Ey-200, 24, 24)
  ellipse(Ex-375, Ey-200, 24, 24)
  ellipse(Ex-450, Ey-200, 24, 24)
  ellipse(Ex, Ey-150, 24, 24)
  ellipse(Ex+75, Ey-150, 24, 24)
  ellipse(Ex-75, Ey-150, 24, 24)
  ellipse(Ex-150, Ey-150, 24, 24)
  ellipse(Ex-225, Ey-150, 24, 24)
  ellipse(Ex-300, Ey-150, 24, 24)
  ellipse(Ex-375, Ey-150, 24, 24)
  ellipse(Ex-450, Ey-150, 24, 24);
//movement horizontal axis
  Ey = Ey;
//movement speed
  Ex = Ex - .75;
//movement reset
  if (Ex < 0) {
    Ex = width;
  }
}