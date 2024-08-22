const prompt = require('prompt-sync')();

const raio = parseFloat(prompt('Insira o raio da esfera: '));
const result = (4 * 3.14 * Math.pow(raio, 3)) / 3

console.log(result)