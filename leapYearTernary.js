let year = +prompt("Please enter a year value.");

(year % 100 !== 0 && year % 4 == 0) || year % 400 == 0 ? alert(`${year} is a leap year`) : alert(`${year} is not a leap year.`);