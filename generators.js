function* shopping (){
    //stuff on the sidewalk 
    
    //walking down the sidewalk 
    
    //go into the store with cash
    const stuffFromStore = yield 'cash';
    //walking to laundary pleace
    const cleanClothes = yield 'laundary';
    //walking back home
    return [stuffFromStore , cleanClothes];
  }
  
  //stuff in the store
  const gen = shopping();
  gen.next();   //leaving our house
  // walked into the store 
  // walkin up and down the aisles...
  //purchase our stuff
  
  gen.next('groceries');    //leaving the store with groceries
  gen.next('clean clothes')

  '-----------------------------------------------'
   // symbol.iterator tells the for loop function to iterate through it 
  const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
     yield this.lead;
     yield this.tester;
    }
  };
  
  const engineeringTeam = {
    testingTeam,
    size: 3, 
    department: 'Engineering', 
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* (){
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
    }
  };
  
  const names = [];
  for (let name of engineeringTeam){
      names.push(name);
  }
  
  names
 '-----------------------------------'

 //practical example

 class Comment {
    constructor(content, children){
      this.content = content;
      this.children = children;
    }
    
    *[Symbol.iterator](){
       yield this.content;
      for(let child of this.children)
        yield* child; 
    }
  }  
  
  const children = [
   new Comment('good comment', []),
   new Comment('bad comment', []),
   new Comment('meh', [])
  ];
  
  const tree = new Comment('Great post!', children);
  
  const values = [];
  for (let value of tree){
   values.push(value)
  }
  values;