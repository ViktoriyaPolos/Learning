// First doing a while and then converting into a For: 
let x = 1

while (x <=10) {
    console.log(`x = ${x}`)
    x++
};

// gets to then and stops because when we add +1, it becomes false and the while statement ends there.

/* Note that we have 3 elements, these are needed for the FOR:
- a declarartion of a avriable (let x = 1)
- expression that dictates when we leave the repetition (x <=10)
- an increment (x++) */

for (var i = 1; i <=10; i++) {
    console.log(`i = ${i}`)
};