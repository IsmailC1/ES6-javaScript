// an example for map function 
//These codes should be runned in the https://stephengrider.github.io/JSPlaygrounds/ browser. Otherwise some changes should be made for running in another code executer.


var numbers = [1, 2, 3];
var doubleNumbers = [];

for(var i = 0; i < numbers.length; i++) {
    doubleNumbers.push(numbers[i] * 2);
}

var double = numbers.map(function(number){
    return number * 2;
})

double;
doubleNumbers;


//  ------------------------
// ex. 2
var cars = [
    {model: 'Buick', price: 'cheap'},
    {model: 'Camaro', price: 'expensive'}
  ]
  
  var brm = cars.map(function(car){
   
    return car.price;
  })
  
  brm;


















