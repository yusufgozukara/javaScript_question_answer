
let sayi = prompt('give me a number');

if(sayi > 10){
    
    let sayi2 = sayi.split('').map(x => +x);
    let sayi3 = sayi2.reduce(myFunction);
    
    function myFunction(total, num){
        return total + num; 
    }
    console.log(sayi3);
} else{
    console.log(sayi);
}