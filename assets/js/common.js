 
$('.menu-button').click(function() {
  $('.menu-button').toggleClass('active')
  $('.header_cont_nav_list').toggleClass('active')
})

$(window).scroll(function() {
  var scroll = $(window).scrollTop()
  if (scroll >= 50) {
    $('.header').addClass('active')
  } else {
    $('.header').removeClass('active')
  }
})

$('.header_cont_nav_list_items').click(function() {
  if (!$(this).hasClass('active')) {
    $('.header_cont_nav_list_items').removeClass('active')
  }
  $(this).toggleClass('active')
})


$('.accordion_item_title').toggleClass('inactive-header');
var contentwidth = $('.accordion_item_title').width();
$('.accordion_item_content').css({'width' : contentwidth });
  
$('.accordion_item_title').click(function () {
  if($(this).is('.inactive-header')) {
    $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
    $(this).toggleClass('active-header').toggleClass('inactive-header');
    $(this).next().slideToggle().toggleClass('open-content');
  } 
  else {
    $(this).toggleClass('active-header').toggleClass('inactive-header');
    $(this).next().slideToggle().toggleClass('open-content');
  }
}); 
 

 
 
