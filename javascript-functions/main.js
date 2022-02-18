// convertMinutesToSeconds
function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log('convertMinutesToSecondsResult: ', convertMinutesToSecondsResult);

// greet(name)
function greet(name) {
  var greeting = 'Hello ' + name + '!';
  return greeting;
}

var greetResult = greet('Bingle');
console.log('Greeting: ', greetResult);

// getArea(width, height)
function getArea(width, height) {
  var theArea = width * height;
  return theArea;
}

var getAreaResult = getArea(17, 42);
console.log('The result of the area: ', getAreaResult);

// getFirstName(person)
function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Bingle', lastName: 'Padilla' });

console.log('The first name of the person is: ', getFirstNameResult);

// getLastElement(array)
function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
  // return array[array.length - 1];
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('The last element of the array: ', getLastElementResult);
