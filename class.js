var charizard = {
    "HP": 226,
    "Level": 32
}

var blastoise = {
    "HP": 150,
    "Level": 55
}
function Pokemon( HP, Level) {
    this.hp = hp;
    this.level = level;
}

var squirtle = new Pokemon(30,50);

console.log(squirtle.hp);
console.log(squirtle.level);
 