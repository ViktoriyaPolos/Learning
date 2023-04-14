const printResult = function(grade) {
    if(grade >=7) {
        console.log('Pass')
    } else {
        console.log('Fail') 
    }
};
printResult(8);
printResult(4);
printResult('Yooo'); // in teory this should have been a error but JS is of weak typing, this is to exemplify that

// here, in both the if and else, we could have removed the {} but it makes the code more organized the leave it 

// In summary, so an if alone does x if true and nothing if false. If we add an else, it will perfom y if false.