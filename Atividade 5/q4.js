const prompt = require('prompt-sync')();

const a = parseFloat(prompt('Insira o lado a: '));
const b = parseFloat(prompt('Insira o lado b: '));
const c = parseFloat(prompt('Insira o lado c: '));

const delta = Math.pow(b, 2) - 4 * a * c;

const x1 = (-b + Math.sqrt(delta)) / (2 * a);
const x2 = (-b - Math.sqrt(delta)) / (2 * a);

console.log(x1, x2)
