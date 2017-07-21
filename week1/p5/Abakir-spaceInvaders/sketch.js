function Aliens(xpos,ypos,width,height){
this.xpos = xpos;
this.ypos = ypos;
this.width = width;
this.height = height;
}
var alien = [];
for (var i =0; i<6; i++){
    alien.push(new Aliens(30 + (i*90),50,50,50));
}

function Shot(xpos,ypos,width,height){
this.xpos = xpos;
this.ypos = ypos;
this.width = width;
this.height = height;
}
var shots = [];
var a = 0;
var x =0;
var y = 10;
var speed = 5;

function setup(){
    createCanvas(600, 600);
    background("grey");
}

function draw(){
    background("grey");
    fill('green');
    rect(((width/2) - 50) + x, 550, 100, 30);
    rect(((width/2) - 15) + x, 530, 30, 20);
    move();
    drawAlien();
    addshot();
    disappear();
    }
    
function move(){
if (keyIsDown(LEFT_ARROW)){
x -= 5;
}
if (keyIsDown(RIGHT_ARROW)){
x += 5;
}
}

function keyPressed(){
    if (keyCode == 32){
             shots.push(new Shot((((width/2) - 15) + x), 530, 30, 20));
        }
    }
function addshot(){
    for(var i = 0; i < shots.length; i++){
        fill("white");
        rect(shots[i].xpos, shots[i].ypos, shots[i].width, shots[i].height);
        shots[i].ypos = shots[i].ypos - y;
    }
}
var xspeed = 2;
var yspeed = 0.2;

function drawAlien(){
    for (var i =0; i <= alien.length-1; i++){
        fill("green");
        rect(alien[i].xpos,alien[i].ypos + 50,alien[i].width,alien[i].height);
        alien[i].ypos = alien[i].ypos + yspeed
        alien[i].xpos = alien[i].xpos + xspeed
        if(alien[i].xpos < 0 || alien[i].xpos > 100 + (i * 90)){
            xspeed = -xspeed;
            }
}
}
function disappear(){
    for (var i = 0; i < alien.length;i++){
        for(var j = 0; j < shots.length; j++){
        if (shots[j].xpos >= alien[i].xpos && shots[j].xpos <= alien[i].xpos 
        + alien[i].width && shots[j].ypos >= alien[i].ypos && shots[j].ypos 
        <= alien[i].ypos + alien[i].height) {
         alien.splice(i,1);
         shots.splice(j,1);
        }
        
        }
    }
}