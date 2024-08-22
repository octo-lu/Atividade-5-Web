const prompt = require('prompt-sync')();

const string = prompt('Insira a string: ')

let spaceAmount = (string.split(" ").length - 1);
console.log(spaceAmount);
    
    