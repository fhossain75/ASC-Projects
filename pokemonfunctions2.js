function randLetter () {
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        var randNumber = Math.floor(Math.random() * 26);
        return alphabet[randNumber]
}
console.log(randLetter())
var randLength = Math.floor(Math.random()* 5 + 1)

function randWord(randLength) {
   var randWord = ""
    for (var i=0; i<randLength; i++) {
    randWord = randWord + randLetter()
    }
    return randWord;
}
console.log(randWord(randLength))
