/* exported zip */

// 3 zip(first, second)

function zip(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length && i < second.length; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
