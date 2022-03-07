/* exported includes */

// 3 inclueds(array,value)

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  }
  return false;
}
