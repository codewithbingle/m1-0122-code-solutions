var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', handleClick);

// handleClick can be named anything but a great semantic rule to use for an event handler which handles clicks

function handleClick(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    // if (event.target.tagName !=== 'BUTTON') {return;}
    var $liElement = event.target.closest('.task-list-item');
    console.log('closet .task-list-item: ', $liElement);
    $liElement.remove();
  }
}

// alternative solution

/* var $taskList = document.querySelector('.task-list);

$taksList.addEventListener('click' , function(event) {
  console.log('event.target: ', event.target);
  console.log('event.target: ', event.target.tagName);

  if (event.target.tagName !=== 'BUTTON') {
    return;
  }

  var $taskListItem = event.target.closest('.task-list-item');
  console.log('closest .task-list-item', $taskListItem);
  $taskListItem.remove();

}) */
