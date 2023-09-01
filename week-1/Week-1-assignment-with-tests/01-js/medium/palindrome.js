/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str.toLowerCase();
  const len = str.length;
  for (var i = 0, j = len - 1; j >= 0 && i < len; i++, j--) {
    if (!isLetter(str[i])) {
      i++;
    }
    if (!isLetter(str[j])) {
      j--;
    }
    if (str[i] !== str[j]) return false;
  }

  return true;
}

module.exports = isPalindrome;
