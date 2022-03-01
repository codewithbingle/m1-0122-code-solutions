/* exported findIndex */

// 9 findIndex(array, value)

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  } return -1;
}
