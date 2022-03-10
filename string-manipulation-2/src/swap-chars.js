/* exported swapChars */

// 8 swapChars(firstIndex, secondIndex, string)

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[secondIndex];
    } else if (i === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}
