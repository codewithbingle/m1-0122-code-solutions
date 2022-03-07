/* exported takeRight */

// 4 takeRight(array, count)

function takeRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    return array;
  } else {
    for (var i = array.length - count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
