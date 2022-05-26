// Q : Write an arrow function that asks for 2 numbers and prints the exponent.

//Solution with standard function:


let expo1 = +prompt("Enter a base number please");
let expo2 = +prompt("Enter a exponent number please");

// let result;

function takeexp(){
    return result = expo1 ** expo2
}
console.log(takeexp());



//Solution with arrow function:

let expo1 = +prompt("Enter a base number please");
let expo2 = +prompt("Enter a exponent number please");

let exparrow = () => expo1 ** expo2;

console.log(exparrow());