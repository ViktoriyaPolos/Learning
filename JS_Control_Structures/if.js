function onlyGoodNews(grade) {
    if(grade >= 7) {                     // in this example, and in many other cases, JS operates based on true/false
        console.log('Pass with ' + grade)
    };
};
onlyGoodNews(8.1);
onlyGoodNews(6.1); // this one wasn0t printed as it doesn't satisfy the conditional

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

// this also shows that ut doesn't need to be of boolean type, JS will "convert" to boolean ~

// fhvyrdacvbb