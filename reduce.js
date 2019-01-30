//examples of a reduce method
var numbers = [10,20,30];
var sum = 0;

for(var i = 0; i < numbers.length; i++){
  sum += numbers[i];
}
'-----'

numbers.reduce(function(sum, numbers){
  
  return sum + numbers
  
}, 0)

'-------------------------------------------'

var primaryColors = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'}
];

primaryColors.reduce(function(previous, primaryColor){
    previous.push(primaryColor.color);
    return previous;
}, []);
  

'-------------------------------------------'


function balancedParents(string) {
  return !string.split("").reduce( function(previous, char){
    
       if(previous < 0) { return previous }
       if(char === '(') { return ++previous }
       if(char === ')') { return --previous }
       return previous
  }, 0);
}

balancedParents('()');

