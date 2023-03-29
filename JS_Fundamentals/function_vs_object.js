// example with pre-defined functions in JS
console.log(typeof Object);
console.log(typeof new Object());

// example by creating a function
const Client = function () {}
console.log(typeof Client);
console.log(typeof new Client());
console.log(typeof new Client); // just to show that having the () and not having them, is the same

// example with classes
class Product {}
console.log(typeof Product);
console.log(typeof new Product);
