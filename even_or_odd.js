array = [3,2,1,0,1,2,3,4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
    odd_or_even = sum % 2 ? "odd" : "even"
}
    
console.log(odd_or_even);


