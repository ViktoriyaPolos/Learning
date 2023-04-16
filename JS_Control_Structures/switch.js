const printResult = function(grade) {
    switch (Math.floor(grade)) {
        case 10:
        case 9:
            console.log('Honors')
    }
};
printResult(10.5); // only this one and the 9.7 are being printed into the console (cuz using the Math.floor)
printResult(4);
printResult(8.9);
printResult(9.7); 
printResult(2);

// links on this: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch & https://www.devmedia.com.br/javascript-switch/39761 

/* Using the break
The idea of it is that unlike other structures, it will not "stop after" it fits in one of the conditions and will run through all the cases if we don't use the break. So
in a if, if the condition is satisfied, it will "exit" that "prompt", here it will run through all of them unless we have the break. This is very uncommon for code to 
behave this way but switch in JS is still a bit limited - also because we can't put arrays for example, need to be actual numbers
 */
console.log('-----Info on the break function-----')

const printResult1 = function(grade) {
    switch (Math.floor(grade)) {
        case 10:
        case 9:
            console.log('Honors')
            break // if we comment this break, it will floor the 10 and 9 to also be 'approved', not only 'honors'
        case 8: case 7:
            console.log('Approved')
            break
        case 6: case 5: case 4:
            console.log('Recover') 
            break
        case 3: case 2: case 1: case 0:
            console.log('Fail') 
            break
        default: // can be at the end and if not, need to break after
            console.log('Invalid grade')
            break
        case -3:
            console.log('Just testing')
    }
};
printResult1(10.5); // if we take away all the breaks, this command would run through all the consoles defined
printResult1(4);
printResult1(8.9);
printResult1(9.7); 
printResult1(7);
printResult1(2);
printResult1('Something');
printResult1(11);
printResult1(-3);