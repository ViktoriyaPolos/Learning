/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará 
o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros 
compostos. */

simpleInterest = (initialCap, interestRate, years) => {
    const finalAmount = initialCap + (initialCap * interestRate * years)
    return finalAmount
};

console.log(simpleInterest(100,0.05,10));

compoundedInterest = (initialCap, interestRate, years) => {
    const finalAmount = initialCap * ((1 + interestRate) ** years)
    return finalAmount
};

console.log(compoundedInterest(100,0.05,10));

// Checking something.. 
console.log(typeof finalAmount); // the scope of this var is local to the fc, that's why I could define it twice, differently

// Their solution: 
function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));


// So I can improve mine by doing everything in one line: 
simpleInterest2 = (initialCap, interestRate, years) => {
    return finalAmount = initialCap + (initialCap * interestRate * years)
    
};

console.log(simpleInterest2(100,0.05,10));

// And even remove the = : 
simpleInterest3 = (initialCap, interestRate, years) => {
    return initialCap + (initialCap * interestRate * years)
    
};

console.log(simpleInterest3(100,0.05,10));

compoundedInterest3 = (initialCap, interestRate, years) => {
    return initialCap * ((1 + interestRate) ** years)
};

console.log(compoundedInterest3(100,0.05,10));
