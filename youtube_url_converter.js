let a1 = "https://www.youtube.com/watch?v=VYCOg-yglNM";

let a2 = a1.slice(0,8) + a1.slice (12,17) + ".be/" + a1.slice(32); 

console.log(a2);

//second solution:

let a3 = "https://www.youtube.com/watch?v=_Pv5CLDA7wg";

let a4 = a3.slice(0,8) + a3.slice (12,17) + ".be/" + a3.slice(32); 

console.log(a4);

//third solution:

let a5 = a1.slice(0, (a1.indexOf("w"))) + a1.slice(a1.indexOf("y"), (a1.indexOf("b"))) + ".be/" + a1.slice(a1.indexOf("=")+1)

console.log(a5);