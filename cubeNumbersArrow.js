
// Q : Write an arrow function that asks for a number and prints its cube.

//Solution with a standard function

let takecube = +prompt("Please enter a number");
let cube;

function cuber(){
        return cube = takecube * takecube * takecube
    }
    
    console.log(cuber());
    

//Solution with a arrow function

let takecube = +prompt("Please enter a number");
let cubest = () => takecube * takecube * takecube

console.log(cubest());