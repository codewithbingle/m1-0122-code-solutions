var books = [
  {
    isbn: 'B09JDMYVYT',
    title: 'The Happiness Equation',
    author: 'Neil Pasricha'
  },
  {
    isbn: 'B00C8N4FNK',
    title: 'The Motivation Hacker',
    author: 'Nick Winter'
  },
  {
    isbn: 'B00555X8OA',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman'
  }
];

console.log('Books:', books);
console.log('typeof: ', typeof (books));

console.log('JSON.stringify(books): ', JSON.stringify(books));
console.log('typeof JSON.stringify(books): ', typeof JSON.stringify(books));

var student = '{ "NumberID:" 32422, "Name:" "Bingle"}';
console.log('student: ', student);
console.log('typeof(student): ', typeof (student));

console.log('JSON.parse(student): ', JSON.parse(student));
console.log('typeof JSON.parse(student): ', typeof JSON.parse(student));
