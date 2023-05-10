// A builder fc works as a class in other languages such as Java for example

function car( maxSpeed = 200, delta = 5) { // '= x' is to set a default value for the params

    // private attribute (meaning it belongs only to the scope of the fc, we can't access it outside of it)
    let currentSpeed = 0


    /* here, we'll create 2 functions and make them public by using the operator 'this.'. The params of these fc's will be the params defined 
    for the fc car (maxSpeed and delta) and the var we created in the fc (currentSpeed).*/
    
     // public method: 
    this.acelerate = function () {
        if (currentSpeed + delta <= maxSpeed) {
            currentSpeed += delta
        } else {
            currentSpeed = maxSpeed
        }
    }

    // public method: 
    this.getCurrentSpeed = function () { /* if we switched this. for let or const (or even var), it'd become private and we could not access it 
                                            outside of the fc*/
        return currentSpeed
    }
};

const uno = new car // we're instancing the fc throught the operator 'new'.  The fc is like a mold and uno and ferrari are instances of that mold (lines 37 & 38)
uno.acelerate(); // not an error because acelarete is defined outside of the fc scope
console.log(uno.acelerate()); // undefined cuz this fc doesn't return anything (see above the code of the fc.)
console.log(uno.getCurrentSpeed());

const ferrari = new car(350, 20)
ferrari.acelerate()
ferrari.acelerate() // 20 + 20
ferrari.acelerate() // 20 + 20 + 20
console.log(ferrari.getCurrentSpeed());

console.log(typeof car);
console.log(typeof ferrari);