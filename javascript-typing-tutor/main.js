var typingCounter = 0;

var $spans = document.querySelectorAll('span');

var $messageComplete = document.querySelector('.row-completion-reset');

var $buttonReset = document.querySelector('.reset-button');

document.addEventListener('keydown', function (event) {
  if (event.key === $spans[typingCounter].textContent) {
    $spans[typingCounter].classList.remove(
      'border-bottom',
      'red-error-text');
    $spans[typingCounter].classList.add(
      'green-correct-text');
    typingCounter++;
    if (typingCounter === $spans.length) {
      $messageComplete.style.display = 'flex';
      return;
    }
    $spans[typingCounter].classList.add('border-bottom');
  } else {
    $spans[typingCounter].classList.add('red-error-text');
  }
});

$buttonReset.addEventListener('click', function (event) {
  location.reload();
});
