/* exported drop */

// 2 drop(array, count)

// Before Pseudo Code

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// After Pseudo Code
// define a function named drop with two parameters named array and count
// define a variable named newArray and assign it to an empty array
// create a for lop, define var named i and assign it to count, i is less than the length of the array, i is incremented
// push the newArray to array index at i
// return newArray
