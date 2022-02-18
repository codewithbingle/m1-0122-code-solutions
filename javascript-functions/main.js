// convertMinutesToSeconds
function convertMinutesToSeconds(minutes) {
  var product = minutes * 60;
  return product;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log('convertMinutesToSecondsResult: ', convertMinutesToSecondsResult);

// greet(name)
function greet(name) {
  return 'Hello' + ' ' + name + '!';
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
  return person.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Bingle', lastName: 'Padilla' });

console.log('The first name of the person is: ', getFirstNameResult);

// getLastElement(array)
function getLastElement(array) {
  return array[array.length - 1];
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('The last element of the array: ', getLastElementResult);
