//[GOLBAL VAR]
var Px = 550/2;
var Py = 475;
var Ex = 550/2
var Ey = 475
//[CANVAS]
function setup() {
  createCanvas(550,550);
}
//[PLAYER]
function draw() { 
     background("grey")
//movement
  if (keyIsDown(LEFT_ARROW))
    Px-=5;

  if (keyIsDown(RIGHT_ARROW))
    Px+=5;
//boundaries
/*----------
if (x > 550)
    x==0*/
//color&size
  fill("green");
  rect(Px, Py, 50, 50);
//[ENEMY]
stroke(50);
//color&size
  fill("red");
  ellipse(Ex, Ey, 24, 24);
//movement horizontal axis
  Ex = Ex + random(-1, 1);
//movement speed
  Ey = Ey - 1;
//movement reset
  if (Ey < 0) {
    Ey = height;
  }
}