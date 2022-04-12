/* exported isPalindromic */

// 1 isPalindromic(string)

function isPalindromic(string) {
  var forward = '';
  var backward = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      forward = forward + string[i];
    }
  }
  for (var j = string.length - 1; j >= 0; j--) {
    if (string[j] !== ' ') {
      backward = backward + string[j];
    }
  }
  if (forward === backward) {
    return true;
  } else {
    return false;
  }
}
