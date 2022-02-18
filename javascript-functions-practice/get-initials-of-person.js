/* exported getInitialsOfPerson */
// 21

function getInitialsOfPerson(person) {
  var initialsOfFirstNameOfPerson = person.firstName;
  var initialsOfLastNameOfPerson = person.lastName;
  var initialsOfPersonResult = initialsOfFirstNameOfPerson[0] + initialsOfLastNameOfPerson[0];
  return initialsOfPersonResult;
}

// var bingle = { firstName: 'Bingle', lastName: 'Padilla' };

// console.log('The first and last initials of the person is: ', getInitialsOfPerson(bingle));
