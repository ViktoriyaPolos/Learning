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





// Example from another student: 
const pessoa = {
    nome: 'Dharuan',
    falar(){
        console.log('Meu nome é: '.concat(this.nome))
    }
}
const pessoa2 = {
    nome: 'João',
    dizer: pessoa.falar // irá utiliza o mesmo método de execução de pessoa, logo o this referenciado por pessoa sera nome desse
}
pessoa.falar() // output será: Dharuan. Aqui não há temas certo? Temos o obj pessoa com o nome D... associado, e o falar que tem o this associado a esse nome. 
pessoa2.dizer() /* output será: João. Aqui o que acontece é que quando temos o dizer, é o mesmo que pensar no código desta forma: 
- dizer: pessoa.falar ==> dizer: pessoa.(console.log('Meu nome é: '.concat(this.nome)))
A particularidade do this é que ele aponta para o objeto onde está a ser chamado (neste caso pessoa2) e não para o objeto onde foi definido (pessoa). Em outras palavras,
 o this refere-se ao objeto à esquerda do . quando referenciado (pessoa2.dizer - portanto pessoa2) */

// Mas ao usar o bind
const pessoa3 = {
    nome: 'Carlos',
    falando: pessoa.falar.bind(pessoa)// nesse caso, estou dizendo que pessoa é a owner dessa função, logo
}
pessoa3.falando() // output será: Dharuan




 // Example 2:
 function x () {
    this.age = 0  // we're creating an attribute in this function using 'this' so we can later access it when we 'instance' it

    setInterval(function() {  // setinterval: this sets another function after a determined interval is run (we set this interval) 
        this.age++
        console.log(this.age)
    }, 1000)  // so we set a fc, an then the interval (1000 in this case which representes miliseconds). So every 1000ms, it will run the fc again
 }
 // we are not invoking the fc created above - in no moment, so far, have we called the fc (by setting the () - cuz in this cases the par are blank)
 
 // new x; // gives a NaN because the age is set to the interval/function, not to the object and we don't have it defined within this scope

 // to fix this:
 
 function y () {
    this.age = 0
    setInterval(function() {
        this.age++
        console.log(this.age)
    }.bind(this), 1000)
 } 

 // new y;

 // Another way of doing this as well would be to create a const for this: 

 function z () {
    this.age = 0
    const self = this           // in this case, because the const is defined within the obj, it will always point to the obj's this so we can use it instead
    setInterval(function() {
        self.age++
        console.log(self.age)
    }/*.bind(this)*/, 1000)
 }

 new z;
