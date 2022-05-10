// Write a function to split a string and convert it into an array of words.

// * "Robin Singh" ==> ["Robin", "Singh"]


let a = "a b c d";

console.log(a.split(" "));


// let text = stringToArray("Robin Singh");

function stringToArray(abc){

    return abc.split(" ");
}
stringToArray("Robin Singh");