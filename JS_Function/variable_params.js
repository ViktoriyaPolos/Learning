function sum() {           // we are not defining/setting any parameters right away here - that's why we end up using the arguments statement
    let sum = 0            // we do this because otherwise, sum would be undefined and we couldn't operate with it
    for (i in arguments) {
        sum += arguments[i]
    }
    return sum
};
console.log(sum());
console.log(sum(1));
console.log(sum(1.1, 2.2, 3.3));
console.log(sum(1.1, 2.2, 'Test')); // it will "add" everything and if we have strings, it will concatenate them
console.log(sum('a', 'b', 'c')); // here we get 0 at the start because += adds the stuff to the right to the stuff to the left and sum has the "value" of 0


// see written notes with a breakdown of this, also there's a more step by step explanation below (from another student's comment)



// To understand this better: 
console.log('----- Understanding arguments -----');

// here it's a simple 2 parameter function: 
function soma(a, b) {
    return a + b
}
console.log( soma(1, 2) )       // imprime: 3
console.log( soma(4, 5, 6) )    // ignora os excedentes, imprime: 9

// then we add another parameter. If it's not defined, we will get NaN as a result: 
function soma1(a, b, terceiroParametro) {
    return a + b + terceiroParametro
}
console.log( soma1(1, 2) )       // imprime: NaN    <--- problema!!
console.log( soma1(4, 5, 6) )    // imprime: 15

// to avoid this, this is what we can do. But then we'd need to add every single other option with an if by this logic...  
function soma3(a, b, terceiroParametro) {
    let total = 0
    total = a + b
    if (terceiroParametro) {
        total = total + terceiroParametro
    }
    return total;
}
console.log( soma3(1, 2) )       // imprime:3
console.log( soma3(4, 5, 6) )    // imprime: 15

// so, there's a statemnt - ARGUMENTS - that solves this problem: 
function soma4() {
    let total = 0            // criação de VARIÁVEL LOCAL com valor 0

    // abaixo, ITERA em todos os ARGUMENTOS da chamada da função!
    for (indiceDoArgumentoPassadoPeloUsuario in arguments) {
        total += arguments[indiceDoArgumentoPassadoPeloUsuario]
    }
 
    return total
} 
console.log( soma4(1, 2) )       // imprime:3
console.log( soma4(4, 5, 6) )    // imprime: 15
