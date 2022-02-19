/* exported getDescriptionOfPerson */
// 19

function getDescriptionOfPerson(person) {
  var descriptionOfPerson = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return descriptionOfPerson;
}

// var bingle = { name: 'Bingle Padilla', occupation: 'Software Engineer', birthPlace: 'Philippines' };

// eslint-disable-next-line no-console
// console.log('A description of the person is: ', getDescriptionOfPerson(bingle));
