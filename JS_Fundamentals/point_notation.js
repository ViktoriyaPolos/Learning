console.log(typeof console);

console.log(Math.ceil(6.1)); // ceil is the top of the range - here we see the . used to "invoque" the math function

const obj1 = {}
obj1.name = 'Ball'
obj1['name2'] = 'Ball2' // this is another way to add to the object, but this one doesn't use the point as the one above does
console.log(obj1);
console.log(obj1.name);

// example with a function: 
function Obj(name) {
    this.name = name
    this.exec = function () {
        console.log('Exec...')
    };
};
const obj2 = new Obj('Chair');
const obj3 = new Obj('Desk');
console.log(obj2.name);
console.log(obj3);
console.log(obj3.exec); // here we could also just do this (line below) as we have the console function in exec
obj3.exec();

console.log(typeof obj2);