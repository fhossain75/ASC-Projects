var mypokemonRoster = ["Snorlax","Charmander","Squirtle","Eevee","Staryu"]
var firstToFight = mypokemonRoster [2]
var secondToFight = mypokemonRoster [5]
//Bonus
mypokemonRoster.pop()
mypokemonRoster.push ("Jigglypuff");
mypokemonRoster.push ("Weedle");
var RosterSize = mypokemonRoster.length
//Loop
for (var i = 0; i < RosterSize; i++){
    console.log(mypokemonRoster[i]);
    console.log("this is I:", i)
}
