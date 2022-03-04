/* exported getKeys */

// 3 getKeys(object)

function getKeys(object) {
  var array = [];
  for (var key in object) {
    array.push(key);
  }
  return array;
}
