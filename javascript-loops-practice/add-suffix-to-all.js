/* exported addSuffixToAll */

// addSuffixToAll(words, suffix)

function addSuffixToAll(words, suffix) {
  var suffixToAll = [];
  for (var i = 0; i < words.length; i++) {
    suffixToAll.push(words[i] + suffix);
  } return suffixToAll;
}
