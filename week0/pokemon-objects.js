var prompt = require('prompt-sync')();

var firstPokemon ={
    Name :"Charizard", 
    Type: "Dragon/Fire", 
    HP : 350 ,
    def: 50 ,
    atk :350, 
    legend: false
};
var secondPokemon = {
    Name: "Blastoise" , 
    Type: "water" , 
    HP: 400 , 
    def: 83 , 
    atk: 32,
    legend: false};
var thirdPokemon = {
    Name : "Venasour", 
    Type: "Grass", 
    HP:300, 
    def: 82 ,
    atk:59, 
    legend: false};
var fourthPokemon = {
    Name: "Alakasm" , 
    Type : "Psychic", 
    HP: 700, 
    def:50 , 
    atk:45, 
    legend:false};
var fifthPokemon = {
    Name: "Arcanine",
    Type:"Fire", 
    HP:400, 
    def:110 , 
    atk:50, 
    legend:false};

var sixthPokemon = {
    Name: "Machamp", 
    Type: "Fighting",
    HP: 600, 
    def: 130, 
    atk: 34, 
    legend:false};

var pokeRoster = [firstPokemon, secondPokemon, thirdPokemon , fourthPokemon, fifthPokemon, sixthPokemon];

function printRoster(){
    for(var i= 0; i< pokeRoster.length;i++){
        console.log(pokeRoster[i]);
    }
}
function pokemonAttacked(){
    for(var j= 0; j< pokeRoster.length;j++){
        pokeRoster[j]["HP"] = pokeRoster[j]["HP"] -10;
        console.log(pokeRoster[j]);
    }
}
function userattacks(){
    var choice = prompt("Would you like to take health away from random pokemon? (yes/no) ");
    if (choice == "yes"){
        var hm = prompt("How much health would you like to take away from a random pokemon? ");
        
        var rand = Math.floor(Math.random()*pokeRoster.length);
        var j = rand;
        pokeRoster[j]["HP"] = pokeRoster[j]["HP"] - hm;
        console.log("The pokemon you attacked was " + pokeRoster[j].Name + " and his HP now is " + pokeRoster[j]["HP"] + "." );
    }
}
function Addpoke(Name,Type, HP, def, atk, legend){
    this.Name = Name;
    this.Type = Type;
    this.HP = HP;
    this.def = def;
    this.atk = atk;
    this.legend = legend;
}
function userpoke(){
var name = prompt("Would you like to add a new pokemon?   ");
if (name == "yes"){
var n = prompt("What is the pokemon's name?   ");
var t = prompt("What type is this pokemon?   ");
var HP1 = prompt("What is the HP of this pokemon? (number only)   ");
var def1 = prompt("What is the def of this pokemon? (number only)   ");
var atk1 = prompt("What is the atk of this pokemon? (number only)   ");
var legend1 = prompt("Is this pokemon a legendary one? (true/false)   ");

var seventhpokemon = new Addpoke(n, t, HP1, def1, atk1, legend1);
pokeRoster.push(seventhpokemon);
}

}
function remove(){
    if (pokeRoster.length > 6){
        console.log("You can not have more pokemon that 6 pokemon in your roster." + "\n" + "We shall now remove one at random. ")
        var c = Math.floor(Math.random()*pokeRoster.length) ;
        console.log("This is the pokemon about to be removed " + pokeRoster[c].Name + ". ") 
        pokeRoster.pop[c];
    }
}

printRoster();
pokemonAttacked();
userattacks();
userpoke();
remove();