/*
Sum
If we sum all even numbers between 50 and 100 what is the result?
Build a function, that calculates the sum of all even numbers between a start number and end number
*/
let sum = 0;
for (let i = 50; i <= 100; i++){
    if (i % 2 === 0){
        sum += i;   
     }
}

console.log (sum);