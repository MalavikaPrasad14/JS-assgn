// QUES 1

console.log("Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not.");

let A = [10, 13, 2, 25, 4, 7];
let num = A[0];
console.log(isPrime(num));

function isPrime(num) {
    if (num <= 1) {
        console.log(n + " is not a prime number");
    }
    if (num === 2) {
        console.log(n + " is a prime number");
    }
    if (num % 2 === 0) {
        console.log(n + " is not a prime number");
    }

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false; // If divisible by any number other than 1 and itself, not prime
    }

    return true; // If no divisors found, it's prime
}

// QUES 2
console.log(" Write a JavaScript program to find the most frequent item of an array");

function mostFrequentItem(A) {
    if (A.length === 0) return null;

    let frequency = {};
    let mostFrequent = A[0];
    let maxCount = 1;

    for (let item of A) {
        frequency[item] = (frequency[item] || 0) + 1;

        if (frequency[item] > maxCount) {
            mostFrequent = item;
            maxCount = frequency[item];
        }
    }

    return mostFrequent;
}

let Arr = [3, 7, 3, 2, 9, 3, 7, 7, 7];
let ans = mostFrequentItem(Arr);
console.log("The most frequent item is: " + ans);


//QUES 3


console.log("Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.");
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + "is Even number");
    } else {
        console.log(i + "is Odd number");
    }
}



// QUES 4
console.log("Write a JavaScript program to find the sum of squares of the elements of an array.");

function sumOfSqr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i] * array[i];
    }
    return sum;
}

const array = [2, 3, 4];
const result = sumOfSqr(array);
console.log("Sum of squares of the array elements = " + result);




