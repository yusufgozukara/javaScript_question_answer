// Q-2 : 
// Press the values ​​above 90 in the price range to the console one by one.

const prices = [100, 250, 50, 89];

let b80 = prices.filter((a) => a > 90);
let b90 = b80.forEach((f) => console.log(f));
console.log(b90);