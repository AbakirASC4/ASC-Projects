
//Set database object
var database = firebase.database().ref();

//button executes this function
function updateDB() {
    var Name=$("#name").val();
    var Age = $("#age").val();
    var Artist = $("#artist").val();
    var Subjects = $("#subject").val();
    var Activity = $("#activity").val();
    var Hate = $("#hate").val();
    var Gender = $("#gender").val();
    var Love = $("#love").val();
    var Age = $("#age").val();
    
    console.log(Age);
    //Update database here
    var value = {
        NAME: name,
        AGE: Age,
        SUBJECT: Subjects,
        ARTIST: Artist,
        ACTIVITIES: Activity,
        HATE: Hate,
        GENDER: Gender,
        LOVE: Love

    }
    database.push(value);
}

//load particle js
particlesJS.load('particles-js', 'particles.json', function () {
    console.log('particles.js config loaded');
});

