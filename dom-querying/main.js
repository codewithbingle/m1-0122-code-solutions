console.log('hello, world');

// 1

var heading = document.querySelector('h1');
console.log('$heading', heading);

// 2

console.dir(document.querySelector('h1'));

// 3

var explanation = document.querySelector('#explanation');
console.log('$explanation', explanation);

// 4

console.dir(document.querySelector('#explanation'));

// 5

var hint = document.querySelector('.hint');
console.log('$hint', hint);

// 6

console.dir(document.querySelector('.hint'));

// 7

var exampleLink = document.querySelectorAll('p');
console.log('$paragraphs', exampleLink);

// 8

var eLink = document.querySelectorAll('.example-link');

console.log('$links', eLink);
