var choices = ["Rock", "Paper", "Scissors"];

var database = firebase.database().ref();
var Pscore = 0;
var Cscore = 0;

function updateName() {
    var username = $("#name1").val();
    var score = $("#score1").val();
    var text = "<span>" + username + "'s Score:</span> <span>" + score + "</span>";
    $(".user").html(text);
    database.push(username, score);
}
database.on("child_added", function (rowData) {
    var name = rowData.username;
    var score = rowData.score;
    var fullText = "<p>" + name + ": " + score + "</p>";
    $("#Leader").append(fullText);
})

function userChoice(choice1) {
    var computer1Choice = choices[Math.floor(Math.random() * 3)];
    $("#winner").empty();

    if (computer1Choice == choice1) {
        $("#winner").append("<h1>It is a tie</h1>");
    } else if (((computer1Choice == "Rock") && (choice1 == "Scissors"))
        || ((computer1Choice == "Scissors") && (choice1 == "Paper"))
        || ((computer1Choice == "Paper") && (choice1 == "Rock"))) {
        $("#winner").append("<h1>Computer Has Won</h1>");
        Cscore++;
        $("#score").text(Cscore);
    } else if (((computer1Choice == "Scissors") && (choice1 == "Rock"))
        || ((computer1Choice == "Paper") && (choice1 == "Scissors"))
        || ((computer1Choice == "Rock") && (choice1 == "Paper"))) {
        $("#winner").append("<h1>You Have Won</h1>");
        Pscore++;
        $("#score1").text(Pscore);
    }

}

