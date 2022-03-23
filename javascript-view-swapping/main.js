// query the DOM

var $tabContainer = document.querySelector('.tab-container');
var $allTabElement = document.querySelectorAll('.tab');
var $allViewElement = document.querySelectorAll('.view');

// add 'click' event listener

$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $allTabElement.length; i++) {
      if (event.target === $allTabElement[i]) {
        event.target.className = 'tab active';
      } else {
        $allTabElement[i].className = 'tab';
      }
    }
  }
  if (event.target.getAttribute('class') === 'tab active') {
    var $dataView = event.target.getAttribute('data-view');
    for (let i = 0; i < $allViewElement.length; i++) {
      if ($dataView === $allViewElement[i].getAttribute('data-view')) {
        $allViewElement[i].className = 'view';
      } else {
        $allViewElement[i].className = 'view hidden';
      }
    }
  }
}
