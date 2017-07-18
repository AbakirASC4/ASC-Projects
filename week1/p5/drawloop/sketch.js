function setup(){
    createCanvas(800, 800);
    background("purple");
   
}
var x = 0;
function draw(){
    background("purple");
    ellipse(x,200,200);
    x = x+10;
    if (x>=800 || x<=0){
        x = 0;
    }
}