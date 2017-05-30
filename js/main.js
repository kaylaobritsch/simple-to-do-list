$('form').on('submit', function (e) {
  var $listItem = $('#list-input').val();

  e.preventDefault();
  $('#simple-list').append('<li>' + $listItem + '</li>');
  $('#list-input').val('');
});

$('ul').on('click', 'li', function (e) {
  $(this).toggleClass('is-clicked');
});
