// Math Object
var one = 88;
var two = 89;
var three = 87;
var maximumValue = Math.max(one, two, three);
console.log('maximumValue: ', Math.max(maximumValue));

var heroes = ['Pio', 'Catherine', 'Andre', 'Ignatius'];
var randomNumber = Math.random() * heroes.length;

console.log('randomIndex: ', randomNumber);
console.log('randomHero: ', heroes[1]);

// Array Method
var library = [{
  title: 'Grit',
  author: 'Angela Duckworth'
},
{
  title: 'The Tipping Point',
  author: 'Malcolm Gladwell'
},
{
  title: 'Thinking Fast and Slow',
  author: 'Daniel Kehneman'
}
];

var lastBook = library.pop();
var firstBook = library.shift();

console.log('lastBook: ', lastBook);
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: ' CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library: ', library);

// String Method
var fullName = 'Bingle Padilla';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName: ', sayMyName);
