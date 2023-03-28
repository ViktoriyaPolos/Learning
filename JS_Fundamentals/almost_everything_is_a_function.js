// If JS was a country - function would be the president

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

 // Function with an output
 function sum(a, b = 0) {
    return a + b
 };
 console.log(sum(2, 3));
 console.log(sum(2));