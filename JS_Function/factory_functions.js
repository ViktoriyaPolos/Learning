/* There are functions that return objects. It's called a factory cuz it fabricates new instances of objects. This happens without needing
to recur to the 'new' operator'.*/

// The idea is to simplify the process of doing this: 

const prod1 = {
    name: 'a',
    price: 50
};

const prod2 = {
    name: 'b',
    price: 150
};

// If we wanted to do 50 of these prod variations, this is not the best way of doing it

// Simple factory
function createPerson() {
    return {                // we're using the literal anotation of an object here in this fc. In this case the params, are fixed for the object
        name: 'Ana',
        lastname: 'Silva'
    };
}

console.log(createPerson());



// To actually created dif products from a fc (FYI, this was my attempt):

function product(name, price) {
    return {       
        name: name,
        price: price
    };
}

console.log(product('pen', 10));
console.log(product('pc', 1000));

// Apparently, we don't need to do the name: name, etc, we can just do this: 
function product1(name, price) {
    return {       
        name,
        price
    };
}

console.log(product1('pen', 10)); // it will assume the "variables" and link them to the params, in order. 

// Another thing we could have done is to add either a default or just a new var, not as a param tho (this is the full example from the class):
function productFinal(name, price) {
    return {       
        name,
        price, 
        discount: 0.1           // we could have this here, or as a param as a default and that would look like: discount = 0.1
    };
}

console.log(productFinal('pen', 10)); 

