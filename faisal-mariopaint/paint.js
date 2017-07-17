function setup() {
    var c = color('hsba(160, 100%, 50%, 0.5)');
    createCanvas(1000, 1000);
    background (c);
}
function mouseDragged() {

 var r, g, b;
  r = random(255);
  g = random(255);
  b = random(255);

var a,c;
 a = random(65);
 c = random(65);

fill (r,g,b)
var rectangle = rect(mouseX, mouseY, a, c);
var circle = ellipse(mouseX, mouseY, a, c);
//var quad = quad(mouseX , mouseY , mouseX + a, mouseY + c,mouseX + a, mouseY + c,mouseX + a, mouseY + c);
var triangle = triangle(mouseX+a , mouseY+c, mouseX+a, mouseY+c, mouseX+a, mouseY+c);
var words = [ rectangle, circle, /*quad,*/ triangle ];
var word = random(words);  // select random word
return false;
}


