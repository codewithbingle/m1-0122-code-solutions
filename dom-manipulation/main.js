var numberOfClick = 0;

var $hotButton = document.querySelector('.hot-button');

var $clickCount = document.querySelector('.click-count');

function clickCount(event) {
  numberOfClick++;
  $clickCount.textContent = 'Clicks: ' + numberOfClick;
  if (numberOfClick < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numberOfClick < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numberOfClick < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numberOfClick < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numberOfClick < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', clickCount);
