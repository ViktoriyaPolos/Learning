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
// because var doesn't have a scope, it will print a 10 (in this case) for every index in the array 
const funcs = [] // empty array

for (var m = 0; m < 10; m++) {
    funcs.push(function() {
        console.log(m)
    })
};
funcs[2] ();
funcs[8] ();

console.log('---//---');

// LET
// because var doesn't have a scope, it will print a 10 (in this case) for every index in the array 
const funcs2 = [] // empty array

for (let n = 0; n < 10; n++) {
    funcs2.push(function() {
        console.log(n)
    })
};
funcs2[2]();
funcs2[8]();
 

