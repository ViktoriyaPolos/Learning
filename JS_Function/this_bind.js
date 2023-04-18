 /* So, here's the deal.. In JS THIS is variable - meaning, depending on how the fc. is set-up, it can either be global ( or === window in browser) or not. However, if
 we define a fc using the arrow function, it will always be fixed and equal to the global scope (window).
 This doesn't happen in Java. */


 // Example 1:
 const person = { 
    greeting: 'Howdy!',
    speak() {                      // we can set-up fc's like this with the ecma2015
        console.log(this.greeting) // here we're accessing the attribute of the owner of the function which is the person object. If we remove it, it won't be able to access
    }
 }

person.speak();

const speak = person.speak
speak() /* conflict between funcional and OO (Object Oriented). The greeting now is pointing to a new "place" other than the object (person in this case) so now
            we can't access it. We're not longer calling the function speak throw the person context, called like this is in another context within the node. */

const speakingOfPerson = person.speak.bind(person)
speakingOfPerson();




// Another example to understand this better: 
function DizerBomDia() {
    console.log("Bom dia " + this.nome + "!")
}; 
DizerBomDia() // here we get an undefined because this.nome is not defined.
 
// so we move on to defining it: 
const pessoa1 = {
    nome: 'Vinicius',
    DizerBomDia        /* this is the function defined previously, same as having: console.log("Bom dia " + this.nome + "!"). Now in the context the function is 
                          inserted in, the property nome exists and so we can access it with the THIS */
};
pessoa1.DizerBomDia() // so this returns "Bom dia " + this.nome which is now defined - nome: 'Vinicius'

 
function addition(num) {
	return num++
};
addition(0);
addition(9);
addition(-3);