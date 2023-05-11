/* Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando no console: 
console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa importante de observar, é o fato que o ponto é utilizado no 
lugar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. 
Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto). */

console.log(0.1 + 0.2); // checks out

function decimalNumber(x) {
    const valueInEur = `€ ${x.toFixed(2).replace('.',',')}` /* the .toString is done 'automatically when applying the .toFixed
                                                                but for the sake of code clarity, maybe should be best to include it*/ 
    return valueInEur
};

console.log(decimalNumber(0.1 + 0.2));

console.log(typeof valueInEur);


// Their solution (that I pretty much copied):
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)

/* Takeaways are: 
1) can 'stack' fcs (.toFixed.toString, etc)
2) textscript is better as it gives the options for the fc's - meaning it will list the fc's we can apply to x, then to x as a 
fixed string (I say string here cuz when we apply the fixed, it converts the number to a string right away - which is also the 
3) don't need to convert into a string in this case. Unless for the clarity of the code. Check this with Ruben
*/




