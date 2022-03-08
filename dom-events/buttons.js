// 1 Click Event

function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var $click = document.querySelector('.click-button');
$click.addEventListener('click', handleClick);

// 2 Mouseover Event

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var $hover = document.querySelector('.hover-button');
$hover.addEventListener('mouseover', handleMouseover);

// 3 Double-click Event

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick);
