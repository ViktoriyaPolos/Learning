// First doing a while and then converting into a For: 
let x = 1

while (x <=10) {
    console.log(`x = ${x}`)
    x++
};

// gets to ten and stops because when we add +1, it becomes false and the while statement ends there.

/* Note that we have 3 elements, these are needed for the FOR:
- a declarartion of a variable (let x = 1)
- expression that dictates when we leave the repetition (x <=10)
- an increment (x++) */

for (var i = 1; i <=10; i++) {
    console.log(`i = ${i}`)
};

// so this is like the while, but compressed

const grades = [6.7, 7.4, 9.8, 8.1, 7.7]
for( i = 0; i < grades.length; i++) { // add the let (see below)
    console.log(`grades = ${grades[i]}`)
};

console.log(i); // doesn't mean much, so we should use a let when defining the variable in the FOR statement like so: for(let i = 0; ...)

const grades2 = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 3; i < grades2.length; i++) { // added the let and was testing what happens if we change the start index - indeed it starts at that index :) 
    console.log(`grades2 = ${grades2[i]}`)
};
