/* exported reverse */

// 5 reverse(array)

function reverse(array) {
  var reverseOrder = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseOrder.push(array[i]);
  }
  return reverseOrder;
}
