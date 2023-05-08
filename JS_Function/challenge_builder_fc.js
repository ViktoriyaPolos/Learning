// The challenge is to convert this (from the class_vs_factory class) but with a builder function instead of a class.

class Person {
    constructor(name) {
        this.name = name
        }
    talk () {
        console.log(`My name is ${this.name}`)
    }
};

const p1 = new Person('Ana');
p1.talk();


// Let's try this then: 
function person2 (name) {
    this.name = name
    this.talk = function () {
        console.log(`My name is ${this.name}`)
    }
}

const p2 = new person2('Maria');
p2.talk();
console.log(p2.name); /* we can do this because we used the operator 'this.' when defining the name param in the fc. If we remove it
                        this will return as undefined */


// This was to show dif ways of instancing objects pretty much and I didn't get deep (whatsover) into the class way :)

// Bottom line is, we can create an object from a builder function, a class or a factory function. 