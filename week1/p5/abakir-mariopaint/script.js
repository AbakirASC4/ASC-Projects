function setup(){
createCanvas(windowWidth,windowHeight);
}

function mouseDragged(){
changecolors();
rect(mouseX,mouseY,random(50,100), random(50,100));

}
function changecolors(){
    fill(random(0,255),random(0,255),random(0,255));

}
function keyPressed() {
    if (keyCode === 65) {
        clear();
    }
}