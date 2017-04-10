document.addEventListener('DOMContentLoaded', function () {



var lastScrollTop = 0;

window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
        document.querySelector("#bottommenu").style.bottom = "-100%";


    } else {
        document.querySelector("#bottommenu").style.bottom = "0";

    }
    lastScrollTop = st;
}, false);
var lastScrollTop = 0;

window.scrollTo = (function () {
    var timer, start, factor;

    return function (target, duration) {
        var offset = window.pageYOffset,
            delta  = target - window.pageYOffset;
        duration = duration || 700;
        start = Date.now();
        factor = 0;

        if( timer ) {
            clearInterval(timer);
        }

        function step() {
            var y;
            factor = (Date.now() - start) / duration;
            if( factor >= 1 ) {
                clearInterval(timer);
                factor = 1;
            }
            y = factor * delta + offset;
            window.scrollBy(0, y - window.pageYOffset);
        }

        timer = setInterval(step, 10);
        return timer;
    };
}());
    var blogLink = document.querySelector('[href="#contact"]');
    blogLink.addEventListener("click", function(event) {
        event.preventDefault();
        scrollTo(document.getElementById('contact').offsetTop);
    }, false);
    var blogLink = document.querySelector('[href="#home"]');
    blogLink.addEventListener("click", function(event) {
        event.preventDefault();
        scrollTo(document.getElementById('home').offsetTop);
    }, false);
    var blogLink = document.querySelector('[href="#projects"]');
    blogLink.addEventListener("click", function(event) {
        event.preventDefault();
        scrollTo(document.getElementById('projects').offsetTop);
    }, false);




})
