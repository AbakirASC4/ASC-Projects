var ballX = 400;
var ballY = 400;
var ballySpeed = 10;
var ballxSpeed = 5;
var racketX = 350; //Defines the x and
var racketY = 600; // y positions of the racket
var racketSpeed = 10; 
var racketWidth = 100; // Defines how wide the racket is
var racketHeight = 10;

function setup(){
    createCanvas(800, 800);
    background("green");
   
}

function draw(){
    background("green");
    drawball();
    drawracket();
    ballMovement();
    keyPressed();
    rackettouch();
    
}
function drawball(){
    changeColors();
    ellipse(ballX,ballY,50,50);
}
function drawracket(){
    rectMode(CENTER);
    rect(racketX, racketY, racketWidth, racketHeight);
}
function ballMovement(){ //This is how the ball moves
    ballX = ballX + ballxSpeed;
    ballY = ballY + ballySpeed;
        if (ballY-25<=0 || ballY+25>=800){
            ballySpeed = -ballySpeed;
            ballySpeed--;
            }
            if (ballX+25>=800 || ballX-25<=0){
                ballxSpeed = -ballxSpeed;
                 ballxSpeed--;
 }
}

function changeColors(){
    fill(random(0,255), random(0,255), random(0,255))
}
function keyPressed(){
    if (keyIsDown(LEFT_ARROW)){ 
        racketX = racketX - racketSpeed;
        }
        if (keyIsDown(RIGHT_ARROW)){ 
            racketX = racketX + racketSpeed;
            }
}

function rackettouch(){
    if ((racketX-racketWidth/2<ballX+25 && (racketX+racketWidth/2)>ballX-25 && (racketY-10)<ballY+25 
    && (racketY+10)>ballY-25)){
        ballySpeed++;
        ballySpeed = -ballySpeed;
        }
}