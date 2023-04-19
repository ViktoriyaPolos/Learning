// Syntax of an arrow function: 

let double = function (a) {
    return 2 * a
}; 

// we can remove the function statement: 
double = (a) => {
    return 2 * a
}

// NOTE: arrow functions are always anonymous. If we want to name them, we need to later store them in a var/const

// if we have only one param. we can also remove the (). Also, the return is implied so we can also remove the {} and return statement
double = a => 2 * a // very common to see this in fc with only "1 job"  

console.log(double(2));

/* let hey = function () {
    return 'Hey :)'
} */
// Comenting this just to see if the one's below did indeed work

hey = () => 'Hey :)' // if we don't have any param, we need to put either the () or the _ (below) - else it will give an error. This is the standart way 
hey = _ => 'Hey :)' // here the _ is considered as a param tbh, but we don't need to define it when executing (see console below for example)

console.log(hey());



// THIS and Arrow Functions: 

// because the arrow function was writen in the object context, this will be "linked" to the object as well. As we saw before, with normal fc's this doens't happen


function Person () {
    this.age = 0
    setInterval(() => {         // here we have an anonymouos arrow function 
        this.age++
        console.log(this.age)
    }, 1000)
}
// new Person; // Commenting this because it will run forever, everytime



// More examples of THIS in arrow function vs standart function:
console.log(this === global); // this is not the same as global in the "general code"
console.log(this === module.exports); // 

let compareWithThis = function(param) {
    console.log(this === param)
};
compareWithThis(global); /* in the node tho for functions, this is the same as the global scope (window in browser) - when a fc is defined this way. Node = module.exports
(we've seen this before and indeed this === module.exports - see file: execution_browser_vs_node.js).
This THIS, in a function is thus different from the "general one" - line 48)*/

// The this of a function leaves the global scope when we use bind to connect it to an object. This way, it points to the object instead of the fc: 
const obj = {}
compareWithThis = compareWithThis.bind(obj)
compareWithThis(global); 
compareWithThis(obj); 