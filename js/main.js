$(function() {
  $('nav label').click(function() {
    var href = $(this).attr('data-href');
    $("img").trigger("loadImg");
    window.location = href;
  });
  var sections = new Array();
  
  setInterval(scroller,50);

  $("aside img").lazyload({
    threshold: window.innerHeight
  });

  $("aside img").lazyload({
      event: "loadImg",
      effect: "fadeIn"
  });

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
      $("#"+ $(el).attr('data-section')).find("img").trigger("loadImg");
      console.log($("#"+ $(el).attr('data-section')).find("img").length);
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