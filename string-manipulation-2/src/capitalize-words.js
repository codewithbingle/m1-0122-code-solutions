/* exported capitalizeWords */

// 4 capitalizeWords(string)

function capitalizeWords(string) {
  var newString = '';
  newString += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      newString = newString + string[i].toUpperCase();
    } else {
      newString = newString + string[i].toLowerCase();
    }
  }
  return newString;
}
