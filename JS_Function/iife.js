/* IIFE stands for Immediatly Invoked Functoin Expression.
These are ready to execute when declared and the main advantage is that they escape the global scope, meaning, what we define within them, 
only exists in the fc scope. This is good particularly in browser and when there's multiple people on the same code.*/

(function(){
    console.log('Will be executed right away')
    console.log('Escapes the wider, global scope')
})()

// Because we did the fc inside the (), we can invoke in imediatlyh (by doing the () also at the end)

/* we can define, within these, const, vars, other fc's and in no moment we're touching the global (window in this case given this
    is more 'applicable' in browser) scope. Obviously if we do window.x, we'll access it but needs to be deliberate.*/