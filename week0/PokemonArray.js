<<<<<<< HEAD
var myPokemonRoster = ["Charizard", "Blastoise", "venasaur", "Alakasm", "Lapris"];
var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];
myPokemonRoster.pop();
myPokemonRoster.push("Pikachu");
myPokemonRoster.push("Raichu");
myPokemonRoster.length;
var RosterSize = myPokemonRoster.length;
if(myPokemonRoster.length >=5){
for (var i = 0; i<5; i++){
    console.log(myPokemonRoster[i]);
}
for (var i = 5; i>0; i--){
    console.log(myPokemonRoster[i]);
}
for (var i = 0; i<myPokemonRoster.length; i++){
    console.log(myPokemonRoster[i]);
}
}else{
    console.log("You Can’t Play! Not Enough Pokemon");
=======
var myPokemonRoster = ["Charizard", "Blastoise", "venasaur", "Alakasm", "Lapris"];
var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];
myPokemonRoster.pop();
myPokemonRoster.push("Pikachu");
myPokemonRoster.push("Raichu");
myPokemonRoster.length;
var RosterSize = myPokemonRoster.length;
if(myPokemonRoster.length >=5){
for (var i = 0; i<5; i++){
    console.log(myPokemonRoster[i]);
}
for (var i = 5; i>0; i--){
    console.log(myPokemonRoster[i]);
}
for (var i = 0; i<myPokemonRoster.length; i++){
    console.log(myPokemonRoster[i]);
}
}else{
    console.log("You Can’t Play! Not Enough Pokemon");
>>>>>>> origin/master
}