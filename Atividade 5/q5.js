const prompt = require('prompt-sync')();

const string = prompt('Insira a string: ')


let newString = string.split('').reverse().join('');

if (newString == string) return console.log('SIM')

console.log("NÃO")

