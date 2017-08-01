

var ogresDefeated = 0;
var orges = true;

function displayStats() {
    $('#stats').text('It works!')
}
function attack() {
    console.log('You killed an ogre.')
}
function setup() {
$('body').append("<h1>Welcome to Ogre GAME!</h1>");
$('body').append('<div><h3>Stats</h3><p id="stats"></p></div>');
$('body').append("<button>Attack</button>");
$('body').append('<div id="ogre"></div>');
}
//Wait until document is ready
$(document).ready(setup);