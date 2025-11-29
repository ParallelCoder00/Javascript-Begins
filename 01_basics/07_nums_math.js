const score = 100;
console.log(score.toString());
const balance = new Number(100);
console.log(balance);
console.log(balance.toFixed(2));

const integer = 89.88235
console.log(integer.toPrecision(3));

const hundreds = 10000000000
console.log(hundreds.toLocaleString()); // divides the 0's in american form
console.log(hundreds.toLocaleString('en-In')); // divides the 0's in Indian form

// *************************** Maths ***********************************
console.log(Math);
console.log(Math.abs(-9)); // converts negative into positive
console.log(Math.round(3.56));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));

console.log(Math.random());
console.log(Math.floor(Math.random()*8)+ 1);

let min = 10
let max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min);














