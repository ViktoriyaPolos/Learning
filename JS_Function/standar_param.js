/* 1st strategy to generate a standart value: 

Here we're using the OR (||) function to allocate a default/standart value to the varibales to avoid them being undefined or null - they will instead be 1 (in this case). 
The limitations is that 0 in JS is false, and what we're checking by doing a = a is true/false statemnts, so if false then 1. In the example of sum1(0, 0, 0), 
we'll still get 3 as a result then.*/

function sum1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
};
console.log(sum1(), sum1(3), sum1(1, 2, 3), sum1(0, 0, 0));

// 2nd, 3rd and 4th strategies to generate a standart value: 

function sum2(a, b, c) {
    a = a !== undefined ? a : 1 // if we use != (diferent instead of strictly diferent) we'll also resolve null to 1 (right now we're resolving und. to 1)
    b = 1 in arguments ? b : 1 // within the arguments (params) is there a value for index 1 (b)? If yes then b, else 1
    c = isNaN(c) ? 1 : c // testing is c is NaN - if it is, then 1, else c. This is the best option when dealing sum math operations
    return a + b + c
};
console.log(sum2(), sum2(3), sum2(1, 2, 3), sum2(0, 0, 0)); 

// with the es2015 update: 
function sum3(a=1, b=1, c=1) {   // this works here because we're not converting the var. to be "read as a boolean" as we did with the OR operator
    return a + b + c  
};
console.log(sum3(), sum3(3), sum3(1, 2, 3), sum3(0, 0, 0)); 