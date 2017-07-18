
var prompt = require('prompt-sync')();

var mashArray =["Ocean", "Sky", "Valcano", "Outerspace"];
var rand = mashArray[Math.floor(Math.random() * mashArray.length)];

var firstQuestion = [5,2,3];
var rand2 = Math.floor(Math.random() * firstQuestion.length;

var secondQuestion = ["Fox", "Bowser"];
var rand3 = mashArray[Math.floor(Math.random() * secondQuestion.length)];

var play;
function battle(){
    var fQuestion = prompt("How many times will you strike? ");
    firstQuestion.push(fQuestion)
    var sQuestion = prompt("Who will you choose to fight? ");
    secondQuestion.push(sQuestion);
}
function log(){
    console.log("You fought in the " + rand3 + " in the " + rand + " and hit them " + rand2 + " times. Too bad. Mewtwo wins!");
}
while(play = "y"){
    
    battle();
    log();
    play = prompt("Do you want to play again. You possible answers are y or n? ");
    if (play == 'n'){
        break;
    }
}