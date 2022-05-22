let y = +prompt("Enter a number please");
counter = 0;

for(let i = 2; i < y ; i++){;
    if(y % i == 0){
        counter++;
    }}

if (counter == 0){
    console.log(`${y} is a prime number`);
} else {
    console.log(`${y} is not a prime number`);
}
