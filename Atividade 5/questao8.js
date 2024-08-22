const prompt = require('prompt-sync')();

const name = prompt('Insira o nome completo: ')

name = name.split(' ');
let lastName = name[name.length - 1];
newName = name.pop();
newName = name.join(' ');
console.log(lastName + " " + newName);

  