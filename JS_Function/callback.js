// Introducing the callback:
const manufact = ['Mercedes', 'Audi', 'BMW'] // defining an array and it's components

function print(name, index) {               // setting a fc called print with 2 params (name and index)
    console.log(`${index + 1}. ${name}`)    // fc action to return the index + 1 and the name (value of each index in the array)
};

manufact.forEach(print); /* For each if a function/operator in JS (we'll see it in more detail ahead) for arrays. What we're saying here is: call the fc print for each
                            array element. So, per it's nature, it will need to recieve as a param a funtion to callback.
                            Here we have a callback of the function manufact for every time an event occurs (in this case that event is the selection of a new 
                            array element) */
manufact.forEach(function(a) {  // here we only have 1 param which represents each element in the array, that's why the result is every element name 
    console.log(a)
});
// can have the above with an arrow function as well: 
manufact.forEach((a) => console.log(a));




// Difference with and without the callback: 
const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Goal: extract grades > 7
// a. without the callback: 
let lowGrades = []
for (let i in grades) {
    if (grades[i] < 7) {
        lowGrades.push(grades[i])
    }
}
console.log(lowGrades);

// b. with callback:
lowGrades2 = grades.filter(function (grade) {
    return grade < 7
}) 
console.log(lowGrades2);

/* filter is a callback operator that will operate on a given critea based on true/false. If true - element will be added, if false, it won't. 
Basically, we're creating a new array, that will be filled using the callback fc filter on the grades array. 
Note that this doesn't alter the initial array (grades). */ 

// this way is way simpler and we can simplify even more by doing it with an arrow function: 
lowGrades3 = grades.filter( grade => grade < 7) 
console.log(lowGrades3);

// a way lo have the code be even more elegant would be to have the fc as a conts before hand: 
const gradeBelow7 = grade => grade < 7
lowGrades4 = grades.filter(gradeBelow7) 
console.log(lowGrades4);


/* The main goal here is to show how much more effective and elegant the code is if we use the callback fc instead of the for/in and if operators (also goes through the 
elements of an array in a loop) */


// Example of a callback in browser (doing here to copy into the browser console):
 document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('The event occured! :o')
 }
 
 /*getElementsByTagName: fc that allows to access elements by a tag (can return several elements). 
 The tag we selected was 'body'. The response of this fc is an array, so we then need to specify the indexed elemenent we want [0]. 
 90% of the time, the body only has 1 index so it's always the 0 one.
 - onceclick is a callback fc that will execute everytime we click the body (in this case) of the webpage */  