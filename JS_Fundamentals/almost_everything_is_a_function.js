// If JS was a country - function would be the president
// here is a link for more info on functions, with very simple and clear examples: https://blog.cod3r.com.br/funcoes-com-e-sem-retorno/


console.log(typeof Object);

class Product {};
console.log(typeof Product);


 // Function without an output
 function printSum(a, b) {
    console.log(a + b)
 };
 printSum(2, 3);
 printSum(2); // the second value will be undefined so the result is Not a Number
 printSum(2, 10, 4, 5, 6, 7);

 // here we can do just the function_name(x,y) (printSum) because it's already a console.log


 // Function with an output
 function sum(a, b = 0) {
    return a + b
 };
 console.log(sum(2, 3));
 console.log(sum(2)); // b is zero by definition, so if we don't set a value for it, it's gonna be 0

 // here, if we want to see the values, we need to "print" them in the console. 

// Storing a function (buy creating a varianble/constant)

 const printSum1 = function (a, b) { // here, the function is anonymous (doesn't have a name)
    	console.log (a + b)
 };
printSum1(2,3);


// Storing an arrow function in a variable
const sum2 = (a, b) => {
    return a + b 
};
console.log(sum2(3,3));

// Implicit return 
const sum3 = (a, b) => a + b 
console.log(sum3(4,3));

// same as doing all of what we did for sum2 for example, just a shorter code

// we can shorten it even more if we have just one variable:
const print1 = a => console.log(a);
print1(1);
print1('Cool');



