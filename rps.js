/*
█▀▀█ █░░ █░░   █▀▀ ▀▀█▀▀ █▀▀█ █▀▀█   █▀▀ █▀▀█ █▀▀▄ █▀▀
█▄▄█ █░░ █░░   ▀▀█ ░░█░░ █▄▄█ █▄▄▀   █░░ █░░█ █░░█ █▀▀
▀░░▀ ▀▀▀ ▀▀▀   ▀▀▀ ░░▀░░ ▀░░▀ ▀░▀▀   ▀▀▀ ▀▀▀▀ ▀▀▀░ ▀▀▀

*/
var player1 = ["Rock", "Scissors", "Paper"];
var player2 = ["Rock", "Scissors", "Paper"];
/*Choice*/
var p1Choice = player1[0]; // Rock
var p2Choice = player2[2]; // Paper

if (p1Choice == p2Choice) {
    console.log("It's a tie!");
} else if (p1Choice === "Scissors") {// if p1 choses Scissors
    if (p2Choice === "Rock") {//if p1 choses Rock
        console.log("Player one loses");
        console.log("Player two wins");
    } else {
        console.log("Player one wins")
        console.log{"Player two loses"}
    }
    } else if (p1Choice === "Rock") {// if p1 choses Rock
    if (p2Choice === "Scissors") {//if p2 chosees Scissors
        console.log("Player one wins");
        console.log("Player two loses");
    } else {
        console.log("Player one loses")
        console.log{"Player two wins"}
    }
    } else if (p1Choice === "Paper") {// if p1 choses Paper
    if (p2Choice === "Scissors") {//if p1 choses Scissors
        console.log("Player one loses");
        console.log("Player two wins");
    } else {
        console.log("Player one wins")
        console.log{"Player two loses"}
    }
    } else if (p1Choice === "Scissors") {// if p1 choses Scissors
    if (p2Choice === "Paper") {//if p2 chosees Paper
        console.log("Player one wins");
        console.log("Player two loses");
    } else {
        console.log("Player one loses")
        console.log{"Player two wins"}
    }

    //Simple//