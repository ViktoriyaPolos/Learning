// Attribution operator 
console.log('Attribution operator');
const a = 7;
let b = 3; 
console.log(a);
console.log(b);

b += a; // b = b + a 
console.log(b);

b -= 4; 
console.log(b);

b *= 2;  // b = b * 2
console.log(b);

b /= 2; 
console.log(b);

b %= 2 ; // modulos ( didn't quite get it)
console.log(b);

// Destructuring operator (taking something from a structure)
console.log('Destructuring operator');

// Example 1 - Objects: 
const person = {
    name: 'Ana',
    age: 5, 
    address: {
        street: 'Street ABC',
        number: 1000
    },
}; // how do we extract only the name and age?
console.log(person.name + ',' + person.age); // this is one way of doing it 
const {name, age} = person;
console.log(name,age);

const {name: n , age: ag} = person; // we can attribute identifiers so as to more easialy retrieve the wanted info
console.log(n,ag);

const {lastname, country = true} = person; /* here it's a test to see what happens if we try to get an unexistent variable.
 If we want, we can have a default value (true in this case) so as to not have the undefined return.*/
console.log(lastname, country); // once again, this shows we we shouldn't set any variables to undefined ourselves 

const {address: {street, number, zipCode}} = person;
console.log(street, number, zipCode);

// const {account: {accNumber, code}} = person; // here we will have an error right away. We need to make sure we have the path we're trying to deconstruct 

// Example 2 - Arrays: 
const [a1] = [10]; 
console.log(a1);