/*
Max
Given an array of numbers, create a function to return the maximum 
*/

function max(numbers){
    return Math.max.apply(Math, numbers)

}

const numbersArray1 = [1,3,5,9];
const numbersArray2 = [7,8,5,7,3,6];

console.log("Maximum number in first array is " + max(numbersArray1));
console.log("Maximum number in second array is " + max(numbersArray2));