/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão 
desses valores */

function operations(a, b) {
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
};

operations(10,2);

// Their suggestion is simplier so put this in your brain: 

function operations2(a, b) {
    console.log(a + b, a - b, a * b, a / b)
};

operations2(10,2);

// The result is still the same tho so all good :) 

// Just for the sake of it, their resolution: 
function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)