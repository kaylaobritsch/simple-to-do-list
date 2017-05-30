$('form').on('submit', function (e) {
  var $listItem = $('#list-input').val();

  e.preventDefault();
  $('#simple-list').append('<li>' + $listItem + '</li>');
});
