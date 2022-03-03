/* exported getWords */

// 7 getWords(string)

function getWords(string) {
  var array = [];
  if (string.length > 0) {
    array = string.split(' ');
  }
  return array;
}
