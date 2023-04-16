// I'm hoping we'll explore this part later on cuz what? In the comments they said we would tho..

Number.prototype.between = function (start, end) {
    return this >= start && this <= end
};

const printResult = function (grade) {
    if (grade.between (9,10)) {
        console.log('Honors')
    } else if (grade.between(7, 8.99)) {
        console.log('Approved')
    } else if (grade.between(4, 6.99)) {
        console.log('Recover')
    } else if (grade.between(0, 3.99)) {
        console.log('Fail')
    } else {
        console.log('Grade not valid') // this last else is optional and we can have as make of these as we want (else if..)
    }
    console.log('End')
};
printResult(10);
printResult(8.9);
printResult(6.55);
printResult(2.3);
printResult(-1);
printResult(11);


// link on the this part of the function to refresh: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this 