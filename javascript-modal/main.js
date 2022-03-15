var modalBtn = document.querySelector('.modal-btn');

var modalBox = document.querySelector('.modal-box');

var modalClose = document.querySelector('.red-btn');

modalBtn.addEventListener('click', function () {
  modalBox.classList.add('modal-box-active');
});

modalClose.addEventListener('click', function () {
  modalBox.classList.remove('modal-box-active');
});
