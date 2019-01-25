
//These codes should be runned in the https://stephengrider.github.io/JSPlaygrounds/ browser. Otherwise some changes should be made for running in another code executer.
// for every function there is an && operator and for some f-ion there is an || operator

// ------------------------------------------
var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputerCanRunProgram = false;

for(var i = 0; i < computers.length; i++){
    var computer = computers[i];

    if(computers.ram < 16){
           allComputersCanRunProgram = false;
    }else {
        onlySomeComputerCanRunProgram = true;
    }
}

'----'
allComputersCanRunProgram;
onlySomeComputerCanRunProgram;

'+++'


computers.every(function(computer){
   return computer.ram > 16;
})

computers.some(function(computer){
    return computer.ram > 16;
})


// -----------------------------
var names = [
    "Alexandria",
      "Mathhew",
      "JOe"
];

names.every(function(name) {
    return name.length > 4;
});

names.some(function(name){
    return name.length > 4;
});