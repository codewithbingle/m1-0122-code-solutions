/* exported omit */

// 2 omit(source, keys)

function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    if (keys.includes(key) === false) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
