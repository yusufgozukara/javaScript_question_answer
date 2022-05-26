// Q : Write an arrow function that asks for a number and prints its square.

//Solution with standard function:


let square = +prompt("Enter a number please");
let new;

function squ(){
    return new = square * square
}
console.log(squ());

//Solution with arrow function:

let square = +prompt("Enter a number please");

let letsquare = () => square * square;

console.log(letsquare());