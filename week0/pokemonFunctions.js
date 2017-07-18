<<<<<<< HEAD
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterReturned;
var randnumber = Math.floor(Math.random()*letters.length);
var str = "";
var sentence = "";

function randLetter(array){
    letterReturned = array[Math.floor(Math.random()*array.length)];
    return (letterReturned);
}
console.log(randLetter(letters));

function randWord(){
    for (var i = 0; i < randnumber; i++){
        str = str + (randLetter(letters));
    }
    return(str);
}
 console.log (randWord());

 function randSentence(){
     sentence = randWord() + " " + randWord() + " " + randWord() + ".";
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
 }
 console.log(randSentence());


var firstPokemon = ["Charizard", 50 ,350];
var secondPokemon = ["Blastoise" , 83 , 400];
var thirdPokemon = ["Venasour", 82 ,300];
var fourthPokemon = ["Alakasm" , 50 , 400];
var fifthPokemon = ["Arcanine", 110 , 400];
var sixthPokemon = ["Machamp", 130, 600];

var pokeRoster = [firstPokemon, secondPokemon, thirdPokemon , fourthPokemon, fifthPokemon, sixthPokemon];
var poke1 = pokeRoster [Math.floor(Math.random()*pokeRoster.length)];
var poke2 = pokeRoster [Math.floor(Math.random()*pokeRoster.length)];

function pokeattack(poke1,poke2){
    while (poke1 [0] == poke2 [0]){
        poke1 = pokeRoster [Math.floor(Math.random()*pokeRoster.length)];
    }

    poke2 [2] = poke2 [2] - poke1 [1];
    poke1 [2] = poke1 [2] - poke2 [1];
    console.log(poke2 [0] + " has " + poke2 [2] + " health now. " + "\n");
    console.log(poke1 [0] + " has " + poke1 [2] + " health now. " + "\n");

    if(poke2 [2] <= 0){
        poke2 [2] = 0;
    }else if(poke1[2]<0){
        poke1 [2] = 0;
    }
}
while (poke1 [2] > 0 && poke2 [2] > 0){
    pokeattack(poke1,poke2);
}
if (poke2 [2] == 0){
    console.log(poke1[0] + " has won.");
}else if (poke1 [2] == 0){
    console.log(poke2[0] + " has won.");
}

=======
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterReturned;
var randnumber = Math.floor(Math.random()*letters.length);
var str = "";
var sentence = "";

function randLetter(array){
    letterReturned = array[Math.floor(Math.random()*array.length)];
    return (letterReturned);
}
console.log(randLetter(letters));

function randWord(){
    for (var i = 0; i < randnumber; i++){
        str = str + (randLetter(letters));
    }
    return(str);
}
 console.log (randWord());

 function randSentence(){
     sentence = randWord() + " " + randWord() + " " + randWord() + ".";
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
 }
 console.log(randSentence());


var firstPokemon = ["Charizard", 50 ,350];
var secondPokemon = ["Blastoise" , 83 , 400];
var thirdPokemon = ["Venasour", 82 ,300];
var fourthPokemon = ["Alakasm" , 50 , 400];
var fifthPokemon = ["Arcanine", 110 , 400];
var sixthPokemon = ["Machamp", 130, 600];

var pokeRoster = [firstPokemon, secondPokemon, thirdPokemon , fourthPokemon, fifthPokemon, sixthPokemon];
var poke1 = pokeRoster [Math.floor(Math.random()*pokeRoster.length)];
var poke2 = pokeRoster [Math.floor(Math.random()*pokeRoster.length)];

function pokeattack(poke1,poke2){
    while (poke1 [0] == poke2 [0]){
        poke1 = pokeRoster [Math.floor(Math.random()*pokeRoster.length)];
    }

    poke2 [2] = poke2 [2] - poke1 [1];
    poke1 [2] = poke1 [2] - poke2 [1];
    console.log(poke2 [0] + " has " + poke2 [2] + " health now. " + "\n");
    console.log(poke1 [0] + " has " + poke1 [2] + " health now. " + "\n");

    if(poke2 [2] <= 0){
        poke2 [2] = 0;
    }else if(poke1[2]<0){
        poke1 [2] = 0;
    }
}
while (poke1 [2] > 0 && poke2 [2] > 0){
    pokeattack(poke1,poke2);
}
if (poke2 [2] == 0){
    console.log(poke1[0] + " has won.");
}else if (poke1 [2] == 0){
    console.log(poke2[0] + " has won.");
}

>>>>>>> origin/master
