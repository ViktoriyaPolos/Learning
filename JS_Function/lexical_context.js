// Here we're declaring a constant called value with the attribute 'Global'
const value = 'Global'

// Here we're declaring a fc in this particular module/archieve in JS. It's not in a object, or another fc, but in this archieve. 
function myFunction() { 
   // const value = 'Local' // if we do this, the return of myFunction would be 'Local', as it's the closest in terms of scope, closer than the defined 'value' const.  
    console.log(value)
};
myFunction(); // returns 'Global' as value is defined in the same scope as the fc

function exec() {
    const value = 'Local'
    myFunction() 
};
exec(); 

/* here, it doesn't print Local because the fc myFunction was defined in a dif. lexical context than where the new const value is being defined. So it will assume the value 
const that was defined in the same scope as the fc, thus the result of Global. 
This relates to Closures that we'll see next.*/ 

// This relates a lot to closures, there's a separate lecture on that.