/* exported pick */

// 1 pick (source, keys)

function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if ((source[keys[i]]) !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    }
  }
  return newObject;
}
