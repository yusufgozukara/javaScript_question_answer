// Q-1 : Let's raise 10% for each price in the series of prices. NOTE: FOREACH should be used and the original sequence should be changed.

const prices = [100, 250, 50, 89];

let r1 = prices.forEach((v) => console.log((v * 1.1).toFixed()));

console.log(r1);