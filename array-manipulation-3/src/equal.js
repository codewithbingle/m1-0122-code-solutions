/* exported equal */

// 1 equal(first, second)

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
  }
  return true;
}
