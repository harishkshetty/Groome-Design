$(document).ready(function(){

    // $(".tabbutton").click(function(){
    //      $(".tabbutton").removeClass('tab-button-active');
    //    $(this).addClass('tab-button-active');
    //  })
   
    switchingTabs();
    tabControl();

/*
We also apply the switch when a viewport change is detected on the fly
(e.g. when you resize the browser window or flip your device from 
portrait mode to landscape). We set a timer with a small delay to run 
it only once when the resizing ends. It's not perfect, but it's better
than have it running constantly during the action of resizing.
*/

var resizeTimer;
$(window).on('resize', function(e) {
  switchingTabs();
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    tabControl();
  }, 250);
});

/*
The function below is responsible for switching the tabs when clicked.
It switches both the tabs and the accordion buttons even if 
only the one or the other can be visible on a screen. We prefer
that in order to have a consistent selection in case the viewport
changes (e.g. when you esize the browser window or flip your 
device from portrait mode to landscape).
*/
function tabControl() {
  var tabs = $('.tabbed-content').find('.tabs');
  if(tabs.is(':visible')) {
    tabs.find('a').on('click', function(event) {
      
      event.preventDefault();
      var target = $(this).attr('href'),
          tabs = $(this).parents('.tabs'),
          buttons = tabs.find('a'),
          item = tabs.parents('.tabbed-content').find('.item');
      buttons.removeClass('active');
      item.removeClass('active');
      $(this).addClass('active');
      $(target).addClass('active');
      $(".tabs").find("a").css({"background-color":"white","color":"#4a4a4a"});
      $(".tabs").find(".active").css({"background-color":"#00c6c6","color":"#ffffff"});
    });
    $(".tabs").find("a").css({"background-color":"white","color":"#4a4a4a"});
    $(".tabs").find(".active").css({"background-color":"#00c6c6","color":"#ffffff"});

  } else {
    
    $('.item').on('click', function() {
      var container = $(this).parents('.tabbed-content'),
          currId = $(this).attr('id'),
          items = container.find('.item');
      container.find('.tabs a').removeClass('active');
      items.removeClass('active').find(".accor-icon-active").removeClass('accor-icon-active').addClass("accor-icon-inactive");
      $(this).addClass('active').find(".accor-icon-inactive").removeClass('accor-icon-inactive').addClass("accor-icon-active");
      container.find('.tabs a[href$="#'+ currId +'"]').addClass('active');
    });
  } 
}

function switchingTabs(){
  if ($(window).width() < 768) {
    $("#accr-text-1").before($("#accr-img-1"));
    $("#accr-text-2").before($("#accr-img-2"));
    $("#accr-text-3").before($("#accr-img-3"));
 }
 else{
  $("#accr-img-1").before($("#accr-text-1"));
  $("#accr-img-2").before($("#accr-text-2"));
  $("#accr-img-3").before($("#accr-text-3"));
   
 }
}


    
});