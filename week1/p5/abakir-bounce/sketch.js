var ballX = 400;
var ballY = 400;
var ballySpeed = 15;
var ballxSpeed = 10;

function setup(){
    createCanvas(800, 800);
    background("green");
   
}

function draw(){
    background("green");
    drawball();
    ballMovement();
    
}
function drawball(){
    changeColors();
    ellipse(ballX,ballY,200,200);
}

function ballMovement(){ //This is how the ball moves
 ballX = ballX + ballxSpeed;
 ballY = ballY + ballySpeed;
 if (ballY-100<=0 || ballY+100>=800){
 ballySpeed = -ballySpeed;
 ballySpeed--;
 }
 if (ballX+100>=800 || ballX-100<=0){
 ballxSpeed = -ballxSpeed;
 ballxSpeed--;
 }
}

function changeColors(){
    fill(random(0,255), random(0,255), random(0,255))
}
