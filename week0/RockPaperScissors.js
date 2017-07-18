var choices = ["Rock", "Paper", "Scissors"];
var computer1Choice;
var computer2Choice;
var computer1Wins = 0;
var computer2Wins = 0;
while (computer1Wins < 3 || computer2Wins < 3){
    computer1Choice = choices[Math.floor(Math.random()*3)];
    computer2Choice = choices[Math.floor(Math.random()*3)];
    console.log ("Computer1 picks:" +computer1Choice);
    console.log ("Computer2 picks:" +computer2Choice);

    if (computer1Choice == computer2Choice){
        console.log("It's a tie. No one recives a point");
    }
    if ( (computer1Choice == choices [0] && computer2Choice == choices [1]) || (computer1Choice == choices [1] && computer2Choice == choices [2] ) || (computer1Choice == choices [2] && computer2Choice == choices [0])){
        console.log("Computer2 Wins this round");
        computer2Wins++;
    }
    if ( (computer1Choice == choices[1] && computer2Choice == choices[0] ) || (computer1Choice == choices [2] && computer2Choice == choices [1]) || (computer1Choice == choices [0] && computer2Choice == choices [2]) ){
        console.log("Computer1 Wins this round");
        computer1Wins++;
    }
}
if (computer1Wins == 3){
    console.log("Computer1 Winssssss");
}else if (computer2Wins == 3){
    console.log("Computer2 Winssssss");
var choices = ["Rock", "Paper", "Scissors"];
var computer1Choice;
var computer2Choice;
var computer1Wins = 0;
var computer2Wins = 0;
while (computer1Wins < 3 || computer2Wins < 3){
    computer1Choice = choices[Math.floor(Math.random()*3)];
    computer2Choice = choices[Math.floor(Math.random()*3)];
    console.log ("Computer1 picks:" +computer1Choice);
    console.log ("Computer2 picks:" +computer2Choice);

    if (computer1Choice == computer2Choice){
        console.log("It's a tie. No one recives a point");
    }
    if ( (computer1Choice == choices [0] && computer2Choice == choices [1]) || (computer1Choice == choices [1] && computer2Choice == choices [2] ) || (computer1Choice == choices [2] && computer2Choice == choices [0])){
        console.log("Computer2 Wins this round");
        computer2Wins++;
    }
    if ( (computer1Choice == choices[1] && computer2Choice == choices[0] ) || (computer1Choice == choices [2] && computer2Choice == choices [1]) || (computer1Choice == choices [0] && computer2Choice == choices [2]) ){
        console.log("Computer1 Wins this round");
        computer1Wins++;
    }
}
if (computer1Wins == 3){
    console.log("Computer1 Winssssss");
}else if (computer2Wins == 3){
    console.log("Computer2 Winssssss");
}