// insted of witting file.name, file.extension etc. we can extract the object inside the
//function and immensly reduce amount of code.

var savedFile = {
    extension: '.jpg',
    name: 'repost',
    size: 14040
  };
  
  function fileSummary({name, extension, size}){
    return `The file ${name}${extension} is of size ${size}` 
  }
  
  fileSummary(savedFile);


  