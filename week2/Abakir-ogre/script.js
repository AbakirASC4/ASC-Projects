$(document).ready(setup);

var hp = 100;
var gold = 0;
var slain = 0;

function setup() {
    $("body").append("<h1>Welcome to Ogre Fighter v1.0</h1>");
    $("body").append("<p> Ogres are attacking your village! When you slay one, they drop 10 gold. The more gold you carry, though, the harder it is to defeat an ogre.<p>");
    $("body").append("<h2>STATS</h2>");
    $("body").append("<div class='stats'></div>");
    $("body").append("<button onclick='attack()'>Attack the Ogre</button>");
    $("body").append("<div class='ogres'> </div>");
}
function stats() {
    $(".stats").text("HP:" + hp + " // Gold:" + gold + " // " + "Ogres Slain " + slain);
}
function attack() {
    if (hp > 0) {
        if (Math.random() * 100 > gold) {
            gold = gold + 10;
            slain++;
            $(".ogres").prepend("<img width='175' src='https://vignette4.wikia.nocookie.net/dundef/images/4/4c/Ogremodel.png/revision/latest?cb=20120106153523'> ");
            $(".ogres").prepend("<p style='color: blue'> You Won + 10 gold </p>");
        } else {
            gold = gold - 1;
            hp--;
            $(".ogres").prepend("<img width='175' src='https://vignette4.wikia.nocookie.net/dundef/images/4/4c/Ogremodel.png/revision/latest?cb=20120106153523'> ");
            $(".ogres").prepend("<p style='color: red'> You Lost - 1 gold </p>");
        }
    } else {
        $(".ogres").prepend("<h3> You died!!!!!!!!</h3>")
    }
    stats();
}