//Write a function that checks if a given string is a palindrome (reads the same backward as forward). The function should return true if the string is a palindrome and false if it is not. The function should be named isPalindrome and should take a single string as a parameter. The function should be exported as the default export of the module.
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

//capture input from command line
const str = process.argv[2];

// print the result to the console in the format "The string is a palindrome: true/false"
console.log(`The string is a palindrome: ${isPalindrome(str)}`);