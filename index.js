const prompt = require('prompt-sync')({sigint: true});
const name = prompt('Enter your character name');
console.log(`Hey there ${name}, please choose your class`);
console.log('Dwarf -')