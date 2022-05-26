let year = +prompt("Please enter a year value.");

if((year % 100 !== 0 || year % 4 == 0) && year % 400 == 0 ){
    alert(`${year} is a leap year`);
} else{
    alert(`${year} is not a leap year.`);
}