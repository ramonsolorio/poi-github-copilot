//Write a function that returns the next palindrome number in the odometer based on a given mileage.

function nextPalindrome(mileage) {
    mileage++;
    while (true) {
        if (isPalindrome(mileage)) {
            return mileage;
        }
        mileage++;
    }
}

function isPalindrome(num) {
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}


//capture input from command line
const mileage = process.argv[2];

// print the result to the console in the format "The next palindrome is: result"
console.log(`The next palindrome is: ${nextPalindrome(mileage)}`);

// Usage:
//node .\index.js 100    