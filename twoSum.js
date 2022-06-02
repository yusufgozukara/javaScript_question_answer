
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// let a = [15,10,3,7];

//Solution-1
function checkSum(arr, k){
    for (let i in arr){
        // console.log(arr);
        const temp = arr.slice(+i+1)
        for (let j in temp){
            if (arr[i]+ temp[j] === k ) return true;
        }
    }
    return false
}


//Solution-2
function checkSum2(arr, k){
    for(let i in arr){
        if (arr.includes(k-arr[i])) return true;
    }
    return false;
}

console.log(checkSum2([3,7],15)); 