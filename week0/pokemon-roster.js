var prompt = require('prompt-sync')();

var firstPokemon = ["Charizard", "Dragon/Fire", 350 ,50 ,350, false];
var secondPokemon = ["Blastoise" , "water" , 400 , 83 , 32,false];
var thirdPokemon = ["Venasour", "Grass", 300, 82 ,59, false];
var fourthPokemon = ["Alakasm" , "Psychic", 700, 50 , 45, false];
var fifthPokemon = ["Arcanine","Fire", 400, 110 , 50, false];
var sixthPokemon = ["Machamp", "Fighting", 600, 130, 600, false];

var pokeRoster = [firstPokemon, secondPokemon, thirdPokemon , fourthPokemon, fifthPokemon, sixthPokemon];
var j = 0;


for (var i = 0; i < pokeRoster.length; i++ ){
       console.log("#" + (i+1) + " " + pokeRoster[i][0] + " > TYPE: " + pokeRoster[i][1] + " > HP:" + pokeRoster[i][2] + " > ATK: " + pokeRoster[i][3] + " > DEF: " + pokeRoster[i][4] + " > Legend: " + pokeRoster[i][5]);
}

function addPoke(){
    var addPoke2 = prompt("Would you like to add another pokemon? yes/no   ");
    while(addpoke2 = "yes"){
        if (addPoke2 == "yes"){
            var addPoke3 = prompt("Type the pokemon you would like to add?   ");
            pokeRoster.push(addPoke3);
            var addPoke2 = prompt("Would you like to add another pokemon? yes/no   ");     
    }else {
        break;
    }
} 
}
function search(){
    var searchPoke = prompt("Would you like to search a pokemon in the roster? yes/no  ");
    if(searchPoke == "yes"){
        var whichPoke = prompt("Type the pokemon that you would like to search?  ");
        while(searchPoke == "yes"){
            if (pokeRoster[j] == whichPoke){
            console.log["I was able to find" + pokeRoster[j][0]];
        }else {
        
        }
        j++;
    }
     }
}
addPoke();
search();


var prompt = require('prompt-sync')();

var firstPokemon = ["Charizard", "Dragon/Fire", 350 ,50 ,350, false];
var secondPokemon = ["Blastoise" , "water" , 400 , 83 , 32,false];
var thirdPokemon = ["Venasour", "Grass", 300, 82 ,59, false];
var fourthPokemon = ["Alakasm" , "Psychic", 700, 50 , 45, false];
var fifthPokemon = ["Arcanine","Fire", 400, 110 , 50, false];
var sixthPokemon = ["Machamp", "Fighting", 600, 130, 600, false];

var pokeRoster = [firstPokemon, secondPokemon, thirdPokemon , fourthPokemon, fifthPokemon, sixthPokemon];
var j = 0;


for (var i = 0; i < pokeRoster.length; i++ ){
       console.log("#" + (i+1) + " " + pokeRoster[i][0] + " > TYPE: " + pokeRoster[i][1] + " > HP:" + pokeRoster[i][2] + " > ATK: " + pokeRoster[i][3] + " > DEF: " + pokeRoster[i][4] + " > Legend: " + pokeRoster[i][5]);
}

function addPoke(){
    var addPoke2 = prompt("Would you like to add another pokemon? yes/no   ");
    while(addpoke2 = "yes"){
        if (addPoke2 == "yes"){
            var addPoke3 = prompt("Type the pokemon you would like to add?   ");
            pokeRoster.push(addPoke3);
            var addPoke2 = prompt("Would you like to add another pokemon? yes/no   ");     
    }else {
        break;
    }
} 
}
function search(){
    var searchPoke = prompt("Would you like to search a pokemon in the roster? yes/no  ");
    if(searchPoke == "yes"){
        var whichPoke = prompt("Type the pokemon that you would like to search?  ");
        while(searchPoke == "yes"){
            if (pokeRoster[j] == whichPoke){
            console.log["I was able to find" + pokeRoster[j][0]];
        }else {
        
        }
        j++;
    }
     }
}
addPoke();
search();


