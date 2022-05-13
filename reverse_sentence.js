console.log("hello");


let sentence = "Bu yazıyı komple ters çevirmek istiyorum.";

let sentmod = sentence.split("").reverse().join("").split(" ").reverse().join(" ");

console.log(sentmod);