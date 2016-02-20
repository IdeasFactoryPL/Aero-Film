$(document).ready(function () {
  var carousel = $("#owl-demo");
  
  carousel.owlCarousel({
    center: true,
    items:3,
    loop:true,
    margin:0,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    smartSpeed: 800,
    nav:true,
    navText: [
      "<img src='img/slider_prev.png'>",
      "<img src='img/slider_next.png'>"
    ] 
  });
  carousel.on('changed.owl.carousel',function(property){
    current = property.item.index;
    $(property.target).find(".owl-item").removeClass('active-image');
    $(property.target).find(".owl-item").eq(current).addClass('active-image');
  });
  $('.owl-stage').children().eq(3).addClass("active-image")
});