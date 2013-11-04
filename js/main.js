$(function() {
  $('nav label').click(function() {
    var href = $(this).attr('data-href');
    window.location = href;
  });
});
