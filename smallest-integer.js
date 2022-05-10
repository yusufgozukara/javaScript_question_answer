// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

let number = [34, 15, 88, 2];

function myarray (arr) {
    return Math.min.apply(null, arr)
}
console.log(myarray(number));