// Example 1
// VAR
// in this example, inside the bloc, we will have the condition being met (i < 10) in order to . Ouside of it, it will do an increment on the last value assumed (9)
for (var i = 0; i < 10; i++){
    console.log(i)
};

console.log('i =', i); 

console.log('---//---'); 

// LET
for (let j = 0; j < 10; j++){
    console.log(j)
};

// console.log('j =', j); // here, the variable j doesn't exeist outside of the scope, so doing this will lead to an error

// Example 2
console.log('Example 2');

// VAR
const funcs = [] // empty array

for (var m = 0; m < 10; m++) {
    funcs.push(function() {
        console.log(m)
    })
};
funcs[2] ();
funcs[8] ();


