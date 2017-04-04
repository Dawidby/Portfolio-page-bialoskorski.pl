$(document).ready(function(){
    var lastScrollTop = $(window).scrollTop();
    if (lastScrollTop != 0) {
        var delta = $('header').height() - lastScrollTop;
        $('.titles').css({
            bottom: delta/4.5,
            opacity: delta/900
        });
    }

    $('.titles').hide().fadeIn(400);

    $(window).scroll(function(event){
        var scrollAmt = $(this).scrollTop();
        var deltaS = scrollAmt - lastScrollTop;
        $('.titles').css({
            bottom: "-=" + deltaS/4.5,
            opacity: "-=" + deltaS/700
        });

        if (scrollAmt >= 70) {
            $('.down-arrow').css({
                opacity: "-=" + deltaS/3
            });
        } else if (scrollAmt < 70){
            $('.down-arrow').css({
                opacity: 0.9
            });
        }

        lastScrollTop = scrollAmt;
    }); // scroll
}); // document ready