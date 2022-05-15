/* exported unique */

// 4 unique(array)

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (newArray.includes(array[i]) === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
