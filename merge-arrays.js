// Merge two sorted arrays into one

// [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


let ar1 = [1, 3, 5, 7, 9];

let ar2 = [10, 8, 6, 4, 2];

// let ar3 = ar1.concat(ar2).sort(function(a,b){return a-b});
// console.log(ar3);
console.log(ar1.concat(ar2).sort(function(a,b){return a-b}));
console.log(ar1.concat(ar2));

function sirala(ar1, ar2){
    return ar1.concat(ar2).sort(function(a,b){return a-b});
}
console.log(sirala(ar1,ar2));