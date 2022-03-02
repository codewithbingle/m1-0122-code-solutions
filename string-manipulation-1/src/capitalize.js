/* exported capitalize */

// 3 capitalize(word)

// Before Pseudo Code

// define a function named capitalize, which has a single parameter 'word'
// define a variable named firstLetter and assign it to word index at zero dot toUpperCase();
// return firstLetter

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

// After Pseudo Code
// define a function named capitalize, which has a single parameter 'word'
// return word index zero dot toUppercase() concatenate word dot slice dot toLowerCase
