var num = 1;
{
    let num = 2
    console.log('inside',num)
};
console.log('outside',num)

// note that here it goes to the smaller scope first (bloc) and then reads the external code

