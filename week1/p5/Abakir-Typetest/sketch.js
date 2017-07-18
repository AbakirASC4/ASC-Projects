var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', "i", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var points = 0;
var gameScreen = 0;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background("gray");
    
}
function draw(){  
if (gameScreen == 0) { //What screen is being displayedi
    initScreen();
 } else if (gameScreen == 1) {
    level1();
    calculate();
 } 
}

function initScreen() {
textAlign(CENTER);
 textSize(32);
 text("Click to Space to Start", 450, 300);
 text("This is a type test for you to take", 450, 400);
 keyPressed();
}
function keyPressed(){
 if (keyCode == 32) {
    gameScreen = 1;
 }
}
function level1(){
 background("green");
}
function calculate(){
    for(var i =0; i<letters.length; i++){
    text(letters[i] , random(0, windowWidth),random(0, windowHeight));
      if (points ==10){
        endgame();
      }else if (i == 32) {
         i=0;
 } 
}

}