/* exported firstChars */

// 6 firstChar(length, string)

function firstChars(length, string) {
  var newString = '';
  if (string === '') {
    newString = '';
  } else {
    newString = string.slice(0, length);
  }
  return newString;
}
