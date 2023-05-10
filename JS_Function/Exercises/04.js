/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão 
destes dois valores */

function divisionRest (a, b) {
    let division = a / b
    let rest = a % b
    console.log('Result: ' + division + ' Rest: ' + rest)
};

divisionRest(4,2);
divisionRest(10,2);
divisionRest(10,7);
divisionRest(11,4);

// Their solution: 
console.log('-----//-----');
function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)

// I should've used the Math.floor maybe. Also, their way is better because they skiped the defining vars (let in this case) part

// Going again: 
console.log('-----//-----')
function div (dividend, divisor) {
    console.log('Result: ' + (dividend/divisor) + ' Rest: ' + (dividend%divisor))
};
div(4,2);
div(10,2);
div(10,7);
div(11,4);

// Not sure why they used the Math.floor tho, so this is as much as I'll update my way