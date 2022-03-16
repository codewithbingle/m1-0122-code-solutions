// 1 handleFocus(event):
// logs a message that the 'focus' event was fired.
// logs the event.target.name

function handleFocus(event) {
  console.log('Focus event fired');
  console.log('event.target.name', event.target.name);
}

// 2 handleBlur(event):
// logs a message that the 'blur' event was fired.
// logs the event.target.name

function handleBlur(event) {
  console.log('Blur event fired');
  console.log('event.target.name', event.target.name);
}

// 3 handleInput(event):
// logs the event.target.name and event.target.value

function handleInput(event) {
  console.log('value of name: ', event.target.name, event.target.value);
}

var $userName = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $message = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
