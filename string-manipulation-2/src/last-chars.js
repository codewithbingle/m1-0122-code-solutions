/* exported lastChars */

// 7 lastChars(length, string)

function lastChars(length, string) {
  var newString = '';
  if (string === '') {
    newString = '';
  } else if (length > string.length) {
    newString = string;
  } else {
    newString = string.slice(string.length - length);
  }
  return newString;
}
