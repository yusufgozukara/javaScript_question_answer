const salary = [3000, 5000, 4000, 6000, 6500];

let salary_v2 = salary.filter((a) => a > 4000).map((b) => b * 1.25);

console.log(salary_v2);