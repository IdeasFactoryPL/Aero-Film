$(document).ready(function () {
  
    var carousel = $("#owl-demo");
  
   carousel.owlCarousel({
    slideSpeed: 900,
    autoPlay: 4500,
     navigation:true,
     navigationText: [
      "<img src='img/slider_prev.png'>",
      "<img src='img/slider_next.png'>"
      ],
    itemsCustom: [
      [0,3]
    ],
     afterAction: function(el){
       //remove class active
       this
       .$owlItems
       .removeClass('active')
        
       //add class active
       this
       .$owlItems //owl internal $ object containing items
       .eq(this.currentItem + 1)
       .addClass('active')
      
     }
     
    });
  
  // $(".next").click(function(){
  //   owl.trigger('owl.next');
  // })
  // $(".prev").click(function(){
  //   owl.trigger('owl.prev');
  // })
  
});