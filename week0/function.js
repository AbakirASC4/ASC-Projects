function hello() {
    console.log("Hello World");
}
hello();
function add(num1, num2){
    console.log(num1 + num2);
    return (num1 + num2);
}
add(5,7);
var wholeNumber;
function rand(number){
    var wholeNumber = Math.floor(Math.random() * number);
    
    return wholeNumber;
}
console.log (rand(2000));