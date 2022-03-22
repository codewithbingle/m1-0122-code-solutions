var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', handleClick);

// handleClick can be named anything but a great semantic rule to use for an event handler which handles clicks

function handleClick(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    var $liElement = event.target.closest('.task-list-item');
    console.log('closet .task-list-item: ', $liElement);
    $liElement.remove();
  }
}
