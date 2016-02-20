var main = function() {
    var menuOpened = 0;
    /* Push the body and the nav over by 285px over */
    $('.icon-menu').click(function() {
        if(menuOpened == 0){
            $('.menu').animate({
            left: "0px"
            }, 200);
            $('body').animate({
            left: "285px"
            }, 200);
            $.fn.animatescroll.defaults = {        
                easing:"swing",
                scrollSpeed:800,
                padding:0,
                element:"html,body"
            };
            menuOpened = 1;
        }else{
            $('.icon-close').click();
        }
    });
    /* Then push them back */
    $('.icon-close').click(function() {
        $('.menu').animate({
        left: "-285px"
        }, 200);
        $('body').animate({
        left: "0px"
        }, 200);
        menuOpened = 0;
    });
    $('li').click(function() {
        $('.menu').animate({
        left: "-285px"
        }, 200);
        $('body').animate({
        left: "0px"
        }, 200);
    });
    var width = screen.width,
        height = screen.height;
    setInterval(function () {
        if (screen.width !== width || screen.height !== height) {
            width = screen.width;
            height = screen.height;
            $(window).trigger('resolutionchange');
            if(width >= 991){
                $('.icon-close').click();
            }
        }
    }, 50);
};
$(document).ready(main);