/* exported ransomCase */

// 3 ransomCase(string)

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString = newString + string[i].toLowerCase();
    } else if (i % 2 === 1) {
      newString = newString + string[i].toUpperCase();
    }
  }
  return newString;
}
