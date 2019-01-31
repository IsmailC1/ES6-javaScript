// this is an example of how classes are used 
function Car(options){
    this.title = options.title;
  }
  
  Car.prototype.drive = function() {
    return 'druum'
  }
  
  function Toyota(options) {
    Car.call(this, options)
   this.color = options.colors
  }
  
  Toyota.prototype = Object.create(Car.prototype);
  Toyota.prototype.constructor = Toyota;
  Toyota.prototype.honk = function(){
   return 'beep'
  }
  
  const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
  '-------'
  toyota;
  toyota.honk()
  toyota.drive()
  
'------------------------------------------------------------------------------'

class Car {
    constructor({title}) {
      this.title = title;
    }
    drive(){ 
      return 'vruum';
    }
  }
  
  class Toyota extends Car{
     constructor(options){
       super(options); // Car.constructor()
        this.color = options.color;
     }
    honk(){
      return 'beep';
     }
  }
  
  const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});
  toyota.honk();
  toyota.drive();
  toyota
  
  
