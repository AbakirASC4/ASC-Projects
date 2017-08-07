var whichpoke = "";
var pokeURL = "http://pokeapi.co/api/v2/pokemon/" + whichpoke;
var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + whichpoke
    + "&api_key=7c4a10e2a52c4b6db475ed57812da51d&limit=1";
var speed = "";
var special_defense = "";
var special_attack = "";
var defense = "";
var attack = "";
var HP = "";
var name = "";
var sprite = "";

$("#id_of_textbox").keyup(function (event) {
    if (event.keyCode == 13) {
        $("#id_of_button").click();
    }
});

function changePoke() {

    whichpoke = document.getElementById("whichpoke").value;
    pokeURL = "http://pokeapi.co/api/v2/pokemon/" + whichpoke;
    $("#clear").empty();

    $.get(pokeURL, function (data) {
        name = data.name;
        speed = data.stats[0].stat.name + ": " + data.stats[0].base_stat;
        special_defense = data.stats[1].stat.name + ": " + data.stats[1].base_stat;
        special_attack = data.stats[2].stat.name + ": " + data.stats[2].base_stat;
        defense = data.stats[3].stat.name + ": " + data.stats[3].base_stat;
        attack = data.stats[4].stat.name + ": " + data.stats[4].base_stat;
        HP = "HP" + ":" + data.stats[5].base_stat;
        sprite = data.sprites.front_default;
        poke(data);
    });


}

var poke = function (data) {
    $("#clear").append("<h2>" + name + "</h2>");
    $("#clear").append("<img class='pic1' src =" + sprite + ">");
    $("#clear").append("<p>" + HP + "</p>");
    $("#clear").append("<p>" + attack + "</p>");
    $("#clear").append("<p>" + defense + "</p>");
    $("#clear").append("<p>" + special_defense + "</p>");
    $("#clear").append("<p>" + special_attack + "</p>");
    $("#clear").append("<p>" + speed + "</p>");
    gif();
}
var gif = function (data) {
    giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + name +
        "&api_key=7c4a10e2a52c4b6db475ed57812da51d&limit=3";
    var randNum = Math.floor(Math.random() * 3);
    $.get(giphyURL, function (newdata) {
        console.log(newdata);
        sprite = newdata.data[randNum].images.fixed_width.url;
        $("#clear").prepend("<img class='img-circle pic' src =" + sprite + ">");
    });
}
$(function () {
    $("body").keypress(function (e) {
        if (e.keyCode == 13) {
            changePoke();
        }
    });
});
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
    });
}