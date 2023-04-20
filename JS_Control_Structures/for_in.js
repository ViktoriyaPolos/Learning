const grades = [6.7, 7.4, 9.8, 8.1, 7.7]

for(i in grades) {
    console.log(i, grades[i])
};

const person = {
    name: 'Ana',
    lastname: 'Silva', 
    age: 29,
    weight: 63,
};

for(x in person) {
    console.log(`${x} = ${person[x]}`)
}

/* there's better ways of doing this than using the for/in function that we'll see more ahead.
The for/in loop is used to iterate over the properties of an object. It allows you to loop through all the enumerable properties of an object, including its 
inherited properties. */
