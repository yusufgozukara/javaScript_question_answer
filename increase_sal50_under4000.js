// Q-4 In the salary array, we want to increase the salaries lower than 4000 by 50% and we want to keep it as a different array.

const salary = [3000, 5000, 4000, 6000, 6500];

let salary_v2 = salary.filter((v) => v < 4000).map((y) => y * 1.5);
console.log(salary_v2);