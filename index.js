function isPalindrome(word) {
    // iterate from the beginning of the string to the middle of the string
    for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
      const endIndex = word.length - 1 - startIndex; // corresponding index from the end
      
      if (word[startIndex] !== word[endIndex]) {
        return false;  // return false if a mismatch is found
      }
    }
  
    return true; // return true if no mismatches are found
  }
  


/* 
  Add your pseudocode here
  function isPalindrome(word):
    for i from 0 to length of word / 2 - 1:
        set j to length of word - 1 - i  // Calculate the index from the end
        if word[i] is not equal to word[j]:
            return false  // If characters do not match, it's not a palindrome
    return true  // If all characters match, it's a palindrome

*/

/*
  Add written explanation of your solution here
  The pseudocode is included as a comment at the top of the code. It outlines the basic logic of the algorithm.
  The function isPalindrome follows the pseudocode to check whether the given string is a palindrome.

  
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
