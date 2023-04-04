// for the browser part, see class again (73)

let a = 3 // this variable is local, it's not exported to the global scope
console.log(a);
console.log(this.a); // this is a module.export
console.log(global.a); // a is not defined in the global scope, to have it: 

console.log (global === this);

global.c = 10
console.log(global.c);

this.b = 5
this.d = false;
this.e = 'test';
console.log(this.b);
console.log(module.exports.b);
console.log(module.exports === this); // these are the same. In node, each archieve is a module so by doing this

console.log(module.exports); // this will export all the 'this' we had defined. What this does is taking this to the global scope
 