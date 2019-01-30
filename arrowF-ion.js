const add = function(a,b) {
    return a+ b;
}
add(1,2);
// this f-ion can be refactored as this:

const add = (a,b) => a+b;
add(1,2);

// this is a simple example of using an arrow f-ins.

//Here is another example;
const double  = function(number) { 
   return  number * 2; 
}
double(9);
//paranthesis could be omiteted only when we have one parameter
const double = number => 2 * number;

add(7);

'--------------------------'

const numbers = [1,2,3,4];

const doubledNumbers = numbers.map(number => number * 2);

'-------------------'
const team = {
    members: ['Jane', "Bill"],
  teamName: 'Super Squad',
  teamSummary: function() {
       // this === team
     return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
     });
  }
};

team.teamSummary();
