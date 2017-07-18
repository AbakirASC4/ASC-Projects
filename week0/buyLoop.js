// No argument 
var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 

var currentMoney = 1000;
var userItems = [];

while(currentMoney >= 100){
    console.log("You currently have" + currentMoney + ". Sword = $500, Food = $100.")
    var choice = prompt("Do you want a sword, or do you want food?");
    if (choice == "sword"){
        if (currentMoney >= 500){
            currentMoney = currentMoney - 500;
            userItems.push("sword");
        }else{
            console.log("sorry your broke boy.")
        }
    }else if(choice == "food"){
    currentMoney = currentMoney - 100;
    userItems.push("food");
    }else{
        console.log("What you have entered is not a choice. Try again");
        console.log("Sword = $500, Food = $100.")
    }
}
console.log("Watch out for the frost troll! Best luck on your adventure");

var seeInventory = prompt ("Do you want to see your inventor? (y/n)");

if(seeInventory == "y"){
    console.log("Your inventory is:" + userItems);
}else{
    console.log("Have a good day");
// No argument 
var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 

var currentMoney = 1000;
var userItems = [];

while(currentMoney >= 100){
    console.log("You currently have" + currentMoney + ". Sword = $500, Food = $100.")
    var choice = prompt("Do you want a sword, or do you want food?");
    if (choice == "sword"){
        if (currentMoney >= 500){
            currentMoney = currentMoney - 500;
            userItems.push("sword");
        }else{
            console.log("sorry your broke boy.")
        }
    }else if(choice == "food"){
    currentMoney = currentMoney - 100;
    userItems.push("food");
    }else{
        console.log("What you have entered is not a choice. Try again");
        console.log("Sword = $500, Food = $100.")
    }
}
console.log("Watch out for the frost troll! Best luck on your adventure");

var seeInventory = prompt ("Do you want to see your inventor? (y/n)");

if(seeInventory == "y"){
    console.log("Your inventory is:" + userItems);
}else{
    console.log("Have a good day");
}