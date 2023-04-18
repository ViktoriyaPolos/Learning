 // First-class Object/Citizen also known as Higer-order funtion (fc for short)



 // Create a fc in a "straight/general" way: 
 function fc1() {}



 // Store a fc in a variable:
const fc2 = function () {} 



 /* Store a fc in a array:
Here we can see that we can 1) define a fc inside the array definition itself & 2) reference previous funtions
*/
 const array = [function (a, b) {return a + b}, fc1, fc2]
console.log(array[0](2, 3));
console.log(array[0]);



// Store in a object attribute: 
const obj = {}
obj.speak = function () { return 'Hey'}
console.log(obj.speak()); // we use the () because the attribute is a fc, see example bvelow of a "simple" object:

const obj1 = {}
obj1.name = 'Viktoriya'
console.log(obj1.name)



// Store a fc as a paramenter to another fc:
function run(fc) {
    fc() // this is the line of code that's making the console print, if we comment or remove this (see erxample run1), it will do nothing
}
 run(function() {console.log('Executing..')}); // instead of a "normal" parameter like a or b (or the value 2/3) as seen before, we have a function 
 run(fc2); // just to exemplify that we can put here any function we want. 


function run1(fc) {}
run1(function() {console.log('Executing..')}); // here we didn't add the function as a paramenter so it's not doing anything

// we will see practical examples of this later on



// A fc. can return/contain another fc.: 
function sum(a, b) {
    return function (c) {
        console.log(a + b + c)
    };
};
sum(1, 2)(4); /* sum(1, 2) is a function that needs to receive another parameter as well - thus the (4). This is a direct call, but we could have do it by defining
 the sum(1, 2) function as a variable: */
const threePlus = sum(1, 2)
threePlus(4);