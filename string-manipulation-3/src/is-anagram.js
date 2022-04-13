/* exported isAnagram */

// 2 isAnagram(firstString, secondString)

function isAnagram(firstString, secondString) {
  var x = [];
  var y = [];
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      x.push(firstString[i]);
    }
  }
  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      y.push(secondString[j]);
    }
  }
  var first = x.sort();
  var second = y.sort();
  for (var k = 0; k < first.length; k++) {
    if (first[k] !== second[k]) {
      return false;
    }
  }
  return true;
}
