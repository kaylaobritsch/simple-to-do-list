$('form').on('submit', function () {
  var $listItem = $('#list-input').val();
  $('#simple-list').append('<li>' + listItem + '</li>');
});
