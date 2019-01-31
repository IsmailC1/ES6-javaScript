// a good example for using ... operator
function addNumbers(...numbers){
   
    return numbers.reduce(function(sum, previous){
      return sum + previous
   }, 0)
  }
  
  addNumbers(1,2,3,4,5,6,7,8,9,5,4,3,2,23,2,2,2,2,2,2,2,2,22,2,2)

  '-------------------------------------------'
// another example
const defaultColors = ['red','green'];

const userFavoriteColors = ['orange', 'yellow', 'blue'];

[...defaultColors, ...userFavoriteColors];

'----------------------------------------------'
//another example
function validateShoopingList(...items){
    if(items.indexOf('milk') < 0){
      return ['milk', ...items];
    }
   return items;
 }
 
 validateShoopingList('oranges', 'banana', 'ananas')


 '-----------------------------------------------------'

 const MathLibrary = {
    calculateProduct(...rest){
      console.log('Please use multiply method instead');
       return this.multiply(...rest)
    }, 
     multiply(a,b){
       return a * b;
   }
 };
 