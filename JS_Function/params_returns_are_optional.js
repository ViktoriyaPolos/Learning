 function area(width, height) {
    const area = width * height
    if (area > 20) {
        console.log(`Value above the allowance: ${area}m2.`)
    } else {
        return area
    };
 };
 console.log(area(2,2));
 console.log(area(2)); // we're doing 2 * () so it's not a number but it still has a return. What we're doing is exemplifying the optionallity of the paramenters
 console.log(area());
 console.log(area(2, 3, 17, 22, 44)); // once again, parameters are optional. Here it will ignore all the ones after the 2nd and will still run
 console.log(area(5,5)); 
 /* the indefined after the string happens because a funtion always returns something, and here it's not returning anyhting but rather just 
 printing the string into the console. So, after it prints, it still needs to return something which in this case is an undefined. 
 
 To fix this, we could have done return `Value above the allowance: ${area}m2.` instead of the console - see example area1. */

 area(2,2); // not printing anything because we don't have the console.log in the else statement
 area(5,5);

 function area1(width, height) {
    const area1 = width * height
    if (area1 > 20) {
        return `Value above the allowance: ${area1}m2.`
    } else {
        return area1
    };
 };
 console.log(area1(5,5)); // when we run this, because we have a return on the funtion, we don't get the "additional" undefined as we did previously