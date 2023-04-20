const sum = function (x, y) {       // the fc is anonymous, it is tho stored in a const called sum. Same for the one below, stored in a const called printResult
    return x + y 
};

const printResult = function(a, b, operation = sum) { // here the operation is a param, and what we're sayinng is that if it's not defined, the default is the fc sum
    console.log(operation(a, b))
};
printResult(3,4);
/* this is a bit cunfusing so what happened is: 
- we defined the params a and b but not operation. So, because operation was set to be = sum (by default), we've defined x and y (= to a and b, accordingly).
- se we'll have the same as sum(3,4) >> 7 */

printResult(3,4, sum);
printResult(3,4, function (x,y) {    // here we passed an anonymous fc directly into another fc - this is in fact quite common
    return x - y                    // we didn't use the fc sum because we've defined our own param for operation, so no need to use the default
});
printResult(3,4, (x,y) => x*y);     // here we're using an arrow fc (can't remove the () because we have 2 params) and by default arrow fc's are anonymous  



// Another example is when we define fc's in objects: 
const person = {
    speak: function() {     // in the new update of JS, we can have it be also just like this: speak() {....}
        console.log('Hey')
    }
};
person.speak();