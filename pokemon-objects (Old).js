var Bulbasaur = {"NAME": "Bulbasaur", "TYPE": "Grass + Poison", "HP": 45, "DEF": 49, "ATK": 49, "LEGEND": false}
var Ivysaur = {"NAME" : "Ivysaur", "TYPE": "Grass + Poison", "HP": 60, "DEF": 63, "ATK": 62, "LEGEND": false}
var Venusaur = {"NAME" : "Venusaur", "TYPE": "Grass + Poison", "HP": 80, "DEF": 83, "ATK": 82, "LEGEND": false}
var Charmander = {"NAME" : "Charmander", "TYPE": "Fire", "HP": 39, "DEF": 43, "ATK": 52, "LEGEND": false}
var Charmeleon = {"NAME" : "Charmeleon", "TYPE": "Fire", "HP": 58, "DEF": 58, "ATK": 64, "LEGEND": false}
var Charizard = {"NAME": "Charizard", "TYPE": "Fire + Flying", "HP": 78, "DEF": 78, "ATK": 84, "LEGEND": false}
console.log(Bulbasaur)
console.log(Ivysaur)
console.log(Venusaur)
console.log(Charmander)
console.log(Charmeleon)
console.log(Charizard)

function Pokemon(TYPE,HP,DEF,ATK,LEGEND)
this.type = TYPE
this.type = HP
this.type = DEF
this.type = ATK
this.type = LEGEND

var Bulbasaur = new Pokemon("Grass + Poison", 45, 49, 49, false)
var Ivysaur = new Pokemon("Grass + Poison", 60, 63, 62, false)
var Venusaur = new Pokemon("Grass + Poison", 80, 83, 82, false)
var Charmander = new Pokemon("Fire", 39,43, 52, false)
var Charmeleon = new Pokemon("Fire", 58, 58, 64, false)
var Charizard = new Pokemon("Fire + Flying", 78, 78, 84, false)