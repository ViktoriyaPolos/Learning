// General Overview (detail on each below):

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


// Numbers:

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

// Some things to consider with numbers in JS:

console.log(7 / 0.0000000001); 
console.log(7 / 0); // allows infinity
console.log('10' / 2); // will try to convert a string to a number if there's a math operation
console.log('10.2' / 2); 
console.log('10,2' / 2); 
console.log('Cool' * 2); // will not operate with actuall strings (I believe there's some languages that will)
console.log(0.1 + 0.7); // will not give the exact, expeted result. This way is faster and a lot of languages addopt it
console.log((0.1 + 0.7).toFixed(2)); // can fix this by using the .toFIxed function 



// Numbers --> Math Functions:

const radius = 5.6;
const area = Math.PI * Math.pow(radius,2); // power function (potências) - another way of foing this is ** (see below)
const area2 = Math.PI * radius**2

console.log(area);
console.log(area2);

console.log(typeof Math);

// Strings:

 const school = 'Coder';
 console.log(school.charAt(4));
 console.log(school.charAt(10)); // if there's no characters, will return a blank. Other languages would assume this as an error.
 console.log(school.charCodeAt(3)); // will return the unicode: https://old.unicode-table.com/en/#0065 
 console.log(school.indexOf('d'));

 console.log(school.substring(1));
 console.log(school.substring(0,3));

