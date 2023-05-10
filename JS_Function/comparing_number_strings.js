// This is kinda of a side note on strings numbers:

console.log('1' > '2');
console.log('1' > '1');
console.log('2' > '1');
console.log('4' > '2');

// So far, so good. Works as if comparing the numbers. However, if we have 2 element numbers: 
console.log('4' > '24');
console.log('5' > '42');
console.log('3' > '29');

/* it will compare only with the 1st (so 4 vs 2, 5 vs 4 and 3 vs 2). Bottom line is that this is not a good way to store 
numbers (in strings that is)*/
