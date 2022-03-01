/* exported includesSeven */

// 8 includesSeven(array)

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  } return false;
}
