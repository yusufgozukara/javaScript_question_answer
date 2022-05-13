
let sentence = "Bu yazıyı komple ters çevirmek istiyorum.";

let sentmod = sentence.split("").reverse().join("").split(" ").reverse().join(" ");

console.log(sentmod);



//2.solution

let a = [];
let b = sentence.split(" ")

for(let i = 0; i < b.length ; i++){
    let c = b[i].split("").reverse().join("")
    a = a + " " + c;  
}
console.log(a.trim());

//3.solution

let e = sentence.split(" ");
// console.log(e);

function reverse(word){
    let d = [];
    word.forEach(element => {
        d.push(element.split("").reverse().join("")) 
    }  
    );
    return d.join(" ");
}
console.log(reverse(e));

//extra example same solution

let sen = "tersine çevir gitsin";

let x = sen.split(" ");

function rev(word){
    let y = [];
    word.forEach(element => {
        y.push(element.split("").reverse().join(""))
        });
    return y.join(" ");
}
console.log(rev(x));


