// A class is another way of defining/constructing fc's in JS

// Doing it with the class operator: 
class Person {
    constructor(name) {
        this.name = name    // this is to make the var name public. So this means p1.name is now accessible
        }
    talk () {
        console.log(`My name is ${this.name}`) /* Attention: here is not the '' but the ``.
                                                Also, we had to do the this.name beause name is not defined here.
                                                */
    }
};

const p1 = new Person('Ana');
p1.talk();

// Now with the function one:
const person = name => {
    return {
        talk: () => console.log(`My name is ${name}`) 
    }
}

const p2 = person('Maria')
p2.talk();


/* Not sure if classes are a thing but he did mention (and showed - btw this was in class 108) that if we take these 2 approaches to the browser,
the 2nd one will work best because we didn't need to use this. to define/access the param name. With the 1st case, the name might (in certain cases)
return as undefined. */
