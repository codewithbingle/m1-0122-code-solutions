/* exported toObject */

// 5 toObject(keyValue)

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}

/* function toObject(keyValuePair) {
  var newObj = Object.create({});
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  newObj[key] = value;
  return newObj;
} */
