//Q-6 Solve the sum of the salaries both with forEach and with the reduce method.

const salary = [3000, 5000, 4000, 6000, 6500];
let sum = 0;
let totalSalary = salary.forEach((v) => console.log(sum += v));

console.log(sum);

const salary2 = [3000, 5000, 4000, 6000, 6500];

let result = salary2.reduce(myf);
    function myf(total, salary){
        return total + salary
    }

console.log(result);