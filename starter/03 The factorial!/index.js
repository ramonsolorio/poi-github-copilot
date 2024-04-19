//Create a function that calculates the factorial of a given positive integer with node
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

//capture input from command line
const n = process.argv[2];

// print the result to the console in the format "The factorial of n is result"
console.log(`The factorial of ${n} is ${factorial(n)}`);
