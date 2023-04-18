function x(min,max) {
    const value = Math.random() * (max-min) + min
    return Math.floor(value)
};

let option = 0 // not necessary to define an initial value, can be left open as well

do {
    option = x(-1, 10)
    console.log(`The chosen option is ${option}.`)
} while (option != -1); // this is the only statemnt in JS that comes after the block is defined 

console.log('The end :)')  

let option2 = -1 // not necessary to define an initial value, can be left open as well

do {
    option2 = x(-1, 10)
    console.log(`The chosen option2 is ${option2}.`)
} while (option2 != -1); // only statmeent that comes after the block is defined 

console.log('The end2 :)')  

/* in this case, we can have option = -1 from the start and it will sill run multiple times. If we do this in While only, it will stop imediatly. The difference is 
that here it runs first the random numbers and then tests against the condition defined. 
So do while garantees always at least one execution, and while does not. */