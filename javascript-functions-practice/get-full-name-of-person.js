/* exported getFullNameOfPerson */
// 18

function getFullNameOfPerson(person) {
  var fullNameOfPerson = person.firstName + ' ' + person.lastName;
  return fullNameOfPerson;
}

// var getFullNameOfPersonResult = getFullNameOfPerson({ firstName: 'Bingle', lastName: 'Padilla', occupation: 'Software Engineer', birthPlace: 'Philippines'});

// console.log('The values of the firstName and lastName properties of the person object concatenated together with a space between is: ', getFullNameOfPersonResult);
