const prompt = require('prompt-sync')();

const string1 = prompt('Insira a Primeira Palavra')
const string2 = prompt('Insira a Segunda Palavra')

string1 = string1.split('').sort().join();
string2 = string2.split('').sort().join();

console.log(string1 === string2);

 