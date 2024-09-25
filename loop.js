// fizz buzz

let i = 1; 
while (i <= 100) { 
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz"); 
    } else if (i % 3 === 0) {
        console.log("Fizz"); 
    } else if (i % 5 === 0) {
        console.log("Buzz"); 
    } else {
        console.log(i); 
    }
    i++; 
}


//prime number
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i < num; i++) { 
        if (num % i === 0) return false; 
    }
    return true; 
}
let n = 4; 
n++; 
while (!isPrime(n)) { 
    n++;
}
console.log(n); 
//csv string
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const rows = csvData.split('\n');
let index = 0;
while (index < rows.length) {
    console.log(rows[index].split(',').join('-'));
    index++;
}
