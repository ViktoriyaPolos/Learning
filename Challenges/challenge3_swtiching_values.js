let a = 7;
let b = 94;

// challenge: swtich the values of variables a and b, such as a = 94 and b = 7

console.log(a);
console.log(b);

// my attempt #1 (very obvious one..) - I also tried the [] onption but it wasn't working for me at first because I was missing the ; on the previous statement
a = 94;
b = 7;

console.log(a);
console.log(b);

console.log('--//--');

// restarting the values to the original ones:
a = 7;
b = 94;

console.log(a);
console.log(b);

// solution given - temp:

let temp = a;

a = b;
b = temp;

console.log(a);
console.log(b);


console.log('--//--');

// restarting the values to the original ones:
a = 7;
b = 94;

console.log(a);
console.log(b);

console.log('--//--');
// another attempt, after googling a bit: 
[a, b] = [b, a];
console.log(a);
console.log(b);