// This is a summary of way's to declare functions.

// 1) Function Declaration (the normal/traditional way)
console.log(sum1(3, 4));

function sum1 (x, y) {
    return x + y
};


// 2) Function Expression (another way to do this is to declare a anomynous fc and 'link' it to a const/var)
// console.log(sum2(3, 4)); // error, because it's not defined

const sum2 = function (x, y) {
    return x + y
};


// 3) Named Function Expression
// console.log(sum3(3, 4)); // error, because it's not defined

const sum3 = function sum3 (x, y) { // only time this is helpeful is when degugging code, the name of the fc will appear. But this is not that used
    return x + y
};


/* There is an advancantage on doing it thr 1) way which is that we can use the fc even before defining it. This happens because JS first loads the fc's and ready to use and
only after that it executes the code. That's why the console.log(sum1(3, 4)) had the expected return, even tho this code is written before the fc itself. If we try to do this
with a const/var, it won't work and will end up in an error. Same with 3). */