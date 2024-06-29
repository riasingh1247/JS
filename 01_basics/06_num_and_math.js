const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString()); //3 100 has 3 digits
console.log(balance.toFixed(2));

const otherNumber = 123.8966 //a bigger number is given as exponential
console.log(otherNumber.toPrecision(3)) //returns a string

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //values with commas

/*********************MATHS************************************************ */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3))
console.log(Math.ceil(4.2)) //upper value
console.log(Math.floor(4.2)) //lower value
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
console.log(Math.random()); //random values b/w 0 and 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max-min +1)) + min)







