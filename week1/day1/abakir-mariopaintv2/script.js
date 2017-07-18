function setup(){
createCanvas(windowWidth,windowHeight);
var x = fill("red");
rect(200,500,80,100);
var x = fill("blue");
rect(300,500,80,100);
var x = fill("green");
rect(400,500,80,100);
ellipse(100,100,50,50);
quad(38, 31, 86, 20, 69, 63, 30, 76);
triangle(30, 75, 58, 20, 86, 75);
}
function mouseDragged(){

rect(mouseX,mouseY,random(50,100), random(50,100));
if((mouseX>100 && mouseX<150)&&(mouseY>100 && mouseY<150)){
ellipse(mouseX,mouseY,random(50,100), random(50,100));
}

}

function mousePressed(){
if ((mouseX>200 && mouseX<280)&&(mouseY>500 && mouseY<600)){
    fill("red");
}
if((mouseX>300 && mouseX<380)&&(mouseY>500 && mouseY<600)){
    fill("blue");
}
if ((mouseX>400 && mouseX<480)&&(mouseY>500 && mouseY<600)){
    fill("green");
}

}
function keyPressed() {
    if (keyCode === 65) {
        clear();
    }
}



