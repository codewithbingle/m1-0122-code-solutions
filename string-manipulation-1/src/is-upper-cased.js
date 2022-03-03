/* exported isUpperCased */

// 4 isUpperCased(word)

// Before Pseudo Code

// define a function named isUpperCased, which has a single parameter 'word'
// declare and if statement to return true if all character are capitalized
// else statement to return false

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

// After Pseudo Code
// define a function named isUpperCased, which has a single parameter 'word'
// create a if statement word is strictly equal to word dot toUpperCase()
// return true
// else
// return false
