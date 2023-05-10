// These are different ways to execute fc's in JS

// First, let's look at the "traditional" way again: 

function getPrice(tax = 0, coin = '€') {
    return `${coin} ${this.price * (1 - this.disc) * (1 + tax)}`
};

const product = {
    name: 'Mac',
    price: 4589,
    disc: 0.15,
    getPrice
};

console.log(product); // just trying it out here

// Different ways to call a fc: 
//1) Calling directly:
console.log(getPrice()); // gives NaN because we haven't defined price and disc in the global scope

// so here we can define the before mentioned vars in the global scope:
globalThis.price = 20
globalThis.disc = 0.1
console.log(getPrice()); // and know the fc works cuz we have the params attributed/defined in the needed scope

// 2) Through an object (we can call the getPrice fc from an object as shown below). It will use the object's attributes/params:
console.log(product.getPrice()); // and it will access the price, disc params defined for this object



/* So far we've still been using the "normal" way of calling the fc tho. We can simplifly or eliminate the need to define the vars/params
in the global scope by using the call/apply fc's: */ 

const car = { price: 49990, disc: 0.20 };

// 3) Call/ Apply: 
console.log(getPrice.call(car)); // the result using call and apply here is the same. 
console.log(getPrice.apply(car));

// So what's the difference between them? The way we insert/call the params when using each of them:

console.log(getPrice.call(car, 0.17, '$'));  // here we insert them as "normal" variables, divided by ','
console.log(getPrice.apply(car, [0.17, '$']));  // here we insert them as an array, so inside []
console.log(getPrice.apply(global, [0.17, '$'])); // just to have another example with dif values
