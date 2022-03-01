/* exported tail */

// 3 tail(array)

// Before Pseudo Code
// define a function named tail, which has a single parameter 'array'
// define a variable named firstElement and assign it to array.chartAt(0)
// define a variable named allElements and assign it to array.length minus first Element
// return the values of all Elements

function tail(array) {
  var allElement = [];
  for (var i = 1; i < array.length; i++) {
    allElement.push(array[i]);
  } return allElement;
}

// After Pseudo Code
// define a function named tail, which has a single parameter 'array'
// define a variable named allElement and assign it an empty array
// use a for in loop to check each property in the parameter
// in the loop, push the value from the allElement to the array
// when the loop is complete, return the values allElement
