// Attribution operator 
console.log('----- Attribution operator-----');
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
console.log('----- Destructuring operator ----- ');

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
const [a1] = [10]; // reminder, here we are defining a variable (constant in this case) a1, that recieves the value 10
console.log(a1); 

const [n1, , n3, ,n5, n6 = 0] = [10, 7, 9, 8]; // another reminder, here n6 has the value of 0 by default (if not attributed another value, will return 0)
console.log(n1, n3, n5, n6);

const [, [, note]] = [[, 8, 8], [9, 6, 8]]; // we shouldn't do this as this type of code is hard to read
console.log(note);

// Example 3: 
function rand({min = 0, max = 1000}) { // here we are using the destructuring operator
    const value = Math.random()* (max-min) + min
    return Math.floor(value)
};
console.log(rand({max: 50, min: 40})); // here we are using an object, it's the same as doing the object first (see below): 
const obj = {max: 50, min: 40} // 1/2
console.log(rand(obj)); // 2/2
console.log(rand({min: 955})); // here, we only defined the min, the max is the same as set in the function before, 1000
console.log(rand({})); // here, it will give any number between 0-1000
// console.log(rand()); this will give an error because it will try to destructure something that is undefined or null - will lead to an error

// Another example to understand the difference of destructuring in this function case:
// Option without destructuting: 
function apresentar(nome, idade) {
    console.log('Olá, me chamo ' + nome + ' e tenho '+ idade + ' anos');
}

const pessoa = {
    nome: 'Fulano',
    idade: '22',
    sexo: 'M',
    profissao: 'Dev',
}
 
apresentar(pessoa.nome, pessoa.idade)

// Option with destructuring: 
function apresentar1({nome, idade}) {
    console.log('Olá, me chamo ' + nome + ' e tenho '+ idade + ' anos');
}
 
const pessoa1 = {
    nome: 'Fulano',
    idade: '22',
    sexo: 'M',
    profissao: 'Dev',
}
 
apresentar1(pessoa1)

// Example 4 (same as 3 but with array):
function rand1([min1 = 0, max1 = 1000]) {
    if (min1 > max1) [min1, max1] = [max1, min1] 
    const value = Math.random()* (max1-min1) + min1
    return Math.floor(value)
};
console.log(rand1([50, 40])); // here the first number will be the min and the second the max (by default, don't need to assign as in the example with objects - ex.3)
console.log(rand1([950])); // here we are defining only the min (so will go from 950-1000)
console.log(rand1([, 40])); // here we are defining only the max (so the range is 0-40)
console.log(rand1([]));




// Arithmetic operators
console.log('----- Arithmetic operators ----- ');

const [e, f, g, h] = [3, 5, 1, 15]; // here we are using the destructutring method
const sum = e + f + g + h // binary because it will do e+f then this sum + g and then all this added up + h
const subtract =  f - h
const multiply = e * f
const divide = h / e
const module1 = e % 2 // %2 is ususally used to know if a number is even (if 0 then yes, it's even)

console.log(sum, subtract, multiply, divide, module1);
console.log(-subtract); // this is an example of a 'unary' operator




// Relational operators
console.log('----- Relational operators -----');
// these will always be true or false - we are comparing 2 things (also, it's binary)

console.log('01)', '1' == 1); // here we are comparing the value, not the data type
console.log('02)', '1' === 1); // here we're both comparing the value and the data type, which in this case is not the same
console.log('03)', '3' != 3); 
console.log('04)', '3' !== 3); 
console.log('05)', 3 < 2); 
console.log('06)', 3 > 2); 
console.log('07)', 3 <= 2); 
console.log('08)', 3 >= 2); 

const d1 = new Date(0) // 0 is the reference date 
const d2 = new Date(0)
console.log('09)', d1 === d2); // here it's always different because it's comparing the memory references, which is different for each
console.log('10)', d1 == d2); 
console.log('11)', d1.getTime() == d2.getTime()); // here it will be true because we're comparing the actual time (both == and ===)
console.log('12)', undefined == null); 
console.log('13)', undefined === null); 

// Usually it's better to use the strictly equal (===)




// Logical operators
console.log('----- Logical operators -----');

// it's the and/ or type of operators

/* Set-up for this exercise is: 
We're working 2 jobs, if for this week both go well, we get a 50inch tv and ice-cream. If only one of them goes well, we get a smaller, 32inch tv and still get the 
icre-cream. If neither goes well, we don't get a tv nor the ice-cream.
*/

function shopping(work1, work2) {
    const buyIceCream = work1 || work2 // here if work1 goes well, we don't need to even look at work2
    const buyTv50 = work1 && work2 // here it's a "short-circut" operator - if the first is false, we don't need to look at the 2nd to know the whole thing is false
    // const buyTv32 = !! (work1 ^ work2) this is a bitwise xor (exclusive or operator) - WTF?
    const buyTv32 = work1 != work2 // instead of doing the way above, we can have an exclusive or in this way (see hand notes on page 7.5 if needed)
    const keepHealthy = !buyIceCream // logical denial (unary operator)

    return {buyIceCream, buyTv50, buyTv32, keepHealthy} // here, we are creating an object, note on this below
};

/* in the new update in JS, we can have objects without havint to explicitly have the key/value. So instead of this:
return {buyIceCream: buyIceCream, 
    buyTv50: buyTv50, 
    buyTv32: buyTv32, 
    keepHealthy: keepHealthy}
We can simplify and have just this: return {buyIceCream, buyTv50, buyTv32, keepHealthy}. 
This will assume these as the keys, as as the value, the result of the operation defined in the constants above. But "behinf the scenes", we still have the 
key/value going on.
*/

console.log('1)', shopping(true, true));
console.log('2)', shopping(true, false));
console.log('3)', shopping(false, true));
console.log('4)', shopping(false, false));




// 'Unary' operators
console.log('----- "Unary" operators -----');
let num1 = 1;
let num2 = 2;

num1++ 
console.log(num1);
--num1
console.log(num1);

console.log(++num1 === num2--); /* this is true because... it follows an order - meaning, first we did +1 to num1 (=2), then we compared to num2 (2) - which is indeed 
true. Only after the comparison, we subctracted 1 to 2 (1) */
console.log(num1 === num2); // if we compare them again, we will see they are not equal anymore
console.log(num1);
console.log(num2);




// 'Ternary' operators
console.log('----- "Ternary" operators -----');

const result = grade => grade >= 7 ? 'Approved' : 'Failed' // here we are using an arrow function

console.log(result(7.1));
console.log(result(6.1));

// const status = grade >= 7 ? 'Approved' : 'Failed' // this is an error, because grade is not defined just to show that we can store this as an constant as well

...