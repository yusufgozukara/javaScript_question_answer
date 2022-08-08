// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  let repeatString = '';
  while (n > 0){
    repeatString +=s;
    n--;
  }
  return repeatString;
}


// console.log(repeatStr(5,'ali'))

//other populer solution:

//1
// function repeatStr (n, s) {
//     return s.repeat(n);
//   }

//2
// function repeatStr (n, s) {
//     var str="";
//     for(var i=0; i < n; i++)
//       str+=s;
//       return str;
//     }

//3
// const repeatStr = (n,s) => s.repeat(n) ;

//4
// function repeatStr(n, str)
// {
//   return str.repeat(n);
// }

