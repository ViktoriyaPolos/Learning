// Example nº1
console.log('-----Example nº1------');

function onlyGoodNews(grade) {
    if(grade >= 7) {                     // in this example, and in many other cases, JS operates based on true/false
        console.log('Pass with ' + grade)
    };
};
onlyGoodNews(8.1);
onlyGoodNews(6.1); // this one wasn't printed as it doesn't satisfy the conditional

function ifTrueISpeak(value) {
    if(value) {                         // here as well, it will convert the value to true/false to perform the operation
        console.log('Its true... ' + value)
    };
};
// here only the ones considered trues will be printed onto the console
ifTrueISpeak();
ifTrueISpeak(null);
ifTrueISpeak(undefined);
ifTrueISpeak(NaN);
ifTrueISpeak('');
ifTrueISpeak(0);
ifTrueISpeak(-1);
ifTrueISpeak(' ');
ifTrueISpeak('?');
ifTrueISpeak([]);
ifTrueISpeak([1,2]);
ifTrueISpeak({});

// this also shows that the data type doesn't need to be of boolean type, JS will "convert" it to boolean






// Example nº2
console.log('-----Example nº2------');

function test1(num) {
    if(num > 7)
        console.log(num)
        console.log('Final') // we could remove one indentation to make this clearer
};
test1(6); // still printed the second line as it's not part of the if statement/condition
test1(8);

/* in this example we didn't use the {} for the if condition and what happends is that JS will assume them automatically and 'link' the next line of code to the if
statment. This is not ideal tho, as the code is not as clear as possible so we should do like we did in the first example. */





// Example nº3
console.log('-----Example nº3------');

function test2(num) {
    if(num > 7); {
        console.log(num)
    };
};
test2(6);
test2(8);

/* in this case we print both values into the console because of the ; after the if! What this makes is associate the if statament to a 'blank condition', it's like 
having if(num > 7) {}; and then we have the console with the num which is not tied to the if statement anymore. If we remove the ; after the if, we'll only have 8 printed, 
not the 6. */ 