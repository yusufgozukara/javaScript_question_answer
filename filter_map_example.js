let users = [
    { firstName: "Susan", lastName: "Steward", age: 14, hobby: "Singing" },
    { firstName: "Daniel", lastName: "Longbottom", age: 16, hobby: "Football" },
    { firstName: "Jacob", lastName: "Black", age: 15, hobby: "Singing" }
  ];


let fullName = users.map((user) =>    user.firstName + ' ' + user.lastName);
console.log(fullName);

let upper15 = users.filter((x) => x.age >= 15).map((y) => y.firstName + " " + y.age);
console.log(upper15);