// Using var
console.log('Using var:');

console.log('a = ', a);
var a = 2;
console.log('a = ', a);

// the hoisting is the "pulling up" of the variable creation - meaning, JS assumes it even tho in the 1st line it was not created yet. It's the same as having this:
var b
console.log('b = ', b);
b = 2;
console.log('b = ', b);

// the same thing happens in a function:
function test() {
    console.log('c = ', c);
    var c = 2;
    console.log('c = ', c);
};
test();

// console.log('c = ', c); // once again, var is not defined within functions so this will lead to an error

// Using let
console.log('Using let:');

// console.log('d = ', d); // let stament, as const will give an error because hoisting doesn't apply here, we need to define the varible first. This will lead to an error
let d = 2;
console.log('d = ', d);


// see more examples here: https://www.youtube.com/watch?v=A9RwfhYjabw 
