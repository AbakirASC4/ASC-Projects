var grid = [];
var grid1 = [];
var xpos = 0;
var ypos = 0;
var a; // = Math.floor(Math.random()*64);
var b;
function setup(){
    createCanvas(801, 801);
    background("black");
        for(var i = 0; i<8; i++){
         for(var j =0; j<8; j++){
            grid[i]  = new Square(xpos,ypos,100,100,false); 
            rect(grid[i].x , grid[i].y , grid[i].width , grid[i].height); 
            grid1.push(grid[i]);
            ypos =ypos +100;     
            }
            ypos = 0;
            xpos = xpos +100;
     }   
}

function draw(){
    placeships();
    mouseClicked();
    console.log(grid1);
   
}
function Square(x,y,width,height,fool){
    this.x = x;
    this.y = y;
    this.width =width;
    this.height =height;
    this.fool = fool;
    

}
function placeships(){
    for(var i = 0; i <= 4; i++){
        a = Math.floor(Math.random()*64);
        grid1[a].fool = true;
        rect(grid1[a].x , grid1[a].y , grid1[a].width ,grid1[a].height);
    }
}
function mouseClicked(){
    if (grid1[a].fool == true){
        fill("red");
        }
        b = Math.floor(Math.random()*64);;
        if (grid1[b].fool == false){
            fill("blue");
            }
}