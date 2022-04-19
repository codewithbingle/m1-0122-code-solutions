/* exported difference */

// 5 difference(first, second)

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === false) {
      newArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.includes(second[j]) === false) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
