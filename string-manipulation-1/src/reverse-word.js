/* exported reverseWord */

// 8 reverseWord(word)

function reverseWord(word) {
  var reverseWordOrder = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseWordOrder += word[i];
  }
  return reverseWordOrder;
}
