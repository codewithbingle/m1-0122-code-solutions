// colors
var colors = ['red', 'white', 'blue'];

console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);
console.log('America is', colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.');

colors[2] = 'green';

console.log(
  'Mexico is',
  colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.'
);

console.log('value of colors:', colors);

// students
var students = ['Bingle', 'Harry', 'Mary', 'James'];

var numberOfStudents = students.length;

console.log('The are', numberOfStudents, 'students in the class.');

var lastIndex = numberOfStudents - 1;

var lastStudent = lastIndex;

console.log('The last student in the array is', students[lastStudent]);
console.log('value of students:', students);
