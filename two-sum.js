// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


//  @param {number[]} nums
//  @param {number} target
//  @return {number[]}

let nums = [1,2]


let target = 3

let sonuc = []

sonuc.push(1); 
console.log(sonuc);

 
for(let i = 0; i < nums.length; i++){
    if (nums[i] >= target ) {
        // console.log(sonuc);
        break
    } else {
        console.log(sonuc);
    // sonuc.unshift(1);
    // sonuc += nums[i]

    }
}

