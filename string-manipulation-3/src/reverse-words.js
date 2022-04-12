/* exported reverseWords */

// reverseWords(string)

function reverseWords(string) {
  var newString = '';
  var array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    for (var j = array[i].length - 1; j >= 0; j--) {
      newString += array[i][j];
    }
    if (i < array.length - 1) { newString += ' '; }
  }
  return newString;
}
