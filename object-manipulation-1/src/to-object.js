/* exported toObject */

// 5 toObject(keyValue)

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
