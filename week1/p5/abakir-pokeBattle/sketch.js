var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var gamescreen = 0;

function preload() {
  img1 = loadImage("http://www.pokestadium.com/sprites/black-white/back/charizard.png"); //charisard
  img2 = loadImage("http://www.pokestadium.com/sprites/black-white/charizard.png"); //charisard front 
  img3 = loadImage("http://www.pokestadium.com/sprites/black-white/back/blastoise.png"); //blastoise
  img4 = loadImage("http://www.pokestadium.com/sprites/black-white/blastoise.png"); //blastoise front
  img5 = loadImage("http://www.pokestadium.com/sprites/black-white/back/venusaur.png");//venusaur
  img6 = loadImage("http://www.pokestadium.com/sprites/black-white/venusaur.png"); //venusaur front
  img7 = loadImage("http://www.pokestadium.com/sprites/black-white/alakazam.png"); //alakasm
  img8 = loadImage("http://www.pokestadium.com/sprites/black-white/arcanine.png"); //Arcanine
  img9 = loadImage("http://www.pokestadium.com/sprites/black-white/machamp.png"); //machamp
}

var firstPokemon ={
    Name :"Charizard", 
    Type: "Dragon/Fire", 
    color : "red",
    maxHP: 360,
    HP : 360 ,
    def: 78 ,
    atk :84,
    move1:"Flare Blitz",
    power1:120,
    move2:"Heat Wave",
    power2:95,
    move3:"Shadow Claw",
    power3:70,
    move4: "Solar Beam", 
    power4: 120,
    legend: false};

var secondPokemon = {
    Name: "Blastoise" , 
    Type: "water" ,
    color: "blue",
    maxHP: 362,
    HP: 362 , 
    def: 100 , 
    atk: 83,
    move1: "Flash Cannon",
    power1: 80,
    move2:"Ice Beam",
    power2:90,
    move3:"Skull Bash",
    power3:130,
    move4:"Hydro Pump",
    power4:120,
    legend: false};

var thirdPokemon = {
    Name : "Venusaur", 
    Type: "Grass",
    color: "green",
    maxHP: 364, 
    HP:364, 
    def:82,
    atk:83,
    move1: "Petal Dance",
    power1: 120,
    move2:"Petal Blizzard",
    power2:90,
    move3:"	Solar Beam",
    power3:120,
    move4:"	Take Down",
    power4:90,
    legend: false};

var fourthPokemon = {
    Name: "Alakasm" , 
    Type : "Psychic",
    color: "yellow",
    maxHP: 314,
    HP:314,
    def:45, 
    atk:50,
    move1: "Future Sight",
    power1: 120,
    move2:"Psychic",
    power2:90,
    move3:"	Psyshock",
    power3:80,
    move4:"Shadow Ball",
    power4:80,
    legend:false};

var fifthPokemon = {
    Name: "Arcanine",
    Type:"Fire", 
    color: "red",
    maxHP:384,
    HP:384, 
    def:80 , 
    atk:110,
    move1: "Giga Impact",
    power1: 150,
    move2:"Flamethrower",
    power2:90,
    move3:"Wild Charge",
    power3:80,
    move4:"Extreme Speed",
    power4:80,
    legend:false};

var sixthPokemon = {
    Name: "Machamp", 
    Type: "Fighting",
    color: "#C0C0C0",
    maxHP:384,
    HP: 384, 
    def: 80, 
    atk: 130,
    move1: "Cross Chop",
    power1: 100,
    move2:"Dynamic Punch",
    power2:100,
    move3:"Earthquake",
    power3:100,
    move4:"Fire Blast",
    power4:110,
    legend:false};

var pokeRoster = [firstPokemon, secondPokemon, thirdPokemon]; 

var pokeRoster2 = [fourthPokemon, fifthPokemon, sixthPokemon];

var rand = pokeRoster2[Math.floor(Math.random()*pokeRoster2.length)];

var switch1;
var switch2;

var  pokesimulator1;
var  pokesimulator2;

var a = 100;
var b = 100;
var c;
var d;




var move1;
var move2;
var move3;
var move4;

