
function setup(){
    createCanvas(500,500);
    background(225);
    fill("yellow");
    ellipse(width/2,width/2,400);
    fill("black");
    strokeWeight(10);
    line(80, 150, 420,150);
    line(150,350,width-150,350)
    rect(110, 150, 125, 80);
    rect(275, 150, 125, 80);    
}
function mousePressed(){
    console.log("The mousex cordinate is " + mouseX + " and the mouse y cordinate is " + mouseY );   
}