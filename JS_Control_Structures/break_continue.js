const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums) {
    if (x == 5) break            // see note below
    console.log(`x = ${nums[x]}`)
};

/* Note: if (x == 5) break
this is the same as: if( x == 5) {
                    break
                    };                    
we can put it all in the same line because by default the IF will assume an empty block in the line of code after the condition 

Also, BREAK works in codes of FOR, WHILE, SWITCH, so the closest to it which in our case here is a for, it will not opearate on the IF.
What happended here is that after getting to the index nº5, it exited the FOR string so no more printed into the console. So it will print until nº5 and execute next
line of code - the one below: */

for(y in nums) {
    if (y == 5) continue            // see note below
    console.log(`${y} = ${nums[y]}`)
};

/* CONTINUE will execute, get to index nº5, break only in that index, and then run the same sequence/repetition - the result is that we're only missing nº6 (index nº5). 

So they both deviate the code flux, but in diffent ways: 
- break: will exit the sequence altogether
- continue: will break in the defined condition and then continue through the same sequence/repetition */

externo:                                   // we labeled this for in order to be able to break it below: 
for (a in nums) {                 
    for (b in nums) {
        if(a == 2 && b == 3) break externo // here, if we didn't have the label, we'd be breaking the closest for which would be this "internal" one
        console.log(`Par = ${a},${b}`)
    }
}

/* what we defined here is that when it get's to the combination of a = 2 and b =3 (2,3), it will break which is exactly what happens when we run the code.

NOTE: this is not used nowadays, this is just to learn the theory of this */