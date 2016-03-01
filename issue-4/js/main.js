$(function() {
  $('nav label').click(function() {
    var href = $(this).attr('data-href');
    window.location = href;
  });
  var sections = new Array();
  
  setInterval(scroller,50);
});

function scroller() {
  if($(window).scrollTop() <= parseInt($('#IntroSection').css('padding-top'),10)) {
    $('input').removeAttr('checked');
    return false;
  }
  $('#Layer2 aside').each(function() {
    var el = this;
    if(!isScrolledIntoView(el)) {
      $("#"+ $(el).attr('data-rel')).prop('checked',true);
    }
  });
}


function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return (elemTop >= docViewTop + 1);
}