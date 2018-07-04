$(document).ready(function () {
    // executes when HTML-Document is loaded and DOM is ready
    $(window).on("scroll", function () {

        var scroll = $(window).scrollTop();

        $(".nav-item").click(function () {
            $("a.active").removeClass('active');
            $(this).addClass('active');
           // var active_section = $(this).attr('href'); //get active section id
            //   $('html, body').animate({
                    //and scroll to the section
             //    scrollTop: $(active_section).offset().top }, 1000);
        });

        var position = $(window).scrollTop();
        //get header height
        var header = $('nav').outerHeight();

        //check active section
        $('.section').each(function (i) {
            if ($(this).position().top <= (position + header)) {
                $("a.active").removeClass('active');
                $("a").eq(i).addClass('active');
            }
        });

        if (scroll >= 40) {
            $("header").addClass("header-position-fixed");
            $('#top').hide("transition: height 5s, line-height 5s, margin 5s");
        } else {
            $("header").removeClass("header-position-fixed");
            $('#top').show("transition: height 5s, line-height 5s, margin 5s");
        }
    });
    /*end*/
  



    // document ready  
});