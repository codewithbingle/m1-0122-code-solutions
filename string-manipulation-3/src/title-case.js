/* exported titleCase */

// 4 titleCase(title)

function titleCase(title) {
  var minor = [
    'and',
    'or',
    'nor',
    'but',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to'
  ];
  var newTitle = '';
  var array = title.split(' ');
  for (var i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === 'javascript') {
      newTitle += 'JavaScript';
    } else if (array[i].toLowerCase() === 'javascript:') {
      newTitle += 'JavaScript:';
    } else if (array[i].toLowerCase() === 'api') {
      newTitle += 'API';
    } else if (i === 0) {
      for (var k = 0; k < array[i].length; k++) {
        if (k === 0) {
          newTitle += array[i][k].toUpperCase();
        } else {
          newTitle += array[i][k].toLowerCase();
        }
      }
    } else if (
      minor.includes(array[i].toLowerCase()) === false ||
      array[i - 1].includes(':')
    ) {
      for (var j = 0; j < array[i].length; j++) {
        if (j === 0) {
          newTitle += array[i][j].toUpperCase();
        } else {
          if (array[i][j - 1] === '-') {
            newTitle += array[i][j].toUpperCase();
          } else {
            newTitle += array[i][j].toLowerCase();
          }
        }
      }
    } else {
      newTitle += array[i].toLowerCase();
    }
    if (i < array.length - 1) {
      newTitle += ' ';
    }
  }
  return newTitle;
}
