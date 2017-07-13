var mashArray = ["Omega stage", "Conjo Jungle", "CD Factory", "Yoshi's Island"]
var firstQuestion = [2, 5]
var secondQuestion = ["Ness", "Meta Knight"]
var prompt = require('prompt-sync')();

var firstQuestion = prompt(" How many times will you strike? ")
console.log(firstQuestion)
var secondQuestion = prompt(" Who will you choose to fight? ")
console.log(secondQuestion)
var Answer = prompt(" You fought" + secondQuestion + " in the " + mashArray + " and hit them " + firstQuestion + " times. " + " Too bad. Mewtwo wins! ")
console.log(Answer)
