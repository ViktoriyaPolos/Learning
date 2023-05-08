/* Closure is the scope created when a fc is declared - super related to the lexical context (see that archieve if needed).
This scope allows to access and manipulate variables external to the fc.*/

// Lexical Context - Practical example:

const x = 'Global'

function outs() {
    const x = 'Local'
    function ins() {
        return x
    }
    return ins  
}

const myFc = outs()
console.log(myFc());

console.log(outs()); // this doesn't work because the fc outs calls for the return of the fc ins, thus the result
console.log(outs()()); /* this works because: outs() = fc ins. When we do ins() (which is the same as outs ()()), then we have
                        the wanted result */
 
