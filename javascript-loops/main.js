/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

// 1

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 0;
  while (currentNumber < 10) {
    currentNumber++;
    numbers.push(currentNumber);
  } return numbers;
}

// 2

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 0;
  while (currentNumber < 20) {
    currentNumber += 2;
    evenNumbers.push(currentNumber);
  } return evenNumbers;
}

// 3

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  } return repeated;
}

// 4

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

// 5

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled[i] = 2 * numbers[i];
  } return doubled;
}

// 6

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  } return keys;
}

// 7

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  } return values;
}
