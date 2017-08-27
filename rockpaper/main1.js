var playerTwo = ["Rock","Paper","Scissors"];
var score = 0
var scoreUpdated;
var myName;
var name = prompt("Whats ur name?");

function updateDB(){
    var name = $("#name").val();
    var message = $("#message").val();
    myName = name
    console.log(name + " : " + message);
    $("body").append("<p><center><font color='white'><font size='10'>Welcome: " + name + "</font></font></center></p>")
firebase.database().ref(name).set(
    {
        name: name
    }
)
}

 //Update database here

function rock1(){
    var randomChoice = Math.floor(Math.random () * playerTwo.length);
    var p2Choice = playerTwo[randomChoice]; // Random
    $("#score").html("<p><center><font color='white'><font size='10'>Score: " + score + "</font></font></center></p>")
    $("#result").html("<p><center><font size='5'> You selected Rock! </center></p>")
    $("#result").append("<p><center><font size='5'>The computer selected " + p2Choice + "</center></p>")
    
    if (p2Choice == playerTwo[0]) {
        $("#result").append("<p><center><font size='5'> It's a tie! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")
        
    }
    if (p2Choice == playerTwo[1]) {
        $("#result").append("<p><center><font size='5'> The Computer beat you! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")
        
    }
    if (p2Choice == playerTwo[2]) {
        $("#result").append("<p><center><font size='5'> You beat the Computer! </center></p>")
        $("#result").append("<p><center><font size='5'> Choose another weapon or use the same! </center></p>")
        score = score + 10
        $("#score").html("<p><center><font color='white'><font size='10'>Score: " + score + "</font></font></center></p>")
        scoreUpdated = score
        
    }
    
}
function paper1(){
    var randomChoice = Math.floor(Math.random () * playerTwo.length);
    var p2Choice = playerTwo[randomChoice]; // Random
    $("#score").html("<p><center><font color='white'><font size='10'>Score: " + score + "</font></font></center></p>")
    $("#result").html("<p><center><font size='5'> You selected Paper! </center></p>")
    $("#result").append("<p><center><font size='5'> The computer selected " + p2Choice + "</center></p>")
    if (p2Choice == playerTwo[0]) {
        $("#result").append("<p><center><font size='5'> You beat the computer! </center></p>")
        $("#result").append("<p><center><font size='5'> Choose another weapon or use the same! </center></p>")
        score = score + 10
        $("#score").html("<p><center><font color='white'><font size='10'>Score: " + score + "</font></font></center></p>")
        scoreUpdated = score
        
    }
    if (p2Choice == playerTwo[1]) {
        $("#result").append("<p><center><font size='5'> It's a tie! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")
    }
    if (p2Choice == playerTwo[2]) {
        $("#result").append("<p><center><font size='5'> The Computer beat you! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")
    }
}
function scissors1(){
    
    var randomChoice = Math.floor(Math.random () * playerTwo.length);
    var p2Choice = playerTwo[randomChoice]; // Random
    $("#score").html("<p><center><font color='white'><font size='10'>Score: " + score + "</font></font></center></p>")
    $("#result").html("<p><center><font size='5'> You selected Scissors! </center></p>")
    $("#result").append("<p><center><font size='5'> The computer selected " + p2Choice + "</center></p>")
    if (p2Choice == playerTwo[0]) {
        $("#result").append("<p><center><font size='5'> The Computer beat you! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")
    }
    if (p2Choice == playerTwo[1]) {
        $("#result").append("<p><center><font size='5'> You beat the Computer! </center></p>")
        $("#result").append("<p><center><font size='5'> Choose another weapon or use the same! </center></p>")
        score = score + 10
        $("#score").html("<p><center><font color='white'><font size='10'>Score: " + score + "</font></font></center></p>")
        scoreUpdated = score
        
    }
    if (p2Choice == playerTwo[2]) {
        $("#result").append("<p><center><font size='5'> It's a tie! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")
    }
}
function submitScore() {
    firebase.database().ref(myName).set(
        {
            HighScore : scoreUpdated
        }
    )
}