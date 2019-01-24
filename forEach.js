//a simple example of using forEach 
var colors=['red','green','blue'];

for (var i=0; i < colors.length; i++) {
    console.log(colors[i])
}

colors.forEach(function(color) {
    console.log(color);
})

//  ------- -------- ---------- 

// -- sum of numbers --

//Create  an array of numbers 
var numbers = [1,2,3,4,5,6];

//Create a variable to hold the sum 

var sum = 0;

function adder(number){
    sum += number;
}
//Loop over the array, incrementing the sum variable
numbers.forEach(adder);
//print the sum variable

sum;

//  ------- -------- ---------- 


var numbers = [1,2,3];
var doubleNumbers = [];

for(var i=0; i< numbers.length; i++){
    doubleNumbers.push(numbers[i] * 2);
}
doubleNumbers;


