function setup(){
    createCanvas(500, 500);
    background("grey");
    
}
function draw(){
   initscreen();
   pokebattle();
   check();
}
function initscreen(){
    if (gamescreen == 0){
        background("white");
        rect(2,2,497,148);
        rect(2,152,497,148);
        rect(2,302,497,148);
        image(img2, 10, 20);
        image(img4, 10, 175);
        image(img6, 10, 325);

        //charizard
        fill("white");
        rect(113,50,100,25);
        fill("green");
        rect(113, 50 ,a,25);

        //blastoise
        fill("white");
        rect(113,210,100,25);
        fill("green");
        rect(113,210,a,25);
        
        //Venusaur
        fill("white");
        rect(113,350,100,25);
        fill("green");
        rect(113,350,a,25);
        noFill();

        fill("black");
        textSize(30);
        text("HP: " + firstPokemon.HP, 305,100);
        text(firstPokemon.Name,110,49);

        fill("black");
        textSize(30);
        text("HP: " + secondPokemon.HP, 305,260);
        text(secondPokemon.Name,110,209);

        fill("black");
        textSize(30);
        text("HP: " + thirdPokemon.HP, 305,400);
        text(thirdPokemon.Name,110,349);
        noFill();
    }
}

function pokebattle(){
    if (gamescreen == 1){
        background("gray");
        fill("#C0C0C0");
        ellipse(100,375,150,50);//shadow
        noFill();
        image(switch1, 50 , 295 );

        if (rand.Name == fourthPokemon.Name){
            switch2 = img7;
            }else if(rand.Name == fifthPokemon.Name){
                switch2 = img8;
                }else if(rand.Name == sixthPokemon.Name){
                    switch2 = img9;
                    }

        fill("#C0C0C0");
        ellipse(410,150 ,150,50);//shadow
        noFill();
        image(switch2, 360,75);

        fill("red");
        rect(width-width,height-90,500,100);
        fill("black"); 
        textSize(20);
        text(move1, 3,450);
        text(move2, 135,450);
        text(move3, 265,450);
        text(move4, 395,450);
        noFill();
        rect(3,430,125,35);
        rect(135,430,125,35);
        rect(265,430,125,35);
        rect(395,430,125,35);
        if(switch1 == img1){
            fill("black");
            textSize(30);
            text("HP: " + firstPokemon.HP, 345,360);
            text(firstPokemon.Name,150,309);

            //charizard
            fill("white");
            rect(150,310,100,25);
            fill("green");
            rect(150, 310 ,a,25);
        }else if(switch1 == img3){
            fill("black");
            textSize(30);
            text("HP: " + secondPokemon.HP, 345,360);
            text(secondPokemon.Name,150,309);
            
            //blastoise
            fill("white");
            rect(150,310,100,25);
            fill("green");
            rect(150,310,a,25);
        }else if (switch1 == img5){
            fill("black");
            textSize(30);
            text("HP: " + thirdPokemon.HP, 345,360);
            text(thirdPokemon.Name,150,309);
            noFill();

            //Venusaur
             fill("white");
             rect(150,310,100,25);
             fill("green");
             rect(150,310,a,25);
             noFill();
        }
        if(switch2 == img7){
            fill("black");
            textSize(30);
            text("HP: " + fourthPokemon.HP, 235,135);
            text(fourthPokemon.Name,40,80);

            //Alakasm
            fill("white");
            rect(40,85,100,25);
            fill("green");
            rect(40, 85,a,25);
        }else if(switch2 == img8){
            fill("black");
            textSize(30);
            text("HP: " + fifthPokemon.HP, 235,135);
            text(fifthPokemon.Name,40,80);
            
            //Arcanine
            fill("white");
            rect(40,85,100,25);
            fill("green");
            rect(40,85,a,25);
        }else if (switch2 == img9){
            fill("black");
            textSize(30);
            text("HP: " + sixthPokemon.HP, 235,135);
            text(sixthPokemon.Name,40,80);
            noFill();

            //Machamp
             fill("white");
             rect(40,85,100,25);
             fill("green");
             rect(40,85,a,25);
             noFill();
        }
    }
}
function check(){
    if (firstPokemon.HP <= 0){
        firstPokemon.HP = 0;
        a=100;
        gamescreen = 0;
        if (secondPokemon.HP >= 0 || thirdPokemon.HP >= 0){
            gamescreen = 1;
        }

    }
    if (secondPokemon.HP <= 0){
        secondPokemon.HP = 0;
        a=100;
        gamescreen = 0;
    }
    if(thirdPokemon.HP <= 0){
        thirdPokemon.HP = 0;
        a=100;
        gamescreen = 0;
    }
    if(fourthPokemon.HP<=0){
        fourthPokemon.HP = 0;
        b=100;
        pokeRoster2.pop(fourthPokemon);
        switch2 = fifthPokemon;
    }
    if(fifthPokemon.HP<=0){
        fifthPokemon.HP = 0;
        b=100;
        pokeRoster2.pop(fifthPokemon);
        switch2 = sixthPokemon;
    }
    if(sixthPokemon.HP<=0){
        sixthPokemon.HP = 0;
        b=100;
        pokeRoster2.pop(sixthPokemon);
        switch2 = fourthPokemon;
    }
}
function mouseClicked(){
    if (gamescreen == 0) {
        if(mouseX>=2 && mouseX<=499 && mouseY >= 2 && mouseY <= 150 ){
            switch1 = img1;
            pokesimulator1 = firstPokemon;
            move1 = firstPokemon.move1;
            move2 = firstPokemon.move2;
            move3 = firstPokemon.move3;
            move4 = firstPokemon.move4;
            gamescreen = 1;
        }
        if(mouseX>=2 && mouseX<=499 && mouseY >= 150 && mouseY <= 300 ){
            switch1 = img3;
            pokesimulator1 = secondPokemon;
            move1 = secondPokemon.move1;
            move2 = secondPokemon.move2;
            move3 = secondPokemon.move3;
            move4 = secondPokemon.move4;
            gamescreen = 1;
        }
        if(mouseX>=2 && mouseX<=499 && mouseY >= 300 && mouseY <= 450 ){
            switch1 = img5;
            pokesimulator1 = thirdPokemon;
            move1 = thirdPokemon.move1;
            move2 = thirdPokemon.move2;
            move3 = thirdPokemon.move3;
            move4 = thirdPokemon.move4;
            gamescreen = 1;
        }
    }
    if (gamescreen ==1 ){
        if ( mouseY >= 430   && mouseY <= 465 && mouseX>=3 && mouseX<=128){
            pokesimulator1.HP = pokesimulator1.HP - Math.floor(random(0,rand.power1)); //attack for first pokemon
            a = ((((pokesimulator1.HP) / pokesimulator1.maxHP) * 100));
            
            
            rand.HP = rand.HP - Math.floor(random(0,pokesimulator1.power1)); //attack for the second pokemon
            b = ((((rand.HP) / rand.maxHP) * 100));
    }
        if ( mouseY >= 430   && mouseY <= 465 && mouseX >=135 && mouseX<=260){
            pokesimulator1.HP = pokesimulator1.HP - Math.floor(random(0,rand.power2)); //attack for first pokemon
            a = ((((pokesimulator1.HP) / pokesimulator1.maxHP) * 100));
            
            rand.HP = rand.HP - Math.floor(random(0,pokesimulator1.power2)); //attack for the second pokemon
            b = ((((rand.HP) / rand.maxHP) * 100));
    }
        if ( mouseY >= 430   && mouseY <= 465 && mouseX>=265 && mouseX<=390){
            pokesimulator1.HP = pokesimulator1.HP - Math.floor(random(0,rand.power3)); //attack for first pokemon
            a = ((((pokesimulator1.HP) / pokesimulator1.maxHP) * 100));
            
            rand.HP = rand.HP - Math.floor(random(0,pokesimulator1.power3)); //attack for the second pokemon
            b = ((((rand.HP) / rand.maxHP) * 100));
    }
        if ( mouseY >= 430   && mouseY <= 465 && mouseX >= 395 && mouseX < 500){
            pokesimulator1.HP = pokesimulator1.HP - Math.floor(random(0,rand.power4)); //attack for first pokemon
            a = ((((pokesimulator1.HP) / pokesimulator1.maxHP) * 100));
            
            rand.HP = rand.HP - Math.floor(random(0,pokesimulator1.power4)); //attack for the second pokemon
            b = ((((rand.HP) / rand.maxHP) * 100));
        
    }
    }
}
