var prompt = require('prompt-sync')();

var a = Math.floor(Math.random()* 147,483,647)
var b = Math.floor(Math.random()* 147,483,647)
var c = Math.floor(Math.random()* 147,483,647)
var d = Math.floor(Math.random()* 147,483,647)
var e = Math.floor(Math.random()* 147,483,647)
var f = Math.floor(Math.random()* 147,483,647)
var g = Math.floor(Math.random()* 147,483,647)
var h = Math.floor(Math.random()* 147,483,647)
var i = Math.floor(Math.random()* 147,483,647)
var j = Math.floor(Math.random()* 147,483,647)
var randArray = [a, b, c, d, e,f,g,h,i,j];

function add (num1, num2, num3, num4, num5, num6, num7, num8, num9, num10){
    return num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
}
console.log("The sum of this array is " + add(randArray[0], randArray[1], randArray[2], randArray[3], randArray[4], randArray[5], randArray[6], randArray[7], randArray[8],randArray[9]) );

var ask = prompt("Would you like to change the color of the Car? (yes,no)    ")
var answer;

var car = {
color : "Red",
name: "Mustang",
year: "3000",
returnN: function(){
return car.name;
},
changeC: function(){
answer = prompt("What color would you like to change the car to?   ")
return answer;
}
};

if (ask == "yes"){
     console.log("The color of " + car.name +" is now " +  car.changeC(answer));
 }


 
 