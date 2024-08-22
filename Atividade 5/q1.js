const prompt = require('prompt-sync')();

const weight = parseFloat(prompt('Insira seu peso: '))
const height = parseFloat(prompt('Insira sua altura: '));
const result = weight / (Math.pow(height, 2))

console.log(result)
