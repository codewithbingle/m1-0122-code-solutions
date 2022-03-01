/* exported oddOrEven */

// 10 oddOrEven(numbers)

function oddOrEven(numbers) {
  var array = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      array.push('even');
    } else {
      array.push('odd');
    }
  } return array;
}
