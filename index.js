function isPalindrome(word) {
  // Write your algorithm here
 const palindrome = word.split('').reverse().join('')
 return palindrome === word
}

/* 
  Add your pseudocode here
use all the method in one line of code, under one variable
instead of if statement, use === to return true or false
*/

/*
  Add written explanation of your solution here
    to optimize code, join all methods at once, remove the redundant declaration of variable to one
  return that constant to see if matches with the word

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
