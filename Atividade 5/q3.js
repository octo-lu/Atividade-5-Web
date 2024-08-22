const prompt = require('prompt-sync')();

const a = parseFloat(prompt('Insira o lado a: '));
const b = parseFloat(prompt('Insira o lado b: '));
const c = parseFloat(prompt('Insira o lado c: '));
const h = parseFloat(prompt('Insira a altura: '));

const p = a + b + c
const area = (b * h) / 2

console.log(p, area)