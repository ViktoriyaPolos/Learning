function getNumRandomBetween(min, max) {
    const value = Math.random() * (max-min) + min 
    return Math.floor(value) // to round up and get the actuall value returned 
};

/* Explaining value = Math.random() * (max-min) + min : 
- Math.random: gives a value of either 0 or 1
- (max-min): is to access the full range we define 
- + min: because Math.random can be 0, in order to get the min value we need to add + min in the end as 0*x is 0.
*/ 

let option = 0 // not necessary to define an initial value, can be left open as well

while (option != -1) {
    option = getNumRandomBetween(-1, 10)
    console.log(`Chosen option was ${option}.`) // note that here we didn't use '' but the ``else it would have been a string
};

console.log('Until the next one :)')

/* What happended here is that the program ran until we got a -1, choosing random mumbers between -1 and 10. When it got to -1 (could have taken way more or less tries)
it stoped and printed the following thing in the code which was the 'Until the next one :) line. */