<<<<<<< HEAD
var charizard = {
    "attack": "Blaze",
    "HP" : 266,
    "legendary" : false,
    "types" : ["Fire", "Flying"]
};
function Superhero(realName,power,sidekick,race,gender,hideout,nemesis,universe){
    this.realName = realName;
    this.power =  power;
    this.sidekick = sidekick;
    this.race = race;
    this.gender = gender;
    this.hideout = hideout;
    this.nemesis = nemesis;
    this.universe = universe;
    this.talk = function talk(){
        console.log("Hello, my name is " + this.realName);
    }
}

var superman = new Superhero("Clark Kent", "Heat vision",
                            false,"Kryptonian", "Male",
                            "Metroplis", "lex Luther", "DC");


function Pizza(sauce,cheese,toppings, size){
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
    this.size = size;
}
=======
var charizard = {
    "attack": "Blaze",
    "HP" : 266,
    "legendary" : false,
    "types" : ["Fire", "Flying"]
};
function Superhero(realName,power,sidekick,race,gender,hideout,nemesis,universe){
    this.realName = realName;
    this.power =  power;
    this.sidekick = sidekick;
    this.race = race;
    this.gender = gender;
    this.hideout = hideout;
    this.nemesis = nemesis;
    this.universe = universe;
    this.talk = function talk(){
        console.log("Hello, my name is " + this.realName);
    }
}

var superman = new Superhero("Clark Kent", "Heat vision",
                            false,"Kryptonian", "Male",
                            "Metroplis", "lex Luther", "DC");


function Pizza(sauce,cheese,toppings, size){
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
    this.size = size;
}
>>>>>>> origin/master
var pizza = new Pizza('tomato sauce', 'mozzerella', ['pineapples', 'ham', 'bacon'], 'XXl');