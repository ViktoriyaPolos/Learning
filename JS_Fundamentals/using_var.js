
{
    {
        {
            { 
                var will_it = 'Print?'
                console.log(will_it);
            }
        }
    }
};
console.log(will_it);

function test() {
    var local = 123
    console.log(local)
};
test();
// console.log(local); outside of the function scope, the variable is not attributed so we will not be able to see it outside of the function scope


// Other Var examples
var num = 1;
{
    var num = 2
    console.log('inside',num)
};
console.log('outside',num) // because even if in a bloc, the scope is still general, the value of the variable will change, that's why we have 2 in noth cases