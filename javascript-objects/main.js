// student Object
var student = {
  firstName: 'Bingle',
  lastName: 'Padilla',
  age: 39
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'UM Coordinator';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

// vehicle Object
var vehicle = {
  make: 'Honda',
  model: 'Fit',
  year: 2007
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

// pet Object
var pet = {
  name: 'Elsa',
  type: 'Mixed (Cocker Spaniel & Maltese)'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
