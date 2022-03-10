/* exported capitalizeWord */

// 2 capitalizeWord(word)

function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  if (lowerCase === 'javascript') {
    return 'JavaScript';
  } else {
    var upperCaseLetter = lowerCase[0].toUpperCase();
    upperCaseLetter = upperCaseLetter + word.toLowerCase().slice(1);
    return upperCaseLetter;
  }
}
