/* exported take */

// 1 take(array, count)

// Before Pseudo Code
// define a function named take, which has two parameters 'array' and 'count'
// define a variable named newArray and assign it to an empty array

function take(array, count) {
  var newArray = [];
  if (array.length > count) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// After Pseudo Code
// define a function named take, which has two parameters 'array' and 'count'
// define a variable named newArray and assign it to an empty array
// create an if statement with array dot length is greater than count
// create a for statement with a variable i is equal to zero; i is less than count; i is incremented
// push the newArray into the array index i
// return the newArray
