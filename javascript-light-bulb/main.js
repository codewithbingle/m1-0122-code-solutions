var $room = document.querySelector('.container');
var $button = document.querySelector('button');
var $switch = false;

function lightbulbSwitch(event) {
  if ($switch === false) {
    $button.className = 'lightbulb-on';
    $room.className = 'container room-on';
    $switch = !$switch;
  } else {
    $button.className = 'lightbulb-off';
    $room.className = 'container room-off';
    $switch = !$switch;
  }
}

$button.addEventListener('click', lightbulbSwitch);
