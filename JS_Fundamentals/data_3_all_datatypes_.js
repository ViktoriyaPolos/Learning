// General Overview (detail on each below):
console.log('General Overview:');
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


// NUMBERS:
console.log('Data: Numbers');

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
console.log('Data: Numbers - some things to consider:');

console.log(7 / 0.0000000001); 
console.log(7 / 0); // allows infinity
console.log('10' / 2); // will try to convert a string to a number if there's a math operation
console.log('10.2' / 2); 
console.log('10,2' / 2); 
console.log('Cool' * 2); // will not operate with actuall strings (I believe there's some languages that will)
console.log(0.1 + 0.7); // will not give the exact, expeted result. This way is faster and a lot of languages addopt it
console.log((0.1 + 0.7).toFixed(2)); // can fix this by using the .toFIxed function 

// Numbers --> Math Functions:
console.log('Data: Numbers - Math functions:');

const radius = 5.6;
const area = Math.PI * Math.pow(radius,2); // power function (potências) - another way of foing this is ** (see below)
const area2 = Math.PI * radius**2

console.log(area);
console.log(area2);

console.log(typeof Math);

// STRINGS:
console.log('Data: Strings');

 const school = 'Coder';
 console.log(school.charAt(4));
 console.log(school.charAt(10)); // if there's no characters, will return a blank. Other languages would assume this as an error.
 console.log(school.charCodeAt(3)); // will return the unicode: https://old.unicode-table.com/en/#0065 
 console.log(school.indexOf('d'));

 console.log(school.substring(1));
 console.log(school.substring(0,3));

 console.log('School '.concat(school).concat('!'));
 console.log('School ' + school + '!'); // works the same as the concat function for example:

 let letters = ['A', 'B', 'C'];
 let numbers = [1, 2, 3];
 let alfaNumeric = letters.concat(numbers)
 console.log(alfaNumeric)

 let alfaNumeric2 = letters + numbers;
 console.log(alfaNumeric2); // the results do change a bit

 console.log(school.replace('e', '3')); 

 console.log('x,y,z'.split(',')); // turns string into array

 // Strings: Template String
 console.log('Data: Template String');
 const name = 'Ana';
 const concatenate = 'Hello ' + name + '!';

const template = `
    Hello,
    how are you
    ${name}?`

console.log(concatenate, template);

console.log(`1 + 1 = ${1 + 1}`);

// bit of a more advance example, we'll see this in higher detail later on but I'll leave the example here as well:
const up = text => text.toUpperCase()
console.log(`Hey...${up('careful')}!`);

// BOOLEAN: 
console.log('Data: Boolean');

let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1; 
console.log(isActive); // this just assumes 1 as a number
console.log(!isActive); // ! is a negative (not)
console.log(!!isActive); // !! is a negative of a negative so a positive - this result means that 1 is a "true"

console.log('--//--');
 
isActive = 0;
console.log(!isActive); // this result means that 0 is a "false"

console.log('--//--');

// to examplify this ! better:
isActive = 1;

console.log(!!true);
console.log(!true);

console.log(!!false);
console.log(!false);

console.log('--//--');

console.log('the trues...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'text');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true)); // in this case we are not checking the equality but the result of the attribution
console.log(!!(isActive = 33));

console.log('--//--');

console.log('the falses...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!(isActive = false));

console.log('--//--');

console.log('to finish...');
console.log(!!('' || null || 0 || ' ')); // this is true because one of them is true (' ')
console.log(!!('' || null || 0 || 'text'));
console.log(('' || null || 0 || 'text')); // if we remove the true/false (!!), it will return the only true value
console.log('' || null || 0 || 'text' || 123); // it will return only the first true value - in this case 123 is also true

console.log('Practical example of the or operator:');
let name2 = '';
console.log(name2 || 'Unknown');
let name3 = 'Lucas';
console.log(name3 || 'Unknown');


// ARRAYS:
console.log('Data: Array');

const values = [7.7, 8.9, 6.3, 9.2];
console.log(values[0],values[3]);
console.log(values[4]); // in other languages would be an error, here it's undefined

values [4] = 10;
console.log(values);

values [6] = 10;
console.log(values);

console.log(values.length); // it will count the empty ones, even tho they are undefined

values.push({id: 3}, false, null, 'test'); // we can mix data types but ideally we wouldn't do it. Better create a lot of different arrays
console.log(values);

console.log(values.pop()); // this will remove the last item from the array
console.log(values);

delete values [0]; // this will delete the item # chosen from the array
console.log(values);

console.log(typeof values);

// OBJECTS:
console.log('Data: Objects');
