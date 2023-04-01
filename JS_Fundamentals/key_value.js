// Keys & Values Pairings

// Example 1:
const greeting = 'Hello'; // lexical context (physical place where the variable is defined in the code)=> in this context, it's at the level of the arquive we're working
console.log(greeting);

// here the key is greeting and the value is Hello. If we try to define it again: 
// const greeting = 'Hi'; will give an error, it's already defined in this lexical context
 
// Example 2:
function exec() {
    const greeting = 'Hey there' // this is another lexical context, within a function
    return greeting 
};
console.log(exec());

// even tho we defined the same key as in ex.1, because here it's in a function, the scope/lexical context is diferent

// Example 3:
const Client = {
    name: 'Paul',
    age: 32, 
    weight: 90,
    address: {
        Street: 'Wathever nº 5',
        City: 'Very Cool City'
    }
};
console.log(Client);
