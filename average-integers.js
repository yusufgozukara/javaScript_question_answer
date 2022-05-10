// Return the average of the given array rounded down to its nearest integer.

let notes = [70,60,40,65,90,100]

let sum = notes.reduce(function(a,b){
    return a+b;
});

console.log(sum);

let avg = sum / notes.length

console.log(avg.toFixed(1));

