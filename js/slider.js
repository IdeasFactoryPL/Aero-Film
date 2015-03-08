
        
$(document).ready(function () {
  
    var carousel = $("#owl-demo");
  
   carousel.owlCarousel({
    autoPlay: 3000,
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
  
  
  
});