//Q-3 Increase 10% to values ​​less than 110 in the price array and print these values ​​one by one to the console.

const prices = [100, 250, 50, 89];

let v1 = prices.filter((a) => a < 110).forEach((b) => console.log(b * 1.1));

console.log(v1);