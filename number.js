var a = [];
function cool(arr){
    a.push(2);
    a.push(3);
for (var i = 0; i <= a.length; i++){
    a.push(a[i] * 2);
}
return a;
}
cool(a);
console.log(a);