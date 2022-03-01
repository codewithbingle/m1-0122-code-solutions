/* exported filterOutStrings */

// 7 filterOutStrings(values)

function filterOutStrings(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      array.push(values[i]);
    }
  } return array;
}
