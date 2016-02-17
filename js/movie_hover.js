$(window).load(function(){
  var figure = $(".video");
  var vid = $("video");

  [].forEach.call(figure, function (item) {
    item.addEventListener('mouseover', hoverVideo, false);
    item.addEventListener('mouseout', hideVideo, false);
  });

  function hoverVideo(e) {  
    $(this).find('.thevideo')[0].play();
  }

  function hideVideo(e) {
    $(this).find('.thevideo')[0].pause(); 
  }
});