

$(document).ready(function(){
    
    // FOR STICKY NAV

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '120px;'
    });

    //SROOL ON BUTTONS
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    //SMOOTH SCROLLING

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
    
    //ANIMATIONS ON SCROLL
    $('.js--ws-1').waypoint(function(direction) {
        $('.js--ws-1').addClass('animated fadeIn');
    }, { offset: '50%' })
    $('.js--ws-2').waypoint(function(direction) {
        $('.js--ws-2').addClass('animated fadeInUp');
    }, { offset: '50%' })
    $('.js--ws-3').waypoint(function(direction) {
        $('.js--ws-3').addClass('animated fadeIn');
    }, { offset: '50%' })
    $('.js--ws-4').waypoint(function(direction) {
        $('.js--ws-4').addClass('animated pulse');
    }, { offset: '50%' })

    //Mobile navigation

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        //open and close box(time)
        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        } else {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
    });
});








