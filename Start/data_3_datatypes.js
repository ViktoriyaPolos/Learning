let age=31;
console.log(typeof 31);
console.log(typeof age);

let salary=4578.32;
console.log(typeof salary); 

let isItRainig=true; //can be true or false and JS understand that and it's a particular type of data (boolean in this case)
console.log(typeof isItRainig);

console.log(typeof 'Test whaterver #')
console.log(typeof -5089765)

// there's more data types, but these are the most basic and common one's - we'll see some others later on 

const weight1 = 1.0;
const weight2 = Number('2.0');

console.log (weight1, weight2); 
console.log(Number.isInteger(weight1));

const weight3 = Number('2.5');
console.log (weight1, weight2, weight3); 
console.log(Number.isInteger(weight3));

const grade1 = 9.879;
const grade2 = 10.569;
const total = grade1 * weight1 + grade2 * weight2;
const average = total / (weight1 + weight2);
console.log(average);
console.log(average.toFixed(2)); 
console.log(average.toString());
console.log(average.toString(2)); // binary code (same number just different "reading")
console.log(typeof average);

console.log(typeof Number);