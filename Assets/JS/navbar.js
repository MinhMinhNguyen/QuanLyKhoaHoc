$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    $(window).on("scroll", function () {

        var scroll = $(window).scrollTop();
    
        if (scroll >= 40) {
            $("header").addClass("header-position-fixed");
            $('#top').hide("transition: height 5s, line-height 5s, margin 5s");
        } else {
            $("header").removeClass("header-position-fixed");
            $('#top').show("transition: height 5s, line-height 5s, margin 5s");
        }
    });
    /*end*/
   // breakpoint and up  
   $(window).resize(function(){
       if ($(window).width() >= 980){	
   
         // when you hover a toggle show its dropdown menu
         $(".navbar .dropdown-toggle").hover(function () {
            $(this).parent().toggleClass("show");
            $(this).parent().find(".dropdown-menu").toggleClass("show"); 
          });
   
           // hide the menu when the mouse leaves the dropdown
         $( ".navbar .dropdown-menu" ).mouseleave(function() {
           $(this).removeClass("show");  
         });
     
           // do something here
       }	
   });  
     
     
   
   // document ready  
   });